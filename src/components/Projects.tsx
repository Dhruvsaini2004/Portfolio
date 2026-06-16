import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Github } from "lucide-react"

import { profile } from "@/data/profile"

type Project = (typeof profile.projects)[number]

const EASE = [0.22, 1, 0.36, 1] as const
const viewportOnce = { once: true, margin: "-12% 0px" }

const header = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

function ProjectPanel({ project }: { project: Project }) {
  const reduce = useReducedMotion()
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-card pixel-shadow">
      <div className="flex items-center gap-2 border-b border-border bg-secondary/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="ml-2 font-mono text-[11px] text-muted-foreground">
          {project.panel.file}
        </span>
      </div>
      <div className="relative overflow-hidden p-6">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.04)_1px,transparent_1px)] bg-[size:22px_22px]" />
        <div className="relative flex flex-col gap-2.5">
          {project.panel.signals.map((sig, i) => (
            <div key={sig} className="flex items-center gap-3 font-mono text-xs">
              <span className="text-muted-foreground/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="h-1.5 w-1.5 shrink-0 bg-primary" />
              <span className="tracking-wide text-foreground/80">{sig}</span>
              <span className="ml-auto text-muted-foreground/50">
                {i === project.panel.signals.length - 1 ? "✓" : "→"}
              </span>
            </div>
          ))}
        </div>
        <div className="relative mt-6 flex items-end justify-between border-t border-border pt-4">
          <div>
            <div className="font-pixel text-base leading-snug text-foreground">
              {project.metric.value}
            </div>
            <div className="mt-2 font-mono text-[11px] text-muted-foreground">
              {project.metric.label}
            </div>
          </div>
          <span className="font-mono text-[11px] text-muted-foreground/60">
            Fig {project.index}.A
          </span>
        </div>
        {!reduce && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px animate-scan bg-gradient-to-r from-transparent via-primary/70 to-transparent"
          />
        )}
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const hasLive = "live" in project.links && Boolean(project.links.live)
  return (
    <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-xl shadow-foreground/5 sm:p-8">
      <div className="flex flex-1 flex-col gap-8">
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <span className="font-pixel text-3xl text-transparent [-webkit-text-stroke:1.5px_hsl(var(--accent))] sm:text-4xl">
              {project.index}
            </span>
            {project.building && (
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 font-mono text-[11px] text-accent">
                <span className="h-1.5 w-1.5 animate-blink rounded-full bg-accent" />
                Currently building
              </span>
            )}
          </div>
          <h3 className="mt-5 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-2 font-mono text-sm text-primary">
            {project.tagline}.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
          <ul className="mt-5 flex flex-col gap-2.5">
            {project.impact.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-foreground/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-primary" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-[11px] text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-7 flex items-center gap-5 font-mono text-sm">
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-foreground no-underline transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" />
              <span>Code</span>
            </a>
            {hasLive && (
              <a
                href={(project.links as { live: string }).live}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-foreground no-underline transition-colors hover:text-primary"
              >
                <span>Live</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
            <span className="ml-auto text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
              {project.meta}
            </span>
          </div>
        </div>
        <div className="w-full">
          <ProjectPanel project={project} />
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="container">
        <motion.div
          variants={header}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="font-pixel text-[11px] tracking-wide text-accent">
              {profile.work.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {profile.work.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {profile.work.subtitle}
            </p>
          </div>
          <p className="hidden shrink-0 font-mono text-xs text-muted-foreground md:block">
            Scroll to explore ↓
          </p>
        </motion.div>

        <div className="mt-14">
          <div className="mx-auto flex max-w-3xl flex-col gap-8">
            {profile.projects.map((project, i) => {
              const stickyStyle = { top: `${100 + i * 22}px` }
              return (
                <div key={project.name} id={`project-${project.name.toLowerCase().replace(/\s+/g, "-")}`} className="sticky" style={stickyStyle}>
                  <ProjectCard project={project} />
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-16">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-sm text-muted-foreground no-underline transition-colors hover:text-primary"
          >
            {profile.work.closing}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
