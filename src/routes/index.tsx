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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sudo Labs — Estudio digital · Web, Apps y Sistemas a medida" },
      {
        name: "description",
        content:
          "Estudio digital en LATAM: diseño y desarrollo de sitios web, aplicaciones móviles, sistemas a medida y automatización con IA. Pide tu cotización.",
      },
      { property: "og:title", content: "Sudo Labs — Estudio digital · Web, Apps y Sistemas" },
      {
        property: "og:description",
        content:
          "Diseñamos y desarrollamos web, apps móviles y sistemas a medida con IA. Cotiza tu proyecto en minutos.",
      },
      { property: "og:url", content: "https://sudolabs.dev/" },
      { name: "twitter:title", content: "Sudo Labs — Estudio digital" },
      {
        name: "twitter:description",
        content: "Web, apps y sistemas a medida con IA. Cotiza tu proyecto.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://sudolabs.dev/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Sudo Labs",
          url: "https://sudolabs.dev",
          email: "hola@sudolabs.dev",
          telephone: "+52-565-875-1914",
          description:
            "Estudio digital: diseño y desarrollo de sitios web, apps móviles y sistemas a medida con IA.",
          areaServed: "LATAM",
          serviceType: [
            "Diseño y Desarrollo Web",
            "Desarrollo de Apps",
            "Gestión Profesional de Proyectos",
            "Consultoría Creativa y de Desarrollo",
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
