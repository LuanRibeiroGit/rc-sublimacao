"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Limite de espera para o site nunca ficar preso em conexões lentas.
const MAX_WAIT_MS = 6000;

function waitForImage(img: HTMLImageElement) {
  if (img.complete) return Promise.resolve();
  return new Promise<void>((resolve) => {
    img.addEventListener("load", () => resolve(), { once: true });
    img.addEventListener("error", () => resolve(), { once: true });
  });
}


export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let active = true;
    // Espera só as imagens da primeira tela; o restante carrega sob demanda.
    const assets = Array.from(
      document.querySelectorAll<HTMLImageElement>('img[loading="eager"]'),
    ).map(waitForImage);
    let done = 0;

    assets.forEach((asset) =>
      asset.then(() => {
        done += 1;
        if (active) setProgress(Math.round((done / assets.length) * 100));
      }),
    );

    const timeout = new Promise<void>((resolve) =>
      setTimeout(resolve, MAX_WAIT_MS),
    );
    Promise.race([Promise.all(assets), timeout]).then(() => {
      if (active) setLoading(false);
    });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = loading ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          role="status"
          aria-live="polite"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 bg-slate-950 px-6"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-600/25 blur-3xl"
          />

          <div className="relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-spin rounded-full border-4 border-white/10 border-t-fuchsia-400 border-r-cyan-400"
            />
            <Image
              src="/logo-rc-v6.png"
              alt=""
              width={1214}
              height={1152}
              loading="eager"
              sizes="128px"
              className="h-20 w-auto animate-pulse sm:h-24"
            />
          </div>

          <div className="relative flex w-full max-w-56 flex-col items-center gap-3">
            <p className="font-display text-sm font-medium tracking-wide text-slate-200">
              Carregando... {progress}%
            </p>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-linear-to-r from-cyan-400 via-fuchsia-400 to-orange-400 transition-[width] duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
