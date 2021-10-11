import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import {rootReducer} from './reducers';
import {rootSaga} from './rootSaga';

export const configureStore = () => {
  const middleware = [];
  const enhancers = [];

  // Connect the sagas to the redux store
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  // dev
  if (__DEV__) {
    middleware.push(createLogger());
  }

  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(rootReducer, compose(...enhancers));

  // Kick off the root saga
  sagaMiddleware.run(rootSaga);

  if ((module as any).hot) {
    (module as any).hot.accept('./reducers', () => {
      // This fetch the new state of the above reducers.
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return {store};
};
