"use client";
import { cn } from "@/app/utils/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Section } from "./components/Chat/SectionGemini";
import { Header } from "./components/Header";

export default function Calculator() {
  const [showImage, setShowImage] = useState(true);
  const [zDelay, setZDelay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowImage(false);
    }, 1500);
    setTimeout(() => {
      setZDelay(true);
    }, 1750);
  }, []);

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-[#0a0a0a]">
      <div
        className={cn(
          `fixed z-[999] flex h-screen w-full flex-col items-center justify-center gap-4 bg-[#0a0a0a] transition duration-500 ease-in-out`,
          !showImage && "opacity-0",
          zDelay && "-z-50",
        )}
      >
        <Image
          className="h-max w-48 object-contain xl:w-60"
          alt="Logo Foco Saúde Animal"
          width={500}
          height={500}
          src="/fullLogoWhite.png"
        />
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#DC2626] [animation-delay:-0.3s]" />
          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#DC2626] [animation-delay:-0.15s]" />
          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#DC2626]" />
        </div>
      </div>
      <Header />
      <Section />
    </div>
  );
}
