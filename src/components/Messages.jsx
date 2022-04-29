import CheckMessageIcon from "./CheckMessageIcon";

const Messages = ({ message, userName }) => {
  const isMyMessage = userName === message.sender.username; 
  const messageTime = message.created;
  const messageHour = new Date(messageTime).getHours();
  const messageMinutes = new Date(messageTime).getMinutes(); 
  const messageSendTime = `${messageHour}:${messageMinutes}`;

  return ( 
    <>
      <div className='message-container' style={{justifyContent: isMyMessage ? 'end' : 'start'}}>
        <div 
          className='message-avatar'
          style={{ backgroundImage: `url(${message?.sender?.avatar })`}}
        />
          { message?.attachments?.length > 0
            ? (
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <img 
                  src={message.attachments[0].file}
                  alt='message-attachment'
                  className='message-image'
                />
                {isMyMessage ? <CheckMessageIcon messageTime={messageSendTime} isMyMessage={isMyMessage}/>: null }
              </div>
            ) 
            : (
              <div className='message' style={{ display: 'flex', flexDirection: 'column', backgroundColor: isMyMessage ? '#3B2A50' : '#CABCDC', color: isMyMessage? 'white' : 'black'}}>
                { message.text }
              <CheckMessageIcon messageTime={messageSendTime} isMyMessage={isMyMessage}/>
              </div>
            )
          }
        </div>
    </>
  );
}
 
export default Messages;