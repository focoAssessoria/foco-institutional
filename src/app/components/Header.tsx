"use client";
import {
  Bot,
  Calculator,
  History,
  LayoutGrid,
  Menu,
  Pill,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const navItemClass =
  "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-white/90 transition-all duration-300 ease-out hover:bg-[#DC2626]/20 hover:text-white hover:scale-[1.02]";

interface HeaderProps {
  mobile?: boolean;
}

export function Header({ mobile }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isHome = pathname === "/";

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

  const handleNav = (action: () => void) => {
    if (mobile) setIsSidebarOpen(false);
    action();
  };

  return (
    <>
      <div
        className={twMerge(
          "sticky top-2 z-[9999] mx-auto flex w-[80%] items-center justify-between self-center rounded-lg bg-[#0A0A0A]/90 backdrop-blur-sm p-2 text-white",
          mobile && "w-11/12 lg:hidden",
        )}
      >
        <Link href="/" className="lg:hidden">
          <Image
            className="h-8 w-max object-contain"
            alt="Logo Foco Saúde Animal"
            width={500}
            height={500}
            src="/4.png"
          />
        </Link>
        <button
          className="rounded-lg p-2 transition-colors duration-200 hover:bg-white/10 lg:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
        <div className="hidden w-full flex-row items-center justify-evenly lg:flex">
          <button
            onClick={() => handleNav(() => router.push("/mortality/calculator"))}
            className={navItemClass}
          >
            <Calculator className="h-4 w-4 shrink-0 opacity-80" />
            Calc. de Mortalidade
          </button>
          <button
            onClick={() =>
              handleNav(() => router.push("/medication/calculator"))
            }
            className={navItemClass}
          >
            <Pill className="h-4 w-4 shrink-0 opacity-80" />
            Calc. de Medicamentos
          </button>
          <button
            className={navItemClass}
            onClick={() =>
              handleNav(() =>
                isHome ? scrollToSection("service") : router.push("/#service"),
              )
            }
          >
            <LayoutGrid className="h-4 w-4 shrink-0 opacity-80" />
            Soluções
          </button>
          <button
            onClick={() =>
              handleNav(() =>
                isHome ? scrollToSection("history") : router.push("/#history"),
              )
            }
            className={navItemClass}
          >
            <History className="h-4 w-4 shrink-0 opacity-80" />
            História
          </button>
          <button
            onClick={() =>
              handleNav(() => router.push("/inteligencia-artificial"))
            }
            className={navItemClass}
          >
            <Bot className="h-4 w-4 shrink-0 opacity-80" />
            Inteligência Artificial
          </button>
          <button
            onClick={() => handleNav(() => router.push("/aplicativo"))}
            className={navItemClass}
          >
            <Smartphone className="h-4 w-4 shrink-0 opacity-80" />
            Aplicativo
          </button>
        </div>
        <div className="hidden w-2/5 flex-row items-center justify-end gap-4 lg:flex">
          <button
            onClick={() =>
              window.open("https://admin.focosaudeanimal.com.br", "_blank")
            }
            className="rounded-md border border-[#DC2626] p-2 text-[12px] transition-all duration-200 hover:scale-[1.02]"
          >
            ESPAÇO ADM
          </button>
          <button
            onClick={() =>
              window.open("https://client.focosaudeanimal.com.br", "_blank")
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
          <Link href="/" onClick={() => setIsSidebarOpen(false)}>
            <Image
              src="/logo.png"
              alt="Logo Foco Saúde Animal"
              width={1000}
              height={1000}
              className="h-max w-80 object-contain transition-opacity duration-200 hover:opacity-90"
            />
          </Link>
          <div className="flex w-full flex-col items-stretch gap-1 text-start">
            <button
              onClick={() => handleNav(() => router.push("/mortality/calculator"))}
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm text-white transition-colors duration-200 hover:bg-white/15"
            >
              <Calculator className="h-4 w-4 shrink-0 opacity-90" />
              Calc. de Mortalidade
            </button>
            <button
              onClick={() =>
                handleNav(() => router.push("/medication/calculator"))
              }
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm text-white transition-colors duration-200 hover:bg-white/15"
            >
              <Pill className="h-4 w-4 shrink-0 opacity-90" />
              Calc. de Medicamentos
            </button>
            <button
              onClick={() =>
                handleNav(() =>
                  isHome ? scrollToSection("service") : router.push("/#service"),
                )
              }
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm text-white transition-colors duration-200 hover:bg-white/15"
            >
              <LayoutGrid className="h-4 w-4 shrink-0 opacity-90" />
              Soluções
            </button>
            <button
              onClick={() =>
                handleNav(() =>
                  isHome ? scrollToSection("history") : router.push("/#history"),
                )
              }
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm text-white transition-colors duration-200 hover:bg-white/15"
            >
              <History className="h-4 w-4 shrink-0 opacity-90" />
              História
            </button>
            <button
              onClick={() =>
                handleNav(() => router.push("/inteligencia-artificial"))
              }
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm text-white transition-colors duration-200 hover:bg-white/15"
            >
              <Bot className="h-4 w-4 shrink-0 opacity-90" />
              Inteligência Artificial
            </button>
            <button
              onClick={() => handleNav(() => router.push("/aplicativo"))}
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm text-white transition-colors duration-200 hover:bg-white/15"
            >
              <Smartphone className="h-4 w-4 shrink-0 opacity-90" />
              Aplicativo
            </button>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-4">
            <button
              onClick={() =>
                window.open("https://admin.focosaudeanimal.com.br", "_blank")
              }
              className="rounded-md border border-white p-2 text-[12px] transition-all duration-200 hover:scale-[1.02]"
            >
              ESPAÇO ADM
            </button>
            <button
              onClick={() =>
                window.open("https://client.focosaudeanimal.com.br", "_blank")
              }
              className="rounded-md border border-[#DC2626] bg-white p-2 text-[12px] text-[#DC2626] transition-all duration-200 hover:scale-[1.02]"
            >
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
