import { concatPath } from 'functions';
import { ROUTES } from 'constant';
import { lazy } from 'react';

const SERVICES = {
  base: '/services',
  path: () => concatPath(ROUTES.path(), ROUTES.SERVICES.base),
  title: (t: Function): string => t('services.title'),
  description: (t: Function): string => t('services.title'),
  lazyComponent: lazy(() => import(/*webpackChunkName: 'routeServices'*/ 'modules/services')),
  parent: () => ROUTES
};

export default SERVICES;
