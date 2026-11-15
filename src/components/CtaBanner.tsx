import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <section className="px-4 pb-20 sm:px-6 sm:pb-24">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-fuchsia-600 via-fuchsia-500 to-orange-400 px-6 py-12 text-center shadow-2xl shadow-fuchsia-500/30 sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-2xl"
          />
          <h2 className="relative mx-auto max-w-2xl text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tem um evento, uma equipe ou um presente em mente?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-pretty text-base text-fuchsia-50 sm:text-lg">
            Envie sua ideia agora e receba um orçamento sem compromisso.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-slate-900 shadow-xl shadow-slate-900/20 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-slate-900/30"
          >
            <MessageCircle className="h-5 w-5 text-emerald-600" />
            Falar no WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}
