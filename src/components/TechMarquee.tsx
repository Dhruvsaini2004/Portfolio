import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode } from "swiper/modules"
import "swiper/css"
import "swiper/css/free-mode"

import { profile } from "@/data/profile"

const freeModeConfig = { enabled: true, momentum: false }
const autoplayConfig = {
  delay: 0,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
}

export function TechMarquee() {
  const items = [...profile.techStack, ...profile.techStack]

  return (
    <div className="relative w-full overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <Swiper
        className="tech-marquee"
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        spaceBetween={12}
        loop
        allowTouchMove
        speed={4000}
        freeMode={freeModeConfig}
        autoplay={autoplayConfig}
      >
        {items.map((tech, i) => (
          <SwiperSlide key={`${tech}-${i}`} className="!w-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-mono text-sm text-muted-foreground">
              <span className="h-1.5 w-1.5 bg-primary" />
              {tech}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
