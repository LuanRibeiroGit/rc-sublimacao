import {
  BadgeCheck,
  Droplets,
  Handshake,
  MapPin,
  Sparkles,
  Store,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FEATURES = [
  {
    icon: Droplets,
    title: "Cores que não desbotam",
    description:
      "Na sublimação a tinta penetra na fibra: a estampa não racha, não descasca e resiste às lavagens.",
  },
  {
    icon: Sparkles,
    title: "Alta definição",
    description:
      "Fotos, degradês e detalhes finos reproduzidos com nitidez e cores fiéis à sua arte.",
  },
  {
    icon: BadgeCheck,
    title: "Acabamento profissional",
    description:
      "Cada peça é conferida antes da entrega, para chegar até você do jeito que foi aprovada.",
  },
  {
    icon: Handshake,
    title: "Atendimento próximo",
    description:
      "Você fala direto com quem produz, tira dúvidas e acompanha o pedido pelo WhatsApp.",
  },
  {
    icon: Store,
    title: "Insumos para sublimação",
    description:
      "Também trabalha com personalizados? Consulte nossos produtos e suprimentos para sublimação.",
  },
  {
    icon: MapPin,
    title: "Loja no Centro",
    description:
      "Estamos na Av. Sete de Setembro, com fácil acesso para retirar seu pedido em Curitiba.",
  },
];

export default function Features() {
  return (
    <section
      id="diferenciais"
      className="relative scroll-mt-16 overflow-hidden bg-slate-950 py-20 sm:py-24 lg:scroll-mt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          dark
          eyebrow="Diferenciais"
          title="Por que escolher a RC Sublimação"
          description="Qualidade de impressão e cuidado em cada etapa, para a sua marca ou o seu presente causarem a melhor impressão."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 3) * 0.1} className="h-full">
              <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1.5 hover:border-fuchsia-400/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-fuchsia-500/20">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-fuchsia-300">
                  <feature.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
