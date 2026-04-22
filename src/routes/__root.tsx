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
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0a0a0a" },
      { name: "format-detection", content: "telephone=no" },
      { title: "Sudo Labs — Estudio digital · Web, Apps y Sistemas" },
      {
        name: "description",
        content:
          "Estudio digital en LATAM: diseño y desarrollo de sitios web, apps móviles y sistemas a medida con IA y automatización.",
      },
      {
        name: "keywords",
        content:
          "estudio digital, desarrollo web, diseño web, apps móviles, sistemas a medida, automatización con IA, consultoría tecnológica, México, LATAM, Sudo Labs",
      },
      { name: "author", content: "Sudo Labs" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "googlebot", content: "index, follow" },
      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Sudo Labs" },
      { property: "og:locale", content: "es_MX" },
      { property: "og:url", content: SITE_URL },
      { property: "og:title", content: "Sudo Labs — Estudio digital · Web, Apps y Sistemas" },
      {
        property: "og:description",
        content:
          "Construimos experiencias digitales que importan: web, apps y sistemas a medida con IA.",
      },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sudo Labs — Estudio digital · Web, Apps y Sistemas" },
      {
        name: "twitter:description",
        content:
          "Web, apps y sistemas a medida con IA. Estudio digital en LATAM.",
      },
      { name: "description", content: "Desarrollo de software" },
      { property: "og:description", content: "Desarrollo de software" },
      { name: "twitter:description", content: "Desarrollo de software" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/051637d4-bac0-4970-8365-79f25ce6ff21/id-preview-7974fb6d--f6509eae-7b78-4920-9983-d653cb867795.lovable.app-1776890257915.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/051637d4-bac0-4970-8365-79f25ce6ff21/id-preview-7974fb6d--f6509eae-7b78-4920-9983-d653cb867795.lovable.app-1776890257915.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "canonical", href: SITE_URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}#organization`,
              name: "Sudo Labs",
              url: SITE_URL,
              email: "hola@sudolabs.dev",
              description:
                "Estudio digital especializado en sitios web, aplicaciones móviles y sistemas a medida con IA.",
              areaServed: "LATAM",
              sameAs: [],
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}#website`,
              url: SITE_URL,
              name: "Sudo Labs",
              inLanguage: "es-MX",
              publisher: { "@id": `${SITE_URL}#organization` },
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
