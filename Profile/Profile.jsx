import React from 'react';
import AvaDescription from './AvaDescription/AvaDescription';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import {addPost} from "../redux/state";


const Profile = (props) => {

    return (

        <div className={s.content}>
            <AvaDescription/>
            <MyPosts posts={props.profilePage.posts}
                     NewPostText={props.profilePage.NewPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}
export default Profile;