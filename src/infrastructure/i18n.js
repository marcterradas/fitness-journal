import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './translations/en.json'
import es from './translations/es.json'
import cat from './translations/cat.json'

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    lng: 'en',
    fallbackLng: 'en',
    resources: { en, es, cat },
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  })

export default { i18n }
