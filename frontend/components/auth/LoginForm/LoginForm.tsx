import React, {useState} from "react";
import styles from "../SignInForm/SignInForm.module.scss";
import {Input} from "../../ui";
import {Button} from "../../ui/button/Button";
import {$api} from "../../../http/axios";

export const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        $api.post('/auth/users', {
            email: email,
            password: password
        })
            .then(function (response) {
                console.log(response);
                window.sessionStorage.setItem('token', response.data.token)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <form className={styles.form_wrapper} onSubmit={(e) => submitForm(e)}>
            <h1 className={'title'}>Login</h1>
            <Input
                label={'E-mail'}
                type="text"
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
            />
            <Input
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
                type="password"
                label={'Password'}
            />
            <Button type={'submit'}>
                Submit
            </Button>
        </form>
    )
}