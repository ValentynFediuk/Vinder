import React, {FunctionComponent} from 'react';
import {SignUpForm} from "../../components/auth/SignUpForm/SignUpForm";
import AuthLayout from "../../layouts/AuthLayout";

const Login: FunctionComponent = () => {
    return (
        <AuthLayout>
            <SignUpForm/>
        </AuthLayout>
    );
};

export default Login;