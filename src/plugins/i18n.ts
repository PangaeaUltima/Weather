import { createI18n } from "vue-i18n";
import en from '@/i18n/locales/en.json'
import ua from '@/i18n/locales/ua.json'

export default createI18n({
  locale: 'ua',
  fallbackLocale: 'en',
  messages: {
    en,
    ua
  }
})
