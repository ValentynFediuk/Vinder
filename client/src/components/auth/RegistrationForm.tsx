import React, {FunctionComponent, SyntheticEvent, useContext, useState} from 'react';
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import logo from "./../../img/logo.png";
import OutlinedBtn from "../ui/button/OutlinedBtn";
import {Context} from "../../index";

const RegistrationForm: FunctionComponent = () => {

    const [userData, setUserData] = useState<any>({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const {store} = useContext(Context);

    const createUser = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        store.registration(userData.email, userData.password, userData.confirmPassword)
    }

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100wv',
                minHeight: '100vh',
                overflow: 'hidden',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                px: 1,
                textAlign: 'center',
                flexDirection: 'column',
                '& img': {
                    marginTop: '20px',
                    marginBottom: '20px',
                    borderRadius: '4px',
                    boxShadow: '0px 0px 20px 0px #ff0000',
                }
            }}
        >
            <Box
                component="form"
                onSubmit={createUser}
                noValidate
                autoComplete="off"
                sx={{
                    maxWidth: '500px',
                    '& .MuiFormControl-root, & button': {
                        marginBottom: '20px',
                    },
                    '& h1': {
                        fontSize: '50px',
                        margin: '20px 0'
                    },
                }}
            >
                <img
                    src={logo}
                    alt="logo"
                />
                {/*<OutlinedInput*/}
                {/*    type="email"*/}
                {/*    label="E-mail"*/}
                {/*/>*/}
                {/*<OutlinedInput*/}
                {/*    type="password"*/}
                {/*    label="Password"*/}
                {/*/>*/}
                {/*<OutlinedInput*/}
                {/*    type="password"*/}
                {/*    label="Confirm password"*/}
                {/*/>*/}
                <OutlinedBtn>
                    Submit
                </OutlinedBtn>
                <Link to="/login">
                    <OutlinedBtn>
                        Login
                    </OutlinedBtn>
                </Link>
            </Box>
        </Box>
    );
};

export default RegistrationForm;
