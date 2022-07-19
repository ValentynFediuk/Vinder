import React, { FunctionComponent } from 'react';
import LoginForm from "../components/auth/LoginForm";
import Box from "@mui/material/Box";

interface OwnProps {}

type Props = OwnProps;

const Login: FunctionComponent<Props> = (props) => {

  return (
      <Box>
          <LoginForm />
      </Box>
  );
};

export default Login;
