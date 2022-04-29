import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
  if(!localStorage.getItem('userName')) return <LoginForm />

  return (
    <ChatEngine 
        height='100vh'
        projectID = 'f814222a-9909-4019-a7ec-48567c7a970d'
        userName={localStorage.getItem('userName')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed = {(chatFeedProps) => <ChatFeed {...chatFeedProps}/>}
    />
  );
};

export default App;