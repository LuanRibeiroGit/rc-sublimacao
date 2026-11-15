"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export default function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: FaqItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div
      className={`rounded-2xl border bg-white transition duration-300 hover:shadow-xl hover:shadow-fuchsia-500/10 ${
        open ? "border-fuchsia-200 shadow-lg shadow-fuchsia-500/10" : "border-slate-200"
      }`}
    >
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
        >
          <span className="font-display text-base font-semibold text-slate-900">
            {question}
          </span>
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-fuchsia-600 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6 sm:pb-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
