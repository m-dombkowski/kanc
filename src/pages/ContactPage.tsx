import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { useLang } from '../contexts/LanguageContext'

const infoIcons = [Phone, Mail, MapPin, Clock]

const PAGE_DELAY = 0.1

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const { T } = useLang()
  const C = T.contact

  const infoItems = [
    { icon: Phone, label: C.infoLabels.phone, value: '+48 796 839 168', href: 'tel:+48796839168' },
    { icon: Mail, label: C.infoLabels.email, value: 'kontakt@dombkowskikancelaria.pl', href: 'mailto:kontakt@dombkowskikancelaria.pl' },
    { icon: MapPin, label: C.infoLabels.address, value: 'ul. Kalwaryjska 69/9\n30-504 Kraków', href: '#' },
    { icon: Clock, label: C.infoLabels.hours, value: C.hoursValue, href: '#' },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.currentTarget)
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <PageTransition>
      {/* PAGE HEADER */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_80%,rgba(201,165,90,0.06),transparent_65%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className="anim-fade-in-up flex items-center gap-4 mb-6"
            style={{ animationDelay: `${PAGE_DELAY}s` }}
          >
            <div className="w-8 h-px bg-gold-500" />
            <span className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold-400">{C.badge}</span>
          </div>
          <h1
            className="anim-fade-in-up font-serif font-light text-5xl lg:text-7xl text-white leading-[0.95] max-w-2xl"
            style={{ animationDelay: `${PAGE_DELAY + 0.1}s` }}
          >
            {C.h1a}{' '}
            <em className="text-gradient not-italic block">{C.h1b}</em>
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* LEFT — info + map */}
            <div>
              <p
                className="anim-fade-in-up font-sans font-light text-white/50 text-[15px] leading-relaxed mb-10"
                style={{ animationDelay: `${PAGE_DELAY}s` }}
              >
                {C.intro}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {infoItems.map((item, i) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="anim-fade-in-up glass p-5 group hover:border-gold-500/25 transition-all duration-300 block"
                    style={{ animationDelay: `${PAGE_DELAY + i * 0.08}s` }}
                  >
                    <item.icon size={15} className="text-gold-500 mb-3" />
                    <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/30 mb-1">{item.label}</p>
                    <p className="font-sans text-[13px] text-white/70 leading-relaxed whitespace-pre-line group-hover:text-white/90 transition-colors">
                      {item.value}
                    </p>
                  </a>
                ))}
              </div>

              {/* Map */}
              <div
                className="anim-fade-in-up glass overflow-hidden"
                style={{ animationDelay: `${PAGE_DELAY + 0.35}s` }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.5505525339836!2d19.93905841262307!3d50.0385170713977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b5e89642fd3%3A0x2eca705377c971d0!2sKalwaryjska%2069%2F9%2C%2030-504%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1781085851391!5m2!1spl!2spl"
                  title="Mapa — ul. Kalwaryjska 69/9, Kraków"
                  className="w-full h-72 block"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* RIGHT — form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-serif font-light text-2xl text-white mb-8">{C.formTitle}</h2>
              <form
                name="kontakt"
                method="POST"
                data-netlify="true"
                className="flex flex-col gap-5"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="kontakt" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40">{C.labelName}</label>
                    <input
                      type="text"
                      name="imie-nazwisko"
                      required
                      className="bg-white/5 border border-white/10 px-4 py-3 text-[13px] text-white placeholder-white/20 font-sans focus:outline-none focus:border-gold-500/50 transition-colors"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40">{C.labelPhone}</label>
                    <input
                      type="tel"
                      name="telefon"
                      className="bg-white/5 border border-white/10 px-4 py-3 text-[13px] text-white placeholder-white/20 font-sans focus:outline-none focus:border-gold-500/50 transition-colors"
                      placeholder="+48 000 000 000"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40">{C.labelEmail}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="bg-white/5 border border-white/10 px-4 py-3 text-[13px] text-white placeholder-white/20 font-sans focus:outline-none focus:border-gold-500/50 transition-colors"
                    placeholder="jan@example.pl"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40">{C.labelArea}</label>
                  <select name="obszar-prawa" className="bg-navy-900 border border-white/10 px-4 py-3 text-[13px] text-white/60 font-sans focus:outline-none focus:border-gold-500/50 transition-colors appearance-none">
                    <option value="">{C.areaPlaceholder}</option>
                    {C.areaOptions.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40">{C.labelMessage}</label>
                  <textarea
                    rows={5}
                    name="opis-sprawy"
                    required
                    className="bg-white/5 border border-white/10 px-4 py-3 text-[13px] text-white placeholder-white/20 font-sans focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
                    placeholder={C.messagePlaceholder}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="rodo" required className="mt-1 accent-yellow-600" />
                  <label htmlFor="rodo" className="font-sans text-[11px] text-white/30 leading-relaxed cursor-pointer">
                    {C.rodo}
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className="mt-1 px-8 py-4 bg-gold-500 text-navy-950 font-sans font-medium text-xs tracking-[0.2em] uppercase hover:bg-gold-400 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? C.submitSending : status === 'sent' ? C.submitSent : C.submitIdle}
                </button>
                {status === 'sent' && (
                  <p className="font-sans text-[12px] text-gold-400">{C.successMsg}</p>
                )}
                {status === 'error' && (
                  <p className="font-sans text-[12px] text-red-400/80">{C.errorMsg}</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
