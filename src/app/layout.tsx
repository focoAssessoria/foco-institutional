import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { CookiesProvider } from "next-client-cookies/server";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
const siteUrl = "https://focosaudeanimal.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Foco Consultoria | Saúde e Sanidade Bovina",
  description:
    "Especialistas em saúde e sanidade de bovinos. Soluções personalizadas para aumentar a produtividade, reduzir perdas e garantir o bem-estar animal. Calculadoras de mortalidade e medicamentos.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Foco Consultoria | Saúde e Sanidade Bovina",
    description:
      "Especialistas em saúde e sanidade de bovinos. Soluções personalizadas para aumentar a produtividade, reduzir perdas e garantir o bem-estar animal.",
    url: siteUrl,
    siteName: "Foco Consultoria",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foco Consultoria | Saúde e Sanidade Bovina",
    description:
      "Especialistas em saúde e sanidade de bovinos. Soluções para produtividade e bem-estar animal.",
  },
  robots: {
    index: true,
    follow: true,
  },
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Script
        type="text/javascript"
        id="clarity"
        strategy="lazyOnload"
      >
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "qdcx4ukh2o");`}
      </Script>
      <GoogleAnalytics gaId={"G-WTC5FXCT9Y"} />
      <CookiesProvider>
        <body className={`${poppins.className} `}>{children}</body>
      </CookiesProvider>
    </html>
  );
}
