import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const info = [
  { icon: Phone, label: 'Telefon', value: '+48 000 000 000', href: 'tel:+48000000000' },
  { icon: Mail, label: 'E-mail', value: 'kancelaria@example.pl', href: 'mailto:kancelaria@example.pl' },
  { icon: MapPin, label: 'Adres', value: 'ul. Przykładowa 1/10\n00-000 Warszawa', href: '#' },
  { icon: Clock, label: 'Godziny przyjęć', value: 'Pn–Pt: 9:00–17:00\nSoboty: po uzgodnieniu', href: '#' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="kontakt" ref={ref} className="relative py-32 lg:py-44">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(201,165,90,0.05),transparent_65%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-28">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-8 h-px bg-gold-500" />
              <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold-400">Kontakt</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif font-light text-4xl lg:text-5xl text-white leading-[1.1] mb-8"
            >
              Porozmawiajmy<br />
              <em className="text-gradient not-italic">o Twojej sprawie.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans font-light text-white/50 text-[15px] leading-relaxed mb-12"
            >
              Pierwsza konsultacja pozwala nam ocenić sytuację prawną i zaproponować
              najlepsze rozwiązanie. Skontaktuj się z nami telefonicznie, mailowo lub
              wypełnij formularz — odpowiemy w ciągu 24 godzin.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-5">
              {info.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.25 + i * 0.08 }}
                  className="glass p-5 group hover:border-gold-500/25 transition-all duration-300 block"
                >
                  <item.icon size={15} className="text-gold-500 mb-3" />
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/30 mb-1">{item.label}</p>
                  <p className="font-sans text-[13px] text-white/70 leading-relaxed whitespace-pre-line group-hover:text-white/90 transition-colors">
                    {item.value}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <form className="glass p-8 flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40">Imię i nazwisko</label>
                  <input
                    type="text"
                    className="bg-white/5 border border-white/10 px-4 py-3 text-[13px] text-white placeholder-white/20 font-sans focus:outline-none focus:border-gold-500/50 transition-colors"
                    placeholder="Jan Kowalski"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40">Telefon</label>
                  <input
                    type="tel"
                    className="bg-white/5 border border-white/10 px-4 py-3 text-[13px] text-white placeholder-white/20 font-sans focus:outline-none focus:border-gold-500/50 transition-colors"
                    placeholder="+48 000 000 000"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40">Adres e-mail</label>
                <input
                  type="email"
                  className="bg-white/5 border border-white/10 px-4 py-3 text-[13px] text-white placeholder-white/20 font-sans focus:outline-none focus:border-gold-500/50 transition-colors"
                  placeholder="jan@example.pl"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40">Obszar prawa</label>
                <select className="bg-navy-900 border border-white/10 px-4 py-3 text-[13px] text-white/60 font-sans focus:outline-none focus:border-gold-500/50 transition-colors appearance-none">
                  <option value="">Wybierz dziedzinę…</option>
                  <option>Prawo cywilne</option>
                  <option>Prawo gospodarcze</option>
                  <option>Prawo pracy</option>
                  <option>Prawo nieruchomości</option>
                  <option>Umowy i kontrakty</option>
                  <option>Prawo administracyjne</option>
                  <option>Inne</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40">Opis sprawy</label>
                <textarea
                  rows={4}
                  className="bg-white/5 border border-white/10 px-4 py-3 text-[13px] text-white placeholder-white/20 font-sans focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
                  placeholder="Krótki opis sytuacji prawnej…"
                />
              </div>

              <p className="font-sans text-[11px] text-white/25 leading-relaxed">
                Wysyłając formularz wyrażasz zgodę na przetwarzanie danych osobowych
                w celu nawiązania kontaktu. Przesłane informacje są objęte tajemnicą.
              </p>

              <button
                type="submit"
                className="mt-1 px-8 py-4 bg-gold-500 text-navy-950 font-sans font-medium text-xs tracking-[0.2em] uppercase hover:bg-gold-400 transition-colors duration-300"
              >
                Wyślij zapytanie
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
