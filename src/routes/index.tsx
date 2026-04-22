import { createFileRoute } from "@tanstack/react-router";
import { PageLoader } from "@/components/PageLoader";
import { SmoothScroll } from "@/lib/lenis";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Quote } from "@/components/Quote";
import { Labs } from "@/components/Labs";
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
      <Header />
      <main className="relative">
        <Hero />
        <Services />
        <Quote />
        <Labs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
