import React, {FunctionComponent} from 'react';
import Layout from "../../layout/Layout";
import {LoginForm} from "../../components/auth/LoginForm/LoginForm";

const Login: FunctionComponent = () => {
    return (
        <div>
            <Layout>
                <LoginForm />
            </Layout>
        </div>
    );
};

export default Login;