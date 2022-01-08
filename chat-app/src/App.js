import { ChatEngine } from 'react-chat-engine';
import ChatFeed  from './components/ChatFeed.js';
import './App.css';
import Loginform from './components/LoginForm.js';

const App = () => {

    if(!localStorage.getItem('username')) return <Loginform/>

    return (
        <ChatEngine
            height="100vh"
            projectID="60215666-2c51-4aa4-9ed6-680abdcb7abc"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;