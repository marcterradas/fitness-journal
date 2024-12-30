import i18n from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'

import cat from '@/infrastructure/translations/cat.json'
import en from '@/infrastructure/translations/en.json'
import es from '@/infrastructure/translations/es.json'

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: { en, es, cat },
    compatibilityJSON: 'v3'
  })

function changeLanguage (language) {
  try {
    i18n.changeLanguage(language)
  } catch (error) {
    // TODO: Handle error.
  }
}

export default { i18n }

export { changeLanguage, useTranslation }
