import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let postsElements = props.posts.map (p=><Post message={p.message} likeCounter={p.LikeCounter}/>);
let addPost = ()=>{

    props.addPost();
    }
let onPostChange=()=>{
let text =newPostElement.current.value;
props.updateNewPostText (text);
}


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
<div>
            <div>
                <textarea onChange={onPostChange} ref = {newPostElement}
                          value={props.NewPostText}/>
            </div>
            <div>
                <button onClick={ addPost}>Add</button>
                <button>Remove</button>
            </div>
        </div>
    <div className={s.posts}>

        {postsElements}

    </div>
</div>

)
}
export default MyPosts;