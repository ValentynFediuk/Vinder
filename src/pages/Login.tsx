import React, {FunctionComponent, useEffect} from 'react';
import LoginForm from "../components/auth/LoginForm";
import Box from "@mui/material/Box";
import axios from "axios";

const Login: FunctionComponent = (props: any) => {
    const req = async () => {
        try {
            const data = await axios.get('http://localhost:5000')
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {

        req()
    }, [])


    return (
        <Box>
            <LoginForm/>
        </Box>
    );
};

export default Login;
