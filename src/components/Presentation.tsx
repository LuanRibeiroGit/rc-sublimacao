import { Check, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import PresentationVideo from "./PresentationVideo";
import Reveal from "./Reveal";

const POINTS = [
  "Cores vivas em tecidos, canecas, mochilas e brindes",
  "Peças únicas ou pedidos para toda a equipe",
  "Orçamento rápido e sem compromisso",
];

export default function Presentation() {
  return (
    <section
      id="apresentacao"
      className="scroll-mt-16 overflow-x-clip pb-20 sm:pb-24 lg:scroll-mt-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
        <Reveal direction="left" className="order-2 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-600">
            Apresentação
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Conheça a RC Sublimação
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
            Veja como a sua marca, a sua foto ou a sua ideia ganham vida nos
            nossos produtos personalizados.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-fuchsia-500 to-orange-400 text-white">
                  <Check className="h-4 w-4" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-400/40 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            Quero o meu personalizado
          </a>
        </Reveal>

        <Reveal direction="right" className="order-1 lg:order-2">
          <PresentationVideo />
        </Reveal>
      </div>
    </section>
  );
}
