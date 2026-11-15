export const SITE = {
  name: "RC Sublimação",
  legalName: "RC Sublimação Ltda.",
  phoneDisplay: "(41) 99890-5927",
  phoneE164: "5541998905927",
  instagram: "https://www.instagram.com/rcsublimacaoltda/",
  instagramHandle: "@rcsublimacaoltda",
  addressLine1: "Av. Sete de Setembro, 3710 - Centro",
  addressLine2: "Curitiba - PR, 80250-210",
  mapsEmbed:
    "https://www.google.com/maps?q=Av.+Sete+de+Setembro,+3710+-+Centro,+Curitiba+-+PR,+80250-210&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Av.+Sete+de+Setembro,+3710+-+Centro,+Curitiba+-+PR,+80250-210",
};

export const NAV_LINKS = [
  { label: "Início", href: "/#inicio" },
  { label: "Produtos", href: "/#produtos" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Dúvidas", href: "/#duvidas" },
  { label: "Contato", href: "/#contato" },
];

export function whatsappLink(
  message = "Olá! Vim pelo site e gostaria de um orçamento.",
) {
  return `https://wa.me/${SITE.phoneE164}?text=${encodeURIComponent(message)}`;
}
