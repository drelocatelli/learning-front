import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { alterarNome } from '../store/storeConfig';

function Page(props) {

  const {name} = props;

  console.log(props)
  
  return (
    <>
      Home page 

      <br /><br />
      Hello, {name}
    </>
  )
}


function mapStateToProps(state) {
  return {
      name: state.name,
      min: state.min,
      max: state.max
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