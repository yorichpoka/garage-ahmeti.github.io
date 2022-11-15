import { concatPath } from 'functions';
import { ROUTES } from 'constant';
import { lazy } from 'react';

const CONTACT = {
  base: '/contact',
  path: () => concatPath(ROUTES.path(), ROUTES.CONTACT.base),
  title: (t: Function): string => t('contact.title'),
  description: (t: Function): string => t('contact.title'),
  lazyComponent: lazy(() => import(/*webpackChunkName: 'routeContact'*/ 'modules/contact')),
  parent: () => ROUTES
};

export default CONTACT;
