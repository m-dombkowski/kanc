import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail } from 'lucide-react'
import { useLang } from '../contexts/LanguageContext'

const STORAGE_KEY = 'newsletter-toast-dismissed'
const SHOW_DELAY_MS = 8000

export default function NewsletterToast() {
  const [visible, setVisible] = useState(false)
  const { T } = useLang()

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return

    const timer = window.setInterval(() => {
      if (localStorage.getItem('cookies-accepted')) {
        setVisible(true)
        window.clearInterval(timer)
      }
    }, SHOW_DELAY_MS)

    return () => window.clearInterval(timer)
  }, [])

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, 'true')
    setVisible(false)
  }

  const goToNewsletter = () => {
    dismiss()
    const el = document.getElementById('newsletter')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      const input = el.querySelector<HTMLInputElement>('input[type="email"]')
      window.setTimeout(() => input?.focus({ preventScroll: true }), 700)
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-40 max-w-[300px] bg-navy-900/95 backdrop-blur-md border border-gold-500/20 shadow-xl shadow-black/40 p-5"
        >
          <button
            onClick={dismiss}
            aria-label={T.toast.closeLabel}
            className="absolute top-2.5 right-2.5 text-white/30 hover:text-white/70 transition-colors p-1"
          >
            <X size={13} />
          </button>

          <div className="flex items-center gap-3 mb-2.5">
            <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gold-500/30 flex items-center justify-center">
              <Mail size={13} className="text-gold-500" />
            </div>
            <p className="font-serif text-[15px] text-white leading-snug">{T.toast.heading}</p>
          </div>

          <p className="font-sans text-[12px] text-white/45 leading-relaxed mb-4">
            {T.toast.body}
          </p>

          <button
            onClick={goToNewsletter}
            className="w-full px-4 py-2.5 border border-gold-500/50 text-gold-400 font-sans text-[11px] tracking-[0.15em] uppercase hover:bg-gold-500/10 transition-colors duration-300"
          >
            {T.toast.cta}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
