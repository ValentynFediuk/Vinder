import styles from './SignInForm.module.scss'
import React, {useState} from "react";
import {Input} from "../../ui";
import {Button} from "../../ui/button/Button";
import {useRouter} from "next/router";
import {authAPI} from "../../../services/AuthService";
import {LiquidButton} from "../../ui/LiquidButton/LiquidButton";
import {SubmitHandler, useForm} from "react-hook-form";
import {ISingUp} from "./SingUp.model";
import {yupResolver} from "@hookform/resolvers/yup";
import {SignInFormSchema} from "./SignIn.schema";
import EyeIcon from '../../../images/eye-visible.svg';
import EyeHiddenIcon from '../../../images/eye-hidden.svg';

export const SignInForm = () => {
    const [inputType, setInputType] = useState(true)
    const router = useRouter();
    const [signupUser, {}] = authAPI.useLoginUserMutation()
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<ISingUp>({
        resolver: yupResolver(SignInFormSchema),
        mode: 'onChange',
    });

    const onSubmit: SubmitHandler<ISingUp> = async (formData) => {
        await signupUser({...formData})
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
            <h1 className={'title'}>Sign up</h1>
            <Input
                {...register('name')}
                error={errors.name}
                label={'Name'}
                type="text"
            />
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
                Go to sign in
            </LiquidButton>
        </form>
    )
}