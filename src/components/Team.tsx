import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Award, Briefcase } from 'lucide-react'

const credentials = [
  { icon: GraduationCap, text: 'Absolwent Wydziału Prawa i Administracji Uniwersytetu Warszawskiego' },
  { icon: Award, text: 'Wpis na listę radców prawnych Okręgowej Izby Radców Prawnych w Warszawie' },
  { icon: Briefcase, text: 'Ponad 10 lat doświadczenia w obsłudze prawnej przedsiębiorców i osób prywatnych' },
]

export default function Team() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="zespol" ref={ref} className="relative py-32 lg:py-44">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(201,165,90,0.04),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-8 h-px bg-gold-500" />
          <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold-400">Zespół</span>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border border-gold-500/20" />
              <div className="relative bg-navy-800 aspect-[3/4] overflow-hidden">
                {/* Placeholder portrait */}
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-navy-950/90 via-navy-900/20 to-transparent p-8">
                  <div className="w-full">
                    <p className="font-serif text-2xl text-white mb-1">Jan Kowalski</p>
                    <p className="font-sans text-xs tracking-[0.2em] text-gold-400 uppercase">Radca Prawny</p>
                  </div>
                </div>
                {/* SVG placeholder silhouette */}
                <svg viewBox="0 0 300 400" className="w-full h-full opacity-20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="300" height="400" fill="#0f1a2e"/>
                  <circle cx="150" cy="140" r="65" fill="#c9a55a22"/>
                  <path d="M60 400 Q60 280 150 270 Q240 280 240 400" fill="#c9a55a18"/>
                </svg>
              </div>
            </div>

            {/* Quick stats */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { num: '10+', label: 'lat doświadczenia' },
                { num: '500+', label: 'spraw zakończonych' },
              ].map((s) => (
                <div key={s.label} className="glass p-4 text-center">
                  <p className="font-serif text-2xl text-gold-400 mb-1">{s.num}</p>
                  <p className="font-sans text-[11px] text-white/40 tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bio column */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif font-light text-4xl lg:text-5xl text-white leading-[1.1] mb-6"
            >
              r.pr. Jan Kowalski
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-16 h-px bg-gold-500 mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans font-light text-white/55 text-[15px] leading-relaxed mb-5"
            >
              Radca prawny z ponad dziesięcioletnim stażem zawodowym. Specjalizuje
              się w prawie cywilnym, gospodarczym i prawie pracy, świadcząc usługi
              zarówno dla przedsiębiorców, jak i osób fizycznych.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="font-sans font-light text-white/55 text-[15px] leading-relaxed mb-10"
            >
              Reprezentuje Klientów w postępowaniach sądowych, prowadzi negocjacje,
              sporządza umowy oraz opinie prawne. Szczególną wagę przywiązuje do
              indywidualnego traktowania każdej sprawy i regularnego kontaktu
              z Klientem na każdym etapie postępowania.
            </motion.p>

            <div className="flex flex-col gap-5">
              {credentials.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.35 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full border border-gold-500/30 flex items-center justify-center">
                    <c.icon size={13} className="text-gold-500" />
                  </div>
                  <p className="font-sans text-[13px] text-white/50 leading-relaxed">{c.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
