// export interface ButtonProps {
//     onChange?: (e: ChangeEvent<HTMLInputElement>) => void
//     helperText?: string
//     value?: string
//     props?: any
// }

import {ChangeEvent} from "react";
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface InputProps
    extends
        DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
{
    helperText?: string
    value?: string
    props?: any
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    error?: FieldError;
    label: string;
}
