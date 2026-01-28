import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de Mortalidade | Foco Consultoria",
  description:
    "Calculadora desenvolvida para facilitar a tomada de decisões sobre o estado de saúde do rebanho. Ferramenta Foco Saúde Animal.",
};

export default function MortalityCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
