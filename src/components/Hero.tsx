import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TechMarquee } from "@/components/TechMarquee";
import { profile } from "@/data/profile";

const EASE = [0.22, 1, 0.36, 1] as const;

/* Staggered entrance variants */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.08 },
  },
};
const rise = {
  hidden: { y: 26, opacity: 0, filter: "blur(8px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE },
  },
};
const hoverLift = { y: -2 };
const tapPress = { scale: 0.97 };

/* Decorative floating pixels */
const PIXELS = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  size: 5 + ((i * 3) % 8),
  duration: 16 + ((i * 5) % 18),
  delay: -((i * 7) % 20),
  accent: i % 2 === 0,
}));

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scroll-linked: content gently scales down, fades, and lifts as you leave.
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const contentStyle = reduce
    ? undefined
    : { scale: contentScale, opacity: contentOpacity, y: contentY };
  const gridStyle = reduce ? undefined : { y: gridY };
  const glowStyle = reduce ? undefined : { y: glowY };

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-32"
    >
      {/* Pixel grid backdrop */}
      <motion.div
        aria-hidden
        style={gridStyle}
        className="pointer-events-none absolute inset-0 -z-20 [mask-image:radial-gradient(ellipse_78%_65%_at_50%_32%,#000_55%,transparent_100%)]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.05)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </motion.div>

      {/* Glow blobs */}
      <motion.div
        aria-hidden
        style={glowStyle}
        className="pointer-events-none absolute inset-0 -z-30"
      >
        <div className="absolute -left-32 -top-32 h-[520px] w-[520px] rounded-full [background:radial-gradient(circle,hsl(var(--primary)/0.10),transparent_68%)] animate-drift" />
        <div className="absolute -bottom-40 -right-24 h-[480px] w-[480px] rounded-full [background:radial-gradient(circle,hsl(var(--accent)/0.12),transparent_68%)] animate-drift [animation-duration:26s]" />
      </motion.div>

      {/* Floating pixels */}
      {!reduce && (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          {PIXELS.map((p) => (
            <span
              key={p.id}
              className={
                p.accent
                  ? "absolute bottom-0 bg-accent/25 animate-float-up"
                  : "absolute bottom-0 bg-primary/25 animate-float-up"
              }
              style={{
                left: p.left,
                width: p.size,
                height: p.size,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Hero content */}
      <motion.div
        style={contentStyle}
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex w-full max-w-4xl flex-col items-center text-center"
      >
        <motion.div variants={rise}>
          <Badge variant="secondary" className="shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Currently building
            <span className="font-semibold text-accent">
              {profile.currentlyBuilding.name}
            </span>
          </Badge>
        </motion.div>

        <motion.p
          variants={rise}
          className="mt-8 font-pixel text-[11px] leading-loose tracking-wide text-primary"
        >
          {profile.role.toUpperCase()}
        </motion.p>

        <motion.h1
          variants={rise}
          className="mt-5 text-balance font-display text-6xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
        >
          <span className="text-gradient">{profile.headline.name}</span>
          <span className="ml-2 inline-block h-[0.72em] w-[0.1em] rounded-sm bg-accent align-baseline animate-blink" />
        </motion.h1>

        <motion.p
          variants={rise}
          className="mt-6 max-w-2xl text-balance font-display text-xl font-medium leading-snug text-foreground/90 sm:text-2xl"
        >
          {profile.headline.tagline}
        </motion.p>

        <motion.p
          variants={rise}
          className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          variants={rise}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <motion.div whileHover={hoverLift} whileTap={tapPress}>
            <Button asChild size="lg">
              <a href="#work">
                View my work
                <ArrowUpRight />
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={hoverLift} whileTap={tapPress}>
            <Button asChild variant="outline" size="lg">
              <a href={profile.resume} target="_blank" rel="noreferrer">
                Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Tech marquee (Swiper) */}
        <motion.div variants={rise} className="mt-16 w-full max-w-3xl">
          <TechMarquee />
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      {!reduce && (
        <motion.div
          initial={scrollCueInitial}
          animate={scrollCueAnimate}
          transition={scrollCueTransition}
          className="absolute bottom-8 flex flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70"
        >
          <span>scroll</span>
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        </motion.div>
      )}
    </section>
  );
}

const scrollCueInitial = { opacity: 0 };
const scrollCueAnimate = { opacity: 1 };
const scrollCueTransition = { delay: 1.4, duration: 0.8 };
