import { createContext, useContext, useState, type ReactNode } from 'react'
import t, { type Lang } from '../i18n/translations'

interface LanguageContextValue {
  lang: Lang
  toggle: () => void
  T: typeof t['pl']
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem('lang') as Lang) ?? 'pl'
  })

  const toggle = () => {
    setLang((prev) => {
      const next = prev === 'pl' ? 'en' : 'pl'
      localStorage.setItem('lang', next)
      return next
    })
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle, T: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider')
  return ctx
}
