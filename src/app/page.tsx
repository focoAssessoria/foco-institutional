"use client";
import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const services: string[] = ["Serviço 1", "Serviço 2", "Serviço 3"];
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    <div className="bg-[#0A0A0A] flex flex-col items-center  w-full h-full">
      <main className="flex flex-col  w-full overflow-hidden ">
        <section className="flex relative flex-col items-center bg-black z-40 justify-center h-[120vh] w-full  rounded-b-[80px] ">
          <div className="h-full absolute w-full z-50 bg-[url(/1.png)] bg-cover bg-no-repeat rounded-b-[80px] opacity-30"></div>
          <div className="h-full absolute w-full bg-white/70 z-40 rounded-b-[80px]"></div>
          <div className="h-full w-full z-50 relative flex flex-col items-center ">
            <div className="bg-[#0A0A0A]/90 rounded-lg  w-[80%]  mt-2 flex items-center justify-between p-2">
              <button className="w-1/5">
                <Menu />
              </button>
              <div className="flex flex-row gap-4   items-center justify-center">
                <button className="text-sm">Calculadora de Lucro</button>
                <button className="text-sm">Serviços</button>
                <button className="text-sm">Inteligência Artificial</button>
                <button className="text-sm">História</button>
              </div>
              <div className="flex  flex-row justify-between gap-4 items-center ">
                <button className="border text-[12px]  transition-all duration-200 hover:scale-[1.02] p-2 border-[#DC2626] rounded-md">
                  ESPAÇO ADM
                </button>
                <button className="border text-[12px] p-2 border-[#0A0A0A]/90 bg-[#DC2626] transition-all duration-200 hover:scale-[1.02] rounded-md">
                  ESPAÇO DO CLIENTE
                </button>
              </div>
            </div>

            <Image
              className="h-28 mt-8 mb-4 w-auto "
              alt=""
              width={500}
              height={500}
              src="/fullLogo.png"
            />
            <h1 className="text-4xl font-bold text-black">
              CONSULTORIA EM SAÚDE ANIMAL
            </h1>
            <h2 className="text-lg mt-4 mb-4 text-center text-black">
              CONSULTORIA EM SAÚDE ANIMAL, CONSULTORIA EM SAÚDE
              ANIMALCONSULTORIA EM <br /> SAÚDE ANIMALCONSULTORIA EM SAÚDE
              ANIMAL
            </h2>
            <Image
              className="absolute bottom-20 left-0 w-auto z-50 h-[50vh]"
              alt=""
              width={500}
              height={500}
              src="/2.png"
            />
            <div className="w-[80%] rounded-3xl absolute  flex flex-row -bottom-20 overflow-hidden z-[80] h-[440px] ">
              <video
                className="absolute left-0 top-0 z-[50] h-full w-full object-cover"
                src={"/video.mp4"}
                autoPlay
                playsInline
                preload="auto"
                muted
                loop
              />
              <div className=" w-1/2 pl-24 z-[60] py-8 pr-8 h-full text-right items-end flex justify-end flex-col">
                <div className=" flex items-end w-[80%]">
                  <h3 className="text-start">
                    (AQUI DEVE FICAR UM TEXTO DE ATÉ 5 LINHAS SOBRE UMA
                    CALCULADORA DE LUCRATIVIDADE)
                  </h3>
                </div>
                <div className="bg-white hover:scale-[1.05] duration-300 transition-all border-[#8F1220] w-[80%] mt-4 rounded-md font-regular flex items-center justify-center">
                  <button className="bg-gradient-to-r from-[#8F1220] flex items-center justify-center to-black p-2 text-sm bg-clip-text text-[#8F1220]">
                    Calculadora de Lucratividade
                  </button>
                </div>
              </div>
              <div className=" w-1/2 pr-24 pl-8 z-[60] py-8 h-full text-right items-end flex justify-end flex-col">
                <div className=" flex items-start w-[80%]">
                  <h3 className="text-start">
                    (AQUI DEVE FICAR UM TEXTO DE ATÉ 5 LINHAS SOBRE UMA
                    CALCULADORA DE LUCRATIVIDADE)
                  </h3>
                </div>
                <div className="border border-white hover:scale-[1.05] duration-300 transition-all mt-4 w-[80%] items-center justify-center rounded-md font-regular flex">
                  <button className=" to-black p-2 text-sm  text-white">
                    Calculadora de Lucratividade
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-col relative -mt-20">
          <div className="absolute z-30 right-0 h-full w-[100px] bg-gradient-to-r from-[#0A0A0A] to-[#8F1220]/80"></div>
          <section className="flex items-center mt-60 text-[#585858] text-xl font-bold justify-between py-16 px-24 ">
            <Marquee gradient={false} pauseOnHover speed={100}>
              <div className="flex space-x-24 text-[#585858] text-xl font-bold px-24">
                <span>LOGO NAME</span>
                <span>LOGO NAME</span>
                <span>LOGO NAME</span>
                <span>LOGO NAME</span>
                <span>LOGO NAME</span>
                <span>LOGO NAME</span>
              </div>
            </Marquee>
          </section>

          <section className="flex flex-col relative items-center justify-center h-screen w-full bg-[#0A0A0A] text-white">
            <Image
              className="absolute right-0 w-auto z-50 h-[50vh]"
              alt=""
              width={500}
              height={500}
              src="/logoCortadaCinza.png"
            />
            <div className="h-full w-full flex flex-col z-[60] py-16 px-24 text-white">
              <div className="flex gap-2 font-bold items-center flex-row">
                <Image
                  className="h-14 w-auto"
                  alt=""
                  width={500}
                  height={500}
                  src="/4.png"
                />
                <h2 className="font-bold text-2xl">SERVIÇOS</h2>
              </div>
              <h3 className="font-semibold text-start text-md mb-4">
                Explore the world through our portfolio of works and find what
                you love here.
              </h3>
              <div className=" gap-8 mt-10 flex flex-col justify-between">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={` mb-2 mt-4 w-[80%] transition-all duration-300 ${
                      openIndex !== index ? "border-b border-b-white" : ""
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className={`w-full text-left px-4 py-2  text-sm font-medium text-white flex justify-between  `}
                    >
                      <div
                        className={`flex flex-row gap-8 transition-all duration-300 ${
                          openIndex === index ? "text-[#DC2626]" : "text-white"
                        }`}
                      >
                        <span>0{index + 1}</span>
                        <span className="font-bold text-xl">{service}</span>
                      </div>
                      <div
                        className={`border ${
                          openIndex === index
                            ? "border-white"
                            : "border-zinc-600"
                        } rounded-full p-2 w-8 h-8 flex items-center transition-all duration-300 justify-center`}
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
                      className="px-4 text-sm items-center text-gray-200 flex flex-row gap-8 transition-all duration-500 ease-in-out max-h-0 overflow-hidden"
                    >
                      <div
                        className={`flex flex-row gap-8 h-48 w-[80%] items-center transition-all duration-300 ${
                          openIndex === index ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <div className="h-32 w-40 p-1">
                          <div className="rounded-lg bg-white w-full h-full"></div>
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
        <section className="flex relative flex-col items-center justify-center h-full w-full  rounded-b-3xl overflow-hidden">
          <div className="h-full absolute w-full z-20 bg-[url(/1.png)] bg-cover bg-no-repeat opacity-30"></div>
          <div className="h-full absolute w-full bg-white/70 z-10"></div>
          <div className="h-full w-full flex flex-col z-[60]  py-16 px-24 text-[#DC2626] ">
            <div className="flex gap-2 text-bold  items-center flex-row">
              <Image
                className="h-14 w-auto"
                alt=""
                width={500}
                height={500}
                src="/4.png"
              />
              <h2 className="font-bold text-2xl ">NOSSA HISTÓRIA</h2>
            </div>
            <h3 className="font-semibold text-start text-md">
              (TEXTO GENÉRICO SOBRE HISTÓRIA DE ATÉ 2 LINHAS)
            </h3>
            <div className="w-full mt-10 mb-20 z-[60] flex flex-row justify-between">
              <button className="h-[350px] p-4 w-[350px] hover:bg-black/40 hover:scale-[1.05] flex flex-col gap-4 transition-all duration-300 bg-black/20 rounded-2xl relative group">
                <div className="h-1/2 w-full "></div>
                <div className="h-1/2 w-full items-center flex">
                  <span className="text-start group-hover:text-white transition-all duration-300 text-zinc-800 font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </div>
                <div className="border group-hover:bg-[#DC2626] absolute top-4 right-4 rounded-full p-2 w-8 h-8 flex items-center transition-all duration-300 justify-center">
                  <span className="transform transition-transform duration-300 group-hover:-rotate-90 -rotate-45">
                    <ArrowRight className="transition-all duration-300 group-hover:text-white text-[#DC2626]" />
                  </span>
                </div>
              </button>
              <button className="h-[350px] p-4 w-[350px] hover:bg-black/40 hover:scale-[1.05] flex flex-col gap-4 transition-all duration-300 bg-black/20 rounded-2xl relative group">
                <div className="h-1/2 w-full "></div>
                <div className="h-1/2 w-full items-center flex">
                  <span className="text-start group-hover:text-white transition-all duration-300 text-zinc-800 font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </div>
                <div className="border group-hover:bg-[#DC2626] absolute top-4 right-4 rounded-full p-2 w-8 h-8 flex items-center transition-all duration-300 justify-center">
                  <span className="transform transition-transform duration-300 group-hover:-rotate-90 -rotate-45">
                    <ArrowRight className="transition-all duration-300 group-hover:text-white text-[#DC2626]" />
                  </span>
                </div>
              </button>
              <button className="h-[350px] p-4 w-[350px] hover:bg-black/40 hover:scale-[1.05] flex flex-col gap-4 transition-all duration-300 bg-black/20 rounded-2xl relative group">
                <div className="h-1/2 w-full "></div>
                <div className="h-1/2 w-full items-center flex">
                  <span className="text-start group-hover:text-white transition-all duration-300 text-zinc-800 font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </div>
                <div className="border group-hover:bg-[#DC2626] absolute top-4 right-4 rounded-full p-2 w-8 h-8 flex items-center transition-all duration-300 justify-center">
                  <span className="transform transition-transform duration-300 group-hover:-rotate-90 -rotate-45">
                    <ArrowRight className="transition-all duration-300 group-hover:text-white text-[#DC2626]" />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </section>

        <section className="flex flex-col py-16 px-24 relative items-center justify-center h-screen z-40 rounded-t-3xl -mt-20 w-full bg-[#0A0A0A] text-white pb-20">
          <Image
            className=" absolute right-0 top-20 w-auto z-50 h-[20vh]"
            alt=""
            width={500}
            height={500}
            src="/3.png"
          />
          <div className="flex flex-col w-full ">
            <div className="flex gap-2 text-bold items-center justify-center flex-row">
              <Image
                className="h-10 w-10"
                alt=""
                width={500}
                height={500}
                src="/4.png"
              />
              <h2 className="font-bold text-2xl ">
                TECNOLOGIAS INOVADORAS NO SETOR
              </h2>
            </div>
            <h3 className="font-semibold text-center text-md">
              (TEXTO SOBRE TECNOLOGIAS INOVADORAS NO SETOR DE PECUÁRIA, DE ATÉ 3
              LINHAS)
            </h3>
            <div className="mt-10 mb-10 flex flex-row w-full justify-evenly ">
              <div className="h-[400px] w-[390px] bg-white rounded-2xl"></div>
              <div className="h-[400px] w-[390px] bg-white rounded-2xl"></div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-row justify-between bg-black self-center items-center shadow mb-10 px-4 py-8 shadow-[#8F1220] rounded-lg  w-[80%]">
        <button>
          <Image
            className=" hover:scale-[1.1] transition-all duration-300 h-6 w-auto"
            alt=""
            width={500}
            height={500}
            src="/11.png"
          />
        </button>
        <button>
          <Image
            className=" hover:scale-[1.05] transition-all duration-300 h-10 w-auto"
            alt=""
            width={500}
            height={500}
            src="/12.png"
          />
        </button>
        <button>
          <Image
            className=" hover:scale-[1.05] transition-all duration-300 h-10 w-auto"
            alt=""
            width={500}
            height={500}
            src="/13.png"
          />
        </button>
        <button>
          <Image
            className=" hover:scale-[1.05] transition-all duration-300 h-10 w-auto"
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
  );
}
