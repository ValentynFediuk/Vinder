import React, {FunctionComponent, SyntheticEvent, useState} from 'react';
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import 'firebase/compat/auth';
import logo from "../../img/logo.png";
import {OutlinedInput} from "../inputs/OutlinedInput";
import OutlinedBtn from "../buttons/OutlinedBtn";

const RegistrationForm: FunctionComponent = () => {

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const createUser = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        const auth = getAuth();

        try {
            await createUserWithEmailAndPassword(
                auth,
                userData.email,
                userData.password
            )
        } catch (error: any) {
            error.message && console.log(error.message)
        }
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
                />
                <OutlinedInput
                    type="text"
                    label="Last name"
                />
                <OutlinedInput
                    type="email"
                    label="E-mail"
                    onChange={e => setUserData({...userData, email: e.target.value})}
                />
                <OutlinedInput
                    type="password"
                    label="Password"
                    onChange={e => setUserData({...userData, email: e.target.value})}
                />
                <OutlinedInput
                    type="password"
                    label="Confirm password"
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
