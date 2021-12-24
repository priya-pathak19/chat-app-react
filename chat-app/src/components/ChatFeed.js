import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";


const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        const keys = Object.keys(messages);
        return keys.map((key,index)=>{
            const message = messages[key]  //to get a single message by key
            const lastMessageKey = index === 0 ? null : keys[index -1]; //if there are messages, find last message.
            const myMessage = userName === message.sender.username;  //to check if it is my message

            return(
                <div key={`msg_${index}`} style={{width : '100%'}}>
                    <div className="message-block">
                    {myMessage
                     ? <MyMessage message={message} />
                       : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
                    </div>
                    <div className="read-receipts" style={{marginRight: myMessage ? '18px' : '0px', marginLeft: myMessage ? '0px' : '68px' }}>
                        read-receipts
                    </div>
                </div>
            )

        })
    }

    

    if(!chat) return "Loading...."


    return (
        <div className="chat-feed">
          <div className="chat-title-container">
            <div className="chat-title">{chat?.title}</div>
            <div className="chat-subtitle">
              {chat.people.map((person) => ` ${person.person.username}`)}
            </div>
          </div>
          {renderMessages()}
          <div style={{ height: '100px' }} />
          <div className="message-form-container">
            <MessageForm {...props} chatId={activeChat} />
          </div>
        </div>
      );
    };

export default ChatFeed;