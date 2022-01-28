import ReduxMenu from "../Components/redux-menu";
import { connect } from 'react-redux';
import { useState } from "react";
import {alterarNome} from '../store/actions/nomeAction';

function Page(props) {

    const { setNome } = props;

    console.log(props)

    function submitForm(e) {
        e.preventDefault()

        setNome(alterarNome, e.target.name.value);
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
        </>
    );
}

function mapStateToProps(state) {
    return {
        nome: state.nomes.nome,
        numeros: state.numeros
    }
}

function mapDispatchToProp(dispatch) {
    return {
        setNome(callback, novoNome) {
            // action creator -> action
            const action = callback(novoNome);
            dispatch(action);
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Page);