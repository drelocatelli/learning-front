import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import nomesReducers from './reducers/nomesReducers';
import numerosReducers from './reducers/numerosReducers';

const reducers = combineReducers({
    numeros: numerosReducers,
    nomes: nomesReducers
});

// ----------------------- dev tools

function logger({ getState }) {
    return next => action => {
      console.log('will dispatch', action)
  
      // Call the next dispatch method in the middleware chain.
      const returnValue = next(action)
  
      console.log('state after dispatch', getState())
  
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return returnValue
    }
  }

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const useDevTools = composeEnhancers(
    applyMiddleware(logger),
    // other store enhancers if any
  );
  
// ----------------------- dev tools

const storeConfig = () => createStore(
    reducers, 
    useDevTools
);

export default storeConfig;