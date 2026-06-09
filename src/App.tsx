import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CookieBanner from './components/CookieBanner'
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

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </BrowserRouter>
  )
}
