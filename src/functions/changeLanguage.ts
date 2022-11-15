import { sessionService } from 'services';
import i18n from 'config/i18n';
import { ELang } from 'enums';

/** Change the current language of application. */
export const changeLanguage = (lang: ELang) => (
  i18n
    .changeLanguage(lang)
    .then(() => sessionService.currentLang.set(lang))
);
