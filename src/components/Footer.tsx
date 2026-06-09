import { NavLink } from 'react-router-dom'
import { Linkedin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="lg:col-span-1">
            <p className="font-serif text-lg text-gold-400 tracking-widest2 mb-1">KANCELARIA</p>
            <p className="font-sans text-[10px] tracking-[0.3em] text-white/30 uppercase mb-5">Radcy Prawnego</p>
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
          </div>

          <div>
            <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-400/70 mb-5">Praktyka</p>
            <ul className="space-y-3">
              {['Prawo cywilne', 'Prawo gospodarcze', 'Prawo pracy', 'Prawo administracyjne', 'Zamówienia publiczne', 'Prawo medyczne'].map((l) => (
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
                { label: 'Regulamin', to: '/regulamin' },
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
            Wpis na listę radców prawnych OIRP w Warszawie
          </p>
        </div>
      </div>
    </footer>
  )
}
