import styles from './LoginForm.module.scss'
import React from "react";
import {Input} from "../../ui";
import {Button} from "../../ui/button/Button";

export const LoginForm = () => {

    return (
        <form className={styles.form_wrapper}>
            <h1 className={'title'}>Login</h1>
            <Input
                label={'Login'}
            />
            <Input
                label={'Password'}
            />
            <Button>
                Login
            </Button>
        </form>
    )
}