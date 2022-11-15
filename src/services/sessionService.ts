import { ISessionObject } from 'interfaces';
import { ELang } from 'enums';

enum ESessionKeys {
  lang = 'lang'
}

const currentLang: ISessionObject<ELang> = {
  get: () => {
    // Get value.
    const stringValue = localStorage.getItem(ESessionKeys.lang);

    // Set default value if not found
    if (!stringValue) {
      // Set in session.
      currentLang.set(ELang.fr);
      // Return value
      return currentLang.get();
    }

    return stringValue as ELang;
  },
  set: (value: ELang) => localStorage.setItem(ESessionKeys.lang, value)
};

const sessionService = {
  currentLang
};

export default sessionService;
