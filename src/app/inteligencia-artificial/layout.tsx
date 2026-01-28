import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inteligência Artificial | Foco Consultoria",
  description:
    "Conheça como a IA do Foco Saúde Animal transforma a pecuária: diagnóstico, formulários, gestão e integração. LGPD, WhatsApp e aplicativo.",
};

export default function InteligenciaArtificialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
