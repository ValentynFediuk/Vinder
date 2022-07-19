import React, {FunctionComponent, useState} from 'react';
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

interface OwnProps {}

type Props = OwnProps;

const RegistrationForm: FunctionComponent<Props> = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const createUser = () => {
        const authentication = getAuth();

        createUserWithEmailAndPassword(authentication, email, password)
            .then(r => console.log(r))
    }

  return (
      <Box
          sx={{
              display: 'flex',
              width: '100wv',
              height: '100vh',
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'background.default',
              color: 'text.primary',
              px: 1,
              textAlign: 'center',
          }}
      >
          <Box
              component="form"
              onSubmit={(e: { preventDefault: () => void; }) => {
                  e.preventDefault()
                  createUser()
              }
              }
              noValidate
              autoComplete="off"
              sx={{
                  maxWidth: '500px',
                  '& .MuiFormControl-root, & button': {
                      marginBottom: '20px',
                  },
                  '& h1': {
                      fontSize: '50px',
                  },
              }}
          >
              <h1>Register</h1>
              <TextField
                  fullWidth
                  id="outlined-basic"
                  label="First name"
                  variant="outlined"
              />
              <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Last name"
                  variant="outlined"
              />
              <TextField
                  fullWidth
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                  type="email"
                  onChange={e => setEmail(e.target.value)}
              />
              <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                  onChange={e => setPassword(e.target.value)}
              />
              <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Confirm password"
                  variant="outlined"
                  type="password"
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

              <Link to="/login">
                  <Button
                      fullWidth
                      variant="outlined"
                      sx={{
                          paddingTop: '10px',
                          paddingBottom: '10px',
                      }}
                  >
                      Login
                  </Button>
              </Link>
          </Box>
      </Box>
  );
};

export default RegistrationForm;
