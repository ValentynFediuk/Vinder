import {ChangeEventHandler} from "react";

export interface OutlinedInputProps {
    label: string
    type: string
    onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}