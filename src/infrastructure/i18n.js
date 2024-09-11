import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from '@/infrastructure/translations/en.json'
import es from '@/infrastructure/translations/es.json'
import cat from '@/infrastructure/translations/cat.json'

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources: { en, es, cat }
  })

export default { i18n }
