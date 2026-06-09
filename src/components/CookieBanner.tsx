import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink } from 'react-router-dom'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookies-accepted')) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookies-accepted', 'true')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookies-accepted', 'false')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-gold-500/10 bg-navy-950/98 backdrop-blur-md"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between">
            <p className="font-sans text-[12px] text-white/50 leading-relaxed max-w-2xl">
              Strona wykorzystuje pliki cookies w celu zapewnienia prawidłowego działania serwisu.
              Korzystając ze strony, wyrażasz zgodę na ich stosowanie zgodnie z{' '}
              <NavLink to="/polityka-prywatnosci" className="text-gold-500/80 hover:text-gold-400 underline underline-offset-2 transition-colors">
                polityką prywatności
              </NavLink>
              .
            </p>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={decline}
                className="font-sans text-[11px] tracking-[0.15em] uppercase text-white/35 hover:text-white/60 transition-colors px-4 py-2"
              >
                Odrzuć
              </button>
              <button
                onClick={accept}
                className="font-sans text-[11px] tracking-[0.15em] uppercase text-navy-950 bg-gold-500 hover:bg-gold-400 transition-colors px-6 py-2"
              >
                Akceptuję
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
