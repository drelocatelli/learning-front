export function alterarNome(novoNome) {
    return{
        type: 'NOME_ALTERADO',
        payload: novoNome
    }
}