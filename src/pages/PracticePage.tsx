import { useState } from 'react'
import { motion } from 'framer-motion'
import { Scale, Building2, Users, ShieldCheck, FileSearch, Stethoscope, HardHat, Lightbulb } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import { useLang } from '../contexts/LanguageContext'

const PAGE_DELAY = 0.1
const areaIcons = [Scale, Building2, Users, ShieldCheck, FileSearch, Stethoscope, HardHat, Lightbulb]

export default function PracticePage() {
  const [active, setActive] = useState<number | null>(null)
  const { T } = useLang()

  return (
    <PageTransition>
      {/* PAGE HEADER */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_40%,rgba(201,165,90,0.06),transparent_65%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className="anim-fade-in-up flex items-center gap-4 mb-6"
            style={{ animationDelay: `${PAGE_DELAY}s` }}
          >
            <div className="w-8 h-px bg-gold-500" />
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold-400">{T.practice.badge}</span>
          </div>
          <h1
            className="anim-fade-in-up font-serif font-light text-5xl lg:text-7xl text-white leading-[0.95] max-w-2xl"
            style={{ animationDelay: `${PAGE_DELAY + 0.1}s` }}
          >
            {T.practice.h1a}{' '}
            <em className="text-gradient not-italic block">{T.practice.h1b}</em>
          </h1>
          <p
            className="anim-fade-in-up mt-8 font-sans text-[13px] text-white/35 tracking-wide"
            style={{ animationDelay: `${PAGE_DELAY + 0.2}s` }}
          >
            {T.practice.hint}
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
            {T.practice.areas.map((a, i) => {
              const Icon = areaIcons[i]
              return (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.65, delay: 0.3 + i * 0.07 }}
                  onClick={() => setActive(active === i ? null : i)}
                  className={`glass p-7 cursor-pointer group transition-colors duration-300 ${
                    active === i ? 'border-gold-500/40 bg-gold-500/5' : 'hover:border-gold-500/20'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center mb-5 transition-all duration-300 ${
                    active === i ? 'border-gold-500 bg-gold-500/10' : 'border-white/10 group-hover:border-gold-500/40'
                  }`}>
                    <Icon size={16} className={`transition-colors duration-300 ${active === i ? 'text-gold-400' : 'text-white/40 group-hover:text-gold-400'}`} />
                  </div>

                  <h3 className="font-serif text-xl text-white mb-3">{a.title}</h3>
                  <p className="font-sans text-[13px] text-white/45 leading-relaxed">{a.intro}</p>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateRows: active === i ? '1fr' : '0fr',
                      transition: 'grid-template-rows 0.35s ease',
                    }}
                  >
                    <ul className="overflow-hidden">
                      <li className="mt-5 pt-5 border-t border-gold-500/15 list-none">
                        <ul className="space-y-2.5">
                          {a.details.map((d) => (
                            <li key={d} className="flex items-start gap-2.5">
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" />
                              <span className="font-sans text-[12px] text-white/55 leading-relaxed">{d}</span>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[13px] text-white/40 mb-6"
          >
            {T.practice.ctaNote}
          </motion.p>
          <NavLink
            to="/kontakt"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-navy-950 font-sans font-medium text-xs tracking-[0.2em] uppercase hover:bg-gold-400 transition-colors duration-300"
          >
            {T.practice.ctaBtn}
          </NavLink>
        </div>
      </section>
    </PageTransition>
  )
}
