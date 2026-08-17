import { useEffect, useRef } from 'react'
import './Hero.css'
import heroImage from '../assets/hero.png'

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
    <section className="hero" ref={sectionRef}>
      <div className="hero__bg" ref={bgRef} aria-hidden="true">
        <div className="hero__glow hero__glow--accent" />
        <div className="hero__glow hero__glow--cyan" />
        <div className="hero__grid" />
      </div>

      <div className="hero__content">
        <span className="section-eyebrow">Game Developer Portfolio</span>
        <h1 className="hero__title">Build. Play. Repeat.</h1>
        <p className="hero__subtitle">
          A growing collection of games I've built, playable straight from the browser.
        </p>
        <a href="#games" className="hero__cta">
          Explore Games
          <span className="hero__cta-arrow" aria-hidden="true">↓</span>
        </a>
      </div>

      <div className="hero__stage" ref={stageRef}>
        <div className="hero__stage-glow" />
        <div className="hero__float-wrapper">
          <img src={heroImage} alt="" className="hero__floating-card" />
        </div>
      </div>
    </section>
  )
}

export default Hero
