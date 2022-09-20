import React, {FunctionComponent} from 'react';
import {LoginForm} from "../../components/auth/LoginForm/LoginForm";
import AuthLayout from "../../layouts/AuthLayout";

const Login: FunctionComponent = () => {
    return (
        <AuthLayout>
            <LoginForm/>
        </AuthLayout>
    );
};

export default Login;