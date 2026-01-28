import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de Medicamentos | Foco Consultoria",
  description:
    "Ferramenta para auxiliar na quantidade de medicamentos com base no tamanho do rebanho e do motivo do tratamento. Foco Saúde Animal.",
};

export default function MedicationCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
