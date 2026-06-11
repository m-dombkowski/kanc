import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { useLang } from '../contexts/LanguageContext'

export default function NotFoundPage() {
  const { lang } = useLang()
  const isEn = lang === 'en'

  return (
    <PageTransition>
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(201,165,90,0.06),transparent_65%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-[120px] lg:text-[180px] leading-none text-gradient font-light mb-4"
          >
            404
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif font-light text-3xl lg:text-4xl text-white mb-4"
          >
            {isEn ? 'Page not found.' : 'Nie znaleziono strony.'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-[14px] text-white/40 mb-10"
          >
            {isEn
              ? 'The page you are looking for does not exist or has been moved.'
              : 'Strona, której szukasz, nie istnieje lub została przeniesiona.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <NavLink
              to="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-navy-950 font-sans font-medium text-xs tracking-[0.2em] uppercase hover:bg-gold-400 transition-colors duration-300"
            >
              <ArrowLeft size={14} />
              {isEn ? 'Back to home' : 'Wróć na stronę główną'}
            </NavLink>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
