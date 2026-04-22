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
      { title: "Sudo Labs — Estudio digital · Web, Apps y Sistemas" },
      {
        name: "description",
        content:
          "Estudio digital especializado en sitios web, aplicaciones móviles y sistemas a medida. Diseño, desarrollo y automatización con IA.",
      },
      { property: "og:title", content: "Sudo Labs — Estudio digital" },
      {
        property: "og:description",
        content: "Construimos experiencias digitales que importan: web, apps y sistemas.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <PageLoader />
      <SmoothScroll />
      <ScrollProgress />
      <BackgroundFX />
      <CustomCursor />
      <Header />
      <main className="relative z-10">
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
