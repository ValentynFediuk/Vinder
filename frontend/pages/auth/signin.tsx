import React, {FunctionComponent} from 'react';
import Layout from "../../layout/Layout";
import {SignInForm} from "../../components/auth/SignInForm/SignInForm";

const Login: FunctionComponent = () => {
    return (
        <div>
            <Layout>
                <SignInForm />
            </Layout>
        </div>
    );
};

export default Login;