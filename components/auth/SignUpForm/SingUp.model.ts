export interface ISingUp {
    name: string
    email: string
    password: string
}

export interface ISingInResponse {
    user: {
        email: string
    };
}