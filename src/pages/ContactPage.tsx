import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const info = [
  { icon: Phone, label: 'Telefon', value: '+48 000 000 000', href: 'tel:+48000000000' },
  { icon: Mail, label: 'E-mail', value: 'kancelaria@example.pl', href: 'mailto:kancelaria@example.pl' },
  { icon: MapPin, label: 'Adres', value: 'ul. Przykładowa 1/10\n00-000 Warszawa', href: '#' },
  { icon: Clock, label: 'Godziny przyjęć', value: 'Pn–Pt: 9:00–17:00\nSoboty: po uzgodnieniu', href: '#' },
]

const PAGE_DELAY = 0.5

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: PAGE_DELAY + delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
})

export default function ContactPage() {
  return (
    <PageTransition>
      {/* PAGE HEADER */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(201,165,90,0.06),transparent_65%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-gold-500" />
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold-400">Kontakt</span>
          </motion.div>
          <motion.h1 {...fadeUp(0.1)} className="font-serif font-light text-5xl lg:text-7xl text-white leading-[0.95] max-w-2xl">
            Porozmawiajmy{' '}
            <em className="text-gradient not-italic block">o Twojej sprawie.</em>
          </motion.h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* LEFT — info + map placeholder */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="font-sans font-light text-white/50 text-[15px] leading-relaxed mb-10"
              >
                Pierwsza konsultacja pozwala ocenić sytuację prawną i zaproponować
                najlepsze rozwiązanie. Skontaktuj się telefonicznie, mailowo lub
                wypełnij formularz — odpowiemy w ciągu 24 godzin.
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {info.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: PAGE_DELAY + i * 0.08 }}
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

              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: PAGE_DELAY + 0.3 }}
                className="glass h-48 flex items-center justify-center"
              >
                <p className="font-sans text-[12px] text-white/20 tracking-widest uppercase">Mapa — Google Maps embed</p>
              </motion.div>
            </div>

            {/* RIGHT — form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-serif font-light text-2xl text-white mb-8">Formularz kontaktowy</h2>
              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40">Imię i nazwisko *</label>
                    <input
                      type="text"
                      required
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
                  <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40">Adres e-mail *</label>
                  <input
                    type="email"
                    required
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
                    <option>Prawo administracyjne</option>
                    <option>Zamówienia publiczne</option>
                    <option>Prawo medyczne</option>
                    <option>Inne</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40">Opis sprawy *</label>
                  <textarea
                    rows={5}
                    required
                    className="bg-white/5 border border-white/10 px-4 py-3 text-[13px] text-white placeholder-white/20 font-sans focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
                    placeholder="Krótki opis sytuacji prawnej…"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="rodo" required className="mt-1 accent-yellow-600" />
                  <label htmlFor="rodo" className="font-sans text-[11px] text-white/30 leading-relaxed cursor-pointer">
                    Wyrażam zgodę na przetwarzanie moich danych osobowych przez Kancelarię Radcy Prawnego Jacek Dombkowski
                    w celu udzielenia odpowiedzi na przesłane zapytanie. Dane są objęte tajemnicą zawodową.
                  </label>
                </div>

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
    </PageTransition>
  )
}
