"use client";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();

  return (
    <header className="relative flex h-14 w-full items-center justify-between bg-[#0f0f0f] px-4 shadow-lg shadow-black/30 md:h-16 xl:h-[72px] xl:px-8">
      {/* Left - Back button */}
      <div
        onClick={() => router.push("/")}
        className="group flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 transition-colors duration-200 hover:bg-white/5"
      >
        <ChevronLeft className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-white" />
        <span className="hidden text-sm font-semibold tracking-wide text-zinc-300 transition-colors group-hover:text-white md:block xl:text-base">
          Calculadora de Medicamentos
        </span>
      </div>

      {/* Center - Logo */}
      <Image
        src="/new-logo.png"
        alt="Logo Foco Saúde Animal"
        width={1000}
        height={500}
        className="absolute left-1/2 top-1/2 h-8 w-auto -translate-x-1/2 -translate-y-1/2 object-contain xl:h-10"
      />

      {/* Right - CTA */}
      <button
        onClick={() =>
          window.open(
            `https://api.whatsapp.com/send?phone=+5534992097609&text=Ol%C3%A1+Eu+venho+atrav%C3%A9s+do+site`,
            "_blank",
          )
        }
        className="flex items-center gap-2 rounded-full bg-[#DC2626] px-3 py-1.5 text-xs font-semibold text-white shadow-lg shadow-red-900/30 transition-all duration-200 hover:bg-[#ef4444] hover:shadow-red-900/50 active:scale-95 xl:px-5 xl:py-2 xl:text-sm"
      >
        <span className="hidden sm:inline">Fale Conosco</span>
        <Image
          src="/whats-icon.png"
          alt="Ícone WhatsApp"
          width={250}
          height={250}
          className="h-4 w-4 xl:h-5 xl:w-5"
        />
      </button>
    </header>
  );
}
