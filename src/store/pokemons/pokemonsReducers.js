import { createReducer } from "@reduxjs/toolkit";
import {changePokemons} from './pokemonsAction';

const INITIAL_STATE = {
    pokemons: {}
}

export default createReducer(INITIAL_STATE, {
    [changePokemons.type]: (state, action) => ({...state, pokemons: action.payload})
});