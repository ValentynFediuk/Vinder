import styles from './SignInForm.module.scss'
import React from "react";
import {Input} from "../../ui";
import {Button} from "../../ui/button/Button";

export const SignInForm = () => {

    return (
        <form className={styles.form_wrapper}>
            <h1 className={'title'}>SignIn</h1>
            <Input
                label={'E-mail'}
            />
            <Input
                label={'Password'}
            />
            <Input
                label={'Confirm password'}
            />
            <Button>
                Login
            </Button>
        </form>
    )
}