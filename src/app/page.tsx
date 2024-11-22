"use client";
import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { DeathCalculator } from "./components/DeathCalculator";
import { MedicationCalculator } from "./components/MedicationCalculator";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const services: string[] = ["Serviço 1", "Serviço 2", "Serviço 3"];
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [openDeathCalculator, setOpenDeathCalculator] = useState(false);
  const [openMedicationCalculator, setOpenMedicationCalculator] =
    useState(false);

  const toggleAccordion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight =
          openIndex === index ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [openIndex]);

  return (
    <>
      <div className="flex h-full w-full flex-col items-center bg-[#0A0A0A]">
        <main className="flex w-full flex-col overflow-hidden">
          <section className="relative z-40 flex h-[120vh] w-full flex-col items-center justify-center rounded-b-[80px] bg-black">
            <div className="absolute z-50 h-full w-full rounded-b-[80px] bg-[url(/1.png)] bg-cover bg-no-repeat opacity-30"></div>
            <div className="absolute z-40 h-full w-full rounded-b-[80px] bg-white/70"></div>
            <div className="relative z-50 flex h-full w-full flex-col items-center">
              <div className="mt-2 flex w-[80%] items-center justify-between rounded-lg bg-[#0A0A0A]/90 p-2">
                <button className="w-1/5">
                  <Menu />
                </button>
                <div className="flex flex-row items-center justify-center gap-4">
                  <button className="text-sm">Calculadora de Lucro</button>
                  <button className="text-sm">Serviços</button>
                  <button className="text-sm">Inteligência Artificial</button>
                  <button className="text-sm">História</button>
                </div>
                <div className="flex flex-row items-center justify-between gap-4">
                  <button className="rounded-md border border-[#DC2626] p-2 text-[12px] transition-all duration-200 hover:scale-[1.02]">
                    ESPAÇO ADM
                  </button>
                  <button className="rounded-md border border-[#0A0A0A]/90 bg-[#DC2626] p-2 text-[12px] transition-all duration-200 hover:scale-[1.02]">
                    ESPAÇO DO CLIENTE
                  </button>
                </div>
              </div>

              <Image
                className="mb-4 mt-8 h-28 w-auto"
                alt=""
                width={500}
                height={500}
                src="/fullLogo.png"
              />
              <h1 className="text-4xl font-bold text-black">
                CONSULTORIA EM SAÚDE ANIMAL
              </h1>
              <h2 className="mb-4 mt-4 text-center text-lg text-black">
                CONSULTORIA EM SAÚDE ANIMAL, CONSULTORIA EM SAÚDE
                ANIMALCONSULTORIA EM <br /> SAÚDE ANIMALCONSULTORIA EM SAÚDE
                ANIMAL
              </h2>
              <Image
                className="absolute bottom-20 left-0 z-50 h-[50vh] w-auto"
                alt=""
                width={500}
                height={500}
                src="/2.png"
              />
              <div className="absolute -bottom-20 z-[80] flex h-[440px] w-[80%] flex-row overflow-hidden rounded-3xl">
                <video
                  className="absolute left-0 top-0 z-[50] h-full w-full object-cover"
                  src={"/video.mp4"}
                  autoPlay
                  playsInline
                  preload="auto"
                  muted
                  loop
                />
                <div className="z-[60] flex h-full w-1/2 flex-col items-end justify-end py-8 pl-24 pr-8 text-right">
                  <div className="flex w-[80%] items-end">
                    <h3 className="text-start">
                      Calculadora desenvolvida para facilitar a tomada de
                      decisões sobre o estado de saúde do rebanho.
                    </h3>
                  </div>
                  <button
                    onClick={() => setOpenDeathCalculator(true)}
                    className="font-regular mt-4 flex w-[80%] items-center justify-center rounded-md border-[#8F1220] bg-white transition-all duration-300 hover:scale-[1.05]"
                  >
                    <span className="flex items-center justify-center bg-gradient-to-r from-[#8F1220] to-black bg-clip-text p-2 text-sm text-[#8F1220]">
                      Calculadora de Mortalidade
                    </span>
                  </button>
                </div>
                <div className="z-[60] flex h-full w-1/2 flex-col items-end justify-end py-8 pl-8 pr-24 text-right">
                  <div className="flex w-[80%] items-start">
                    <h3 className="text-start">
                      Ferramenta para auxiliar na quantidade de medicamentos com
                      base no tamanho do rebanho e do motivo do tratamento.
                    </h3>
                  </div>
                  <button
                    onClick={() => setOpenMedicationCalculator(true)}
                    className="font-regular mt-4 flex w-[80%] items-center justify-center rounded-md border-[#8F1220] bg-white transition-all duration-300 hover:scale-[1.05]"
                  >
                    <span className="flex items-center justify-center bg-gradient-to-r from-[#8F1220] to-black bg-clip-text p-2 text-sm text-[#8F1220]">
                      Calculadora de Medicamentos
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <div className="relative -mt-20 flex flex-col">
            <div className="absolute right-0 z-30 h-full w-[100px] bg-gradient-to-r from-[#0A0A0A] to-[#8F1220]/80"></div>
            <section className="mt-60 flex items-center justify-between px-24 py-16 text-xl font-bold text-[#585858]">
              <Marquee gradient={false} pauseOnHover speed={100}>
                <div className="flex space-x-24 px-24 text-xl font-bold text-[#585858]">
                  <span>LOGO NAME</span>
                  <span>LOGO NAME</span>
                  <span>LOGO NAME</span>
                  <span>LOGO NAME</span>
                  <span>LOGO NAME</span>
                  <span>LOGO NAME</span>
                </div>
              </Marquee>
            </section>

            <section className="relative flex h-screen w-full flex-col items-center justify-center bg-[#0A0A0A] text-white">
              <Image
                className="absolute right-0 z-50 h-[50vh] w-auto"
                alt=""
                width={500}
                height={500}
                src="/logoCortadaCinza.png"
              />
              <div className="z-[60] flex h-full w-full flex-col px-24 py-16 text-white">
                <div className="flex flex-row items-center gap-2 font-bold">
                  <Image
                    className="h-14 w-auto"
                    alt=""
                    width={500}
                    height={500}
                    src="/4.png"
                  />
                  <h2 className="text-2xl font-bold">SERVIÇOS</h2>
                </div>
                <h3 className="text-md mb-4 text-start font-semibold">
                  Explore the world through our portfolio of works and find what
                  you love here.
                </h3>
                <div className="mt-10 flex flex-col justify-between gap-8">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`mb-2 mt-4 w-[80%] transition-all duration-300 ${
                        openIndex !== index ? "border-b border-b-white" : ""
                      }`}
                    >
                      <button
                        onClick={() => toggleAccordion(index)}
                        className={`flex w-full justify-between px-4 py-2 text-left text-sm font-medium text-white`}
                      >
                        <div
                          className={`flex flex-row gap-8 transition-all duration-300 ${
                            openIndex === index
                              ? "text-[#DC2626]"
                              : "text-white"
                          }`}
                        >
                          <span>0{index + 1}</span>
                          <span className="text-xl font-bold">{service}</span>
                        </div>
                        <div
                          className={`border ${
                            openIndex === index
                              ? "border-white"
                              : "border-zinc-600"
                          } flex h-8 w-8 items-center justify-center rounded-full p-2 transition-all duration-300`}
                        >
                          <span
                            className={`${
                              openIndex === index ? "-rotate-45" : ""
                            } transform transition-transform duration-300`}
                          >
                            <ArrowRight
                              className={`transition-all duration-300 ${
                                openIndex === index
                                  ? "text-[#DC2626]"
                                  : "text-white"
                              }`}
                            />
                          </span>
                        </div>
                      </button>
                      <div
                        ref={(el: HTMLDivElement | null) => {
                          contentRefs.current[index] = el;
                        }}
                        className="flex max-h-0 flex-row items-center gap-8 overflow-hidden px-4 text-sm text-gray-200 transition-all duration-500 ease-in-out"
                      >
                        <div
                          className={`flex h-48 w-[80%] flex-row items-center gap-8 transition-all duration-300 ${
                            openIndex === index ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <div className="h-32 w-40 p-1">
                            <div className="h-full w-full rounded-lg bg-white"></div>
                          </div>
                          <span>
                            Explore the world through our portfolio of works and
                            find what you love here. This is a detailed
                            description of {service}.
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
          <section className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-b-3xl">
            <div className="absolute z-20 h-full w-full bg-[url(/1.png)] bg-cover bg-no-repeat opacity-30"></div>
            <div className="absolute z-10 h-full w-full bg-white/70"></div>
            <div className="z-[60] flex h-full w-full flex-col px-24 py-16 text-[#DC2626]">
              <div className="text-bold flex flex-row items-center gap-2">
                <Image
                  className="h-14 w-auto"
                  alt=""
                  width={500}
                  height={500}
                  src="/4.png"
                />
                <h2 className="text-2xl font-bold">NOSSA HISTÓRIA</h2>
              </div>
              <h3 className="text-md text-start font-semibold">
                (TEXTO GENÉRICO SOBRE HISTÓRIA DE ATÉ 2 LINHAS)
              </h3>
              <div className="z-[60] mb-20 mt-10 flex w-full flex-row justify-between">
                <button className="group relative flex h-[350px] w-[350px] flex-col gap-4 rounded-2xl bg-black/20 p-4 transition-all duration-300 hover:scale-[1.05] hover:bg-black/40">
                  <div className="h-1/2 w-full"></div>
                  <div className="flex h-1/2 w-full items-center">
                    <span className="text-start font-semibold text-zinc-800 transition-all duration-300 group-hover:text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                  </div>
                  <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border p-2 transition-all duration-300 group-hover:bg-[#DC2626]">
                    <span className="-rotate-45 transform transition-transform duration-300 group-hover:-rotate-90">
                      <ArrowRight className="text-[#DC2626] transition-all duration-300 group-hover:text-white" />
                    </span>
                  </div>
                </button>
                <button className="group relative flex h-[350px] w-[350px] flex-col gap-4 rounded-2xl bg-black/20 p-4 transition-all duration-300 hover:scale-[1.05] hover:bg-black/40">
                  <div className="h-1/2 w-full"></div>
                  <div className="flex h-1/2 w-full items-center">
                    <span className="text-start font-semibold text-zinc-800 transition-all duration-300 group-hover:text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                  </div>
                  <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border p-2 transition-all duration-300 group-hover:bg-[#DC2626]">
                    <span className="-rotate-45 transform transition-transform duration-300 group-hover:-rotate-90">
                      <ArrowRight className="text-[#DC2626] transition-all duration-300 group-hover:text-white" />
                    </span>
                  </div>
                </button>
                <button className="group relative flex h-[350px] w-[350px] flex-col gap-4 rounded-2xl bg-black/20 p-4 transition-all duration-300 hover:scale-[1.05] hover:bg-black/40">
                  <div className="h-1/2 w-full"></div>
                  <div className="flex h-1/2 w-full items-center">
                    <span className="text-start font-semibold text-zinc-800 transition-all duration-300 group-hover:text-white">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </span>
                  </div>
                  <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border p-2 transition-all duration-300 group-hover:bg-[#DC2626]">
                    <span className="-rotate-45 transform transition-transform duration-300 group-hover:-rotate-90">
                      <ArrowRight className="text-[#DC2626] transition-all duration-300 group-hover:text-white" />
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </section>

          <section className="relative z-40 -mt-20 flex h-screen w-full flex-col items-center justify-center rounded-t-3xl bg-[#0A0A0A] px-24 py-16 pb-20 text-white">
            <Image
              className="absolute right-0 top-20 z-50 h-[50vh] w-auto"
              alt=""
              width={500}
              height={500}
              src="/3.png"
            />
            <div className="flex w-full flex-col">
              <div className="text-bold flex flex-row items-center justify-center gap-2">
                <Image
                  className="h-10 w-10"
                  alt=""
                  width={500}
                  height={500}
                  src="/4.png"
                />
                <h2 className="text-2xl font-bold">
                  TECNOLOGIAS INOVADORAS NO SETOR
                </h2>
              </div>
              <h3 className="text-md text-center font-semibold">
                (TEXTO SOBRE TECNOLOGIAS INOVADORAS NO SETOR DE PECUÁRIA, DE ATÉ
                3 LINHAS)
              </h3>
              <div className="mb-10 mt-10 flex w-full flex-row justify-evenly">
                <div className="h-[400px] w-[390px] rounded-2xl bg-white"></div>
                <div className="h-[400px] w-[390px] rounded-2xl bg-white"></div>
              </div>
            </div>
          </section>
        </main>
        <footer className="mb-10 flex w-[80%] flex-row items-center justify-between self-center rounded-lg bg-black px-4 py-8 shadow shadow-[#8F1220]">
          <button>
            <Image
              className="h-6 w-auto transition-all duration-300 hover:scale-[1.1]"
              alt=""
              width={500}
              height={500}
              src="/11.png"
            />
          </button>
          <button>
            <Image
              className="h-10 w-auto transition-all duration-300 hover:scale-[1.05]"
              alt=""
              width={500}
              height={500}
              src="/12.png"
            />
          </button>
          <button>
            <Image
              className="h-10 w-auto transition-all duration-300 hover:scale-[1.05]"
              alt=""
              width={500}
              height={500}
              src="/13.png"
            />
          </button>
          <button>
            <Image
              className="h-10 w-auto transition-all duration-300 hover:scale-[1.05]"
              alt=""
              width={500}
              height={500}
              src="/14.png"
            />
          </button>
          <Image
            className="h-10 w-auto"
            alt=""
            width={500}
            height={500}
            src="/15.png"
          />
        </footer>
      </div>
      <DeathCalculator
        openDeathCalculator={openDeathCalculator}
        setOpenDeathCalculator={setOpenDeathCalculator}
      />
      <MedicationCalculator
        openMedicationCalculator={openMedicationCalculator}
        setOpenMedicationCalculator={setOpenMedicationCalculator}
      />
    </>
  );
}
