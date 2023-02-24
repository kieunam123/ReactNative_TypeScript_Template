import { compose, applyMiddleware} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewareS = [sagaMiddleware];

export default function configurationStore() {
  const initialState = {};
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewareS)),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
