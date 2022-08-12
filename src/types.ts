import {Dispatch, SetStateAction} from "react";

export type TypeSetState<T> = Dispatch<SetStateAction<T>>

export interface IPost {
    author: IUser
    createdAt: string
    content: string
    images?: string[]
}

export interface IUser {

}