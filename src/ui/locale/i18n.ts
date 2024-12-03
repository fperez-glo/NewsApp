import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import es from './es.json';
import { getLocales } from 'expo-localization';
import { Translation } from './translation';

const defaultLocalization = Translation.transformToSupported(getLocales()[0].languageCode);

export default i18next
  .use(initReactI18next)
  .init(
    {
      lng: defaultLocalization,
      fallbackLng: defaultLocalization,
      resources: {
        en: {
          translation: en,
        },
        es: {
          translation: es,
        },
      },
    },
    undefined,
  )
  .then();
