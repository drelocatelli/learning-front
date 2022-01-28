import ReduxMenu from "../Components/redux-menu";
import { connect } from 'react-redux';
import { alterarNome } from '../store/storeConfig';
import { useState } from "react";

function Page(props) {

    const [name, setName] = useState('');
    
    const { setNome } = props;

    function submitForm(e) {
        e.preventDefault()

        setNome(alterarNome, name);
    }

    return (
        <>
            <h1>Redux Forms</h1>
            <ReduxMenu />
            <form onSubmit={submitForm}>
                <input type="text" placeholder="Your name" name='name' onChange={e => setName(e.target.value)} />
                &nbsp;
                <button type="submit">Save</button>
            </form>
        </>
    );
}

function mapStateToProps(state) {
    return {
        name: state.name
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