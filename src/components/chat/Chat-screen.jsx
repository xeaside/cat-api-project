import "./chat.css";

const ChatScreen = (props) => {
  return (
    <div className="chatScreenPlace">
      <div className="chatScreen">
        <h1 className="chatLogo">Chat</h1>

        <div className="chatMessages">
     {props.chatData.map((el) => {
       const [user, message] = el.split(":");
       return (
         <div className="chatMessage" key={el}>
           <div className="chatUser">{user}:</div>
           <div>{message}</div>
         </div>
       );
     })}
   </div>
      </div>
    </div>
  );
};

export default ChatScreen;

