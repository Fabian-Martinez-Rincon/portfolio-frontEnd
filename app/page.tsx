import { projects } from "@/lib/projects";
import { ProjectPreview } from "./_components/project-preview";
import { Reveal } from "./_components/reveal";

const CONTACT_EMAIL = "fabianmartinezrincon.123@gmail.com";

const stats = [
  { value: String(projects.length), label: "proyectos propios, de punta a punta" },
  { value: `${new Set(projects.flatMap((p) => p.stack)).size}+`, label: "tecnologías distintas en uso" },
  { value: "100%", label: "full-stack: front, back e infra" },
];

const process = [
  {
    step: "01",
    title: "Diagnóstico",
    description: "Entiendo el problema real detrás del pedido antes de escribir una línea de código.",
  },
  {
    step: "02",
    title: "Desarrollo",
    description: "Iteraciones cortas y demos frecuentes, con código pensado para mantenerse en el tiempo.",
  },
  {
    step: "03",
    title: "Entrega y soporte",
    description: "Deploy a producción y acompañamiento después del lanzamiento, no solo hasta el hand-off.",
  },
];

const services = [
  {
    title: "Aplicaciones web a medida",
    description: "Plataformas y herramientas internas construidas de cero, con foco en que sean rápidas y fáciles de mantener.",
    icon: (
      <path d="M8 4 3 12l5 8M16 4l5 8-5 8M13 3l-2 18" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Paneles y dashboards",
    description: "Visualización de datos, métricas y seguimiento de progreso adaptados a cómo trabaja tu equipo.",
    icon: (
      <path d="M4 20V10m7 10V4m7 16v-7" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Integraciones con APIs",
    description: "Pagos (Mercado Pago), login social, redes sociales y otros servicios de terceros conectados a tu app.",
    icon: (
      <path
        d="M9 15 15 9m-4-3 1.4-1.4a4 4 0 1 1 5.7 5.7L16 12m-8 0-1.4 1.4a4 4 0 1 0 5.7 5.7L13.7 18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Automatizaciones",
    description: "Procesos repetitivos resueltos con scripts y bots que corren solos, sin intervención manual.",
    icon: (
      <path
        d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.5-6.5-2 2m-9 9-2 2m0-13 2 2m9 9 2 2M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

const badgeGradients = [
  "from-blue-500 to-violet-500",
  "from-violet-500 to-fuchsia-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-cyan-500 to-blue-500",
  "from-fuchsia-500 to-pink-500",
];

export default function Home() {
  return (
    <div id="top">
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-(--brand) opacity-[0.12] blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-32 right-0 h-64 w-64 rounded-full bg-(--accent) opacity-[0.10] blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-5xl px-4 py-20 lg:px-6 lg:py-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-(--line) bg-(--bg-elevated) px-3 py-1 text-xs font-medium text-(--ink-dim)">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-(--success) opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-(--success)" />
              </span>
              Disponible para nuevos proyectos
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 max-w-2xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Construyo <span className="text-gradient">aplicaciones web a medida</span> para tu negocio
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 max-w-xl text-lg text-(--ink-dim)">
              Full-stack: desde la idea hasta una app en producción. Estos son proyectos reales que armé de punta a
              punta — así trabajo.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#proyectos"
                className="inline-flex items-center rounded-(--radius) bg-(--brand) px-5 py-2.5 text-sm font-semibold text-(--brand-foreground) shadow-(--shadow) transition hover:-translate-y-0.5 hover:bg-(--brand-strong) hover:shadow-(--shadow-lg)"
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center rounded-(--radius) border border-(--line) px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-(--line-strong) hover:bg-(--bg-elevated)"
              >
                Contactarme
              </a>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-(--line) pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-3xl font-extrabold tracking-tight text-foreground">{stat.value}</dd>
                  <p className="mt-1 text-xs text-(--ink-faint)">{stat.label}</p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section id="proyectos" className="border-t border-(--line) bg-(--bg-sunken) py-16 lg:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 lg:px-6">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">Proyectos</h2>
            <p className="mt-2 max-w-xl text-(--ink-dim)">Aplicaciones que diseñé y construí de principio a fin.</p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={i * 70}>
                <article className="group flex h-full flex-col overflow-hidden rounded-(--radius-lg) border border-(--line) bg-(--bg-elevated) shadow-(--shadow) transition duration-300 hover:-translate-y-1 hover:border-(--line-strong) hover:shadow-(--shadow-lg)">
                  <ProjectPreview id={project.id} gradient={badgeGradients[i % badgeGradients.length]} />

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start gap-3">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-sm font-black text-white ${badgeGradients[i % badgeGradients.length]}`}
                        aria-hidden="true"
                      >
                        {project.name.charAt(0)}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold leading-tight text-foreground">{project.name}</h3>
                        <p className="mt-0.5 text-sm font-medium text-(--brand)">{project.tagline}</p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-(--ink-dim)">{project.description}</p>

                    <ul className="mt-4 space-y-1.5">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2 text-sm text-(--ink-dim)">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-(--brand)" aria-hidden="true" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-1.5 border-t border-(--line) pt-4">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-(--line) px-2.5 py-0.5 text-xs font-medium text-(--ink-faint)"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="como-trabajo" className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 lg:px-6">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">Cómo trabajo</h2>
            <p className="mt-2 max-w-xl text-(--ink-dim)">Un proceso simple, pensado para llegar a producción.</p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 90}>
                <div className="relative">
                  <span className="text-4xl font-black text-(--line-strong)" aria-hidden="true">
                    {item.step}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-(--ink-dim)">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="border-t border-(--line) bg-(--bg-sunken) py-16 lg:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 lg:px-6">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">Servicios</h2>
            <p className="mt-2 max-w-xl text-(--ink-dim)">En qué te puedo ayudar.</p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 70}>
                <div className="flex gap-4 rounded-(--radius-lg) border border-(--line) bg-(--bg-elevated) p-5 transition hover:border-(--line-strong)">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-9 w-9 shrink-0 text-(--brand)"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  >
                    {service.icon}
                  </svg>
                  <div>
                    <h3 className="font-bold text-foreground">{service.title}</h3>
                    <p className="mt-1.5 text-sm text-(--ink-dim)">{service.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 lg:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-(--radius-lg) border border-(--line) bg-(--bg-elevated) px-6 py-14 text-center shadow-(--shadow) sm:px-12">
              <div
                className="pointer-events-none absolute -top-16 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-(--brand) opacity-[0.10] blur-3xl"
                aria-hidden="true"
              />
              <h2 className="relative text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                ¿Tenés un proyecto en mente?
              </h2>
              <p className="relative mx-auto mt-2 max-w-md text-(--ink-dim)">
                Contame qué necesitás y vemos cómo lo armamos.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="relative mt-6 inline-flex items-center rounded-(--radius) bg-(--brand) px-6 py-3 text-sm font-semibold text-(--brand-foreground) shadow-(--shadow) transition hover:-translate-y-0.5 hover:bg-(--brand-strong) hover:shadow-(--shadow-lg)"
              >
                Escribime a {CONTACT_EMAIL}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
