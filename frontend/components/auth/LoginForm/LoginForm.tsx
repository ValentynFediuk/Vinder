import React, {useState} from "react";
import styles from "../SignInForm/SignInForm.module.scss";
import {Input} from "../../ui";
import {Button} from "../../ui/button/Button";
import {useRouter} from "next/router";
import {LiquidButton} from "../../ui/LiquidButton/LiquidButton";
import {authAPI} from "../../../services/AuthService";
import {loginFormSchema} from "./Login.schema";
import {ILogin} from "./Login.model";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import EyeHiddenIcon from "../../../images/eye-hidden.svg";
import EyeIcon from "../../../images/eye-visible.svg";

export const LoginForm = () => {
    const router = useRouter();
    const [loginUser, {}] = authAPI.useLoginUserMutation()
    const [inputType, setInputType] = useState(true)

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<ILogin>({
        resolver: yupResolver(loginFormSchema),
        mode: 'onChange',
    });

    const onSubmit: SubmitHandler<ILogin> = async (formData) => {
        await loginUser({...formData})
            .unwrap()
            .then((response) => {
                router.push('/user')
                window.localStorage.setItem('token', response.token)
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <form
            className={styles.form_wrapper}
            onSubmit={handleSubmit(onSubmit)}
        >
            <h1 className={'title'}>Sign in</h1>
            <Input
                {...register('email')}
                error={errors.email}
                label={'E-mail'}
                type="text"
            />
            <Input
                {...register('password')}
                error={errors.password}
                label={'Password'}
                type={inputType ? 'password' : 'text'}
            >
                <button
                    className={'password-input__toggle'}
                    type='button'
                    onClick={() => setInputType(!inputType)}
                >
                    {inputType ?<EyeHiddenIcon width={20} /> : <EyeIcon width={20} />}
                </button>
            </Input>
            <Button type={"submit"}>
                Submit
            </Button>
            <LiquidButton
                type={"button"}
                onClick={() => router.push('/auth/signin')}
            >
                Go to sign up
            </LiquidButton>
        </form>
    )
}