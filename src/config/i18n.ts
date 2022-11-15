import { initReactI18next } from 'react-i18next';
import { sessionService } from 'services';
import fr from 'assets/i18n/fr.json';
import { ELang } from 'enums';
import i18n from 'i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: sessionService.currentLang.get(),
    fallbackLng: ELang.fr,
    resources: {
      fr: {
        translation: fr
      }
    },
    debug: false,
    ns: '',
    defaultNS: undefined,
    keySeparator: '.',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
