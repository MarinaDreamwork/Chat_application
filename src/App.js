import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './component/ChatFeed/ChatFeed.js';
import './App.css';

const App = () => {
  return (
    <ChatEngine 
        height='100vh'
        projectID = 'f814222a-9909-4019-a7ec-48567c7a970d'
        userName='Admin'
        userSecret='1.2.3.4'
        renderChatFeed = {(chatFeedProps) => <ChatFeed {...chatFeedProps}/>}
    />
  );
};

export default App;