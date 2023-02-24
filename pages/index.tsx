import type {NextPage} from 'next'
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {getUser} from "../store/reducers/ActionCreators";

interface IUser {
    token: string;
    email: string;
    id: number;
    name: string;
}

const Home: NextPage = () => {


    return (
        <div>
            fffffdddd
        </div>
    )
}

export default Home
