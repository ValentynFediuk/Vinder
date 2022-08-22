import React, {FC} from 'react';
import OutlinedBtn from "../components/ui/button/OutlinedBtn";
import {Link} from "react-router-dom";
import {store} from "../index";

const UserPage: FC = () => {

    console.log('up')

    return (
        <>
            <Link to="/login">
                <OutlinedBtn onClick={() => store.logout()}>
                    Logout
                </OutlinedBtn>
            </Link>
            <div>User page</div>
            <h1>{`User: ${store.user.email}`}</h1>
        </>
    )
};

export default UserPage;
