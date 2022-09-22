import React, {useEffect, useState} from "react";
import styles from "../SignInForm/SignInForm.module.scss";
import {Input} from "../../ui";
import {Button} from "../../ui/button/Button";
import {useRouter} from "next/router";
import {LiquidButton} from "../../ui/LiquidButton/LiquidButton";
import {authAPI} from "../../../services/AuthService";
import {loginFormSchema} from "./Login.schema";
import {ILogin} from "./Login.model";
import {SubmitHandler, useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

export const LoginForm = () => {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    const [error, setError] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ILogin>({
        resolver: yupResolver(loginFormSchema),
        mode: 'onChange',
    });

    const { onChange, onBlur, name, ref } = register('email');

    const clearError = () => {
        setError(false);
    };



    const router = useRouter();

    const [loginUser, { isLoading, status }] = authAPI.useLoginUserMutation()

    // const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //
    //     await loginUser({email: email, password: password})
    //         .unwrap()
    //         .then((response) => {
    //             window.localStorage.setItem('token', response.token)
    //             router.push('/user')
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }

    const onSubmit: SubmitHandler<ILogin> = async (formData) => {
        await loginUser({...formData})
            .unwrap()
            .then((response) => {
                    router.push('/user')
                    window.localStorage.setItem('token', response.token)
                })
            .catch(() => setError(true));

        if (status === 'fulfilled') {
            reset();
        }
    };

    return (
        <form
            className={styles.form_wrapper}
            onSubmit={handleSubmit(onSubmit)}
        >
            <h1 className={'title'}>Login</h1>
            <Input
                label={'E-mail'}
                type="text"
                // onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setEmail(e.target.value)}
                onChange={onChange}
                {...register('email')}
                error={errors.email}
            />
            <Input
                // onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPassword(e.target.value)}
                {...register('password')}
                error={errors.password}
                type="password"
                label={'Password'}
            />
            {error && (
                <div className={styles.form_incorrect}>
                    Incorrect email or password
                </div>
            )}
            <Button type={"submit"}>
                Submit
            </Button>
            <LiquidButton type={"button"} onClick={(e) => router.push('/auth/signin')}>
                Go to sign in
            </LiquidButton>
        </form>
    )
}