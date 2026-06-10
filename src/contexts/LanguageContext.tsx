import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import t, { type Lang } from '../i18n/translations'

interface LanguageContextValue {
  lang: Lang
  fading: boolean
  toggle: () => void
  T: typeof t['pl']
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem('lang') as Lang) ?? 'pl'
  })
  const [fading, setFading] = useState(false)

  const toggle = useCallback(() => {
    setFading(true)
    setTimeout(() => {
      setLang((prev) => {
        const next = prev === 'pl' ? 'en' : 'pl'
        localStorage.setItem('lang', next)
        return next
      })
      setFading(false)
    }, 180)
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, fading, toggle, T: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider')
  return ctx
}
