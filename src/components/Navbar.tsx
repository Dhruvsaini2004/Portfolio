import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { profile } from "@/data/profile"

const links = [
  { label: "work", href: "#work" },
  { label: "about", href: "#about" },
  { label: "contact", href: "#contact" },
]

const navInitial = { y: -32, opacity: 0 }
const navAnimate = { y: 0, opacity: 1 }
const navTransition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }

export function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24)
  })

  return (
    <motion.header
      initial={navInitial}
      animate={navAnimate}
      transition={navTransition}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90"
          : "border-b border-transparent",
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <span className="h-2.5 w-2.5 bg-primary pixel-shadow-accent" />
          <span className="font-pixel text-[11px] tracking-tight text-foreground">
            DHRUV.S
          </span>
        </a>

        <div className="hidden items-center gap-8 font-mono text-sm md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground no-underline transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <Button variant="ghost" size="icon" asChild aria-label="GitHub">
            <a href={profile.socials.github} target="_blank" rel="noreferrer">
              <Github />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild aria-label="LinkedIn">
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
              <Linkedin />
            </a>
          </Button>
          <Button asChild variant="primary" size="sm" className="ml-1">
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </nav>
    </motion.header>
  )
}
