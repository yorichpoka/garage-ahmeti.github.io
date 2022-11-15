import { Route, Switch } from 'react-router-dom';
import { LoadingView } from 'components';
import { ROUTES } from 'constant';
import { Suspense } from 'react';

const Routes = () => (
  <Suspense fallback={<LoadingView />}>
    <Switch>
      <Route exact path={ROUTES.path()} component={ROUTES.lazyComponent} />
      <Route exact path={ROUTES.CONTACT.path()} component={ROUTES.CONTACT.lazyComponent} />
      <Route exact path={ROUTES.SERVICES.path()} component={ROUTES.SERVICES.lazyComponent} />
      <Route exact path={ROUTES.PRIVACY.path()} component={ROUTES.PRIVACY.lazyComponent} />
      <Route component={ROUTES.NOT_FOUND.lazyComponent} />
    </Switch>
  </Suspense>
);

export default Routes;
