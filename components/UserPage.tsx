import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import MainLayout from "../layouts/MainLayout/MainLayout";
import {getUser, uploadAvatar} from "../store/reducers/ActionCreators";
import UserAvatar from "../images/user-avatar.svg"
import Dropzone from "react-dropzone";
export const UserPage = () => {
    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.userSlice)

    useEffect(() => {
        dispatch(getUser())
    }, [])

    const foo = (e: any) => {
        const formData = new FormData()
        formData.append('file', e.target.files[0])
        dispatch(uploadAvatar(formData))
    }

    return (
        <MainLayout user={user}>
            <UserAvatar height={400} />
            {/*<Dropzone onDrop={(e) => foo(e)}>*/}
            {/*    {({getRootProps, getInputProps}) => (*/}
            {/*        <section>*/}
            {/*            <div {...getRootProps()}>*/}
            {/*                <input {...getInputProps()} />*/}
            {/*                <p>Drag 'n' drop some files here, or click to select files</p>*/}
            {/*            </div>*/}
            {/*        </section>*/}
            {/*    )}*/}
            {/*</Dropzone>*/}
          <img
            src='components'
            alt=''
          />
            <form>
                <input
                  type="file"
                  onChange={(e) => foo(e)}
                  accept="image/png, image/jpeg"
                  name="<ffff>" placeholder="Select file"
                />
            </form>
            </MainLayout>
    )
}