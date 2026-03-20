// import { createContext, useContext, useState } from 'react'

// export const LangContext = createContext()

// export const LangProvider = ({ children }) => {
//     const [lang, setLang] = useState('en') // 'en' or 'mr'
//     return (
//         <LangContext.Provider value={{ lang, setLang }}>
//             {children}
//         </LangContext.Provider>
//     )
// }

// export const useLang = () => useContext(LangContext)




import { createContext, useContext, useState } from 'react'
// import translations from './translations'

export const LangContext = createContext()

export const LangProvider = ({ children }) => {

  const [lang, setLang] = useState(
    () => localStorage.getItem('lang') || 'en'  // ← read from localStorage on first load
  )

  const handleSetLang = (newLang) => {
    setLang(newLang)
    localStorage.setItem('lang', newLang)        // ← save to localStorage on change
  }

//   const t = translations[lang]

  return (
    <LangContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)