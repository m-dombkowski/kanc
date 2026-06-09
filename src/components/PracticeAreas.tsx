import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Scale, Building2, Users, FileText, Home, ShieldCheck } from 'lucide-react'

const areas = [
  {
    icon: Scale,
    title: 'Prawo cywilne',
    short: 'Spory sądowe, odszkodowania, roszczenia, prawo zobowiązań.',
    details: [
      'Dochodzenie roszczeń odszkodowawczych',
      'Spory o zapłatę i egzekucja należności',
      'Prawo spadkowe i zachowek',
      'Postępowania o stwierdzenie nabycia własności',
    ],
  },
  {
    icon: Building2,
    title: 'Prawo gospodarcze',
    short: 'Obsługa spółek, umowy handlowe, negocjacje kontraktów.',
    details: [
      'Zakładanie i rejestracja spółek',
      'Kompleksowa obsługa prawna przedsiębiorców',
      'Sporządzanie i weryfikacja umów handlowych',
      'Fuzje, przejęcia i restrukturyzacje',
    ],
  },
  {
    icon: Users,
    title: 'Prawo pracy',
    short: 'Spory pracownicze, umowy, zwolnienia, mobbing.',
    details: [
      'Reprezentacja w sporach ze stosunku pracy',
      'Odwołania od wypowiedzenia i rozwiązania umów',
      'Roszczenia z tytułu dyskryminacji i mobbingu',
      'Regulaminy pracy i wynagradzania',
    ],
  },
  {
    icon: Home,
    title: 'Prawo nieruchomości',
    short: 'Transakcje, najem, zasiedzenie, sprawy wieczystoksięgowe.',
    details: [
      'Due diligence nieruchomości',
      'Umowy sprzedaży, najmu i dzierżawy',
      'Sprawy o zasiedzenie i zniesienie współwłasności',
      'Postępowania wieczystoksięgowe',
    ],
  },
  {
    icon: FileText,
    title: 'Umowy i kontrakty',
    short: 'Redagowanie, opiniowanie, negocjacje wszelkich umów.',
    details: [
      'Projekty umów dostosowane do potrzeb Klienta',
      'Analiza i opiniowanie dokumentów kontraktowych',
      'Klauzule NDA i umowy o zachowaniu poufności',
      'Negocjacje warunków kontraktowych',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Prawo administracyjne',
    short: 'Odwołania od decyzji, postępowania przed organami.',
    details: [
      'Odwołania i skargi od decyzji administracyjnych',
      'Postępowania przed WSA i NSA',
      'Prawo budowlane i zagospodarowanie przestrzenne',
      'Obsługa postępowań przetargowych',
    ],
  },
]

export default function PracticeAreas() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="praktyka" ref={ref} className="relative py-32 lg:py-44 bg-navy-900/30">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-950/80" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-8 h-px bg-gold-500" />
              <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold-400">Zakres praktyki</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif font-light text-4xl lg:text-5xl text-white leading-[1.1]"
            >
              Dziedziny, <em className="text-gradient not-italic">w których<br />możemy pomóc.</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-[13px] text-white/40 max-w-xs leading-relaxed text-right hidden lg:block"
          >
            Kliknij obszar, aby zobaczyć szczegółowy zakres usług.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {areas.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08 }}
              onClick={() => setActive(active === i ? null : i)}
              className={`glass p-7 cursor-pointer group transition-all duration-400 ${
                active === i ? 'border-gold-500/40 bg-gold-500/5' : 'hover:border-gold-500/20'
              }`}
            >
              <div className={`w-10 h-10 rounded-full border flex items-center justify-center mb-5 transition-all duration-300 ${
                active === i ? 'border-gold-500 bg-gold-500/10' : 'border-white/10 group-hover:border-gold-500/40'
              }`}>
                <a.icon size={16} className={`transition-colors duration-300 ${active === i ? 'text-gold-400' : 'text-white/40 group-hover:text-gold-400'}`} />
              </div>

              <h3 className="font-serif text-xl text-white mb-3">{a.title}</h3>
              <p className="font-sans text-[13px] text-white/45 leading-relaxed">{a.short}</p>

              {active === i && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-5 pt-5 border-t border-gold-500/15 space-y-2"
                >
                  {a.details.map((d) => (
                    <li key={d} className="flex items-start gap-2.5">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" />
                      <span className="font-sans text-[12px] text-white/55 leading-relaxed">{d}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
