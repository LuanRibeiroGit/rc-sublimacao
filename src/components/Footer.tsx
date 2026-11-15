import { Clock, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { NAV_LINKS, OPENING_HOURS, SITE, whatsappLink } from "@/lib/site";
import InstagramIcon from "./InstagramIcon";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Sublimação e personalizados com cores vivas e acabamento
            profissional, no Centro de Curitiba.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Navegação
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-fuchsia-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Contato
          </h2>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-fuchsia-400"
              >
                <Phone className="h-4 w-4 shrink-0 text-fuchsia-400" />
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-fuchsia-400"
              >
                <InstagramIcon className="h-4 w-4 shrink-0 text-fuchsia-400" />
                {SITE.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={SITE.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-colors hover:text-fuchsia-400"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-fuchsia-400" />
                <span>
                  {SITE.addressLine1}
                  <br />
                  {SITE.addressLine2}
                </span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-fuchsia-400" />
              <span>
                {OPENING_HOURS.map((item) => (
                  <span key={item.label} className="block">
                    {item.label}: {item.hours}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-6 pr-20 text-xs text-slate-500 sm:px-6">
          © {SITE.legalName} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
