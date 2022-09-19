import styles from './SignInForm.module.scss'
import React, {useState} from "react";
import {Input} from "../../ui";
import {Button} from "../../ui/button/Button";
import axios from "axios";
import login from "../../../pages/auth/login";

export const SignInForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        axios.post('http://localhost:7000/auth/registration', {
            email: email,
            password: password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <form className={styles.form_wrapper} onSubmit={(e) => submitForm(e)}>
            <h1 className={'title'}>SignIn</h1>
            <Input
                label={'E-mail'}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
            />
            <Input
                label={'Password'}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
            />
            <Input
                label={'Confirm password'}
            />
            <Button typeBtn={'submit'}>
                Login
            </Button>
        </form>
    )
}