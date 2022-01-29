import { configureStore } from '@reduxjs/toolkit';
import nomesReducers from './nome/nomesReducers';
import numerosReducers from './numeros/numerosReducers';
import pokemonsReducers from './pokemons/pokemonsReducers';

export const store = configureStore({
  reducer: {
    numeros: numerosReducers,
    nomes: nomesReducers,
    pokemons: pokemonsReducers
  }
});
