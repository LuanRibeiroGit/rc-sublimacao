import { MessageCircle, PackageCheck, Palette, Printer } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Conte a sua ideia",
    description:
      "Chame no WhatsApp e diga o produto, a quantidade e para quando você precisa.",
  },
  {
    icon: Palette,
    title: "Envie ou crie a arte",
    description:
      "Mande sua logo, foto ou referência. Ajustamos o layout para o melhor resultado na peça.",
  },
  {
    icon: Printer,
    title: "Produção",
    description:
      "Após a sua aprovação, imprimimos e prensamos cada item com atenção a cor e acabamento.",
  },
  {
    icon: PackageCheck,
    title: "Retire ou receba",
    description:
      "Seu pedido fica pronto para retirada na loja, no Centro de Curitiba, ou combinamos o envio.",
  },
];

export default function Process() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-16 bg-white py-20 sm:py-24 lg:scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Como funciona"
          title="Do orçamento à entrega em 4 passos"
          description="Um processo simples e transparente, para você saber exatamente o que esperar."
        />

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li key={step.title} className="h-full">
              <Reveal delay={index * 0.1} className="h-full">
                <div className="group relative h-full rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1.5 hover:border-fuchsia-200 hover:bg-white hover:shadow-2xl hover:shadow-fuchsia-500/15">
                  <span className="absolute right-6 top-5 font-display text-4xl font-bold text-slate-200 transition-colors group-hover:text-fuchsia-200">
                    {index + 1}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-fuchsia-500 to-orange-400 text-white shadow-lg shadow-fuchsia-500/30">
                    <step.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
