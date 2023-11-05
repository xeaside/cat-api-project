import { useLocalStorage } from "../../hook/useLocalStorage";
import { useState } from "react";
import ChatScreen from "./Chat-screen";
import Message from "./Message";
import './chat.css';

const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatData, setChatData] = useLocalStorage("chat", []);
  const [showDialog, setShowDialog] = useState(false);

  const [user, setUser] = useLocalStorage("user");

  const sendMessage = () => {
    if (user) {
      setChatData([...chatData, `${user}: ${inputValue}`]);
      setInputValue("");
    } else {
      setInputValue("");
      setShowDialog(true);
    }
  };

  return (
    <div>
        <ChatScreen chatData={chatData} />
        <Message
          inputValue={inputValue}
          setInputValue={setInputValue}
          showDialog={showDialog}
          sendMessage={sendMessage}
          setChatData={setChatData}
        />
      </div>
 
  );
};

export default Chat;
