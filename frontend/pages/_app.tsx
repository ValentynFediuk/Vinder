import '../styles/globals.scss'
import '../styles/reset.scss'
import type { AppProps } from 'next/app'
import {Provider} from "react-redux";
import {setupStore} from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {

  const store = setupStore();

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
