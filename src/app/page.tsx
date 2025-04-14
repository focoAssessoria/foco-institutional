"use client";
import { cn } from "@/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import "react-accessible-accordion/dist/fancy-example.css";
import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Header } from "./components/Header";
import { MedicationCalculator } from "./components/MedicationCalculator";
import { HistoryVideosModal } from "./components/historyVideosModal";

// interface VideoEvent extends Event {
//   target: HTMLVideoElement;
// }
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  const router = useRouter();

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openMedicationCalculator, setOpenMedicationCalculator] =
    useState(false);
  const services = [
    {
      image: "/newImg/s1.jpg",
      title: "Gestão Sanitária Avançada",
      description:
        "Monitoramento e controle de doenças para promover a saúde do rebanho, com foco na prevenção e redução de custos operacionais.",
    },
    {
      image: "/newImg/nutrição.jpg",
      title: "Otimização Nutricional Personalizada",
      description:
        "Elaboração de planos nutricionais estratégicos para aumentar a eficiência alimentar, melhorar o desempenho e fortalecer a produtividade.",
    },
    {
      image: "/newImg/treinamento.jpeg",
      title: "Capacitação em Manejo e Sanidade",
      description:
        "Treinamento especializado para equipes, abordando boas práticas de manejo, prevenção de doenças e técnicas modernas de cuidado animal.",
    },
    ,
  ];
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

  const sectionRef = useRef(null);
  const { scrollY } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Controle de escala, posição vertical e opacidade usando mola
  const scale = useTransform(scrollY, [0, 400], [4, 1]);
  const yPosition = useTransform(scrollY, [0, 100], [0, 100]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const reverseOpacity = useTransform(scrollY, [0, 200], [0, 1]);
  const scrollToRef = useRef<HTMLDivElement | null>(null);
  const scrollToSessao2 = () => {
    // Função que faz o scroll até a sessão 2
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slides = [
    {
      id: 1,
      image: "/newImg/h1.png",
      videoUrl: "https://www.youtube.com/embed/O5N109bOH0E",
      title:
        "Nasceu do desejo de fazer a diferença no cuidado com o rebanho e no apoio aos produtores rurais, sempre com dedicação e profissionalismo.",
    },
    {
      id: 2,
      image: "/newImg/h2.png",
      videoUrl: "https://www.youtube.com/embed/HV67gHrGFF0",
      title:
        "Ao longo dos anos, fortalecemos parcerias, aprendemos com cada desafio e construímos uma base sólida de experiência e resultados.",
    },
    {
      id: 3,
      image: "/newImg/h3.png",
      title:
        "Seguimos inovando e contribuindo para o futuro da pecuária , sempre ao lado de quem confia na nossa expertise.",
    },
  ];
  const [isOpenVideoModal, setIsOpenVideoModal] = useState(false);
  function handleCloseModal() {
    setIsOpenVideoModal(false);
  }
  const [videoUrl, setVideoUrl] = useState("");
  function handleClick(videoUrl: string) {
    setIsOpenVideoModal(true);
    setVideoUrl(videoUrl);
  }
  const [isVideoStarted, setIsVideoStarted] = useState(false);

  const handleVideoStart = (
    event: React.SyntheticEvent<HTMLVideoElement, Event>,
  ) => {
    const videoElement = event.target as HTMLVideoElement;

    // Verifica se o vídeo está carregado e começou a tocar
    if ((videoElement as HTMLVideoElement).currentTime > 0) {
      setIsVideoStarted(true);
    }
  };
  const [showImage, setShowImage] = useState(true);
  const [zDelay, setZDelay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowImage(false);
    }, 1500);
    setTimeout(() => {
      setZDelay(true);
    }, 1750);
  }, [isVideoStarted]);

  return (
    <>
      <div
        className={cn(
          `fixed z-50 flex h-screen w-full flex-col items-center justify-center gap-4 bg-black transition duration-500 ease-in-out`,
          !showImage && "opacity-5",
          zDelay && "-z-50",
        )}
      >
        <Image
          className="h-max w-60 object-contain"
          alt=""
          width={500}
          height={500}
          src="/fullLogoWhite.png"
        />
        <p>Carregando...</p>
      </div>
      <div className="flex h-full w-full flex-col items-center bg-[#0A0A0A]">
        <main className="relative z-40 flex w-full flex-col">
          <Header mobile />
          {/* HERO MOBILE */}
          <section
            ref={sectionRef}
            className="absolute top-0 z-40 flex h-[70vh] w-full flex-col rounded-b-[40px] bg-[#0A0A0A] sm:h-[85vh] md:h-[90vh] lg:hidden"
          >
            <div className="absolute top-0 z-50 h-full w-full rounded-b-[40px] bg-[url(/1.png)] bg-cover bg-no-repeat opacity-30"></div>
            <div className="absolute top-0 z-40 h-full w-full rounded-b-[40px] bg-white/70"></div>

            <Image
              className="absolute bottom-20 left-0 z-50 h-[50vh] w-auto"
              alt=""
              width={500}
              height={500}
              src="/2.png"
            />
            <div className="sticky top-0 z-[80] flex h-screen w-full justify-center">
              <div className="relative mt-12 flex w-full flex-col items-center gap-2 rounded-lg p-2">
                <div>
                  <Image
                    className="h-20 w-max object-contain"
                    alt=""
                    width={500}
                    height={500}
                    src="/fullLogo.png"
                  />
                </div>
                <div className="flex flex-col self-center">
                  <h1 className="text-center text-2xl font-bold uppercase text-black">
                    MAXIMIZE a Saúde do Seu Rebanho e Seus Resultados
                  </h1>
                  <h2 className="text-center text-sm text-black">
                    Especialistas em saúde e sanidade de bovinos, oferecemos
                    soluções personalizadas para aumentar a produtividade,
                    reduzir perdas e garantir o bem-estar animal.
                  </h2>
                </div>
                <div className="z-[60] flex w-full items-center justify-center gap-4">
                  <button
                    onClick={() => router.push("/mortality-calculator")}
                    className="font-regular flex h-max w-full items-center justify-center rounded-md border-[#8F1220] bg-white text-xs transition-all duration-300 hover:scale-[1.05]"
                  >
                    <span className="flex items-center justify-center bg-gradient-to-r from-[#8F1220] to-black bg-clip-text p-2 text-[#8F1220]">
                      Calculadora de Mortalidade
                    </span>
                  </button>
                  <button
                    onClick={() => setOpenMedicationCalculator(true)}
                    className="font-regular flex h-max w-full items-center justify-center rounded-md border-[#8F1220] bg-white text-xs transition-all duration-300 hover:scale-[1.05]"
                  >
                    <span className="flex items-center justify-center bg-gradient-to-r from-[#8F1220] to-black bg-clip-text p-2 text-[#8F1220]">
                      Calculadora de Medicamentos
                    </span>
                  </button>
                </div>

                <div className="absolute -bottom-28 z-[80] flex w-11/12 flex-col overflow-hidden rounded-3xl">
                  <div className="z-[90] flex flex-col items-center justify-center">
                    <Image
                      className="h-max w-1/2 object-contain"
                      alt=""
                      width={500}
                      height={500}
                      src="/fullLogoWhite.png"
                    />
                    <h1 className="text-center font-bold uppercase text-white">
                      Maximize a Saúde do Seu Rebanho e Seus Resultados
                    </h1>
                    <div className="mx-auto flex w-2/3 items-center justify-center gap-4">
                      <button
                        onClick={() => scrollToSessao2()}
                        className="mt-8 rounded-md transition-all duration-300"
                      >
                        <Image
                          alt=""
                          width={500}
                          height={500}
                          src={"/appleP.png"}
                          className="h-10 w-auto object-contain"
                        />
                      </button>
                      <button
                        onClick={() => scrollToSessao2()}
                        className="mt-8 rounded-md transition-all duration-300"
                      >
                        <Image
                          alt=""
                          width={500}
                          height={500}
                          src={"/googleP.png"}
                          className="h-10 w-auto rounded-md object-contain"
                        />
                      </button>
                    </div>
                  </div>
                  <video
                    className="absolute left-0 top-0 z-[50] h-full w-full object-cover"
                    src={"/video2.mp4"}
                    autoPlay
                    playsInline
                    preload="auto"
                    muted
                    loop
                  />
                </div>
              </div>
            </div>
          </section>

          {/* HERO DESKTOP */}
          <motion.section
            ref={sectionRef}
            className="relative z-40 hidden w-full flex-col rounded-b-[40px] bg-[#0A0A0A] lg:flex lg:min-h-[180vh] lg:rounded-b-[80px]"
          >
            <Header />
            <div className="absolute top-0 z-50 h-full w-full rounded-b-[40px] bg-[url(/1.png)] bg-cover bg-no-repeat opacity-30 lg:rounded-b-[80px]"></div>
            <div className="absolute top-0 z-40 h-full w-full rounded-b-[40px] bg-white/70 lg:rounded-b-[80px]"></div>

            <Image
              className="absolute bottom-20 left-0 z-50 h-[50vh] w-auto"
              alt=""
              width={500}
              height={500}
              src="/2.png"
            />
            <div className="sticky top-0 z-[80] flex h-screen w-full justify-center">
              <motion.div
                className="relative flex w-full flex-col items-center rounded-lg px-4 py-16 lg:px-0"
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2,
                }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                >
                  <Image
                    className="mb-4 mt-8 h-28 w-auto"
                    alt=""
                    width={500}
                    height={500}
                    src="/fullLogo.png"
                  />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="text-3xl font-bold uppercase text-black lg:text-4xl"
                >
                  MAXIMIZE a Saúde do Seu Rebanho e Seus Resultados
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                  className="mb-4 mt-4 text-black lg:text-center lg:text-2xl"
                >
                  Especialistas em saúde e sanidade de bovinos, oferecemos
                  soluções personalizadas para
                  <br /> aumentar a produtividade, reduzir perdas e garantir o
                  bem-estar animal.
                </motion.h2>

                <motion.div
                  style={{ scale, y: yPosition }}
                  className="-bottom-20 z-[80] hidden h-[440px] w-[80%] flex-col overflow-hidden rounded-3xl lg:absolute lg:flex lg:flex-row"
                >
                  <motion.div
                    style={{ opacity }}
                    className="absolute left-0 right-0 top-10 z-[90] flex scale-[0.4] flex-col items-center justify-center"
                  >
                    <Image
                      className="h-max w-1/2 object-contain lg:mb-4 lg:mt-4 lg:h-max lg:w-52"
                      alt=""
                      width={500}
                      height={500}
                      src="/fullLogoWhite.png"
                    />
                    <h1 className="w-40 font-bold uppercase text-white lg:w-auto lg:text-2xl">
                      Excelência em Saúde e Sanidade Bovina
                    </h1>
                    <div className="flex w-2/3 flex-row gap-4 lg:w-auto">
                      <button
                        onClick={() => scrollToSessao2()}
                        className="mt-8 scale-90 rounded-md transition-all duration-300 hover:scale-100"
                      >
                        <Image
                          alt=""
                          width={500}
                          height={500}
                          src={"/appleP.png"}
                          className="h-10 w-auto object-contain"
                        />
                      </button>
                      <button
                        onClick={() => scrollToSessao2()}
                        className="mt-8 scale-90 rounded-md transition-all duration-300 hover:scale-100"
                      >
                        <Image
                          alt=""
                          width={500}
                          height={500}
                          src={"/googleP.png"}
                          className="h-10 w-auto rounded-md object-contain"
                        />
                      </button>
                    </div>
                  </motion.div>
                  <video
                    className="absolute left-0 top-0 z-[50] h-full w-full object-cover"
                    src={"/video2.mp4"}
                    autoPlay
                    playsInline
                    preload="auto"
                    muted
                    loop
                    onTimeUpdate={handleVideoStart} // Garante que a variável muda ao reproduzir
                  />
                  <motion.div
                    id="calculator"
                    style={{ opacity: reverseOpacity }}
                    className="z-[60] flex h-full w-full flex-col justify-evenly p-4 text-right lg:flex-row lg:items-end lg:justify-between"
                  >
                    <div className="flex w-full flex-col items-center">
                      <div className="flex w-[80%] items-end">
                        <h3 className="text-start">
                          Calculadora desenvolvida para facilitar a tomada de
                          decisões sobre o estado de saúde do rebanho.
                        </h3>
                      </div>
                      <button
                        onClick={() => router.push("/mortality-calculator")}
                        className="font-regular mt-4 flex w-[80%] items-center justify-center rounded-md border-[#8F1220] bg-white transition-all duration-300 hover:scale-[1.05]"
                      >
                        <span className="flex items-center justify-center bg-gradient-to-r from-[#8F1220] to-black bg-clip-text p-2 text-sm text-[#8F1220]">
                          Calculadora de Mortalidade
                        </span>
                      </button>
                    </div>
                    <div className="flex w-full flex-col items-center">
                      <div className="flex w-[80%] items-start">
                        <h3 className="text-start">
                          Ferramenta para auxiliar na quantidade de medicamentos
                          com base no tamanho do rebanho e do motivo do
                          tratamento.
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
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          <div className="mt-[72vh] flex flex-col lg:mt-0">
            <div ref={scrollToRef} className="relative -mt-20 flex flex-col">
              <div className="absolute right-0 z-30 h-full w-[100px] bg-gradient-to-r from-[#0A0A0A] to-[#8F1220]/80"></div>
              <section className="z-[40] mt-60 flex items-center justify-between px-0 py-8 text-xl font-bold text-[#585858] lg:py-16">
                <Marquee
                  gradient={false}
                  pauseOnHover
                  speed={100}
                  className="bg-white"
                >
                  <div className="flex space-x-24 bg-white px-24 py-8 text-xl font-bold text-[#585858]">
                    <button
                      onClick={() =>
                        window.open(
                          "https://agropecuariagrandelago.com.br/",
                          "_blank",
                        )
                      }
                      className="group relative flex items-center justify-center rounded-md bg-white p-2"
                    >
                      <Image
                        alt=""
                        width={1000}
                        height={500}
                        className="h-[50px] w-max object-contain group-hover:opacity-100"
                        src={"/logos/1.png"}
                      />
                    </button>
                    <button
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/campanellioficial/",
                          "_blank",
                        )
                      }
                      className="group relative flex items-center justify-center rounded-md bg-white p-2"
                    >
                      <Image
                        alt=""
                        width={1000}
                        height={500}
                        className="h-[50px] w-max object-contain group-hover:opacity-100"
                        src={"/logos/2.png"}
                      />
                    </button>
                    <button
                      onClick={() =>
                        window.open("http://csapecuaria.com.br/", "_blank")
                      }
                      className="group relative flex items-center justify-center rounded-md bg-white p-2"
                    >
                      <Image
                        alt=""
                        width={1000}
                        height={500}
                        className="h-[50px] w-max object-contain group-hover:opacity-100"
                        src={"/logos/3.png"}
                      />
                    </button>
                    <button
                      onClick={() =>
                        window.open(
                          "https://frisa.com.br/exportacao/",
                          "_blank",
                        )
                      }
                      className="group relative flex items-center justify-center rounded-md bg-white p-2"
                    >
                      <Image
                        alt=""
                        width={1000}
                        height={500}
                        className="h-[50px] w-max object-contain group-hover:opacity-100"
                        src={"/logos/4.png"}
                      />
                    </button>
                    <button
                      onClick={() =>
                        window.open("https://jbjagropecuaria.com.br/", "_blank")
                      }
                      className="group relative flex items-center justify-center rounded-md bg-white p-2"
                    >
                      <Image
                        alt=""
                        width={1000}
                        height={500}
                        className="h-[50px] w-max object-contain group-hover:opacity-100"
                        src={"/logos/5.png"}
                      />
                    </button>
                    <button
                      onClick={() =>
                        window.open(
                          "https://www.friboi.com.br/comercializacao/boitel-jbs/",
                          "_blank",
                        )
                      }
                      className="group relative flex items-center justify-center rounded-md bg-white p-2"
                    >
                      <Image
                        alt=""
                        width={1000}
                        height={500}
                        className="h-[50px] w-max object-contain group-hover:opacity-100"
                        src={"/logos/6.png"}
                      />
                    </button>
                    <button
                      onClick={() =>
                        window.open("https://mfgagropecuaria.com.br/", "_blank")
                      }
                      className="group relative flex items-center justify-center rounded-md bg-white p-2"
                    >
                      <Image
                        alt=""
                        width={1000}
                        height={500}
                        className="h-[50px] w-max object-contain group-hover:opacity-100"
                        src={"/logos/7.png"}
                      />
                    </button>
                    <button
                      onClick={() =>
                        window.open(
                          "https://www.queirozdequeiroz.com.br/pecuaria/",
                          "_blank",
                        )
                      }
                      className="group relative flex items-center justify-center rounded-md bg-white p-2"
                    >
                      <Image
                        alt=""
                        width={1000}
                        height={500}
                        className="h-[50px] w-max object-contain group-hover:opacity-100"
                        src={"/logos/8.png"}
                      />
                    </button>
                    <button
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/realbeef.confinamento/",
                          "_blank",
                        )
                      }
                      className="group relative flex items-center justify-center rounded-md bg-white p-2"
                    >
                      <Image
                        alt=""
                        width={1000}
                        height={500}
                        className="h-[50px] w-max object-contain group-hover:opacity-100"
                        src={"/logos/9.png"}
                      />
                    </button>
                    <button
                      onClick={() =>
                        window.open(
                          "https://sites.google.com/ypoti.com/ypoti/bienvenidos/",
                          "_blank",
                        )
                      }
                      className="group relative flex items-center justify-center rounded-md bg-white p-2"
                    >
                      <Image
                        alt=""
                        width={1000}
                        height={500}
                        className="h-[50px] w-max object-contain group-hover:opacity-100"
                        src={"/logos/10.png"}
                      />
                    </button>
                  </div>
                </Marquee>
              </section>

              <section
                id="service"
                className="relative flex w-full flex-col items-center justify-center bg-[#0A0A0A] text-white lg:h-screen"
              >
                <Image
                  className="absolute right-0 z-50 h-[50vh] w-auto"
                  alt=""
                  width={500}
                  height={500}
                  src="/logoCortadaCinza.png"
                />
                <div className="z-[60] flex h-full w-full flex-col px-4 py-8 text-white lg:px-24 lg:py-16">
                  <div className="flex flex-row gap-2">
                    <motion.div
                      className="flex flex-row items-center gap-2 font-bold"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <Image
                        className="h-14 w-auto"
                        alt=""
                        width={500}
                        height={500}
                        src="/4.png"
                      />
                    </motion.div>
                    <motion.div
                      className="flex flex-row items-center gap-2 font-bold"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-2xl font-bold">SERVIÇOS</h2>
                    </motion.div>
                  </div>
                  <motion.h3
                    className="mb-4 text-start text-xl font-semibold"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    Soluções Sob Medida para a Gestão do Seu Rebanho
                  </motion.h3>

                  <motion.div
                    className="mt-10 flex flex-col justify-between gap-8"
                    variants={parentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        className={`mb-2 mt-4 w-full transition-all duration-300 lg:w-[80%] ${
                          openIndex !== index ? "border-b border-b-white" : ""
                        }`}
                        variants={childVariants}
                      >
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="flex w-full justify-between px-4 py-2 text-left text-sm font-medium text-white"
                        >
                          <div
                            className={`flex flex-row gap-8 transition-all duration-300 ${
                              openIndex === index
                                ? "text-[#DC2626]"
                                : "text-white"
                            }`}
                          >
                            <span>0{index + 1}</span>
                            <span className="text-xl font-bold">
                              {service?.title}
                            </span>
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
                          ref={(el) => {
                            contentRefs.current[index] = el;
                          }}
                          className="flex max-h-0 flex-row items-center gap-8 overflow-hidden px-4 text-sm text-gray-200 transition-all duration-500 ease-in-out"
                        >
                          <a
                            href="https://api.whatsapp.com/send?phone=5534999050904&text=Ol%C3%A1,%20estou%20no%20site%20do%20FOCO%20e%20quero%20falar%20com%20algu%C3%A9m.%20%F0%9F%A4%A0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-48 w-[80%] flex-row items-center gap-8 transition-all duration-300"
                          >
                            <div
                              className={`flex h-48 w-[80%] flex-row items-center gap-8 transition-all duration-300 ${
                                openIndex === index
                                  ? "opacity-100"
                                  : "opacity-0"
                              }`}
                            >
                              <div className="hidden h-20 w-20 min-w-20 overflow-hidden rounded-lg md:h-32 md:w-40 lg:block">
                                <Image
                                  className="h-20 w-20 rounded-lg object-cover md:h-32 md:w-40"
                                  width={400}
                                  height={400}
                                  alt=""
                                  src={service?.image || "/newImg/boi.png"}
                                />
                              </div>
                              <span>{service?.description}</span>
                            </div>
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </section>
            </div>
            <section
              id="history"
              className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-b-3xl"
            >
              <div className="absolute z-20 h-full w-full bg-[url(/1.png)] bg-cover bg-no-repeat opacity-30"></div>
              <div className="absolute z-10 h-full w-full bg-white/70"></div>
              <div className="z-[60] flex h-full w-full flex-col px-4 py-8 text-[#DC2626] lg:px-24 lg:py-16">
                <div className="flex flex-row gap-2">
                  <motion.div
                    className="flex flex-row items-center gap-2 font-bold"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      className="h-14 w-auto"
                      alt=""
                      width={500}
                      height={500}
                      src="/4.png"
                    />
                  </motion.div>
                  <motion.div
                    className="flex flex-row items-center gap-2 font-bold"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl font-bold">NOSSA HISTÓRIA</h2>
                  </motion.div>
                </div>
                <motion.h3
                  className="text-md mb-4 text-start font-semibold"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Uma história guiada por compromisso e crescimento.
                </motion.h3>

                <h3 className="text-md text-start font-semibold"></h3>
                <div className="z-[60] mb-20 mt-10 flex w-full flex-row justify-between gap-8">
                  <Swiper
                    slidesPerView={1.2}
                    spaceBetween={20}
                    breakpoints={{
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                    }}
                  >
                    {slides.map((item) => (
                      <SwiperSlide key={item.id}>
                        <motion.button
                          onClick={() =>
                            item.videoUrl
                              ? handleClick(item.videoUrl)
                              : window.open(
                                  "https://www.instagram.com/foco.saudeanimal/",
                                  "_blank",
                                )
                          }
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="group relative flex h-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl rounded-md bg-black/20 bg-white p-2 transition-all duration-300 hover:scale-[2] hover:bg-black/40 lg:h-64 lg:w-64 xl:h-[350px] xl:w-[350px]"
                        >
                          <Image
                            alt=""
                            width={400}
                            height={400}
                            src={item.image}
                            className="absolute top-0 z-10 h-full w-full object-cover"
                          />
                          <div className="z-20 flex h-full w-full flex-col gap-4 bg-black/40 p-4 pb-8 pt-12 transition-all duration-300 hover:bg-black/0 md:pt-16 lg:pt-4">
                            <div className="h-1/3 w-full md:h-1/2"></div>
                            <div className="flex h-2/3 w-full items-center md:h-1/2">
                              <span className="text-start font-semibold text-white transition-all duration-300 group-hover:text-white">
                                {item.title}
                              </span>
                            </div>

                            <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border p-2 transition-all duration-300 group-hover:bg-[#DC2626]">
                              <span className="-rotate-45 transform transition-transform duration-300 group-hover:-rotate-90">
                                <ArrowRight className="text-[#DC2626] transition-all duration-300 group-hover:text-white" />
                              </span>
                            </div>
                          </div>
                        </motion.button>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </section>

            <section
              id="ai"
              className="relative z-40 flex w-full flex-col items-center justify-center rounded-t-3xl bg-[#0A0A0A] px-4 py-8 text-white lg:h-screen lg:px-24 lg:py-16 lg:pb-20"
            >
              <Image
                className="absolute right-0 top-20 z-50 h-[50vh] w-auto"
                alt=""
                width={500}
                height={500}
                src="/3.png"
              />
              <div className="z-[60] flex w-full flex-col">
                <motion.div
                  className="flex flex-col gap-2 font-bold"
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="flex flex-row gap-2">
                    <motion.div
                      variants={imageVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <Image
                        className="h-10 w-10"
                        alt=""
                        width={500}
                        height={500}
                        src="/4.png"
                      />
                    </motion.div>
                    <h2 className="text-2xl font-bold">
                      Tecnologia que Revoluciona a Pecuária
                    </h2>
                  </div>
                  <h3 className="font-semibold">
                    Inovação em saúde e sanidade bovina para uma gestão mais
                    eficiente e produtiva.
                  </h3>
                </motion.div>

                <motion.div
                  className="mb-10 mt-10 flex w-full flex-col items-center justify-evenly gap-8 md:flex-row"
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="h-64 w-64 overflow-hidden rounded-2xl lg:h-[400px] lg:w-[390px]">
                    <Image
                      className="h-full w-full"
                      alt=""
                      width={400}
                      height={400}
                      src={"/newImg/Vacine.png"}
                    />
                  </div>
                  <div className="h-64 w-64 overflow-hidden rounded-2xl lg:h-[400px] lg:w-[390px]">
                    <Image
                      className="h-full w-full"
                      alt=""
                      width={400}
                      height={400}
                      src={"/newImg/boi.png"}
                    />
                  </div>
                </motion.div>
              </div>
            </section>
          </div>
        </main>
        <footer className="z-40 my-10 flex w-[80%] flex-col items-center justify-between gap-4 self-center rounded-lg border border-[#8F1220] bg-black px-4 py-2 shadow shadow-[#8F1220] md:flex-row">
          <button>
            <Image
              className="h-16 w-max object-contain transition-all duration-300 hover:scale-[1.05]"
              alt=""
              width={500}
              height={500}
              src="/12.png"
            />
          </button>
          <div className="flex h-full flex-col justify-center gap-1">
            <button
              onClick={() =>
                (window.location.href = "https://admin.focosaudeanimal.com.br")
              }
              className="rounded-md border border-[#8F1220] px-2 py-0.5 text-[10px] text-white transition-all duration-300 hover:bg-[#8F1220] hover:text-white"
            >
              ESPAÇO ADM
            </button>
            <button
              onClick={() =>
                (window.location.href = "https://client.focosaudeanimal.com.br")
              }
              className="rounded-md border border-[#8F1220] bg-[#8F1220] px-2 py-0.5 text-[10px] text-white transition-all duration-300 hover:bg-[#8F1220] hover:text-white"
            >
              ESPAÇO DO CLIENTE
            </button>
          </div>
          <button>
            <Image
              className="h-16 w-max object-contain transition-all duration-300 hover:scale-[1.05]"
              alt=""
              width={500}
              height={500}
              src="/14.png"
            />
          </button>
          <div className="flex flex-col md:items-end">
            <span className="text-xs lg:text-lg">
              Tecnologia Desenvolvida por
            </span>
            <span className="text-xs font-semibold">
              Executivo&apos;s Negócios Digitais LTDA
            </span>
            <span className="text-[10px]">
              <Link
                href="https://focosaudeanimal.com.br/terms"
                className="cursor-pointer underline transition duration-200 hover:text-[#8F1220]"
              >
                Termos de uso
              </Link>
              {""} e {""}
              <Link
                href="https://focosaudeanimal.com.br/policy"
                className="cursor-pointer underline transition duration-200 hover:text-[#8F1220]"
              >
                Política de privacidade
              </Link>
            </span>
          </div>
        </footer>
      </div>
      <HistoryVideosModal
        isOpen={isOpenVideoModal}
        onClose={() => handleCloseModal()}
        videoUrl={videoUrl}
      />
      <MedicationCalculator
        openMedicationCalculator={openMedicationCalculator}
        setOpenMedicationCalculator={setOpenMedicationCalculator}
      />
    </>
  );
}
