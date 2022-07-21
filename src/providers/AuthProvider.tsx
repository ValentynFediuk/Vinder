import * as React from "react";
import {createContext, FC, PropsWithChildren, useEffect, useState} from "react";
import {db} from "../firebse";
import {collection, doc, setDoc, getDocs, getDoc} from "firebase/firestore";

export const AuthContext = createContext<any>(null);

const AuthProvider: FC<PropsWithChildren> = ({children}) => {
    const [users, setUsers] = useState<any>({});

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        // @ts-ignore
            console.log(querySnapshot)
        //     try {
        //         if (docSnap.exists()) {
        //             console.log("Document data:", docSnap.data());
        //
        //         } else {
        //             console.log("No such document!");
        //         }
        //
        //     } catch (e) {
        //         console.error(e)
        //     }
        }
        fetchData()
            .catch(console.error);
    },[])

    return (
        <AuthContext.Provider value={users}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
