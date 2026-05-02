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

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mativo Studio — Strony internetowe, SEO i Marketing" },
      { name: "description", content: "Mativo Studio tworzy nowoczesne strony internetowe, kampanie SEO i marketing, które przyciągają klientów i zwiększają sprzedaż." },
      { name: "author", content: "Mativo Studio" },
      { property: "og:title", content: "Mativo Studio — Strony internetowe, SEO i Marketing" },
      { property: "og:description", content: "Mativo Studio tworzy nowoczesne strony internetowe, kampanie SEO i marketing, które przyciągają klientów i zwiększają sprzedaż." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@MativoStudio" },
      { name: "twitter:title", content: "Mativo Studio — Strony internetowe, SEO i Marketing" },
      { name: "twitter:description", content: "Mativo Studio tworzy nowoczesne strony internetowe, kampanie SEO i marketing, które przyciągają klientów i zwiększają sprzedaż." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5ccb6fb1-b65d-4a1a-a77a-58e910ca1a39/id-preview-9671fd91--8596505d-f930-4189-bf1b-37ea7f76fcbc.lovable.app-1777741465360.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5ccb6fb1-b65d-4a1a-a77a-58e910ca1a39/id-preview-9671fd91--8596505d-f930-4189-bf1b-37ea7f76fcbc.lovable.app-1777741465360.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
