import styles from './SignInForm.module.scss'
import React, {useState} from "react";
import {Input} from "../../ui";
import {Button} from "../../ui/button/Button";
import {$api} from "../../../http/axios";
import {useRouter} from "next/router";

export const SignInForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        $api.post('/auth/registration', {
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
        <>
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
                <Button onClick={() => router.push('/auth/login')}>
                    fdsfsdfsdsdf
                </Button>
            </form>


        </>

    )
}