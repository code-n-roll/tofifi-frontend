// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';
import { grantedAuth, requireAuth } from 'utils/helpers/routeHelper';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'dashboard',
      onEnter: requireAuth,
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('pages/DashboardPage/reducers'),
          import('pages/DashboardPage/sagas'),
          import('pages/DashboardPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('dashboard', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/sign_in',
      name: 'sign_in',
      onEnter: grantedAuth,
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('pages/SignInPage'),
          import('pages/SignInPage/sagas'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component, sagas]) => {
          renderRoute(component);
          injectSagas(sagas.default);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/sign_up',
      name: 'sign_up',
      onEnter: grantedAuth,
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('pages/SignUpPage'),
          import('pages/SignUpPage/sagas'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component, sagas]) => {
          renderRoute(component);
          injectSagas(sagas.default);
        });

        importModules.catch(errorLoading);
      },
    },
    {
      path: '/settings',
      name: 'settings',
      getComponent(nextState, cb) {
        import('pages/SettingsPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('pages/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
