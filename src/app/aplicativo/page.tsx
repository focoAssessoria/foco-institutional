"use client";

import { Header } from "@/app/components/Header";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Download,
  Smartphone,
  Sparkles,
  Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-48px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const APP_STORE_URL =
  "https://apps.apple.com/us/app/foco-sa%C3%BAde-animal/id6742755070";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.foco.saudeanimal";

const features = [
  "Gestão de rebanho e sanidade",
  "Calculadoras de mortalidade e medicamentos",
  "IA para suporte e formulários",
  "Registro de ocorrências e histórico",
  "Integração com equipe e veterinários",
  "Alertas e notificações",
];

export default function AplicativoPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white">
      <Header />

      {/* Hero com vídeo de fundo */}
      <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden rounded-b-[40px] bg-[#0A0A0A] lg:min-h-[85vh] lg:rounded-b-[80px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 z-0 h-full w-full object-cover"
          aria-hidden
        >
          <source src="/focosite.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-[1] bg-[#0A0A0A]/60" aria-hidden />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#8F1220]/30 to-[#0A0A0A]/90" aria-hidden />
        <div className="relative z-10 flex flex-col items-center gap-6 px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/fullLogo.png"
              alt="Logo Foco Consultoria"
              width={280}
              height={120}
              className="h-16 w-auto object-contain lg:h-20"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl font-bold uppercase leading-tight text-white lg:text-5xl"
          >
            App Foco Saúde Animal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-lg text-zinc-300"
          >
            Gestão, sanidade e inteligência artificial na palma da mão.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-all duration-300 ease-out hover:scale-105 hover:border-[#DC2626]/50 hover:bg-[#DC2626]/10"
            >
              <Image
                src="/appleP.png"
                alt="App Store"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
              Baixar na App Store
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition-all duration-300 ease-out hover:scale-105 hover:border-[#DC2626]/50 hover:bg-[#DC2626]/10"
            >
              <Image
                src="/googleP.png"
                alt="Google Play"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
              Baixar no Google Play
            </a>
          </motion.div>
        </div>
      </section>

      {/* Sobre o App + Mockup */}
      <section className="relative z-10 px-4 py-16 lg:px-24 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            {...fadeUp}
            className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center"
          >
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DC2626]/50 bg-[#DC2626]/10 px-4 py-2 text-sm font-medium text-[#DC2626]">
                <Smartphone className="h-4 w-4" />
                Sobre o App
              </div>
              <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
                Tudo que você precisa para a saúde do rebanho
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-zinc-300">
                O aplicativo Foco Saúde Animal reúne gestão, calculadoras de
                mortalidade e medicamentos, suporte com IA e integração com sua
                equipe. Use no campo ou no escritório, com dados seguros e
                atualizados.
              </p>
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="flex items-center gap-3 text-zinc-300"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#DC2626]" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
            {/* Mockup celular */}
            <motion.div
              {...fadeUp}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-2xl">
                <Image
                  src="/mobile/mock.png"
                  alt="Mockup do aplicativo Foco Saúde Animal"
                  width={1000}
                  height={1400}
                  className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-300 ease-out hover:scale-[1.02]"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Placeholders: imagens e vídeos */}
      <section className="relative z-10 border-t border-zinc-800/50 px-4 py-16 lg:px-24 lg:py-24">
        <motion.div {...fadeUp} className="mx-auto max-w-6xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DC2626]/50 bg-[#DC2626]/10 px-4 py-2 text-sm font-medium text-[#DC2626]">
            <Video className="h-4 w-4" />
            Galeria do App
          </div>
          <h2 className="mb-10 text-3xl font-bold text-white lg:text-4xl">
            Imagens e vídeos do aplicativo
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Vídeo 1 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 * 0.06, duration: 0.4 }}
              className="group aspect-video overflow-hidden rounded-2xl border-2 border-zinc-700 bg-zinc-900/50 transition-all duration-300 ease-out hover:border-[#DC2626]/50"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              >
                <source src="/mobile/video1.mp4" type="video/mp4" />
              </video>
            </motion.div>
            {/* Vídeo 2 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 * 0.06, duration: 0.4 }}
              className="group aspect-video overflow-hidden rounded-2xl border-2 border-zinc-700 bg-zinc-900/50 transition-all duration-300 ease-out hover:border-[#DC2626]/50"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              >
                <source src="/mobile/video2.mp4" type="video/mp4" />
              </video>
            </motion.div>
            {/* Imagens */}
            {["2", "3", "4", "5"].map((num, i) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 2) * 0.06, duration: 0.4 }}
                className="group aspect-video overflow-hidden rounded-2xl border-2 border-zinc-700 bg-zinc-900/50 transition-all duration-300 ease-out hover:border-[#DC2626]/50"
              >
                <Image
                  src={`/mobile/${num}.png`}
                  alt={`Screenshot do aplicativo ${num}`}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Funcionalidades em cards */}
      <section className="relative z-10 border-t border-zinc-800/50 px-4 py-16 lg:px-24 lg:py-24">
        <motion.div {...fadeUp} className="mx-auto max-w-6xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DC2626]/50 bg-[#DC2626]/10 px-4 py-2 text-sm font-medium text-[#DC2626]">
            <Sparkles className="h-4 w-4" />
            Funcionalidades
          </div>
          <h2 className="mb-12 text-3xl font-bold text-white lg:text-4xl">
            O que o app oferece
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Calculadoras",
              "Gestão de rebanho",
              "IA integrada",
              "Relatórios",
            ].map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-center transition-all duration-300 ease-out hover:border-[#DC2626]/40 hover:bg-[#DC2626]/5"
              >
                <p className="font-semibold text-white">{label}</p>
                <p className="mt-1 text-xs text-zinc-500">Detalhes em breve</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Download */}
      <section className="relative z-10 border-t border-zinc-800/50 px-4 py-16 lg:px-24 lg:py-24">
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-4xl rounded-3xl border-2 border-[#DC2626]/30 bg-gradient-to-b from-[#DC2626]/10 to-transparent p-8 lg:p-12"
        >
          <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-white lg:text-3xl">
                Baixe o app agora
              </h2>
              <p className="text-zinc-300">
                Disponível na App Store e Google Play.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-black px-6 py-3 font-semibold text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-zinc-800"
              >
                <Download className="h-5 w-5" />
                App Store
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-[#DC2626] px-6 py-3 font-semibold text-white transition-all duration-300 ease-out hover:scale-105 hover:bg-[#B91C1C]"
              >
                <Download className="h-5 w-5" />
                Google Play
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 border-t border-zinc-800/50 pt-8">
            <Image
              src="/appleP.png"
              alt="App Store"
              width={140}
              height={48}
              className="h-12 w-auto opacity-90 transition-opacity hover:opacity-100"
            />
            <Image
              src="/googleP.png"
              alt="Google Play"
              width={140}
              height={48}
              className="h-12 w-auto opacity-90 transition-opacity hover:opacity-100"
            />
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 px-4 py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="transition-opacity hover:opacity-90">
            <Image
              src="/4.png"
              alt="Logo Foco"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/inteligencia-artificial"
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              IA
            </Link>
            <Link
              href="/"
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              Início
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
