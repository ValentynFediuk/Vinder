import styles from './SignInForm.module.scss'
import React, {useState} from "react";
import {Input} from "../../ui";
import {Button} from "../../ui/button/Button";
import {useRouter} from "next/router";
import {authAPI} from "../../../services/AuthService";
import {LiquidButton} from "../../ui/LiquidButton/LiquidButton";
import {SubmitHandler, useForm} from "react-hook-form";
import {ISingIn} from "./SingIn.model";
import {yupResolver} from "@hookform/resolvers/yup";
import {SignInFormSchema} from "./SignIn.schema";
import EyeIcon from '../../../images/eye-visible.svg';
import EyeHiddenIcon from '../../../images/eye-hidden.svg';

export const SignInForm = () => {
    const [inputType, setInputType] = useState(true)
    const router = useRouter();
    const [loginUser, {}] = authAPI.useLoginUserMutation()
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<ISingIn>({
        resolver: yupResolver(SignInFormSchema),
        mode: 'onChange',
    });

    const onSubmit: SubmitHandler<ISingIn> = async (formData) => {
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

            <LiquidButton type={"button"} onClick={() => router.push('/auth/login')}>
                Go to login
            </LiquidButton>
        </form>
    )
}