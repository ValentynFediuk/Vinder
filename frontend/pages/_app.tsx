import '../styles/globals.scss'
import '../styles/reset.scss'
import type { AppProps } from 'next/app'
import {Provider} from "react-redux";
import {store} from "next/dist/build/output/store";


const MyApp = ({ Component, pageProps }: AppProps) => (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
);

export default MyApp;

