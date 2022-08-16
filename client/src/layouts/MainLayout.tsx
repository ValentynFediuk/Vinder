import React, {FC} from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Register from "../pages/Register";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../pages/Login";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const MainLayout: FC = () => {

    return (
        <ThemeProvider theme={darkTheme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Register/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default MainLayout;
