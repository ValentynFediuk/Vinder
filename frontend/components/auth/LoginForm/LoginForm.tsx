import React, {useEffect, useState} from "react";
import styles from "../SignInForm/SignInForm.module.scss";
import {Input} from "../../ui";
import {Button} from "../../ui/button/Button";
import {useRouter} from "next/router";
import {LiquidButton} from "../../ui/LiquidButton/LiquidButton";
import {$api} from "../../../http/axios";
import {authAPI} from "../../../services/AuthService";

export const LoginForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [authUser, {}] = authAPI.useAuthUserMutation()

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        await authUser({email: email, password: password})
            .unwrap()
            .then((response) => {
                console.log( response)
                    window.localStorage.setItem('token', response.token)
                    router.push('/user')
                })
                .catch(function (error) {
                    console.log(error);
                });
        // $api.post('/auth/login', {
        //     email: email,
        //     password: password
        // })
        //     .then(function (response) {
        //         window.localStorage.setItem('token', response.data.token)
        //         router.push('/user')
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });


    }

    return (
        <>
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

        </>

    )
}