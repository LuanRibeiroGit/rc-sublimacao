"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a RC Sublimação no WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/40 hover:bg-emerald-400 hover:shadow-2xl hover:shadow-emerald-400/50 sm:bottom-6 sm:right-6"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-30 motion-reduce:hidden"
      />
      <MessageCircle className="relative h-7 w-7" />
    </motion.a>
  );
}
