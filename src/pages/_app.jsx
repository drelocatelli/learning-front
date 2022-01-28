import Head from "next/head"
import '../../styles/globals.css';
import Menu from "../Components/Menu";

import {Provider} from 'react-redux';
import configStore from '../store/storeConfig';

const store = configStore();

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <Head>
        <title>My app</title>
      </Head>
      <Menu/>
      <div style={{padding: '10px 30px'}}>
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default MyApp
