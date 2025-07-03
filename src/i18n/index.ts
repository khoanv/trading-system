import i18next from 'i18next';
import en from './locales/en';
import ja from './locales/ja';
import vi from './locales/vi';
import { initReactI18next } from 'react-i18next'

const I18n = i18next
  .use(initReactI18next)
  .init({
    lng: 'en',
    resources: {
      en,
      vi,
      ja
    }
  });

export default I18n;
