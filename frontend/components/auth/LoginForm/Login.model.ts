export interface ILogin {
    email: string;
    password: string;
}

export interface ILoginResponse {
    user: {
        email: string;
    };
}