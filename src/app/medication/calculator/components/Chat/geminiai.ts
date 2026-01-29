import { useEffect, useRef } from "react";
import {
  MedicationPromptChatContext,
  PromptMediaAnalysisContext,
} from "./prompts";
import { FileData, ImagePart } from "./types";

// Helper para converter blob em base64
const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      const base64 = result.split(",")[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

// Análise de mídia usando OpenRouter
export const MediaAnalysis = async (
  prompt = "Explique a imagem ",
  imageParts: ImagePart[],
) => {
  try {
    // Converte ImagePart para formato OpenRouter
    const files = imageParts.map((part) => ({
      base64: part.inlineData.data,
      type: part.inlineData.mimeType,
      name: "arquivo",
    }));

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        files: files,
        model: "google/gemini-2.5-flash",
        systemPrompt: PromptMediaAnalysisContext,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return { error: true, message: error };
    }

    // Lê a resposta stream
    const reader = response.body?.getReader();
    if (!reader) {
      return { error: true, message: "Erro ao ler resposta" };
    }

    const decoder = new TextDecoder();
    let fullResponse = "";
    let buffer = "";
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      buffer += decoder.decode(value, { stream: !done });
      const parts = buffer.split("\n\n");
      buffer = parts.pop() || "";

      for (const part of parts) {
        if (!part.startsWith("data:")) continue;
        const jsonString = part.substring(5).trim();
        if (jsonString === "[DONE]") {
          done = true;
          break;
        }
        try {
          const data = JSON.parse(jsonString);
          const content = data.choices?.[0]?.delta?.content || "";
          if (content) {
            fullResponse += content;
          }
        } catch (e) {
          // Ignora erros de parse no stream
        }
      }
    }

    return fullResponse;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: true, message: error.message };
    } else {
      return { error: true, message: "Unknown error" };
    }
  }
};

// Hook para gerenciar sessão de chat usando OpenRouter
export function useChatSession(
  chatSessionRef: React.MutableRefObject<{
    sendMessage: (params: { message: string }) => Promise<{ text: Promise<string> }>;
  } | null>,
) {
  const messagesRef = useRef<Array<{ role: string; content: string }>>([]);

  useEffect(() => {
    // Cria a sessão de chat uma vez
    if (!chatSessionRef.current) {
      chatSessionRef.current = {
        sendMessage: async ({ message }: { message: string }) => {
          // Adiciona a mensagem do usuário ao histórico
          const userMessage = { role: "user", content: message };
          messagesRef.current.push(userMessage);

          try {
            // Prepara mensagens para a API (formato OpenRouter)
            const apiMessages = messagesRef.current.map((m) => ({
              role: m.role === "assistant" ? "assistant" : "user",
              content: m.content,
            }));

            const response = await fetch("/api/chat", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                messages: apiMessages,
                systemPrompt: MedicationPromptChatContext,
              }),
            });

            if (!response.ok) {
              const error = await response.text();
              throw new Error(error);
            }

            // Lê a resposta stream
            const reader = response.body?.getReader();
            if (!reader) {
              throw new Error("Erro ao ler resposta");
            }

            const decoder = new TextDecoder();
            let fullResponse = "";
            let buffer = "";
            let done = false;

            while (!done) {
              const { value, done: doneReading } = await reader.read();
              done = doneReading;
              buffer += decoder.decode(value, { stream: !done });
              const parts = buffer.split("\n\n");
              buffer = parts.pop() || "";

              for (const part of parts) {
                if (!part.startsWith("data:")) continue;
                const jsonString = part.substring(5).trim();
                if (jsonString === "[DONE]") {
                  done = true;
                  break;
                }
                try {
                  const data = JSON.parse(jsonString);
                  const content = data.choices?.[0]?.delta?.content || "";
                  if (content) {
                    fullResponse += content;
                  }
                } catch (e) {
                  // Ignora erros de parse no stream
                }
              }
            }

            // Adiciona a resposta do assistente ao histórico
            messagesRef.current.push({ role: "assistant", content: fullResponse });

            return {
              text: Promise.resolve(fullResponse),
            };
          } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
            messagesRef.current.push({ role: "assistant", content: `Erro: ${errorMessage}` });
            return {
              text: Promise.resolve(`Erro: ${errorMessage}`),
            };
          }
        },
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatSessionRef]);
}

export function makePrompt(fd: FileData) {
  const mt = fd.mimeType;
  if (mt.startsWith("image/")) return "Descreva detalhadamente a imagem";
  if (mt === "application/pdf")
    return "Por favor, extraia e resuma o conteúdo deste documento PDF.";
  if (mt.startsWith("audio/")) return "Transcreva o áudio perfeitamente.";
  if (mt.startsWith("video/")) return "Descreva detalhadamente o vídeo";
  return "Analise este arquivo e me dê um resumo:";
}

export async function analyzeFile(fd: FileData) {
  const prompt = makePrompt(fd);
  const payload: ImagePart = {
    inlineData: { mimeType: fd.mimeType, data: fd.base64 },
  };
  const result = await MediaAnalysis(prompt, [payload]);
  let message: string;
  const sendPrompt = `O seguinte texto é uma analise de um arquivo de ${fd.mimeType} que eu enviei para nossa outra ai analisar, leve em consideração isso e interprete que o seguinte texto é o conteúdo de um ${fd.mimeType} que eu acabei de mandar. Texto do arquivo: `;
  if (typeof result === "object" && result.error) {
    message = sendPrompt + result.message;
  } else {
    message = sendPrompt + result;
  }
  return await message;
}
