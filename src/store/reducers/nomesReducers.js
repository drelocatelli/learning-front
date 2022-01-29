import { createReducer } from "@reduxjs/toolkit";
import { changeNome } from "../actions/nomeAction";

const INITIAL_STATE = {
    nome: ''
}

export default createReducer(INITIAL_STATE, {
    [changeNome.type]: (state, action) => ({...state, nome: action.payload})
});
