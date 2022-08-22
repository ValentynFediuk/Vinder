import React, {FunctionComponent, useContext} from 'react';
import Box from "@mui/material/Box";
import {Link, useNavigate} from "react-router-dom";
import logo from "./../../img/logo.png";
import OutlinedBtn from "../ui/button/OutlinedBtn";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Context} from "../../index";
import {Input} from "../ui";

type FormData = {
    email: string;
    password: string;
};

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});


const LoginForm: FunctionComponent = () => {

    const { setValue, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const loginUser = (data: FormData, e: any) => {
        e.preventDefault()
        store.login(data.email, data.password)
            .then(() => {
                if (store.isAuth) {
                    navigate('/user-page')
                }
            })
    };

    const navigate = useNavigate();

    const {store} = useContext(Context);

    return (
        <Box
            sx={{
                display: 'flex',
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
                alt="logo"
            />
            <Box
                component="form"
                onSubmit={handleSubmit(loginUser)}
                noValidate
                autoComplete="off"
                sx={{
                    width: '100%',
                    maxWidth: '500px',
                    '& .MuiFormControl-root, & button': {
                        marginBottom: '20px',
                    },
                    '& h1': {
                        fontSize: '50px',
                    }
                }}
            >
                {/*<OutlinedInput*/}
                {/*    onChange={(e) => setValue('email', e.target.value, { shouldValidate: true })}*/}
                {/*    error={Boolean(errors.email)}*/}
                {/*    label='Email'*/}
                {/*    type='email'*/}
                {/*/>*/}
                {/*<p> {errors.email?.message} </p>*/}
                {/*<OutlinedInput*/}
                {/*    onChange={(e) => setValue('password', e.target.value, { shouldValidate: true })}*/}
                {/*    error={Boolean(errors.password)}*/}
                {/*    label='Password'*/}
                {/*    type='password'*/}
                {/*/>*/}
                {/*<p> {errors.password?.message} </p>*/}
                {/*<OutlinedBtn>*/}
                {/*    Submit*/}
                {/*</OutlinedBtn>*/}
                <Input></Input>
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