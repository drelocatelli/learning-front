import {createStore, combineReducers} from 'redux';
import nomesReducers from './reducers/nomesReducers';
import numerosReducers from './reducers/numerosReducers';

const reducers = combineReducers({
    numeros: numerosReducers,
    nomes: nomesReducers
});

const storeConfig = () => createStore(reducers);

export default storeConfig;