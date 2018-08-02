import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import rootReducer from './ducks';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware();

const middlewares = [epicMiddleware];

if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger').createLogger;
  middlewares.push(createLogger());
}

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  const epic$ = new BehaviorSubject(rootEpic);
  // Every time a new epic is given to epic$ it
  // will unsubscribe from the previous one then
  // call and subscribe to the new one because of
  // how switchMap works
  const hotReloadingEpic = (...args) =>
    epic$.pipe(switchMap(epic => epic(...args)));

  epicMiddleware.run(hotReloadingEpic);

  if (module.hot) {
    module.hot.accept('./epics', () => {
      const nextRootEpic = require('./epics').default;
      epic$.next(nextRootEpic);
    });
  }

  return store;
}
