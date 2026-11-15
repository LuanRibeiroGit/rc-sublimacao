import { MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { SITE, whatsappLink } from "@/lib/site";
import ContactForm from "./ContactForm";
import InstagramIcon from "./InstagramIcon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type ContactCardProps = {
  href: string;
  icon: ReactNode;
  label: string;
  children: ReactNode;
};

function ContactCard({ href, icon, label, children }: ContactCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-fuchsia-200 hover:shadow-xl hover:shadow-fuchsia-500/15"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-fuchsia-500 to-orange-400 text-white">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
          {label}
        </span>
        <span className="mt-1 block break-words text-sm font-medium leading-relaxed text-slate-900 sm:text-base">
          {children}
        </span>
      </span>
    </a>
  );
}

export default function Contact() {
  return (
    <section
      id="contato"
      className="scroll-mt-16 overflow-x-clip bg-white py-20 sm:py-24 lg:scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contato"
          title="Vamos tirar a sua ideia do papel?"
          description="Fale com a gente pelo WhatsApp, siga no Instagram ou venha nos visitar no Centro de Curitiba."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal direction="left" className="flex flex-col gap-4">
            <ContactCard
              href={whatsappLink()}
              icon={<Phone className="h-5 w-5" />}
              label="WhatsApp e telefone"
            >
              {SITE.phoneDisplay}
            </ContactCard>
            <ContactCard
              href={SITE.instagram}
              icon={<InstagramIcon className="h-5 w-5" />}
              label="Instagram"
            >
              {SITE.instagramHandle}
            </ContactCard>
            <ContactCard
              href={SITE.mapsLink}
              icon={<MapPin className="h-5 w-5" />}
              label="Endereço"
            >
              {SITE.addressLine1}
              <br />
              {SITE.addressLine2}
            </ContactCard>

            <div className="min-h-64 flex-1 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <iframe
                title="Mapa com a localização da RC Sublimação"
                src={SITE.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-64 w-full border-0"
              />
            </div>
          </Reveal>

          <Reveal direction="right">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
