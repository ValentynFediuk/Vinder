import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', {email, password})
    }

    static async registration(firstName: string, lastName: string, email: string, password: string, confirmPassword: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/registration', {firstName, lastName, email, password, confirmPassword})
    }

    static async logout(): Promise<void> {
        return $api.post('/logout')
    }

}

