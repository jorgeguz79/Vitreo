/**
 * Contenido y datos estructurados del sitio.
 *
 * Mantener el contenido aquí (en vez de escrito directamente en los .astro)
 * permite reutilizarlo entre secciones/páginas y tipar su forma, para que
 * agregar una página nueva (equipo, portafolio, blog) reutilice el mismo
 * header, footer y datos de contacto sin duplicar texto.
 */

export const siteMeta = {
  name: "Vítreo Capital",
  tagline: "Let's Grow Together!",
  description:
    "Vítreo Capital es un family office que hace crecer el patrimonio de sus inversionistas mediante decisiones fundamentadas en criterio, transparencia y una visión de largo plazo.",
  locale: "es",
  regions: "Colombia · Panamá · España",
  sector: "Deuda Privada · Sector inmobiliario",
} as const;

export const navLinks = [
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contacto", href: "/#contacto" },
] as const;

export const contactInfo = {
  email: "amordonez@vitreo.com.co",
  linkedin: {
    label: "/company/vítreo-investments/",
    href: "https://www.linkedin.com/company/vitreo-investments/",
  },
} as const;

export type Pillar = {
  title: string;
  description: string;
};

export const pillars: Pillar[] = [
  {
    title: "PRESERVAR",
    description: "El capital se protege antes de buscar rentabilidad.",
  },
  {
    title: "ENTENDER",
    description: "Sólo invertimos donde entendemos el riesgo.",
  },
  {
    title: "ALINEAR",
    description: "Nuestro resultado depende del suyo.",
  },
];

export type Principle = {
  number: string;
  icon: "handshake" | "target" | "search" | "chain" | "chart";
  description: string;
};

export const principles: Principle[] = [
  {
    number: "01",
    icon: "handshake",
    description:
      "Co-invertimos junto a nuestros inversionistas, con nuestro propio capital en cada operación.",
  },
  {
    number: "02",
    icon: "target",
    description:
      "Solo ganamos cuando nuestros inversionistas ganan: nuestros intereses están completamente alineados.",
  },
  {
    number: "03",
    icon: "search",
    description:
      "Seleccionamos con cuidado tanto las inversiones como a los inversionistas con quienes trabajamos.",
  },
  {
    number: "04",
    icon: "chain",
    description: "Construimos relaciones de largo plazo, no transacciones puntuales.",
  },
  {
    number: "05",
    icon: "chart",
    description: "Hacemos seguimiento permanente a cada inversión, del inicio al cierre.",
  },
];
