import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { EMPTY, ROUTES } from 'constant';

interface IState {
  description: string;
  title: string;
}

const useModule = () => {

  /** hoot that apply translation */
  const { t } = useTranslation();
  /** Hooks that get current location. */
  const { pathname } = useLocation();
  /** State of component */
  const [state, setState] = useState<IState>({ title: EMPTY, description: EMPTY });

  // Triggered when value's changing.
  useEffect(
    () => {
      // Module updated
      let title: string;
      let description: string;

      // Check value
      switch (pathname) {
        case ROUTES.path():
          title = ROUTES.title(t);
          description = ROUTES.description(t);
          break;
        case ROUTES.CONTACT.path():
          title = ROUTES.CONTACT.title(t);
          description = ROUTES.CONTACT.description(t);
          break;
        case ROUTES.SERVICES.path():
          title = ROUTES.SERVICES.title(t);
          description = ROUTES.SERVICES.description(t);
          break;
        case ROUTES.PRIVACY.path():
          title = ROUTES.PRIVACY.title(t);
          description = ROUTES.PRIVACY.description(t);
          break;
        default:
          break;
      }

      // Update state
      setState(l => ({ ...l, title, description }));
    },
    [pathname]
  );

  return state;

};

export default useModule;
