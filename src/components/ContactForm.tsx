"use client";

import { MessageCircle } from "lucide-react";
import { type FormEvent, useState } from "react";
import { whatsappLink } from "@/lib/site";

const PRODUCT_OPTIONS = [
  "Camisetas e uniformes",
  "Canecas",
  "Mochilas e bolsas",
  "Bonés",
  "Almofadas",
  "Squeezes e garrafas",
  "Insumos para sublimação",
  "Outro",
];

const FIELD_CLASS =
  "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 transition focus:border-fuchsia-500 focus:outline-none focus:ring-4 focus:ring-fuchsia-500/15";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [product, setProduct] = useState(PRODUCT_OPTIONS[0]);
  const [details, setDetails] = useState("");

  // Sem backend: o formulário monta a mensagem e abre a conversa no WhatsApp.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const lines = [
      `Olá! Meu nome é ${name.trim()}.`,
      `Gostaria de um orçamento de: ${product}.`,
      details.trim() && `Detalhes: ${details.trim()}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 transition duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/10 sm:p-8"
    >
      <h3 className="font-display text-xl font-semibold text-slate-900">
        Solicite seu orçamento
      </h3>
      <p className="mt-1 text-sm text-slate-600">
        Preencha e continue a conversa direto no WhatsApp.
      </p>

      <div className="mt-6 flex flex-col gap-5">
        <label className="block text-sm font-medium text-slate-700">
          Seu nome
          <input
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Como podemos te chamar?"
            className={FIELD_CLASS}
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Produto de interesse
          <select
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className={FIELD_CLASS}
          >
            {PRODUCT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Detalhes do pedido
          <textarea
            rows={4}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Quantidade, tamanhos, prazo, ideia da arte..."
            className={`${FIELD_CLASS} resize-y`}
          />
        </label>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-400/40"
        >
          <MessageCircle className="h-5 w-5" />
          Enviar pelo WhatsApp
        </button>
      </div>
    </form>
  );
}
