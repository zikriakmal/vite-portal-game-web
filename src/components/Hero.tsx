import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import heroImage from '../assets/hero.png'

const stageInitialStyle = { '--tilt-x': '0deg', '--tilt-y': '0deg' } as CSSProperties

function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let ticking = false

    const applyScrollParallax = () => {
      ticking = false
      const section = sectionRef.current
      const bg = bgRef.current
      if (!section || !bg) return

      const rect = section.getBoundingClientRect()
      const progress = rect.top / window.innerHeight
      bg.style.transform = `translate3d(0, ${progress * -40}px, 0)`
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(applyScrollParallax)
      }
    }

    applyScrollParallax()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const stage = stageRef.current
    if (!stage) return

    const onPointerMove = (event: PointerEvent) => {
      const rect = stage.getBoundingClientRect()
      const relX = (event.clientX - rect.left) / rect.width - 0.5
      const relY = (event.clientY - rect.top) / rect.height - 0.5
      stage.style.setProperty('--tilt-x', `${relY * -10}deg`)
      stage.style.setProperty('--tilt-y', `${relX * 10}deg`)
    }

    const onPointerLeave = () => {
      stage.style.setProperty('--tilt-x', '0deg')
      stage.style.setProperty('--tilt-y', '0deg')
    }

    stage.addEventListener('pointermove', onPointerMove)
    stage.addEventListener('pointerleave', onPointerLeave)
    return () => {
      stage.removeEventListener('pointermove', onPointerMove)
      stage.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative isolate mt-2 grid min-h-[440px] grid-cols-[1.1fr_0.9fr] items-center gap-8 overflow-hidden rounded-[28px] border border-surface-border bg-bg-elevated p-14 px-12 max-[820px]:grid-cols-1 max-[820px]:px-7 max-[820px]:py-10 max-[820px]:text-center"
    >
      <div
        ref={bgRef}
        aria-hidden="true"
        className="absolute -top-20 -bottom-20 inset-x-0 -z-10 [will-change:transform]"
      >
        <div className="absolute -top-[140px] -left-[100px] h-[420px] w-[420px] rounded-full bg-accent opacity-[0.35] blur-[70px]" />
        <div className="absolute right-0 -bottom-[100px] h-[320px] w-[320px] rounded-full bg-accent-cyan opacity-[0.22] blur-[70px]" />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(205,214,244,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(205,214,244,0.05)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_30%_30%,black_0%,transparent_70%)]" />
      </div>

      <div className="flex flex-col items-start gap-1 max-[820px]:items-center">
        <span className="block font-display text-[0.8rem] font-semibold tracking-[0.12em] text-accent-soft uppercase">
          Game Developer Portfolio
        </span>
        <h1 className="my-1 mb-4 font-display text-[clamp(2.25rem,4vw,3.25rem)] leading-[1.08] font-bold [background-image:linear-gradient(135deg,var(--color-text)_30%,var(--color-accent-soft))] bg-clip-text text-transparent">
          Build. Play. Repeat.
        </h1>
        <p className="mb-8 max-w-[42ch] text-[1.05rem] leading-[1.6] text-text-muted max-[820px]:max-w-full">
          A growing collection of games I've built, playable straight from the browser.
        </p>
        <a
          href="#games"
          className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-br from-accent to-accent-soft px-7 py-3.5 font-semibold text-white shadow-[0_8px_24px_rgba(74,222,128,0.35)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(74,222,128,0.45)]"
        >
          Explore Games
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-y-[3px]"
          >
            ↓
          </span>
        </a>
      </div>

      <div
        ref={stageRef}
        style={stageInitialStyle}
        className="relative flex min-h-[260px] items-center justify-center [perspective:800px] max-[820px]:order-first max-[820px]:min-h-[200px]"
      >
        <div className="absolute h-[260px] w-[260px] rounded-full [background-image:radial-gradient(circle,var(--color-accent)_0%,transparent_70%)] opacity-30 blur-[20px]" />
        <div className="animate-float motion-reduce:animate-none">
          <img
            src={heroImage}
            alt=""
            className="w-[260px] max-w-full [filter:drop-shadow(0_20px_40px_rgba(74,222,128,0.35))] [transform:rotateX(var(--tilt-x))_rotateY(var(--tilt-y))] transition-transform duration-200 ease-out max-[820px]:w-[200px]"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
