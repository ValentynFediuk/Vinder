import React, {FunctionComponent} from 'react';
import RegistrationForm from "../components/auth/RegistrationForm";
import {Box} from '@mui/material';

interface OwnProps {
}

type Props = OwnProps;

const Register: FunctionComponent<Props> = (props) => {

    return (
        <Box>
            <RegistrationForm />
        </Box>
    )
};

export default Register;
