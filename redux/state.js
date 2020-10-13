let rerenderEntireTree =()=>{
    console.log('state was changed')
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi how are you', LikeCounter: 12},
            {id: 2, message: 'It\'s my first post', LikeCounter: 5}
        ],
        NewPostText: 'itkamasutra1'
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'It is fine'}
        ],
        dialogs: [
            {id: 1, name: 'name1'},
            {id: 2, name: 'name2'},
            {id: 3, name: 'name3'}
        ]
    }
}
export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCounter: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
    rerenderEntireTree(state);

}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export const subscribe = (observer) => {
    rerenderEntireTree=observer;
}

export default state;