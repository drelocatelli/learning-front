const initialState = {
    nome: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'NOME_ALTERADO':
            return {
                ...state,
                nome: action.payload
            }
        default:
            return state;
    }
}