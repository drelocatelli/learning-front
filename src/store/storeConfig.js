import {createStore, combineReducers} from 'redux';

const reducers = combineReducers({
    numeros: (state, action) => {
        console.log(state, ' ', action)
        return {
            min: 1,
            max: 10
        }
    }
});

const storeConfig = () => createStore(reducers);

export default storeConfig;