"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface HeaderProps {
  mobile?: boolean;
}

export function Header({ mobile }: HeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => document.body.classList.remove("modal-open");
  }, [isSidebarOpen]);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToBottom = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };
  return (
    <>
      <div
        className={twMerge(
          "sticky top-2 z-[9999] mx-auto flex w-[80%] items-center justify-between self-center rounded-lg bg-[#0A0A0A]/90 p-2",
          mobile && "w-11/12 lg:hidden",
        )}
      >
        <Image
          className="h-8 w-max object-contain lg:hidden"
          alt=""
          width={500}
          height={500}
          src="/4.png"
        />
        <button
          className="lg:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu />
        </button>
        <div className="hidden w-full flex-row items-center justify-evenly lg:flex">
          <button
            onClick={() => scrollToBottom("calculator")}
            className="text-sm"
          >
            Calculadora de medicamentos
          </button>
          <button
            className="text-sm"
            onClick={() => scrollToSection("service")}
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection("history")}
            className="text-sm"
          >
            História
          </button>
          <button onClick={() => scrollToSection("ai")} className="text-sm">
            Inteligência Artificial
          </button>
        </div>
        <div className="hidden w-2/5 flex-row items-center justify-end gap-4 lg:flex">
          <button
            onClick={() =>
              (window.location.href =
                "https://main.d389nhgdmdu5e2.amplifyapp.com")
            }
            className="rounded-md border border-[#DC2626] p-2 text-[12px] transition-all duration-200 hover:scale-[1.02]"
          >
            ESPAÇO ADM
          </button>
          <button
            onClick={() =>
              (window.location.href =
                "https://main.d2eq0bpdou5t22.amplifyapp.com")
            }
            className="rounded-md border border-[#0A0A0A]/90 bg-[#DC2626] p-2 text-[12px] transition-all duration-200 hover:scale-[1.02]"
          >
            ESPAÇO DO CLIENTE
          </button>
        </div>
      </div>
      <div
        className={twMerge(
          "right-0 top-0 z-[10000] flex h-screen w-full",
          isSidebarOpen ? "absolute" : "hidden",
        )}
      >
        <div className="left-0 top-0 z-[10000] flex h-screen max-w-[350px] flex-col gap-8 bg-[#9a2626] p-4 pt-12">
          <Image
            src="/logo.png"
            alt="logo"
            width={1000}
            height={1000}
            className="h-max w-80 object-contain"
          />
          <div className="flex flex-col gap-2">
            <button className="text-sm">Calculadora de Lucro</button>
            <button className="text-sm">Serviços</button>
            <button className="text-sm">Inteligência Artificial</button>
            <button className="text-sm">História</button>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-4">
            <button className="rounded-md border border-white p-2 text-[12px] transition-all duration-200 hover:scale-[1.02]">
              ESPAÇO ADM
            </button>
            <button className="rounded-md border border-[#DC2626] bg-white p-2 text-[12px] text-[#DC2626] transition-all duration-200 hover:scale-[1.02]">
              ESPAÇO DO CLIENTE
            </button>
          </div>
        </div>
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="right-0 top-0 z-[10000] h-screen w-full bg-[#0A0A0A]/90"
        ></div>
      </div>
    </>
  );
}
