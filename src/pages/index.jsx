import { connect } from 'react-redux';

function Page(props) {

  const {nome} = props;

  console.log(props)
  
  return (
    <>
      Home page 

      <br /><br />
      Hello, {nome}
    </>
  )
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