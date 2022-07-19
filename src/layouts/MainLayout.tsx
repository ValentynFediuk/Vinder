import React, {FunctionComponent} from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Register from "../pages/Register";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../pages/Login";


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

interface OwnProps {
}

type Props = OwnProps;

const MainLayout: FunctionComponent<Props> = (props) => {

    return (
        <ThemeProvider theme={darkTheme}>
            <BrowserRouter>
                <Routes>
                        <Route path="register" element={<Register/>}/>
                        <Route path="login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default MainLayout;
