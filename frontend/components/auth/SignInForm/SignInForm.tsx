import styles from './SignInForm.module.scss'
import React, {useState} from "react";
import {Input} from "../../ui";
import {Button} from "../../ui/button/Button";
import {useRouter} from "next/router";
import {authAPI} from "../../../services/AuthService";
import {LiquidButton} from "../../ui/LiquidButton/LiquidButton";

export const SignInForm = () => {
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
            <h1 className={'title'}>Sign in</h1>
            <Input
                label={'E-mail'}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
            />
            <Input
                label={'Password'}
                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
                type="password"
            />
            <Input
                type="password"
                label={'Confirm password'}
            />
            <Button type={"submit"}>
                Submit
            </Button>
            <LiquidButton type={"button"} onClick={() => router.push('/auth/login')}>
                Go to login
            </LiquidButton>
        </form>
    )
}