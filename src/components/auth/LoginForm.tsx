import React, {FunctionComponent, SyntheticEvent, useState} from 'react';
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import logo from "../../img/logo.png";
import {signInWithEmailAndPassword, getAuth} from "firebase/auth";
import {OutlinedInput} from "../inputs/OutlinedInput";
import OutlinedBtn from "../buttons/OutlinedBtn";

const LoginForm: FunctionComponent = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const loginUser = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        const auth = getAuth();

        try {
            await signInWithEmailAndPassword(
                auth,
                userData.email,
                userData.password
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user)

                    // ...
                })
        } catch (error: any) {
            error.message && console.log(error.message)
        }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 0,
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
            <img
                src={logo}
                alt="logo"/>
            <Box
                component="form"
                onSubmit={loginUser}
                noValidate
                autoComplete="off"
                sx={{
                    maxWidth: '500px',
                    '& .MuiFormControl-root, & button': {
                        marginBottom: '20px',
                    },
                    '& h1': {
                        fontSize: '50px',
                    }
                }}
            >
                <OutlinedInput
                    label='Email'
                    type='email'
                    onChange={e => setUserData({...userData, email: e.target.value})}
                />
                <OutlinedInput
                    label='Password'
                    type='password'
                    onChange={e => setUserData({...userData, password: e.target.value})}
                />
                <OutlinedBtn>
                    Submit
                </OutlinedBtn>
                <Link to="/register">
                    <OutlinedBtn>
                        Register
                    </OutlinedBtn>
                </Link>
            </Box>
        </Box>
    );
};

export default LoginForm;