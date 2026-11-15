import { Home, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden bg-slate-950 px-4 py-28 sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-fuchsia-600/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
      />

      <Reveal className="relative mx-auto max-w-xl text-center">
        <p className="bg-linear-to-r from-cyan-400 via-fuchsia-400 to-orange-400 bg-clip-text font-display text-8xl font-bold tracking-tight text-transparent sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 text-balance font-display text-2xl font-bold text-white sm:text-3xl">
          Esta página saiu sem estampa
        </h1>
        <p className="mt-4 text-pretty text-base leading-relaxed text-slate-300">
          O endereço que você acessou não existe ou foi movido. Volte para o
          início ou fale com a gente pelo WhatsApp.
        </p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-fuchsia-500 to-orange-400 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-fuchsia-500/30 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-fuchsia-500/40"
          >
            <Home className="h-5 w-5" />
            Voltar para o início
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
