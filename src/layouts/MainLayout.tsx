import React, {FC} from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Register from "../pages/Register";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import AuthProvider  from '../providers/AuthProvider';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const MainLayout:FC = ()  => {

    return (
        <AuthProvider>
            <ThemeProvider theme={darkTheme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Register/>}/>
                        <Route path="register" element={<Register/>}/>
                        <Route path="login" element={<Login/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </AuthProvider>
    );
};

export default MainLayout;
