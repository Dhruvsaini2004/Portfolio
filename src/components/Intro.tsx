import { useEffect, useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1] as const
const NAME = "DHRUV SAINI"
const TAGLINE = "DESIGN × CODE × CURIOSITY"
const KEYWORDS = [
  "BUILDER",
  "SHIPPER",
  "TINKERER",
  "MAKER",
  "HACKER",
  "DREAMER",
  "STUDENT",
  "OPTIMIST",
]
const GLYPHS =
  "!<>-_/[]=+*^?#abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

/* overlay */
const overlayInitial = { opacity: 1 }
const overlayExit = { opacity: 0 }
const overlayTransition = { duration: 0 }

/* backdrop grid */
const gridStyle = {
  backgroundImage:
    "linear-gradient(hsl(var(--foreground) / 0.06) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.06) 1px, transparent 1px)",
  backgroundSize: "34px 34px",
}

/* content (fades out at exit) */
const contentInitial = { opacity: 1 }
const contentExit = { opacity: 0 }
const contentTransition = { duration: 0.3, ease: EASE }

/* marquees */
const marqueeTopInitial = { x: "0%" }
const marqueeTopAnimate = { x: "-50%" }
const marqueeTopTransition = {
  duration: 18,
  ease: "linear" as const,
  repeat: Infinity,
}
const marqueeBottomInitial = { x: "-50%" }
const marqueeBottomAnimate = { x: "0%" }

/* name wipe */
const nameInitial = { clipPath: "inset(0% 50% 0% 50%)" }
const nameShown = { clipPath: "inset(0% 0% 0% 0%)" }
const nameTransition = { duration: 0.95, ease: EASE, delay: 0.4 }
const nameStyle = {
  textShadow:
    "3px 3px 0 hsl(var(--primary) / 0.78), 6px 6px 0 hsl(var(--accent) / 0.62), 10px 10px 0 hsl(var(--foreground) / 0.12)",
}

/* line under name */
const lineInitial = { scaleX: 0 }
const lineShown = { scaleX: 1 }
const lineTransition = { duration: 0.7, ease: EASE, delay: 1.0 }

/* tagline */
const taglineInitial = { opacity: 0, y: 6 }
const taglineShown = { opacity: 1, y: 0 }
const taglineTransition = { duration: 0.5, ease: EASE, delay: 1.1 }

/* corner labels */
const cornerInitial = { opacity: 0 }
const cornerShown = { opacity: 1 }
const cornerTransition = { duration: 0.5, ease: EASE, delay: 1.3 }

/* curtain panels */
const panelInitial = { y: "100%" }
const panelAnimate = { y: "-100%" }
function panelTransition(delay: number) {
  return { duration: 0.9, ease: EASE, delay }
}

function useScramble(
  target: string,
  startDelayMs: number,
  durationMs: number,
  active: boolean,
): string {
  const [text, setText] = useState("")
  useEffect(() => {
    if (!active) {
      setText("")
      return
    }
    const start = performance.now() + startDelayMs
    let timer = 0
    const tick = () => {
      const elapsed = performance.now() - start
      if (elapsed < 0) {
        timer = window.setTimeout(tick, 30)
        return
      }
      const p = Math.min(1, elapsed / durationMs)
      const revealCount = Math.floor(p * target.length)
      let out = ""
      for (let i = 0; i < target.length; i++) {
        const ch = target[i]
        if (i < revealCount || ch === " " || ch === "×") {
          out += ch
        } else {
          out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        }
      }
      setText(out)
      if (p < 1) timer = window.setTimeout(tick, 45)
      else setText(target)
    }
    tick()
    return () => window.clearTimeout(timer)
  }, [target, startDelayMs, durationMs, active])
  return text
}

export function Intro({ onDone }: { onDone?: () => void }) {
  const reduce = useReducedMotion()
  const [phase, setPhase] = useState<"intro" | "exiting" | "done">("intro")
  const taglineText = useScramble(
    TAGLINE,
    1150,
    850,
    phase !== "done" && !reduce,
  )

  useEffect(() => {
    if (reduce) {
      setPhase("done")
      onDone?.()
      return
    }
    document.body.style.overflow = "hidden"
    const tExit = window.setTimeout(() => setPhase("exiting"), 2200)
    const tDone = window.setTimeout(() => {
      setPhase("done")
      document.body.style.overflow = ""
      onDone?.()
    }, 3300)
    return () => {
      window.clearTimeout(tExit)
      window.clearTimeout(tDone)
      document.body.style.overflow = ""
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce])

  if (reduce) return null

  const marqueeChunk = (
    <div className="flex shrink-0 items-center gap-10 px-5 font-pixel text-[10px] tracking-[0.3em] text-foreground/40">
      {KEYWORDS.map((w) => (
        <span key={w} className="flex items-center gap-10">
          {w} <span className="text-accent">◆</span>
        </span>
      ))}
    </div>
  )

  const animateContent = phase === "exiting" ? contentExit : contentInitial

  return (
    <AnimatePresence>
      {phase !== "done" ? (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[80] overflow-hidden bg-background"
          initial={overlayInitial}
          exit={overlayExit}
          transition={overlayTransition}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={gridStyle}
          />

          <motion.div
            className="absolute inset-0"
            initial={contentInitial}
            animate={animateContent}
            transition={contentTransition}
          >
            {/* top marquee */}
            <div className="absolute left-0 right-0 top-[16vh] overflow-hidden border-y border-foreground/10 bg-background/40 py-3">
              <motion.div
                className="flex w-max"
                initial={marqueeTopInitial}
                animate={marqueeTopAnimate}
                transition={marqueeTopTransition}
              >
                {marqueeChunk}
                {marqueeChunk}
              </motion.div>
            </div>

            {/* bottom marquee */}
            <div className="absolute bottom-[16vh] left-0 right-0 overflow-hidden border-y border-foreground/10 bg-background/40 py-3">
              <motion.div
                className="flex w-max"
                initial={marqueeBottomInitial}
                animate={marqueeBottomAnimate}
                transition={marqueeTopTransition}
              >
                {marqueeChunk}
                {marqueeChunk}
              </motion.div>
            </div>

            {/* centered name + line + tagline */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-7 px-6 text-center">
              <motion.h1
                className="text-balance font-display text-6xl font-extrabold uppercase leading-none tracking-tight text-foreground sm:text-8xl md:text-9xl"
                style={nameStyle}
                initial={nameInitial}
                animate={nameShown}
                transition={nameTransition}
              >
                {NAME}
              </motion.h1>

              <motion.div
                aria-hidden
                className="h-[2px] w-40 origin-center bg-gradient-to-r from-primary via-accent to-primary"
                initial={lineInitial}
                animate={lineShown}
                transition={lineTransition}
              />

              <motion.p
                className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground sm:text-sm"
                initial={taglineInitial}
                animate={taglineShown}
                transition={taglineTransition}
              >
                {taglineText || "\u00A0"}
              </motion.p>
            </div>

            {/* corner labels */}
            <motion.div
              className="pointer-events-none absolute left-6 top-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:left-10 sm:top-10"
              initial={cornerInitial}
              animate={cornerShown}
              transition={cornerTransition}
            >
              ◢ Portfolio · ’26
            </motion.div>
            <motion.div
              className="pointer-events-none absolute bottom-6 right-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:bottom-10 sm:right-10"
              initial={cornerInitial}
              animate={cornerShown}
              transition={cornerTransition}
            >
              Ghaziabad, IN ◣
            </motion.div>
          </motion.div>

          {/* curtain exit panels */}
          {phase === "exiting" ? (
            <>
              <motion.div
                className="absolute inset-0 bg-primary"
                initial={panelInitial}
                animate={panelAnimate}
                transition={panelTransition(0)}
              />
              <motion.div
                className="absolute inset-0 bg-accent"
                initial={panelInitial}
                animate={panelAnimate}
                transition={panelTransition(0.1)}
              />
              <motion.div
                className="absolute inset-0 bg-background"
                initial={panelInitial}
                animate={panelAnimate}
                transition={panelTransition(0.2)}
              />
            </>
          ) : null}
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
