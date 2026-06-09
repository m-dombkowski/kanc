import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const values = [
  {
    title: 'Rzetelność',
    desc: 'Każdą sprawę traktujemy z pełnym zaangażowaniem i rzetelnością — niezależnie od jej skali.',
  },
  {
    title: 'Dyskrecja',
    desc: 'Zachowanie tajemnicy zawodowej i poufności powierzonych nam informacji to dla nas absolutny priorytet.',
  },
  {
    title: 'Skuteczność',
    desc: 'Nasze działania są ukierunkowane na osiągnięcie najlepszego możliwego rezultatu dla Klienta.',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="o-kancelarii" ref={ref} className="relative py-32 lg:py-44">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">

          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-8 h-px bg-gold-500" />
              <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold-400">O kancelarii</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif font-light text-4xl lg:text-5xl leading-[1.1] mb-8 text-white"
            >
              Indywidualne podejście,<br />
              <em className="text-gradient not-italic">profesjonalna obsługa.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans font-light text-white/55 leading-relaxed mb-6 text-[15px]"
            >
              Kancelaria świadczy usługi prawne na najwyższym poziomie, łącząc
              dogłębną znajomość prawa z praktycznym doświadczeniem zdobytym
              w toku wieloletniej pracy zawodowej. Reprezentujemy Klientów
              zarówno przed sądami powszechnymi, jak i w postępowaniach
              administracyjnych i arbitrażowych.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-sans font-light text-white/55 leading-relaxed text-[15px]"
            >
              Stawiamy na długofalowe relacje oparte na zaufaniu i przejrzystości.
              Każdy Klient otrzymuje jasną informację o stanie sprawy, realnych
              możliwościach i potencjalnych ryzykach — bez zbędnego prawniczego
              żargonu.
            </motion.p>
          </div>

          {/* Right — values */}
          <div className="flex flex-col gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
                className="glass p-7 group hover:border-gold-500/25 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <span className="font-serif text-3xl text-gold-500/30 font-light leading-none select-none group-hover:text-gold-500/50 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-white mb-2">{v.title}</h3>
                    <p className="font-sans text-[13px] text-white/50 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
