import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { whatsappLink } from "@/lib/site";
import HeroShowcase from "./HeroShowcase";
import Reveal from "./Reveal";

const HIGHLIGHTS = [
  "Cores vivas e duradouras",
  "Sua arte, sua marca",
  "Atendimento direto no WhatsApp",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-dvh items-center overflow-hidden bg-slate-950 pt-16 lg:pt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-fuchsia-600/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:py-28">
        <div className="text-center lg:text-left">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-200 sm:text-sm">
              <MapPin className="h-4 w-4 text-fuchsia-400" />
              Sublimação no Centro de Curitiba - PR
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Sua ideia estampada em{" "}
              <span className="bg-linear-to-r from-cyan-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
                cores que impressionam
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
              Sublimação em camisetas, canecas, mochilas e muito mais.
              Personalizados para empresas, eventos e presentes, com acabamento
              profissional do primeiro ao último item.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-emerald-400/40"
              >
                <MessageCircle className="h-5 w-5" />
                Pedir orçamento grátis
              </a>
              <Link
                href="/#produtos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-xl hover:shadow-fuchsia-500/20"
              >
                Ver produtos
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-300 lg:justify-start">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-fuchsia-400 to-orange-400" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <HeroShowcase />
      </div>
    </section>
  );
}
