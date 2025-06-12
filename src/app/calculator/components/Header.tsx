"use client";
import Image from "next/image";

export function Header() {
  return (
    <div className="relative flex h-16 w-full items-center justify-between border-b border-b-zinc-200 bg-[#171717] px-4 xl:h-20 2xl:h-28 2xl:px-8">
      <span className="font-manrope hidden text-2xl font-bold xl:block">
        CALCULADORA FOCO SAÚDE ANIMAL
      </span>
      <Image
        src="/new-logo.png"
        alt=""
        width={1000}
        height={500}
        className="absolute left-1/2 top-1/2 h-12 w-max -translate-x-1/2 -translate-y-1/2 object-contain xl:h-16"
      />
      <button
        onClick={() =>
          window.open(
            `https://api.whatsapp.com/send?phone=+554197819114&text=Ol%C3%A1+Eu+venho+atrav%C3%A9s+do+site`,
            "_blank",
          )
        }
        className="font-manrope flex cursor-pointer items-center gap-2 rounded-lg bg-[#DC2626] px-2 py-2 text-sm font-bold text-white xl:px-8 xl:text-base"
      >
        Fale Conosco
        <Image
          src="/whats-icon.png"
          alt=""
          width={250}
          height={250}
          className="h-4 w-4 xl:h-6 xl:w-6"
        />
      </button>
    </div>
  );
}
