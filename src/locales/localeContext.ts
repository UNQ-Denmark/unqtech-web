import { createContext, useContext } from 'react'

export const LocaleContext = createContext('da')
export const useLocaleContext = () => useContext(LocaleContext)