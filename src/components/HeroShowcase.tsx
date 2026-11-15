"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ProductKind } from "./ProductCard";

type ShowcaseItem = {
  kind: ProductKind;
  label: string;
  position: string;
  rotate: number;
  delay: number;
};

const ITEMS: ShowcaseItem[] = [
  {
    kind: "caneca",
    label: "Canecas",
    position: "left-0 top-6 w-[42%]",
    rotate: -8,
    delay: 0.2,
  },
  {
    kind: "mochila",
    label: "Mochilas",
    position: "right-0 top-0 w-[42%]",
    rotate: 7,
    delay: 0.35,
  },
  {
    kind: "camiseta",
    label: "Camisetas",
    position: "bottom-0 left-1/2 w-[54%] -translate-x-1/2",
    rotate: 0,
    delay: 0.05,
  },
];

export default function HeroShowcase() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm sm:max-w-md lg:max-w-lg">
      {ITEMS.map((item, index) => (
        <div key={item.kind} className={`absolute ${item.position}`}>
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: item.rotate }}
            transition={{ duration: 0.7, delay: item.delay, ease: "easeOut" }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-3xl border border-white/15 bg-white/10 p-3 shadow-2xl shadow-fuchsia-900/40 backdrop-blur-md sm:p-4"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={`/produtos/${item.kind}.png`}
                  alt={`${item.label} personalizadas com sublimação`}
                  fill
                  loading="eager"
                  sizes="(min-width: 1024px) 260px, 50vw"
                  className="object-contain p-2 sm:p-3"
                />
              </div>
              <p className="mt-2 text-center font-display text-xs font-semibold text-white sm:mt-3 sm:text-sm">
                {item.label}
              </p>
            </motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
