import Messages from './Messages';
import MessageForm from './MessageForm';

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];

  const renderMessages = () => {
    const keys = Object.keys(messages);
    return keys.map((key, index) => {
      const message = messages[key];
      const isMyMessage = userName === message.sender.username; 

      return (
        <div key={index} style={{ width: '100%' }}>
          <div className='message-block' style={{ marginBottom: isMyMessage ? '5px' : '15px' }} >
            {
              <Messages chat={chat} userName={userName} message={message}/>
            }
          </div>
        </div>
      )
    })
  }

  if(!chat) return 'Loading...'

  return (
    <div className='chat-feed'>
      <div className='chat-title-container'>
        <div className='chat-title'>{chat.title}</div>
        <div className='chat-subtitle'>
          { chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      <div>
        { renderMessages() }
      </div>
      <div style={{ height: '100px' }}/>
      <div className='message-form-container'>
        <MessageForm {...props} chatId={activeChat}/>
      </div>
    </div>
  )
}
 
export default ChatFeed;