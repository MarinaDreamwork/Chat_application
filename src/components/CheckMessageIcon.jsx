import { CheckOutlined } from "@ant-design/icons";

const CheckMessageIcon = ({ messageTime, isMyMessage }) => {
  
  return ( 
    <div className='message-check'>
        <span className='message-time'>{messageTime}</span>
        { isMyMessage ? <>
        <CheckOutlined className='check-icon' />
        <CheckOutlined className='check-icon second-icon-check' />
        </> : null
        }
      </div>
   );
}
 
export default CheckMessageIcon;