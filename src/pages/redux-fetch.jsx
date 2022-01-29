import { useDispatch, useSelector } from "react-redux";
import ReduxMenu from "../Components/redux-menu";
import { getAllPokemons } from "../services/pokeService";

export default function Page() {

    const {pokemons} = useSelector(state => {
        return state.pokemons
    })

    const dispatch = useDispatch();

    function submitPokemons() {
        dispatch(getAllPokemons());

        console.log(pokemons)
    }

    return(
        <>
            <h1>Redux Fetch</h1>
            <ReduxMenu />
            <button type="button" onClick={submitPokemons}>Fetch Pokemons</button>
            <br /><br />
            {pokemons.count > 0 ?
                (
                    pokemons.results.map(item => {
                        return(
                            <div>
                                {item.name}
                            </div>
                        )
                    })
                )
            : null}
        </>
    );
    
}