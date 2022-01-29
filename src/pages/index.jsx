import { connect, useSelector } from 'react-redux';

export default function Page() {

  const {nome} = useSelector(state => {
    return state.nomes
  })

  const {pokemons} = useSelector(state => {
    return state.pokemons
  })

  console.log(pokemons)

  return (
    <>
      Home page 

      <br /><br />
      Hello, {nome}
    </>
  )
}


