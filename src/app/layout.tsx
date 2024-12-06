import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { CookiesProvider } from "next-client-cookies/server";

export const metadata: Metadata = {
  title: "Foco Assessoria",
  icons: {
    icon: "/icon.png",
  },
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <CookiesProvider>
        <body className={`${poppins.className} `}>{children}</body>
      </CookiesProvider>
    </html>
  );
}
