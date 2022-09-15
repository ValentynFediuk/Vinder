import styles from './LoginForm.module.scss'
import React from "react";
import {Input} from "../../ui";
import {Button} from "../../ui/button/Button";
import { yupResolver } from '@hookform/resolvers/yup';
import { ILogin } from './Login.model';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { loginFormSchema } from './Login.schema';
import {useLoginMutation} from "./Login.api";

export const LoginForm = () => {
    const [sendLoginRequest, { isLoading, status }] =
        useLoginMutation();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ILogin>({
        resolver: yupResolver(loginFormSchema),
        mode: 'onChange',
    });
    const router = useRouter();

    const onSubmit: SubmitHandler<ILogin> = async (formData) => {
        await sendLoginRequest({ ...formData })
            .unwrap()
            .then(() => {
                router.push('/userpage');
            })
            .catch((e) => console.error(e));
        if (status === 'fulfilled') {
            reset();
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form_wrapper}>
            <h1 className={'title'}>Login</h1>
            <Input
                label={'Login'}
                {...register('email')}
                error={errors.email}
            />
            <Input
                label={'Password'}
                {...register('password')}
                type="password"
                error={errors.password}
            />
            <Button
                {...register('password')}
                loadingData={!!isLoading}
                typeBtn="submit"
            >
                Login
            </Button>
        </form>
    )
}