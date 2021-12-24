import { ChatEngine } from 'react-chat-engine';
import ChatFeed  from './components/ChatFeed.js';
import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="60215666-2c51-4aa4-9ed6-680abdcb7abc"
            userName="priya197"
            userSecret="PP@1972000"
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;