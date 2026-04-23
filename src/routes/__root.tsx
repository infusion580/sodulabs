import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://sudolabs.dev";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#0a0a0f" },
      { name: "color-scheme", content: "dark light" },
      { name: "format-detection", content: "telephone=no" },
      { httpEquiv: "x-ua-compatible", content: "IE=edge" },

      // Defaults — cada ruta los sobreescribe con metadata propia
      { title: "Sudo Labs — Estudio digital · Web, Apps y Sistemas a medida con IA" },
      {
        name: "description",
        content:
          "Estudio digital en LATAM: diseñamos y desarrollamos sitios web, apps móviles y sistemas a medida con IA y automatización. Cotiza tu proyecto.",
      },
      {
        name: "keywords",
        content:
          "estudio digital, agencia digital LATAM, desarrollo web a medida, diseño UX/UI, apps móviles, React, Next.js, TanStack, automatización con IA, consultoría tecnológica, sistemas a medida, México, Sudo Labs",
      },
      { name: "author", content: "Sudo Labs" },
      { name: "publisher", content: "Sudo Labs" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "bingbot", content: "index, follow" },
      { name: "rating", content: "general" },
      { name: "geo.region", content: "MX" },
      { name: "geo.placename", content: "México" },

      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Sudo Labs" },
      { property: "og:locale", content: "es_MX" },
      { property: "og:locale:alternate", content: "es_ES" },
      { property: "og:url", content: SITE_URL },
      { property: "og:title", content: "Sudo Labs — Estudio digital · Web, Apps y Sistemas con IA" },
      {
        property: "og:description",
        content:
          "Construimos web, apps y sistemas a medida con IA. Estudio digital en LATAM con foco en diseño y producto.",
      },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@sudolabs" },
      { name: "twitter:creator", content: "@sudolabs" },
      { name: "twitter:title", content: "Sudo Labs — Estudio digital · Web, Apps y Sistemas" },
      {
        name: "twitter:description",
        content: "Web, apps y sistemas a medida con IA. Estudio digital en LATAM.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "canonical", href: SITE_URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["Organization", "ProfessionalService"],
              "@id": `${SITE_URL}#organization`,
              name: "Sudo Labs",
              alternateName: "SudoLabs",
              url: SITE_URL,
              email: "hola@sudolabs.dev",
              telephone: "+52-565-875-1914",
              logo: {
                "@type": "ImageObject",
                "@id": `${SITE_URL}#logo`,
                url: `${SITE_URL}/icon-512.png`,
                width: 512,
                height: 512,
              },
              image: { "@id": `${SITE_URL}#logo` },
              description:
                "Estudio digital especializado en sitios web, aplicaciones móviles y sistemas a medida con IA y automatización.",
              foundingDate: "2017",
              areaServed: [
                { "@type": "Place", name: "LATAM" },
                { "@type": "Country", name: "México" },
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "MX",
              },
              knowsAbout: [
                "Desarrollo web",
                "Aplicaciones móviles",
                "Inteligencia Artificial",
                "Automatización",
                "Diseño UX/UI",
                "TanStack Start",
                "React",
                "Next.js",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios Sudo Labs",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diseño y Desarrollo Web" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Desarrollo de Apps Móviles" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sistemas a Medida con IA" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Consultoría y Gestión de Producto" } },
                ],
              },
              sameAs: [],
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}#website`,
              url: SITE_URL,
              name: "Sudo Labs",
              inLanguage: "es-MX",
              publisher: { "@id": `${SITE_URL}#organization` },
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
