import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id} ava={d.img}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>);
let newMessageElement = React.createRef();
let addMessage = ()=> {
    let msg=newMessageElement.current.value;
    alert(msg);
}

return (
<div>
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    <div>
        <textarea ref={newMessageElement}> </textarea>
    </div>
    <div>
        <button onClick={addMessage}>Send message</button>
    </div>
</div>
    )
}
export default Dialogs;

