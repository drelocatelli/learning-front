import {connect} from 'react-redux';
import ReduxMenu from '../Components/redux-menu';
import { alterarNumeroMaximo, alterarNumeroMinimo } from '../store/actions/numerosAction';

function Page(props) {

    // const {numeros} = props;

    console.log(props)

    return(
        <>
            <h1>Learning redux</h1>
            <ReduxMenu />
            <div>
                Intervalo de numeros: <br /><br />
                Min: <input type="text" value={props.numeros.min} onChange={e => props.alterarNumero(alterarNumeroMinimo, e.target.value)} />
                &nbsp;&nbsp;
                Max: <input type="text" value={props.numeros.max} onChange={e => props.alterarNumero(alterarNumeroMaximo, e.target.value)} />
                <br /><br />
                Média dos números: {(props.numeros.max + props.numeros.min / 2)}
                <br /><br />
                Soma dos números: {(Number(props.numeros.max) + Number(props.numeros.min))}
            </div>
        </>
    );
}

function mapStateToProps(state) {
    return {
        nomes: state.nomes.nome,
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