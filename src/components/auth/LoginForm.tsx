import React, { FunctionComponent } from 'react';
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

interface OwnProps {}

type Props = OwnProps;

const LoginForm: FunctionComponent<Props> = (props) => {

  return (
      <Box
          sx={{
              display: 'flex',
              width: '100%',
              height: '100vh',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'background.default',
              color: 'text.primary',
              borderRadius: 1,
              p: 0,
              textAlign: 'center',
          }}
      >
          <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                  maxWidth: '500px',
                  '& .MuiFormControl-root, & button': {
                      marginBottom: '20px',
                  },
                  '& h1': {
                      fontSize: '50px',
                  }
              }}
          >
              <h1>Login</h1>

              <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Login"
                  variant="outlined"
              />
              <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
              />
              <Button
                  fullWidth
                  variant="outlined"
                  type="submit"
                  sx={{
                      paddingTop: '10px',
                      paddingBottom: '10px',
                  }}
              >
                  Submit
              </Button>
              <Link to="/register">
                  <Button
                      fullWidth
                      variant="outlined"
                      sx={{
                          paddingTop: '10px',
                          paddingBottom: '10px',
                      }}
                  >
                      Register
                  </Button>
              </Link>
          </Box>
      </Box>
  );
};

export default LoginForm;
