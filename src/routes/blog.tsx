import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackgroundFX } from "@/components/BackgroundFX";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRightIcon as ArrowUpRight } from "@/components/icons";

const BLOG_URL = "https://sudolabs.dev/blog";
const OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/051637d4-bac0-4970-8365-79f25ce6ff21/id-preview-7974fb6d--f6509eae-7b78-4920-9983-d653cb867795.lovable.app-1776890257915.png";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Sudo Labs · Notas de diseño, código y producto digital" },
      {
        name: "description",
        content:
          "Artículos del estudio sobre desarrollo web, apps móviles, IA, automatización y diseño de producto. Aprendizajes reales de proyectos en producción.",
      },
      {
        name: "keywords",
        content:
          "blog desarrollo web, blog diseño UX, IA aplicada, automatización, TanStack, React, apps móviles, producto digital, Sudo Labs",
      },
      { property: "og:type", content: "blog" },
      { property: "og:title", content: "Blog — Sudo Labs · Notas de diseño y código" },
      {
        property: "og:description",
        content:
          "Aprendizajes y decisiones técnicas del estudio: desarrollo, IA y diseño de producto.",
      },
      { property: "og:url", content: BLOG_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Blog — Sudo Labs" },
      { name: "twitter:title", content: "Blog — Sudo Labs" },
      {
        name: "twitter:description",
        content: "Notas del estudio sobre desarrollo, IA y diseño de producto.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: BLOG_URL },
      { rel: "alternate", hrefLang: "es-MX", href: BLOG_URL },
      { rel: "alternate", hrefLang: "es", href: BLOG_URL },
      { rel: "alternate", hrefLang: "x-default", href: BLOG_URL },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Blog",
              "@id": `${BLOG_URL}#blog`,
              url: BLOG_URL,
              name: "Blog Sudo Labs",
              description:
                "Notas del estudio sobre desarrollo, IA y diseño de producto.",
              inLanguage: "es-MX",
              publisher: { "@id": "https://sudolabs.dev#organization" },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Inicio", item: "https://sudolabs.dev/" },
                { "@type": "ListItem", position: 2, name: "Blog", item: BLOG_URL },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    title: "Por qué TanStack Start nos cambió el flujo",
    date: "Próximamente",
    desc: "Cómo migramos del setup clásico de Vite a un router con SSR, loaders y type-safety end to end.",
  },
  {
    title: "Automatizar contenido con IA sin perder voz",
    date: "Próximamente",
    desc: "Construimos Blogero: un sistema que investiga, redacta y publica respetando tono y guidelines.",
  },
  {
    title: "Diseñar apps móviles que la gente abre dos veces",
    date: "Próximamente",
    desc: "Notas sobre onboarding, microinteracciones y la diferencia entre 'bonito' y 'usable'.",
  },
];

function BlogPage() {
  return (
    <>
      <ScrollProgress />
      <BackgroundFX />
      <Header />

      <main className="relative z-10 pt-40 pb-32">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Blog
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
              Notas del estudio,
              <br />
              <span className="text-gradient-primary animate-gradient-x font-light italic">en voz alta.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Aprendizajes, decisiones técnicas y exploraciones de diseño. Pronto publicaremos los primeros artículos.
            </p>
          </Reveal>

          <div className="mt-20 grid gap-6 md:grid-cols-2">
            {posts.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="group relative h-full overflow-hidden rounded-3xl glass p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-sm">
                  <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {p.date}
                    </span>
                    <h2 className="mt-3 font-display text-2xl font-bold md:text-3xl">{p.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                      Próximamente
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-20 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-primary/10"
              >
                ← Volver al inicio
              </Link>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
