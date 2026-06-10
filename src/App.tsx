import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { LanguageProvider, useLang } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CookieBanner from './components/CookieBanner'
import NewsletterToast from './components/NewsletterToast'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import PracticePage from './pages/PracticePage'
import ContactPage from './pages/ContactPage'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/o-kancelarii" element={<AboutPage />} />
        <Route path="/praktyka" element={<PracticePage />} />
        <Route path="/kontakt" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  )
}

function AppInner() {
  const { fading } = useLang()
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <div
        className="flex-1 flex flex-col transition-opacity duration-[180ms]"
        style={{ opacity: fading ? 0 : 1 }}
      >
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
      <CookieBanner />
      <NewsletterToast />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppInner />
      </LanguageProvider>
    </BrowserRouter>
  )
}
