import type { NextPage } from 'next'
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getUser } from "../store/reducers/ActionCreators";
import AuthLayout from "../layouts/AuthLayout";
import { SignInForm } from "../components/auth/SignInForm/SignInForm";

interface IUser {
	token: string;
	email: string;
	id: number;
	name: string;
}

const Home: NextPage = () => {

	return (
		<AuthLayout>
			<SignInForm/>
		</AuthLayout>
	)
}

export default Home
