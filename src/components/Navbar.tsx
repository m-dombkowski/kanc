import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'O kancelarii', href: '#o-kancelarii' },
  { label: 'Zespół', href: '#zespol' },
  { label: 'Praktyka', href: '#praktyka' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-navy-950/95 backdrop-blur-md border-b border-gold-500/10' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <a href="#" className="flex flex-col leading-none">
          <span className="font-serif text-xl text-gold-400 font-light tracking-widest2">KANCELARIA</span>
          <span className="font-sans text-[10px] tracking-[0.3em] text-white/50 uppercase mt-0.5">Radcy Prawnego</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-[11px] tracking-[0.15em] lg:tracking-[0.18em] uppercase text-white/60 hover:text-gold-400 transition-colors duration-300 whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="ml-2 lg:ml-4 px-4 lg:px-6 py-2.5 border border-gold-500/50 text-gold-400 text-[11px] tracking-[0.15em] uppercase font-sans hover:bg-gold-500/10 transition-all duration-300 whitespace-nowrap"
          >
            Umów spotkanie
          </a>
        </nav>

        <button className="md:hidden text-gold-400" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-navy-900/98 backdrop-blur-md border-b border-gold-500/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-sans text-sm tracking-[0.15em] uppercase text-white/70 hover:text-gold-400 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="mt-2 px-6 py-3 border border-gold-500/50 text-gold-400 text-xs tracking-[0.18em] uppercase font-sans text-center hover:bg-gold-500/10 transition-all"
              >
                Umów spotkanie
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
