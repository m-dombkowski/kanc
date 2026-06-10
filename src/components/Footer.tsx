import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Linkedin, ArrowRight } from 'lucide-react'

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/.netlify/functions/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('sent')
      } else {
        const data = await res.json().catch(() => ({}))
        setError(data.error || 'Zapis nie powiódł się. Spróbuj ponownie później.')
        setStatus('error')
      }
    } catch {
      setError('Zapis nie powiódł się. Spróbuj ponownie później.')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <p className="font-sans text-[12px] text-gold-400 leading-relaxed">
        Dziękujemy! Sprawdź skrzynkę i potwierdź zapis klikając w link w wiadomości.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="flex">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle') }}
          placeholder="Twój adres e-mail"
          className="flex-1 min-w-0 bg-white/5 border border-white/10 border-r-0 px-3 py-2.5 text-[12px] text-white placeholder-white/25 font-sans focus:outline-none focus:border-gold-500/50 transition-colors"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          aria-label="Zapisz się do newslettera"
          className="px-3.5 border border-gold-500/50 text-gold-400 hover:bg-gold-500/10 transition-colors duration-300 disabled:opacity-50"
        >
          <ArrowRight size={14} />
        </button>
      </div>
      {status === 'error' && (
        <p className="font-sans text-[11px] text-red-400/80">{error}</p>
      )}
      <p className="font-sans text-[10px] text-white/20 leading-relaxed">
        Zapisując się wyrażasz zgodę na otrzymywanie informacji od Kancelarii.
        Możesz wypisać się w każdej chwili.
      </p>
    </form>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="lg:col-span-1">
            <p className="font-serif text-lg text-gold-400 tracking-widest2 mb-1">KANCELARIA</p>
            <p className="font-sans text-[10px] tracking-[0.3em] text-white/30 uppercase mb-5">Radcy Prawnego Jacka Dombkowskiego</p>
            <p className="font-sans text-[12px] text-white/35 leading-relaxed">
              Profesjonalna pomoc prawna dla osób fizycznych i przedsiębiorców.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-white/30 hover:text-gold-400 transition-colors"
            >
              <Linkedin size={15} />
              <span className="font-sans text-[11px] tracking-wide">LinkedIn</span>
            </a>

            <div id="newsletter" className="mt-8">
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-400/70 mb-3">Newsletter</p>
              <NewsletterForm />
            </div>
          </div>

          <div>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-400/70 mb-5">Praktyka</p>
            <ul className="space-y-3">
              {['Prawo cywilne', 'Prawo gospodarcze', 'Prawo pracy', 'Prawo administracyjne', 'Zamówienia publiczne', 'Prawo medyczne', 'Prawo budowlane', 'Prawo własności intelektualnej'].map((l) => (
                <li key={l}>
                  <NavLink to="/praktyka" className="font-sans text-[12px] text-white/35 hover:text-gold-400 transition-colors">
                    {l}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-400/70 mb-5">Kancelaria</p>
            <ul className="space-y-3">
              {[
                { label: 'O kancelarii', to: '/o-kancelarii' },
                { label: 'Kontakt', to: '/kontakt' },
              ].map((l) => (
                <li key={l.label}>
                  <NavLink to={l.to} className="font-sans text-[12px] text-white/35 hover:text-gold-400 transition-colors">
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-400/70 mb-5">Dokumenty</p>
            <ul className="space-y-3">
              {[
                { label: 'Polityka prywatności', to: '/polityka-prywatnosci' },
                { label: 'Cookies', to: '/cookies' },
                { label: 'RODO', to: '/rodo' },
              ].map((l) => (
                <li key={l.label}>
                  <NavLink to={l.to} className="font-sans text-[12px] text-white/35 hover:text-gold-400 transition-colors">
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-white/20">
            © {year} Kancelaria Radcy Prawnego Jacek Dombkowski. Wszelkie prawa zastrzeżone.
          </p>
          <p className="font-sans text-[11px] text-white/15">
            Wpis na listę radców prawnych OIRP w Krakowie
          </p>
        </div>
      </div>
    </footer>
  )
}
