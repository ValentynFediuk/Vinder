import React, {FunctionComponent, useEffect} from 'react';
import LoginForm from "../components/auth/LoginForm";
import Box from "@mui/material/Box";
import axios from "axios";

const Login: FunctionComponent = (props: any) => {
    return (
        <Box>
            <LoginForm/>
        </Box>
    );
};

export default Login;
