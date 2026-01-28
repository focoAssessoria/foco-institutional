"use client";

import { Header } from "@/app/components/Header";
import {
  Bot,
  Cpu,
  FileCheck,
  MessageCircle,
  Shield,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-48px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true },
};

export default function InteligenciaArtificialPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white">
      <Header />

      {/* Hero com vídeo de fundo */}
      <section className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden rounded-b-[40px] bg-[#0A0A0A] lg:rounded-b-[80px]">
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
            Inteligência Artificial
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-lg text-zinc-300"
          >
            Tecnologia que revoluciona a pecuária: diagnóstico, gestão e
            integração ao seu alcance.
          </motion.p>
        </div>
      </section>

      {/* Como é feito */}
      <section className="relative z-10 px-4 py-16 lg:px-24 lg:py-24">
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DC2626]/50 bg-[#DC2626]/10 px-4 py-2 text-sm font-medium text-[#DC2626]">
            <Cpu className="h-4 w-4" />
            Como é feito
          </div>
          <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
            Como a IA do Foco é construída
          </h2>
          <p className="text-lg leading-relaxed text-zinc-300">
            Nossa inteligência artificial é desenvolvida com modelos de linguagem
            e dados da pecuária, treinados para entender o contexto da saúde
            animal, sanidade e gestão de rebanho. O fluxo combina análise de
            imagens, texto e formulários para apoiar decisões técnicas de forma
            rápida e segura.
          </p>
        </motion.div>
      </section>

      {/* LGPD */}
      <section className="relative z-10 border-t border-zinc-800/50 px-4 py-16 lg:px-24 lg:py-24">
        <motion.div
          {...fadeUp}
          className="mx-auto flex max-w-5xl flex-col items-center gap-12 lg:flex-row lg:gap-16"
        >
          <div className="flex flex-1 flex-col">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#DC2626]/50 bg-[#DC2626]/10 px-4 py-2 text-sm font-medium text-[#DC2626]">
              <Shield className="h-4 w-4" />
              LGPD
            </div>
            <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
              Privacidade e conformidade
            </h2>
            <p className="text-lg leading-relaxed text-zinc-300">
              Tratamos seus dados em conformidade com a Lei Geral de Proteção de
              Dados (LGPD). As informações utilizadas pela IA são processadas
              com finalidade definida, minimização de dados e segurança, sem
              uso para outros fins sem seu consentimento.
            </p>
          </div>
          <div className="flex h-48 w-full flex-1 items-center justify-center rounded-2xl border-2 border-dashed border-zinc-600 bg-zinc-900/50 lg:h-64">
            <span className="text-sm text-zinc-500">Conteúdo LGPD (opcional)</span>
          </div>
        </motion.div>
      </section>

      {/* IA no WhatsApp */}
      <section className="relative z-10 border-t border-zinc-800/50 px-4 py-16 lg:px-24 lg:py-24">
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-5xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DC2626]/50 bg-[#DC2626]/10 px-4 py-2 text-sm font-medium text-[#DC2626]">
            <MessageCircle className="h-4 w-4" />
            IA no WhatsApp
          </div>
          <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
            Assistente inteligente no WhatsApp
          </h2>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-zinc-300">
            A IA está disponível no WhatsApp para tirar dúvidas, orientar sobre
            sanidade, medicamentos e gestão. Você conversa em linguagem natural
            e recebe respostas contextualizadas para a pecuária, com suporte a
            áudio, imagens e documentos quando aplicável.
          </p>
          <div className="h-48 rounded-2xl border-2 border-dashed border-zinc-600 bg-zinc-900/50 flex items-center justify-center">
            <span className="text-sm text-zinc-500">Placeholder: IA WhatsApp</span>
          </div>
        </motion.div>
      </section>

      {/* IA no Aplicativo */}
      <section className="relative z-10 border-t border-zinc-800/50 px-4 py-16 lg:px-24 lg:py-24">
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-5xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DC2626]/50 bg-[#DC2626]/10 px-4 py-2 text-sm font-medium text-[#DC2626]">
            <Smartphone className="h-4 w-4" />
            IA no Aplicativo
          </div>
          <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
            IA integrada ao app Foco
          </h2>
          <p className="mb-8 max-w-3xl text-lg leading-relaxed text-zinc-300">
            No aplicativo Foco Saúde Animal, a IA auxilia no preenchimento de
            formulários, sugestão de condutas, registro de ocorrências e
            integração com outras ferramentas de gestão, tudo na palma da mão.
          </p>
          <div className="h-48 rounded-2xl border-2 border-dashed border-zinc-600 bg-zinc-900/50 flex items-center justify-center">
            <span className="text-sm text-zinc-500">Placeholder: IA no App</span>
          </div>
        </motion.div>
      </section>

      {/* Time interno */}
      <section className="relative z-10 border-t border-zinc-800/50 px-4 py-16 lg:px-24 lg:py-24">
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DC2626]/50 bg-[#DC2626]/10 px-4 py-2 text-sm font-medium text-[#DC2626]">
            <Users className="h-4 w-4" />
            Time interno
          </div>
          <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
            Quem faz a IA do Foco
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-300">
            Nossa equipe combina especialistas em pecuária, sanidade animal e
            tecnologia. O time interno cuida do desenho dos fluxos, da qualidade
            dos dados e da evolução contínua dos modelos, sempre alinhados ao
            dia a dia do produtor.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="h-24 w-24 rounded-full border-2 border-dashed border-zinc-600 bg-zinc-800/50 flex items-center justify-center text-xs text-zinc-500"
              >
                Membro {i}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Visão de futuro */}
      <section className="relative z-10 border-t border-zinc-800/50 px-4 py-16 lg:px-24 lg:py-24">
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mx-auto max-w-5xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DC2626]/50 bg-[#DC2626]/10 px-4 py-2 text-sm font-medium text-[#DC2626]">
            <Sparkles className="h-4 w-4" />
            Visão de futuro
          </div>
          <h2 className="mb-10 text-3xl font-bold text-white lg:text-4xl">
            IA para bovinos e pecuária: o que vem pela frente
          </h2>
          <p className="mb-12 max-w-3xl text-lg leading-relaxed text-zinc-300">
            Pensamos em uma IA cada vez mais especializada em bovinos: apoio a
            diagnóstico por imagem, preenchimento inteligente de formulários,
            gestão integrada, alertas de sanidade e integração com sistemas de
            propriedade e laboratórios.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: FileCheck, title: "Diagnóstico", desc: "Apoio a laudos e triagem" },
              { icon: Bot, title: "Formulários", desc: "Preenchimento assistido" },
              { icon: Cpu, title: "Gestão", desc: "Indicadores e decisões" },
              { icon: MessageCircle, title: "Integração", desc: "Sistemas e APIs" },
              { icon: Shield, title: "Sanidade", desc: "Alertas e prevenção" },
              { icon: Sparkles, title: "Evolução", desc: "Modelos em constante melhoria" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 ease-out hover:border-[#DC2626]/50 hover:bg-[#DC2626]/5"
              >
                <item.icon className="mb-3 h-8 w-8 text-[#DC2626] transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mb-2 font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative z-10 border-t border-zinc-800/50 px-4 py-16 lg:px-24 lg:py-20">
        <motion.div
          {...fadeUp}
          className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-[#DC2626]/30 bg-[#DC2626]/5 p-8 text-center lg:p-12"
        >
          <h2 className="text-2xl font-bold text-white lg:text-3xl">
            Quer saber mais sobre nossa IA?
          </h2>
          <p className="text-zinc-300">
            Fale com a gente pelo WhatsApp ou acesse o aplicativo.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=5534999050904&text=Olá,%20quero%20saber%20mais%20sobre%20a%20IA%20do%20Foco."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              WhatsApp
            </a>
            <Link
              href="/aplicativo"
              className="rounded-xl border-2 border-[#DC2626] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#DC2626] hover:scale-105"
            >
              Conhecer o App
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer mínimo */}
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
          <Link
            href="/"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Voltar ao início
          </Link>
        </div>
      </footer>
    </div>
  );
}
