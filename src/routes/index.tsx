import { createFileRoute } from "@tanstack/react-router";
import { PageLoader } from "@/components/PageLoader";
import { SmoothScroll } from "@/lib/lenis";
import { CustomCursor } from "@/components/CustomCursor";
import { BackgroundFX } from "@/components/BackgroundFX";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Quote } from "@/components/Quote";
import { Labs } from "@/components/Labs";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const HOME_URL = "https://sudolabs.dev/";
const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/051637d4-bac0-4970-8365-79f25ce6ff21/id-preview-7974fb6d--f6509eae-7b78-4920-9983-d653cb867795.lovable.app-1776890257915.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Sudo Labs — Estudio digital · Web, Apps móviles y Sistemas a medida con IA",
      },
      {
        name: "description",
        content:
          "Estudio digital en LATAM: diseñamos y desarrollamos sitios web, aplicaciones móviles, sistemas a medida y automatización con IA. Cotiza tu proyecto en minutos.",
      },
      {
        name: "keywords",
        content:
          "estudio digital, agencia web México, desarrollo web a medida, diseño UX/UI, apps móviles iOS Android, automatización con IA, integración OpenAI, Stripe, sistemas a medida, React, Next.js, TanStack, Sudo Labs",
      },

      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:url", content: HOME_URL },
      {
        property: "og:title",
        content: "Sudo Labs — Estudio digital · Web, Apps y Sistemas con IA",
      },
      {
        property: "og:description",
        content:
          "Diseñamos y desarrollamos web, apps móviles y sistemas a medida con IA. Cotiza tu proyecto en minutos.",
      },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Sudo Labs — Estudio digital · Web, Apps y Sistemas a medida con IA",
      },

      // Twitter
      { name: "twitter:title", content: "Sudo Labs — Estudio digital" },
      {
        name: "twitter:description",
        content: "Web, apps móviles y sistemas a medida con IA. Cotiza tu proyecto.",
      },
      { name: "twitter:image", content: OG_IMAGE },
      {
        name: "twitter:image:alt",
        content: "Sudo Labs — Estudio digital",
      },
    ],
    links: [
      { rel: "canonical", href: HOME_URL },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400&display=swap",
      },
      // Hint a Google sobre alternativas de idioma
      { rel: "alternate", hrefLang: "es-MX", href: HOME_URL },
      { rel: "alternate", hrefLang: "es", href: HOME_URL },
      { rel: "alternate", hrefLang: "x-default", href: HOME_URL },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${HOME_URL}#webpage`,
              url: HOME_URL,
              name: "Sudo Labs — Estudio digital",
              description:
                "Estudio digital: diseño y desarrollo de sitios web, apps móviles y sistemas a medida con IA.",
              inLanguage: "es-MX",
              isPartOf: { "@id": "https://sudolabs.dev#website" },
              about: { "@id": "https://sudolabs.dev#organization" },
              primaryImageOfPage: OG_IMAGE,
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: HOME_URL,
                },
              ],
            },
            {
              "@type": "ProfessionalService",
              "@id": "https://sudolabs.dev#service",
              name: "Sudo Labs",
              url: HOME_URL,
              email: "hola@sudolabs.dev",
              telephone: "+52-565-875-1914",
              description:
                "Estudio digital: diseño y desarrollo de sitios web, apps móviles y sistemas a medida con IA.",
              areaServed: "LATAM",
              priceRange: "$$",
              serviceType: [
                "Diseño y Desarrollo Web",
                "Desarrollo de Apps móviles",
                "Sistemas a Medida con IA",
                "Consultoría Creativa y de Producto",
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Cuánto tarda un proyecto con Sudo Labs?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Una landing premium puede entregarse en 2-3 semanas. Sitios completos y apps suelen tomar entre 6 y 12 semanas según alcance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Trabajan con clientes fuera de México?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Sí. Trabajamos con startups y empresas de toda LATAM, Estados Unidos y España de forma 100% remota.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué tecnologías utilizan?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Stack moderno: React, TypeScript, Next.js, TanStack Start, Tailwind, Node.js, PostgreSQL, Supabase, OpenAI y Stripe entre otros.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Ofrecen mantenimiento después del lanzamiento?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Sí. Ofrecemos planes de mantenimiento, evolución de producto y soporte técnico continuo.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <PageLoader />
      <SmoothScroll />
      <ScrollProgress />
      <BackgroundFX />
      <CustomCursor />
      <Header />
      <main id="contenido" className="relative z-10">
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Quote />
        <Labs />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
