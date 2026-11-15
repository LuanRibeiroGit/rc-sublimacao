import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { whatsappLink } from "@/lib/site";

export type ProductKind =
  | "camiseta"
  | "caneca"
  | "mochila"
  | "bone"
  | "almofada"
  | "squeeze";

export type Product = {
  kind: ProductKind;
  title: string;
  description: string;
  tags: string[];
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-fuchsia-200 hover:shadow-2xl hover:shadow-fuchsia-500/15">
      <div className="relative h-60 overflow-hidden bg-linear-to-br from-slate-100 to-slate-200 sm:h-64">
        <Image
          src={`/produtos/${product.kind}.png`}
          alt={`${product.title} personalizados com sublimação`}
          fill
          loading="eager"
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-slate-900">
          {product.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {product.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {tag}
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink(
            `Olá! Vim pelo site e gostaria de um orçamento de ${product.title.toLowerCase()}.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 self-start pt-2 text-sm font-semibold text-fuchsia-600 transition-colors hover:text-fuchsia-700 lg:mt-auto"
        >
          Pedir orçamento
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}
