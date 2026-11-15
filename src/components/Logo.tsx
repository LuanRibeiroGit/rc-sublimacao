import Image from "next/image";
import Link from "next/link";

export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="RC Sublimação - voltar para o início"
      className="group flex items-center gap-2.5"
    >
      <Image
        src="/logo-rc-v6.png"
        alt=""
        width={1214}
        height={1152}
        loading="eager"
        sizes="128px"
        className="h-11 w-auto transition-transform group-hover:scale-105 lg:h-12"
      />
      <span className="font-display text-lg font-semibold tracking-tight text-white">
        Sublimação
      </span>
    </Link>
  );
}
