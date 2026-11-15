import { SITE, SITE_URL } from "@/lib/site";

// Dados estruturados (schema.org) para o Google entender o negócio local.
const LOCAL_BUSINESS = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#empresa`,
  name: SITE.name,
  legalName: SITE.legalName,
  description:
    "Sublimação e produtos personalizados em Curitiba: camisetas, canecas, mochilas, bonés, almofadas, squeezes e brindes.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-rc-v6.png`,
  image: `${SITE_URL}/video/apresentacao-capa.jpg`,
  telephone: `+${SITE.phoneE164}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Sete de Setembro, 3710 - Centro",
    addressLocality: "Curitiba",
    addressRegion: "PR",
    postalCode: "80250-210",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "12:00",
    },
  ],
  areaServed: { "@type": "City", name: "Curitiba" },
  hasMap: SITE.mapsLink,
  sameAs: [SITE.instagram],
  knowsAbout: [
    "Sublimação",
    "Camisetas personalizadas",
    "Canecas personalizadas",
    "Mochilas personalizadas",
    "Brindes personalizados",
    "Produtos para sublimação",
  ],
};

const WEBSITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#site`,
  name: SITE.name,
  url: SITE_URL,
  inLanguage: "pt-BR",
  publisher: { "@id": `${SITE_URL}/#empresa` },
};

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default function StructuredData() {
  return (
    <>
      <JsonLd data={LOCAL_BUSINESS} />
      <JsonLd data={WEBSITE} />
    </>
  );
}
