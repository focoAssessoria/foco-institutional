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
    <>
      <div
        className={cn(
          `fixed z-[999] flex h-screen w-full flex-col items-center justify-center gap-4 bg-black transition duration-500 ease-in-out`,
          !showImage && "opacity-5",
          zDelay && "-z-50",
        )}
      >
        <Image
          className="h-max w-60 object-contain"
          alt="Logo Foco Saúde Animal"
          width={500}
          height={500}
          src="/fullLogoWhite.png"
        />
        <p className="text-white">Carregando...</p>
      </div>
      <Header />
      <Section />
    </>
  );
}
