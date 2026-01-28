import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aplicativo Foco Saúde Animal | Foco Consultoria",
  description:
    "Baixe o app Foco Saúde Animal na App Store e Google Play. Gestão de rebanho, sanidade, medicamentos e IA na palma da mão.",
};

export default function AplicativoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
