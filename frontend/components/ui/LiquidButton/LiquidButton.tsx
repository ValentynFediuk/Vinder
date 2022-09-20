import React, {ButtonHTMLAttributes, FC, PropsWithChildren} from 'react';
import styles from './LiquidButton.module.scss';
import {FieldError} from "react-hook-form";

export interface ButtonProps
    extends
        ButtonHTMLAttributes<HTMLButtonElement>
{
    helperText?: string
    error?: FieldError;
    label?: string;
    loadingData?: boolean,
}


export const LiquidButton: FC<PropsWithChildren<ButtonProps>> = ({ children, ...props }) => (
    <button className={styles.button} {...props}>
        <span>{children}</span>
        <div className={'liquid'}></div>
    </button>
)
