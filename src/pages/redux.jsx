import {connect} from 'react-redux';
import {alterarNumeroMinimo, alterarNumeroMaximo} from '../store/storeConfig';
import ReduxMenu from '../Components/redux-menu';

function Page(props) {

    const {numeros} = props;

    return(
        <>
            <h1>Learning redux</h1>
            <ReduxMenu />
            <div>
                Intervalo de numeros: <br /><br />
                Min: <input type="text" value={numeros.min} onChange={e => props.alterarNumero(alterarNumeroMinimo, e.target.value)} />
                &nbsp;&nbsp;
                Max: <input type="text" value={numeros.max} onChange={e => props.alterarNumero(alterarNumeroMaximo, e.target.value)} />
                <br /><br />
                Média dos números: {(numeros.max + numeros.min / 2)}
                <br /><br />
                Soma dos números: {(Number(numeros.max) + Number(numeros.min))}
            </div>
        </>
    );
}

function mapStateToProps(state) {
    return {
        numeros: state.numeros
    }
}

function mapDispatchToProp(dispatch) {
    return {
        alterarNumero(callback, novoNumero) {
            // action creator -> action
            const action = callback(novoNumero);
            dispatch(action);
        }
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProp
)(Page);