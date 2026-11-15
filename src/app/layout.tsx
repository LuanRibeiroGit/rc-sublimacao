import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MotionProvider from "@/components/MotionProvider";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const body = Inter({ variable: "--font-body", subsets: ["latin"] });
const heading = Sora({ variable: "--font-heading", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "RC Sublimação | Personalizados em Curitiba",
    template: "%s | RC Sublimação",
  },
  description:
    "Sublimação em camisetas, canecas, mochilas e muito mais. Personalizados com cores vivas e acabamento profissional no Centro de Curitiba. Peça seu orçamento pelo WhatsApp.",
  keywords: [
    "sublimação Curitiba",
    "camisetas personalizadas",
    "canecas personalizadas",
    "mochilas personalizadas",
    "brindes personalizados",
  ],
  openGraph: {
    title: "RC Sublimação | Personalizados em Curitiba",
    description:
      "Camisetas, canecas, mochilas e brindes personalizados com sublimação de alta definição.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${body.variable} ${heading.variable} scroll-smooth antialiased`}
    >
      <body className="flex min-h-dvh flex-col overflow-x-hidden bg-slate-50 font-sans text-slate-700">
        <MotionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </MotionProvider>
      </body>
    </html>
  );
}
