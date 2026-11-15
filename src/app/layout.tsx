import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MotionProvider from "@/components/MotionProvider";
import Preloader from "@/components/Preloader";
import StructuredData from "@/components/StructuredData";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE, SITE_URL } from "@/lib/site";
import "./globals.css";

const body = Inter({ variable: "--font-body", subsets: ["latin"] });
const heading = Sora({ variable: "--font-heading", subsets: ["latin"] });

const TITLE = "RC Sublimação | Sublimação e Personalizados em Curitiba";
const DESCRIPTION =
  "RC Sublimação: sublimação em camisetas, canecas, mochilas, bonés e brindes personalizados no Centro de Curitiba. Cores vivas, acabamento profissional e orçamento rápido pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | RC Sublimação",
  },
  description: DESCRIPTION,
  applicationName: SITE.name,
  keywords: [
    "RC Sublimação",
    "sublimação",
    "sublimação Curitiba",
    "sublimação em camisetas",
    "sublimação em canecas",
    "produtos para sublimação",
    "camisetas personalizadas Curitiba",
    "canecas personalizadas Curitiba",
    "mochilas personalizadas",
    "brindes personalizados Curitiba",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: SITE.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  other: {
    "geo.region": "BR-PR",
    "geo.placename": "Curitiba",
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
      className={`${body.variable} ${heading.variable} scroll-smooth bg-slate-950 antialiased`}
    >
      <body className="flex min-h-dvh flex-col overflow-x-hidden bg-slate-50 font-sans text-slate-700">
        <StructuredData />
        <MotionProvider>
          <Preloader />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </MotionProvider>
      </body>
    </html>
  );
}
