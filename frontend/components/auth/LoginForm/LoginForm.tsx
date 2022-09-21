import React, {useEffect, useState} from "react";
import styles from "../SignInForm/SignInForm.module.scss";
import {Input} from "../../ui";
import {Button} from "../../ui/button/Button";
import {useRouter} from "next/router";
import {LiquidButton} from "../../ui/LiquidButton/LiquidButton";
import {authAPI} from "../../../services/AuthService";

export const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter();

    const [loginUser, {}] = authAPI.useLoginUserMutation()

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        await loginUser({email: email, password: password})
            .unwrap()
            .then((response) => {
                window.localStorage.setItem('token', response.token)
                router.push('/user')
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
            <Button type={"submit"}>
                Submit
            </Button>
            <LiquidButton type={"button"} onClick={(e) => router.push('/auth/signin')}>
                Go to sign in
            </LiquidButton>
        </form>
    )
}