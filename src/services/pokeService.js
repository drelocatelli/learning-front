import axios from "axios";
import { changePokemons } from "../store/pokemons/pokemonsAction";

export function getAllPokemons() {
    return (dispatch) => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon/')
            .then(res => {
                dispatch(changePokemons(res.data))
            })
            .catch(err => console.log(err.response));
    }
}