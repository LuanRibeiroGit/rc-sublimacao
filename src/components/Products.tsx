import ProductCard, { type Product } from "./ProductCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const PRODUCTS: Product[] = [
  {
    kind: "camiseta",
    title: "Camisetas e uniformes",
    description:
      "Estampas que não racham nem descascam, ideais para equipes, eventos, times e coleções próprias.",
    tags: ["Empresas", "Eventos", "Times"],
  },
  {
    kind: "caneca",
    title: "Canecas",
    description:
      "Fotos, logos e frases com impressão nítida e brilhante. O presente e o brinde que todo mundo usa.",
    tags: ["Presentes", "Brindes", "Datas especiais"],
  },
  {
    kind: "mochila",
    title: "Mochilas e bolsas",
    description:
      "Mochilas, sacochilas e necessaires com a sua identidade para escolas, academias e ações de marca.",
    tags: ["Escolas", "Academias", "Kits"],
  },
  {
    kind: "bone",
    title: "Bonés",
    description:
      "Bonés personalizados para completar o uniforme da equipe ou divulgar a sua marca nas ruas.",
    tags: ["Equipes", "Promocional"],
  },
  {
    kind: "almofada",
    title: "Almofadas",
    description:
      "Almofadas com fotos e artes exclusivas para presentear, decorar e eternizar bons momentos.",
    tags: ["Decoração", "Presentes"],
  },
  {
    kind: "squeeze",
    title: "Squeezes e garrafas",
    description:
      "Garrafas personalizadas para kits corporativos, academias, formaturas e eventos esportivos.",
    tags: ["Corporativo", "Esportes"],
  },
];

export default function Products() {
  return (
    <section id="produtos" className="scroll-mt-16 py-20 sm:py-24 lg:scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Produtos"
          title="Personalizamos o que a sua ideia pedir"
          description="Da peça única ao pedido para toda a equipe: escolha o produto, envie a arte e deixe o resto com a gente."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.kind} delay={(index % 3) * 0.1} className="h-full">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
