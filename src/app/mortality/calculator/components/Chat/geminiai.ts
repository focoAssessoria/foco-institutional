import { GoogleGenAI } from "@google/genai";
import { useEffect, useRef } from "react";
import {
  MortalityPromptChatContext,
  PromptMediaAnalysisContext,
} from "./prompts";
import { FileData, ImagePart } from "./types";

const genAI = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_KEY,
});

export const MediaAnalysis = async (
  prompt = "Explique a imagem ",
  imageParts: ImagePart[],
) => {
  try {
    const result = await genAI.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [prompt, ...imageParts],
      config: {
        systemInstruction: PromptMediaAnalysisContext,
      },
    });

    const response = result.text;

    const text = response;
    return text;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: true, message: error.message };
    } else {
      return { error: true, message: "Unknown error" };
    }
  }
};
export function useChatSession(
  chatSessionRef: React.MutableRefObject<unknown | null>,
) {
  const aiInstanceRef = useRef<GoogleGenAI | null>(null);

  useEffect(() => {
    // Só cria a instância do GoogleGenAI uma vez
    if (!aiInstanceRef.current) {
      aiInstanceRef.current = new GoogleGenAI({
        apiKey: process.env.NEXT_PUBLIC_GEMINI_KEY, // coloque sua chave em .env
      });
    }

    // Só cria a sessão de chat uma vez
    if (aiInstanceRef.current && !chatSessionRef.current) {
      chatSessionRef.current = aiInstanceRef.current.chats.create({
        model: "gemini-2.0-flash",
        // history: initialHistory,
        config: {
          systemInstruction: MortalityPromptChatContext,
        },
      });
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
  const payload = { inlineData: { mimeType: fd.mimeType, data: fd.base64 } };
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
