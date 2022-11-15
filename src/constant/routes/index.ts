import { ENVIRONMENT_VARIABLES } from 'constant';
import SERVICES from './services';
import CONTACT from './contact';
import PRIVACY from './privacy';
import { lazy } from 'react';

const ROUTES = Object.freeze({
  base: '/',
  path: () => ROUTES.base,
  lazyComponent: lazy(() => import(/*webpackChunkName: 'routeHome'*/ 'modules/home')),
  description: (t: Function): string => t('home.description'),
  title: (t: Function): string => ENVIRONMENT_VARIABLES.appName,
  NOT_FOUND: {
    lazyComponent: lazy(() => import(/*webpackChunkName: 'routeNotFound'*/ 'modules/notFound'))
  },
  SERVICES,
  PRIVACY,
  CONTACT
});

export default ROUTES;
