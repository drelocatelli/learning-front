import { connect, useSelector } from 'react-redux';

export default function Page() {

  const {nome} = useSelector(state => {
    return state.nomes
  })

  return (
    <>
      Home page 

      <br /><br />
      Hello, {nome}
    </>
  )
}


