import React, {FC, useEffect, useState} from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Register from "../pages/Register";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Login from "../pages/Login";
import UserPage from "../pages/UserPage";
import {observer} from "mobx-react-lite";
import {store} from "../index";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const MainLayout: FC = () => {

    const [user, setUser] = useState<any>({})

    // const navigate = useNavigate();
    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //         store.checkAuth()
    //             .then(() => {
    //                 console.log(store.isAuth)
    //
    //             })
    //     }
    // }, [store.isAuth])


    return (
        <ThemeProvider theme={darkTheme}>
            <BrowserRouter>
                <Routes>
                    {store.isAuth
                        ?
                        <>
                            <Route path="/" element={<UserPage/>}/>
                            <Route path="/user-page" element={<UserPage/>}/>
                            <Route path="register" element={<Register/>}/>
                            <Route path="login" element={<Login/>}/>
                        </>
                        :
                        <>
                            <Route path="/" element={<Register/>}/>
                            <Route path="register" element={<Register/>}/>
                            <Route path="login" element={<Login/>}/>
                        </>
                    }
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default observer(MainLayout);
