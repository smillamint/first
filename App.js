import React from 'react';

import './App.css';
import '../src/components/Header/Header'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import {addPost} from "./components/redux/state";


const App = (props) => {
    return (
        <BrowserRouter>
            <div>
                <div className='app-wrapper'>
                    <Header/>
                    <Navbar/>
                    {/*<Profile />*/}
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs'
                               render={() => <Dialogs
                                   state={props.state.dialogsPage}/>}/>
                        <Route path='/profile'
                               render={() => <Profile
                                   profilePage={props.state.profilePage}
                                   addPost={props.addPost}
                                   updateNewPostText={props.updateNewPostText}/>}
                        />
                        {/*<Route path='/news' component={News}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/music' component={Music}/>*/}
                    </div>
                </div>
            </div>
        </BrowserRouter>)


}


export default App;
