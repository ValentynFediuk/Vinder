import React, {FunctionComponent} from 'react';
import {SignInForm} from "../../components/auth/SignInForm/SignInForm";
import AuthLayout from "../../layouts/AuthLayout";

const Signin: FunctionComponent = () => {

    return (
        <AuthLayout>
            <SignInForm/>
        </AuthLayout>
    );
};

export default Signin;