export interface ISingIn {
    email: string;
    password: string;
}

export interface ISingInResponse {
    user: {
        email: string;
    };
}