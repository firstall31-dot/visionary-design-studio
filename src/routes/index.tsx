import { createFileRoute } from "@tanstack/react-router";
import { Grain } from "@/components/Grain";
import heroOrb from "@/assets/hero-orb.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samshir Ali — Graphic Design Portfolio 2025" },
      {
        name: "description",
        content:
          "Graphic design portfolio 2025 by Samshir Ali: brand identity, poster art direction, packaging and social campaign design in a dark monochrome style.",
      },
      { property: "og:title", content: "Samshir Ali — Graphic Design Portfolio 2025" },
      {
        property: "og:description",
        content:
          "Brand identity, poster art direction, packaging and campaign design — a monochrome portfolio for 2025.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const works = [
  { img: work1, title: "Laminar", tag: "Poster Series", year: "2025" },
  { img: work2, title: "Bandik", tag: "Brand Identity", year: "2024" },
  { img: work3, title: "Casign", tag: "Logo System", year: "2025" },
  { img: work4, title: "Nocturne", tag: "Packaging", year: "2024" },
];

const services = [
  { n: "01", t: "Brand Identity", d: "Marks, systems, and guidelines built to survive scale." },
  { n: "02", t: "Art Direction", d: "Posters, covers, and campaign visuals with a point of view." },
  { n: "03", t: "Packaging", d: "Tactile, high-contrast structures and print-ready artwork." },
  { n: "04", t: "Social Design", d: "Templates and motion-ready assets for consistent output." },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <div aria-hidden className="page-atmosphere" />
      <div aria-hidden className="film-grain" />

      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="font-script text-2xl text-primary">Samshir</span>
          <div className="hidden gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground md:flex">
            <a href="#work" className="transition-colors hover:text-foreground">
              Work
            </a>
            <a href="#services" className="transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-primary px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Hire me
          </a>
        </nav>
      </header>

      {/* Hero — artboard composition from the reference cover */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
        <div className="relative z-10 w-full max-w-6xl">
          <div className="relative px-6 py-10 md:px-16 md:py-20">
            <div className="selection-frame" />
            {[
              ["0%", "0%"],
              ["50%", "0%"],
              ["100%", "0%"],
              ["0%", "50%"],
              ["100%", "50%"],
              ["0%", "100%"],
              ["50%", "100%"],
              ["100%", "100%"],
            ].map(([left, top]) => (
              <span key={`${left}-${top}`} aria-hidden className="sel-handle" style={{ left, top }} />
            ))}

            <p className="mb-1 pl-[2%] text-left font-display text-lg font-bold tracking-tight md:text-3xl">
              Graphic <span className="text-muted-foreground">Design</span>
            </p>

            <div className="relative flex items-center justify-center">
              <h1 className="text-chrome flex items-center justify-center font-display text-[19vw] font-black leading-[0.82] tracking-[-0.03em] md:text-[12rem]">
                <span>Portf</span>
                <span aria-hidden className="inline-block w-[0.74em]" />
                <span>lio</span>
              </h1>

              <img
                src={heroOrb}
                alt="Hands cradling a glowing sphere of light"
                width={1408}
                height={1408}
                className="pointer-events-none absolute left-[53.5%] top-1/2 w-[40vw] max-w-none -translate-x-1/2 -translate-y-[34%] select-none mix-blend-screen brightness-[1.3] contrast-[1.2] md:w-[26rem]"
              />

              <p className="text-lime-glow pointer-events-none absolute bottom-0 right-[2%] translate-y-[45%] -rotate-3 font-script text-4xl md:text-7xl">
                Samshir Ali
              </p>
            </div>

          </div>


          <p className="mx-auto mt-16 max-w-md text-center text-sm leading-relaxed text-muted-foreground">
            Independent graphic designer working in identity, print and campaign
            art direction. Selected work from 2024–2025.
          </p>
        </div>
        <Grain />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </section>


      {/* Marquee */}
      <div className="relative overflow-hidden border-y border-border py-5">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-10">
              {["Identity", "Posters", "Packaging", "Typography", "Campaigns", "Editorial"].map(
                (w) => (
                  <span
                    key={w}
                    className="font-display text-2xl font-bold uppercase tracking-tight text-muted-foreground md:text-4xl"
                  >
                    {w} <span className="text-primary">/</span>
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Work */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-14 flex items-end justify-between border-b border-border pb-6">
          <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight md:text-6xl">
            Selected Work
          </h2>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            04 Projects
          </span>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {works.map((w) => (
            <article key={w.title} className="group">
              <div className="relative overflow-hidden bg-card">
                <img
                  src={w.img}
                  alt={`${w.title} — ${w.tag}`}
                  loading="lazy"
                  width={1000}
                  height={1250}
                  className="aspect-[4/5] w-full object-cover grayscale transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="grain-overlay" />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="font-display text-xl font-bold uppercase tracking-tight">
                  {w.title}
                </h3>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {w.tag} · {w.year}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="mb-12 font-display text-4xl font-extrabold uppercase tracking-tight md:text-6xl">
            What I Do
          </h2>
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.n}
                className="bg-background p-8 transition-colors duration-300 hover:bg-card"
              >
                <span className="font-script text-3xl text-primary">{s.n}</span>
                <h3 className="mt-6 font-display text-lg font-bold uppercase tracking-tight">
                  {s.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-14 md:grid-cols-[1fr_1.2fr]">
          <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-6xl">
            About
            <span className="block font-script text-5xl font-normal normal-case text-primary md:text-7xl">
              the designer
            </span>
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed text-foreground/90">
              I build visual systems that hold up in the dark — heavy contrast,
              honest typography, and no decoration that isn't doing work.
            </p>
            <p className="leading-relaxed">
              Over the last six years I've shaped identities for studios,
              record labels and product teams, moving between Illustrator,
              Photoshop and the press floor. Every project starts with the mark
              and ends with a system somebody else can run without me.
            </p>
            <dl className="grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["06", "Years"],
                ["48", "Projects"],
                ["12", "Awards"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="text-chrome font-display text-4xl font-extrabold">{v}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.25em]">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden border-t border-border px-6 py-32">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Available for 2025
          </p>
          <h2 className="text-chrome mt-6 font-display text-[13vw] font-extrabold leading-[0.85] tracking-tight md:text-8xl">
            Let's Work
          </h2>
          <a
            href="mailto:hello@samshir.design"
            className="mt-10 inline-block font-script text-4xl text-primary underline-offset-8 transition-opacity hover:opacity-80 md:text-5xl"
          >
            hello@samshir.design
          </a>
        </div>
        <Grain />
      </section>

      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground sm:flex-row">
          <span>© 2025 Samshir Ali</span>
          <div className="flex gap-6">
            <a href="#work" className="transition-colors hover:text-foreground">
              Behance
            </a>
            <a href="#work" className="transition-colors hover:text-foreground">
              Instagram
            </a>
            <a href="#work" className="transition-colors hover:text-foreground">
              Dribbble
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
