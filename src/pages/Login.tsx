import React, {FunctionComponent, useEffect} from 'react';
import LoginForm from "../components/auth/LoginForm";
import Box from "@mui/material/Box";
import {collection, doc, setDoc, getDoc} from "firebase/firestore";
import {db} from "../firebse";


const Login: FunctionComponent = () => {




    return (
        <Box>
            <LoginForm/>
        </Box>
    );
};

export default Login;
