import ReduxMenu from "../Components/redux-menu";
import { useDispatch, useSelector } from 'react-redux';
import {changeNome} from '../store/nome/nomeAction';

export default function Page() {

    const {nome} = useSelector(state => {
        return state.nomes
    })

    const dispatch  = useDispatch();

    function submitForm(e) {
        e.preventDefault()
        
        dispatch(changeNome(e.target.name.value));
    }

    return (
        <>
            <h1>Redux Forms</h1>
            <ReduxMenu />
            <form onSubmit={submitForm}>
                <input type="text" placeholder="Your name" name='name' />
                &nbsp;
                <button type="submit">Save</button>
            </form>

            <br />
            {nome}
        </>
    );
}
