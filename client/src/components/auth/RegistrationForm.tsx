import React, {FunctionComponent, SyntheticEvent, useContext, useState} from 'react';
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import logo from "./../../img/logo.png";
import {OutlinedInput} from "../inputs/OutlinedInput";
import OutlinedBtn from "../buttons/OutlinedBtn";
import {Context} from "../../index";

const RegistrationForm: FunctionComponent = () => {

    const [userData, setUserData] = useState<any>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const {store} = useContext(Context);

    const createUser = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()

        store.registration(userData.firstName, userData.lastName, userData.email, userData.password, userData.confirmPassword)
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
                <OutlinedInput
                    type="text"
                    label="First name"
                    onChange={e => setUserData({...userData, firstName: e.target.value})}
                />
                <OutlinedInput
                    type="text"
                    label="Last name"
                    onChange={e => setUserData({...userData, lastName: e.target.value})}
                />
                <OutlinedInput
                    type="email"
                    label="E-mail"
                    onChange={e => setUserData({...userData, email: e.target.value})}
                />
                <OutlinedInput
                    type="password"
                    label="Password"
                    onChange={e => setUserData({...userData, password: e.target.value})}
                />
                <OutlinedInput
                    type="password"
                    label="Confirm password"
                    onChange={e => setUserData({...userData, confirmPassword: e.target.value})}
                />
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
