import React, {createContext} from 'react';
import App from './App';
import Store from "./store/store";
import './index.css';
import {createRoot} from "react-dom/client";

interface State {
    store: Store,
}

export const store = new Store();

export const Context = createContext<State>({
    store,
})

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Context.Provider
            value={{
                store
            }}
        >
            <App/>
        </Context.Provider>,
    </React.StrictMode>
);