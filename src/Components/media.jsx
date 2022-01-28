import {connect} from 'react-redux';

function Media(props) {

    const {numeros} = props;
    
    return(
        <div>
            Media dos números: {(numeros.max + numeros.min / 2)}
        </div>
    );
}

