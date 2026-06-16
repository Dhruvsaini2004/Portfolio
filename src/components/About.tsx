import { motion } from "framer-motion"
import { Mail, Linkedin, Github, GraduationCap, Award } from "lucide-react"

import { profile } from "@/data/profile"

const EASE = [0.22, 1, 0.36, 1] as const
const viewportOnce = { once: true, margin: "-12% 0px" }

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

export function About() {
  const { about } = profile
  return (
    <section id="about" className="relative border-t border-border py-28 sm:py-36">
      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.p
            variants={fadeUp}
            className="font-pixel text-[11px] tracking-wide text-accent"
          >
            {about.eyebrow}
          </motion.p>

          <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* Statement + philosophy */}
            <div>
              <motion.h2
                variants={fadeUp}
                className="max-w-xl text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl"
              >
                {about.statement}
              </motion.h2>
              <div className="mt-7 flex max-w-xl flex-col gap-5">
                {about.paragraphs.map((p) => (
                  <motion.p
                    key={p}
                    variants={fadeUp}
                    className="text-lg leading-relaxed text-muted-foreground"
                  >
                    {p}
                  </motion.p>
                ))}
              </div>

              {/* What drives me */}
              <motion.div
                variants={fadeUp}
                className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3"
              >
                {about.drivers.map((d) => (
                  <div key={d.title} className="bg-card p-5">
                    <p className="font-mono text-sm font-medium text-primary">
                      {d.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {d.detail}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Side rail: education, skills, certs */}
            <div className="flex flex-col gap-6">
              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-6 pixel-shadow"
              >
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="h-4 w-4" />
                  <span className="font-mono text-xs uppercase tracking-[0.18em]">
                    Education
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug">
                  {about.education.degree}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {about.education.school}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
                  <span className="text-foreground/70">
                    {about.education.duration}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                  <span>{about.education.detail}</span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Technical skills
                </span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {about.skillsNarrative}
                </p>
                <div className="mt-5 flex flex-col gap-4">
                  {about.skillGroups.map((group) => (
                    <div key={group.label}>
                      <p className="font-mono text-[11px] uppercase tracking-wide text-foreground/60">
                        {group.label}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-[11px] text-muted-foreground"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Award className="h-4 w-4" />
                  <span className="font-mono text-xs uppercase tracking-[0.18em]">
                    A few things worth mentioning
                  </span>
                </div>
                <ul className="mt-4 flex flex-col gap-4">
                  {about.certifications.map((c) => (
                    <li key={c.title} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                      <div>
                        <p className="text-sm font-medium leading-snug text-foreground">
                          {c.title}
                        </p>
                        <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                          {c.issuer}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const channelIcons: Record<string, typeof Mail> = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github,
}

export function Contact() {
  const { contact } = profile
  return (
    <section id="contact" className="relative border-t border-border py-28 sm:py-36">
      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="font-pixel text-[11px] tracking-wide text-accent"
          >
            {contact.eyebrow}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-6 text-balance font-display text-4xl font-bold tracking-tight sm:text-6xl"
          >
            {contact.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {contact.subtitle}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {contact.channels.map((ch) => {
              const Icon = channelIcons[ch.label]
              return (
                <a
                  key={ch.label}
                  href={ch.href}
                  target={ch.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 no-underline transition-all hover:-translate-y-1 hover:border-primary hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary/60 text-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {ch.label}
                  </span>
                  <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                    {ch.cta}
                  </span>
                </a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
