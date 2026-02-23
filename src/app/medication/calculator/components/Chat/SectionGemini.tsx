"use client";
import { ScrollArea } from "@/app/components/scroll-area";
import { cn } from "@/app/utils/utils";
import { ImageIcon, FileText, Mic, Send, Square, X } from "lucide-react";
import Image from "next/image";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { AudioPlayer } from "./AudioPlayer";
import { useFileHandler } from "./fileManipulation";
import { analyzeFile, useChatSession } from "./geminiai";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { Message } from "./types";

export function Section() {
  const [isClicked, setIsClicked] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const {
    fileData,
    handleFileUpload,
    startRecording,
    stopRecording,
    clearFileData,
    isRecording,
    elapsedTime,
  } = useFileHandler();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const chatSessionRef = useRef<any | null>(null);
  useChatSession(chatSessionRef);
  const appendMessage = (msg: Message) => setMessages((prev) => [...prev, msg]);
  const handleSendFile = async () => {
    if (!fileData) return;
    appendMessage({
      role: "user",
      content: "Arquivo enviado " + fileData.mimeType,
      file: fileData.dataUrl,
      type: fileData.mimeType,
      name: fileData.name,
    });
    appendMessage({
      role: "assistant",
      content: "...",
    });
    setLoading(true);
    if (fileData.mimeType.startsWith("audio/")) {
      clearFileData();
    }
    clearFileData();
    const response = await analyzeFile(fileData);
    sendMessage(response, true);
    setLoading(false);
    clearFileData();
  };

  const sendMessage = async (text: string, isFile?: boolean) => {
    setInputMessage("");
    if (!isFile) {
      appendMessage({ role: "user", content: text });
      appendMessage({ role: "assistant", content: "..." });
    }

    setLoading(true);
    const res = await chatSessionRef.current.sendMessage({ message: text });
    const reply = await res.text;
    setMessages((prev) =>
      prev.map((m) =>
        m.content === "..." ? { ...m, content: reply as string } : m,
      ),
    );
    setLoading(false);
  };
  useEffect(() => {
    if (fileData) {
      if (fileData.mimeType.startsWith("audio/")) {
        return;
      } else {
        handleSendFile();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileData]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [messages]);

  return (
    <div className="flex h-[calc(100vh-56px)] w-full flex-col bg-[#0a0a0a] md:h-[calc(100vh-64px)] xl:h-[calc(100vh-72px)]">
      {/* Main Content */}
      <div className="flex flex-1 flex-col gap-3 overflow-hidden p-3 lg:flex-row lg:gap-4 lg:p-4 xl:gap-6 xl:p-6">
        {/* Video Section */}
        <div className="h-[200px] w-full flex-shrink-0 overflow-hidden rounded-2xl border border-white/5 shadow-2xl shadow-black/50 sm:h-[240px] lg:h-full lg:w-[360px] xl:w-[440px] 2xl:w-[560px]">
          <iframe
            width="100%"
            height="100%"
            className="h-full w-full"
            src="https://www.youtube.com/embed/HV67gHrGFF0?si=4tzYPA2W8WPjvR-Z&autoplay=1&mute=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        {/* Chat Section */}
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#111111]">
          {/* Chat Header */}
          <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3 xl:px-6 xl:py-4">
            <div className="relative">
              <Image
                src="/logo-badge.png"
                alt="Logo Foco Saúde Animal"
                width={200}
                height={200}
                className="h-8 w-8 rounded-full ring-2 ring-[#DC2626]/30 xl:h-10 xl:w-10"
              />
              <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#111111] bg-emerald-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white xl:text-base">
                Calculadora de Medicamentos
              </span>
              <span className="text-[11px] text-zinc-500 xl:text-xs">
                IA Foco Saúde Animal • Online
              </span>
            </div>
          </div>

          {/* Messages Area */}
          <div className="relative flex-1 overflow-hidden">
            {/* Welcome State */}
            <div
              className={cn(
                "absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-6 transition-all duration-700",
                isClicked
                  ? "pointer-events-none scale-95 opacity-0"
                  : "opacity-100",
              )}
            >
              <div className="flex flex-col items-center gap-3">
                <Image
                  src="/logo-badge.png"
                  alt="Logo Foco Saúde Animal"
                  width={1000}
                  height={1000}
                  className="h-16 w-16 rounded-full shadow-xl shadow-[#DC2626]/20 ring-2 ring-[#DC2626]/20 lg:h-20 lg:w-20 xl:h-24 xl:w-24"
                />
                <div className="flex flex-col items-center gap-1.5 text-center">
                  <h2 className="text-lg font-bold leading-tight text-white lg:text-xl xl:text-2xl">
                    Saiba a{" "}
                    <span className="text-[#DC2626]">
                      quantidade de medicamentos
                    </span>
                    <br />
                    ideal para sua fazenda
                  </h2>
                  <p className="max-w-sm text-xs text-zinc-500 lg:text-sm">
                    Utilize nossa IA para calcular o estoque de medicamentos
                    necessário com base no tamanho do seu rebanho.
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsClicked(true);
                  sendMessage("Olá");
                }}
                className="mt-2 rounded-full bg-[#DC2626] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-900/30 transition-all hover:bg-[#ef4444] hover:shadow-red-900/50 active:scale-95"
              >
                Iniciar conversa
              </button>
            </div>

            {/* Chat Messages */}
            <div
              className={cn(
                "absolute inset-0 transition-all delay-200 duration-500",
                isClicked ? "opacity-100" : "pointer-events-none opacity-0",
              )}
            >
              <ScrollArea className="h-full w-full">
                <div className="flex flex-col gap-3 p-4 xl:gap-4 xl:p-6">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex w-full gap-2.5",
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start",
                      )}
                    >
                      {/* Assistant Message */}
                      {message.role === "assistant" && (
                        <div className="flex max-w-[85%] gap-2.5 lg:max-w-[75%]">
                          <Image
                            src="/logo-badge.png"
                            alt="Avatar assistente"
                            width={250}
                            height={250}
                            className="mt-0.5 h-7 w-7 flex-shrink-0 rounded-full xl:h-8 xl:w-8"
                          />
                          <div className="flex flex-col gap-1">
                            <span className="text-[11px] font-medium text-zinc-500 xl:text-xs">
                              Calculadora Foco
                            </span>
                            <div className="rounded-2xl rounded-tl-md bg-white/[0.05] px-3.5 py-2.5 xl:px-4 xl:py-3">
                              {message.content === "..." ? (
                                <div className="flex items-center gap-1.5 py-1">
                                  <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#DC2626]/70 [animation-delay:-0.3s]" />
                                  <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#DC2626]/70 [animation-delay:-0.15s]" />
                                  <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#DC2626]/70" />
                                </div>
                              ) : (
                                <div className="prose prose-invert prose-sm max-w-none text-xs leading-relaxed text-zinc-300 xl:text-sm [&_table]:text-xs [&_th]:text-left [&_th]:font-semibold [&_td]:py-1 [&_th]:py-1">
                                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {message.content}
                                  </ReactMarkdown>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* User Message */}
                      {message.role === "user" && (
                        <div className="flex max-w-[85%] gap-2.5 lg:max-w-[75%]">
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-[11px] font-medium text-zinc-500 xl:text-xs">
                              Você
                            </span>
                            <div className="rounded-2xl rounded-tr-md bg-[#DC2626]/15 px-3.5 py-2.5 xl:px-4 xl:py-3">
                              {message.type?.includes("image") ? (
                                <Image
                                  src={message.file as string}
                                  alt="Imagem enviada pelo usuário"
                                  width={2500}
                                  height={2500}
                                  className="max-h-48 w-auto rounded-lg"
                                />
                              ) : message.type?.includes("audio") ? (
                                <AudioPlayer
                                  className="ai z-[9999] flex-1"
                                  size="default"
                                  audioUrl={message.file as string}
                                />
                              ) : message.type?.includes("video") ? (
                                <video
                                  src={message.file as string}
                                  controls
                                  className="max-h-60 rounded-lg"
                                />
                              ) : message.type?.includes("pdf") ? (
                                <a
                                  href={message.file as string}
                                  download
                                  className="flex items-center gap-2 text-white transition-colors hover:text-[#DC2626]"
                                >
                                  <Image
                                    src={"/pdf3.svg"}
                                    alt="Documento PDF"
                                    width={100}
                                    height={100}
                                    className="h-8 w-8"
                                  />
                                  <span className="text-xs xl:text-sm">
                                    {message.name}
                                  </span>
                                </a>
                              ) : (
                                <span className="text-xs text-zinc-200 xl:text-sm">
                                  {message.content}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-white/[0.06] px-3 py-3 xl:px-5 xl:py-4">
            {/* Audio preview */}
            {fileData && fileData.mimeType.startsWith("audio/") && (
              <div className="mb-2.5 flex items-center gap-2 rounded-xl bg-white/[0.04] px-3 py-2">
                <AudioPlayer
                  className="ai flex-1"
                  size="default"
                  audioUrl={fileData.dataUrl}
                />
                <button
                  onClick={() => clearFileData()}
                  className="rounded-full p-1 transition-colors hover:bg-white/10"
                >
                  <X className="h-4 w-4 text-zinc-400 hover:text-red-400" />
                </button>
              </div>
            )}

            <div className="flex items-center gap-2">
              {/* Attachment Buttons */}
              <div className="flex items-center gap-1">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="relative flex h-8 w-8 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] transition-all hover:border-white/15 hover:bg-white/[0.06] xl:h-9 xl:w-9">
                        <FileText className="h-3.5 w-3.5 text-zinc-400 xl:h-4 xl:w-4" />
                        <input
                          className="absolute inset-0 z-[2] cursor-pointer opacity-0"
                          type="file"
                          accept="application/pdf*"
                          onChange={(e) => handleFileUpload(e)}
                          disabled={loading || !!fileData}
                        />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      align="start"
                      className="border-zinc-700 bg-zinc-900"
                    >
                      <p className="text-xs text-white">Enviar PDF</p>
                      <TooltipArrow className="fill-zinc-900" />
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="relative flex h-8 w-8 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] transition-all hover:border-white/15 hover:bg-white/[0.06] xl:h-9 xl:w-9">
                        <ImageIcon className="h-3.5 w-3.5 text-zinc-400 xl:h-4 xl:w-4" />
                        <input
                          className="absolute inset-0 z-[2] cursor-pointer opacity-0"
                          type="file"
                          accept="image/*,video/*"
                          onChange={(e) => handleFileUpload(e)}
                          disabled={loading || !!fileData}
                        />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      align="start"
                      className="border-zinc-700 bg-zinc-900"
                    >
                      <p className="text-xs text-white">Imagem ou vídeo</p>
                      <TooltipArrow className="fill-zinc-900" />
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              {/* Text Input */}
              <div
                onClick={() => setIsClicked(true)}
                className="flex flex-1 items-center rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 transition-all focus-within:border-[#DC2626]/40 focus-within:bg-white/[0.04] hover:border-white/10 xl:px-4"
              >
                {!(fileData && fileData.mimeType.startsWith("audio/")) && (
                  <input
                    className="h-9 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-600 xl:h-10 xl:text-base"
                    placeholder="Digite sua mensagem..."
                    disabled={isRecording || loading}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage(inputMessage);
                        setInputMessage("");
                      }
                    }}
                  />
                )}
              </div>

              {/* Voice / Send Button */}
              <button
                className={cn(
                  "flex h-9 items-center justify-center gap-1.5 rounded-xl px-3 text-sm font-medium transition-all active:scale-95 xl:h-10 xl:px-4",
                  fileData?.mimeType.startsWith("audio/")
                    ? "bg-[#DC2626] text-white hover:bg-[#ef4444]"
                    : isRecording
                      ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                      : inputMessage.trim()
                        ? "bg-[#DC2626] text-white hover:bg-[#ef4444]"
                        : "bg-white/[0.05] text-zinc-400 hover:bg-white/[0.08] hover:text-white",
                )}
                disabled={loading}
                onClick={() => {
                  if (fileData?.mimeType.startsWith("audio/")) {
                    handleSendFile();
                  } else if (isRecording) {
                    stopRecording();
                  } else if (inputMessage.trim()) {
                    setIsClicked(true);
                    sendMessage(inputMessage);
                    setInputMessage("");
                  } else {
                    startRecording();
                  }
                }}
              >
                {isRecording && (
                  <span className="text-xs font-mono tabular-nums">
                    {elapsedTime}
                  </span>
                )}
                {fileData?.mimeType.startsWith("audio/") ? (
                  <Send className="h-4 w-4" />
                ) : isRecording ? (
                  <Square className="h-3.5 w-3.5" />
                ) : inputMessage.trim() ? (
                  <Send className="h-4 w-4" />
                ) : (
                  <Mic className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
