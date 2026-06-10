import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { ArrowRight, ArrowDown } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { useLang } from '../contexts/LanguageContext'

function PracticePills() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { T } = useLang()

  return (
    <div ref={ref} className="flex flex-wrap gap-3">
      {T.practiceShort.map((area, i) => (
        <div
          key={area}
          className={`${inView ? 'anim-fade-in-up' : 'opacity-0'} glass px-5 py-3 text-[13px] font-sans text-white/60 hover:text-gold-400 hover:border-gold-500/30 transition-colors duration-300 cursor-default`}
          style={inView ? { animationDelay: `${i * 0.07}s` } : undefined}
        >
          {area}
        </div>
      ))}
      <div
        className={inView ? 'anim-fade-in-up' : 'opacity-0'}
        style={inView ? { animationDelay: `${T.practiceShort.length * 0.07}s` } : undefined}
      >
        <NavLink
          to="/praktyka"
          className="inline-flex items-center gap-2 px-5 py-3 border border-gold-500/40 text-gold-400 text-[13px] font-sans hover:bg-gold-500/10 transition-all duration-300"
        >
          {T.home.practiceFullList} <ArrowRight size={12} />
        </NavLink>
      </div>
    </div>
  )
}

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { T } = useLang()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const particles: { x: number; y: number; vx: number; vy: number; opacity: number; size: number }[] = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 55; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: -Math.random() * 0.25 - 0.08,
        opacity: Math.random() * 0.35 + 0.05,
        size: Math.random() * 1.4 + 0.4,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201, 165, 90, ${p.opacity})`
        ctx.fill()
        p.x += p.vx
        p.y += p.vy
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width }
        if (p.x < -10) p.x = canvas.width + 10
        if (p.x > canvas.width + 10) p.x = -10
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <PageTransition>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(201,165,90,0.06),transparent_70%)]" />
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'top' }}
          className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/30 to-transparent hidden lg:block"
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-12 h-px bg-gold-500" />
              <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold-400">
                {T.home.heroBadge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-light text-5xl sm:text-6xl lg:text-8xl leading-[0.95] mb-8"
            >
              {T.home.heroH1a}{' '}
              <em className="text-gradient not-italic block sm:inline">{T.home.heroH1b}</em>{' '}
              <span className="block">{T.home.heroH1c}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="font-sans font-light text-white/55 text-base lg:text-lg leading-relaxed max-w-xl mb-12"
            >
              {T.home.heroDesc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <NavLink
                to="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-navy-950 font-sans font-medium text-xs tracking-[0.2em] uppercase hover:bg-gold-400 transition-colors duration-300"
              >
                {T.home.heroCtaPrimary}
              </NavLink>
              <NavLink
                to="/praktyka"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white/70 font-sans text-xs tracking-[0.2em] uppercase hover:border-gold-500/50 hover:text-gold-400 transition-all duration-300"
              >
                {T.home.heroCtaSecondary}
              </NavLink>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/30">{T.home.heroScroll}</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <ArrowDown size={14} className="text-gold-500/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* QUICK INTRO */}
      <section className="relative py-24 lg:py-32 bg-navy-900/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-8 h-px bg-gold-500" />
                <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold-400">{T.home.introBadge}</span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif font-light text-3xl lg:text-4xl text-white leading-[1.15] mb-6"
              >
                {T.home.introH2a}{' '}
                <em className="text-gradient not-italic">{T.home.introH2b}</em>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-sans font-light text-white/50 text-[15px] leading-relaxed mb-8"
              >
                {T.home.introDesc}
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <NavLink
                  to="/o-kancelarii"
                  className="inline-flex items-center gap-3 font-sans text-xs tracking-[0.2em] uppercase text-gold-400 hover:gap-5 transition-all duration-300 group"
                >
                  {T.home.introLink}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </NavLink>
              </motion.div>
            </div>

            <PracticePills />
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-800/50 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,165,90,0.07),transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif font-light text-3xl lg:text-4xl text-white mb-6"
          >
            {T.home.ctaH2a}{' '}
            <em className="text-gradient not-italic">{T.home.ctaH2b}</em>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <NavLink
              to="/kontakt"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gold-500 text-navy-950 font-sans font-medium text-xs tracking-[0.2em] uppercase hover:bg-gold-400 transition-colors duration-300"
            >
              {T.home.ctaBtn} <ArrowRight size={14} />
            </NavLink>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
