import React, {FunctionComponent} from 'react';
import {SignInForm} from "../../components/auth/SignInForm/SignInForm";
import AuthLayout from "../../layouts/AuthLayout";

const Login: FunctionComponent = () => {
    return (
        <AuthLayout>
            <SignInForm/>
        </AuthLayout>
    );
};

export default Login;