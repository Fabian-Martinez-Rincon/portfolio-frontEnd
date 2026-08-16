import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeToggle } from "./_components/theme-toggle";
import { MobileNav } from "./_components/mobile-nav";
import { InlineScript } from "./_components/inline-script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// TODO: set NEXT_PUBLIC_SITE_URL to the real production domain once deployed.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:4105";
const SITE_TITLE = "Fabo — Desarrollo de software a medida";
const SITE_DESCRIPTION =
  "Desarrollador full-stack. Construyo aplicaciones web a medida, paneles internos e integraciones de pagos y APIs con Next.js y TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — Fabo",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "desarrollo web",
    "desarrollador full-stack",
    "Next.js",
    "TypeScript",
    "aplicaciones a medida",
    "Mercado Pago",
    "dashboards",
  ],
  authors: [{ name: "Fabo" }],
  creator: "Fabo",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Fabo",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f9fc" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1d24" },
  ],
};

const THEME_INIT_SCRIPT = `
  try {
    var t = localStorage.getItem("theme");
    var d = t === "light" || t === "dark" ? t : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", d);
  } catch (e) {}
`;

const NAV_LINKS = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#como-trabajo", label: "Cómo trabajo" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-theme="light"
      suppressHydrationWarning
      className={`h-full antialiased ${inter.variable}`}
    >
      <head>
        <InlineScript html={THEME_INIT_SCRIPT} />
      </head>
      <body className="flex min-h-full flex-col bg-background">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-(--radius) focus:bg-(--brand) focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-(--brand-foreground)"
        >
          Saltar al contenido
        </a>

        <header className="sticky top-0 z-20 border-b border-(--line) bg-(--bg-elevated)/85 backdrop-blur supports-backdrop-filter:bg-(--bg-elevated)/70">
          <div className="mx-auto flex w-full max-w-5xl items-center gap-3 px-4 py-3 lg:px-6">
            <a href="#top" className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-foreground">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-(--brand) to-(--accent) text-sm font-black text-white">
                F
              </span>
              Fabo<span className="text-(--brand)">.</span>
            </a>
            <nav className="ml-6 hidden items-center gap-6 text-sm font-medium text-(--ink-dim) sm:flex">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="transition hover:text-foreground">
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="ml-auto flex items-center gap-2">
              <ThemeToggle />
              <MobileNav />
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-(--line) bg-(--bg-sunken)">
          <div className="mx-auto grid w-full max-w-5xl gap-8 px-4 py-12 sm:grid-cols-3 lg:px-6">
            <div>
              <a href="#top" className="text-lg font-extrabold tracking-tight text-foreground">
                Fabo<span className="text-(--brand)">.</span>
              </a>
              <p className="mt-2 max-w-xs text-sm text-(--ink-dim)">
                Desarrollo de software a medida: de la idea a una app real en producción.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-(--ink-faint)">Navegación</p>
              <nav className="mt-3 flex flex-col gap-2 text-sm text-(--ink-dim)">
                {NAV_LINKS.map((link) => (
                  <a key={link.href} href={link.href} className="transition hover:text-foreground">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-(--ink-faint)">Contacto</p>
              <a
                href="mailto:fabianmartinezrincon.123@gmail.com"
                className="mt-3 inline-block text-sm text-(--ink-dim) transition hover:text-foreground"
              >
                fabianmartinezrincon.123@gmail.com
              </a>
            </div>
          </div>
          <div className="border-t border-(--line) px-4 py-4 text-center text-xs text-(--ink-faint) lg:px-6">
            © {new Date().getFullYear()} Fabo — Desarrollo de software a medida
          </div>
        </footer>
      </body>
    </html>
  );
}
