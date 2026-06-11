import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink, useLocation } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { lang, toggle, T } = useLang()

  const links = [
    { label: T.nav.about, to: '/o-kancelarii' },
    { label: T.nav.practice, to: '/praktyka' },
    { label: T.nav.contact, to: '/kontakt' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Desktop / top bar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          scrolled ? 'bg-navy-950/95 backdrop-blur-md border-gold-500/10' : 'border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          <NavLink to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
            <span className="font-serif text-xl text-gold-400 font-light tracking-widest2">{T.nav.firmName}</span>
            <span className="font-sans text-[8px] tracking-[0.18em] sm:text-[10px] sm:tracking-[0.3em] text-white/50 uppercase mt-0.5">{T.nav.subtitle}</span>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {links.slice(0, 2).map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `font-sans text-[11px] tracking-[0.15em] lg:tracking-[0.18em] uppercase transition-colors duration-300 whitespace-nowrap ${
                    isActive ? 'text-gold-400' : 'text-white/60 hover:text-gold-400'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink
              to="/kontakt"
              className={({ isActive }) =>
                `ml-2 lg:ml-4 px-4 lg:px-6 py-2.5 border text-[11px] tracking-[0.15em] uppercase font-sans hover:bg-gold-500/10 transition-all duration-300 whitespace-nowrap ${
                  isActive ? 'border-gold-500 text-gold-400 bg-gold-500/10' : 'border-gold-500/50 text-gold-400'
                }`
              }
            >
              {T.nav.contact}
            </NavLink>

            {/* Language toggle — desktop */}
            <button
              onClick={toggle}
              aria-label={lang === 'pl' ? 'Switch to English' : 'Przełącz na polski'}
              className="ml-2 font-sans text-[11px] tracking-[0.15em] uppercase flex items-center gap-1 transition-colors duration-300"
            >
              <span className={lang === 'pl' ? 'text-gold-400' : 'text-white/35 hover:text-white/60'}>PL</span>
              <span className="text-white/20">/</span>
              <span className={lang === 'en' ? 'text-gold-400' : 'text-white/35 hover:text-white/60'}>EN</span>
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Hamburger button — mobile only, fixed top-right */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
        className="md:hidden fixed top-5 right-5 z-[60] w-11 h-11 flex flex-col items-center justify-center gap-[6px] overflow-visible group"
      >
        <span
          className="block h-px bg-gold-400 transition-all duration-300 origin-center"
          style={{
            width: '22px',
            transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
          }}
        />
        <span
          className="block h-px bg-gold-400 transition-all duration-300 origin-center"
          style={{
            width: '22px',
            opacity: open ? 0 : 1,
            transform: open ? 'scaleX(0)' : 'none',
          }}
        />
        <span
          className="block h-px bg-gold-400 transition-all duration-300 origin-center"
          style={{
            width: '22px',
            transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
          }}
        />
      </button>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="md:hidden fixed inset-0 z-50 bg-navy-950 flex flex-col"
          >
            {/* Decorative gold line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: 'left' }}
              className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"
            />

            {/* Nav links */}
            <div className="flex-1 flex flex-col items-start justify-center px-10 gap-2">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `block font-serif font-light text-5xl leading-tight transition-colors duration-200 ${
                        isActive ? 'text-gold-400' : 'text-white/80 hover:text-gold-400'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}

              {/* Language toggle — mobile */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.4, delay: 0.1 + links.length * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6"
              >
                <button
                  onClick={toggle}
                  aria-label={lang === 'pl' ? 'Switch to English' : 'Przełącz na polski'}
                  className="font-sans text-[13px] tracking-[0.2em] uppercase flex items-center gap-2"
                >
                  <span className={lang === 'pl' ? 'text-gold-400' : 'text-white/35'}>PL</span>
                  <span className="text-white/20">/</span>
                  <span className={lang === 'en' ? 'text-gold-400' : 'text-white/35'}>EN</span>
                </button>
              </motion.div>
            </div>

            {/* Bottom bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="px-10 py-10 border-t border-white/5"
            >
              <p className="font-sans text-[11px] tracking-[0.2em] text-white/25 uppercase">
                {T.nav.bottomBar}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
