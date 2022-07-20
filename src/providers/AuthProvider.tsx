import React, {createContext, FC, useState} from 'react';
import {TypeSetState, IUser} from "../types";

interface IContext{
    user: IUser | null
    setUser: TypeSetState<IUser | null>
}

const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider: FC = ({children}: any) => {
    const [user, setUser] = useState<IUser | null>(null)
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
