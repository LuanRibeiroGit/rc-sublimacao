import FaqItem from "./FaqItem";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { JsonLd } from "./StructuredData";

const QUESTIONS = [
  {
    question: "O que é sublimação?",
    answer:
      "É um processo de impressão em que a tinta, com calor e pressão, passa a fazer parte do material. O resultado é uma estampa de cores vivas, sem relevo e muito resistente.",
  },
  {
    question: "Em quais materiais a sublimação funciona?",
    answer:
      "Em tecidos com poliéster, preferencialmente claros, e em produtos com revestimento próprio para sublimação, como canecas, squeezes e outros brindes. Se tiver dúvida sobre a sua peça, fale com a gente.",
  },
  {
    question: "Preciso ter a arte pronta?",
    answer:
      "Não necessariamente. Você pode enviar sua logo, foto ou apenas uma referência, e orientamos sobre o melhor formato e ajuste para a peça escolhida.",
  },
  {
    question: "Existe quantidade mínima?",
    answer:
      "Depende do produto. Envie uma mensagem com o item e a quantidade desejada e retornamos com as condições para o seu pedido.",
  },
  {
    question: "Qual é o prazo de produção?",
    answer:
      "O prazo varia conforme o produto e a quantidade, e é sempre informado no orçamento. Tem uma data importante? Avise no primeiro contato.",
  },
  {
    question: "Como faço um orçamento?",
    answer:
      "É só chamar no WhatsApp ou preencher o formulário de contato aqui no site. Informe o produto, a quantidade e, se possível, envie a arte.",
  },
];

export default function Faq() {
  return (
    <section id="duvidas" className="scroll-mt-16 py-20 sm:py-24 lg:scroll-mt-20">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: QUESTIONS.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Tudo o que você precisa saber"
        />

        <div className="mt-10 flex flex-col gap-4">
          {QUESTIONS.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.05}>
              <FaqItem {...item} defaultOpen={index === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
