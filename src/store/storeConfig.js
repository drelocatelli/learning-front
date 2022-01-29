import { configureStore } from '@reduxjs/toolkit';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import nomesReducers from './nome/nomesReducers';
import numerosReducers from './numeros/numerosReducers';

// const reducers = combineReducers({
//     numeros: numerosReducers,
//     nomes: nomesReducers
// });

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
const useDevTools = logger;

// ----------------------- dev tools


// const storeConfig = () => createStore(
//     reducers, 
//     composeEnhancers(applyMiddleware(thunk, useDevTools))
// );

// export default storeConfig;
export const store = configureStore({
  reducer: {
    numeros: numerosReducers,
    nomes: nomesReducers
  }
});
