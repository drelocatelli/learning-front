import {connect} from 'react-redux';
import Media from '../Components/media';

function Page(props) {

    const {numeros} = props;
    
    return(
        <>
            <h1>Learning redux</h1>
            <div>
                Intervalo de numeros: <br /><br />
                Min:    <input type="text" value={numeros.min} />
                &nbsp;&nbsp;
                Max: <input type="text" value={numeros.max} />
                <br /><br />
                Média dos números: {(numeros.max + numeros.min / 2)}
                <br /><br />
                Soma dos números: {(numeros.max + numeros.min)}
            </div>
        </>
    );
}

function mapStateToProps(state) {
    return {
        numeros: state.numeros
    }
}

export default connect(mapStateToProps)(Page);