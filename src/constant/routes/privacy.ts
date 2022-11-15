import { concatPath } from 'functions';
import { ROUTES } from 'constant';
import { lazy } from 'react';

const PRIVACY = {
  base: '/privacy',
  path: () => concatPath(ROUTES.path(), ROUTES.PRIVACY.base),
  title: (t: Function): string => t('privacy.title'),
  description: (t: Function): string => t('privacy.description'),
  lazyComponent: lazy(() => import(/*webpackChunkName: 'routePrivacy'*/ 'modules/privacy')),
  parent: () => ROUTES
};

export default PRIVACY;
