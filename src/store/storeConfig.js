import {createStore, combineReducers} from 'redux';

const reducers = combineReducers({
    numeros: (state, action) => {
        console.log(state)
        switch(action.type) {
            case 'NUM_MIN_ALTERADO':
                return {
                    ...state,
                    min: action.payload
                }
            case 'NUM_MAX_ALTERADO':
                return {
                    ...state,
                    max: action.payload
                }
            case 'NOME_ALTERADO':
                return{
                    ...state,
                    name: action.payload
                }
            default:
                return {
                    min: 1,
                    max: 10,
                    name: ''
                }
        }

    }
});

const storeConfig = () => createStore(reducers);

// Action creator
export function alterarNumeroMinimo(novoNumero) {
    return{
        type: 'NUM_MIN_ALTERADO',
        payload: novoNumero
    }
}

export function alterarNumeroMaximo(novoNumero) {
    return{
        type: 'NUM_MAX_ALTERADO',
        payload: novoNumero
    }
}

export function alterarNome(novoNome) {
    return{
        type: 'NOME_ALTERADO',
        payload: novoNome
    }
}

export default storeConfig;