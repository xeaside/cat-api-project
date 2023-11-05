import React, { useState, useEffect } from "react";
import { useLocalStorage } from "../../hook/useLocalStorage";
import "./registration.css";

const Registration = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [user, setUser] = useLocalStorage("user", "");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (user) {
      setIsRegistered(true);
    }
  }, [user]);

  return (
    <div className="registrationPlace">
      <div className="registrationForm">
        <h1 className="registrationTitle">Registration</h1>
        {user && (
          <div className="welcomePage">
            <div className="welcomeUser">Добро пожаловать {user}!</div>
            <button className="exitButton" onClick={() => setUser("")}>
              Выйти
            </button>
          </div>
        )}
        {isRegistered ? (
  <div>Error: You are already registered!</div>
) : (
  <div>
    <label className="userNameInputText">Введите ваше имя:</label>
    <br />
    <input
      className="userNameInput"
      placeholder="Ваше имя"
      maxLength={16}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
    <button className="submitButton" onClick={() => setUser(inputValue)}>
      Сохранить
    </button>
  </div>
)}
      </div>
    </div>
  );
};

export default Registration;
