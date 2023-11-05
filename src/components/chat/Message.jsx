import { Link } from "react-router-dom";

const Message = (props) => {
  return (
    <div className="messageSet">
      <div className="messageSetTwo">
        <div className="messageInput">
          <input
            className="messageInputText"
            placeholder="Напиши сообщение"
            value={props.inputValue}
            type="text"
            required
            onChange={(e) => props.setInputValue(e.target.value)}
          />
          <div className="messageButtons">
            <button className="messageButtonSent" onClick={props.sendMessage}>
              Sent
            </button>
            <button
              className="messageButtonDelete"
              onClick={() => props.setChatData([])}
            >
              Delete
            </button>
          </div>

          {props.showDialog && (
            <div className="unregistered">
              Вы не авторизовались, перейдите по{" "}
              <Link className="registrationLink" to="/registration">
                ссылке
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
