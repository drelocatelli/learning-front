import { configureStore } from '@reduxjs/toolkit';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import nomesReducers from './nome/nomesReducers';
import numerosReducers from './numeros/numerosReducers';

export const store = configureStore({
  reducer: {
    numeros: numerosReducers,
    nomes: nomesReducers
  }
});
