import { useState } from "react";

const Input = ({ userOne, userTwo }) => {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [messages, setMessages] = useState([]);

  const handleOne = () => {
    if (inputOne.trim() !== "") {
      setMessages((prev) => [...prev, { user: userOne, message: inputOne }]);
      setInputOne("");
    }
  };

  const handleTwo = () => {
    if (inputTwo.trim() !== "") {
      setMessages((prev) => [...prev, { user: userTwo, message: inputTwo }]);
      setInputTwo("");
    }
  };
  
  const SendButton = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.517 7.78232C13.6622 7.70957 13.7842 7.59787 13.8695 7.45972C13.9548 7.32156 14 7.1624 14 7.00004C14 6.83767 13.9548 6.67851 13.8695 6.54036C13.7842 6.4022 13.6622 6.2905 13.517 6.21775L1.26652 0.0924925C1.11462 0.0164901 0.943888 -0.013663 0.775147 0.00571153C0.606407 0.025086 0.446953 0.0931506 0.316236 0.201602C0.185518 0.310054 0.0891905 0.454204 0.0390005 0.616468C-0.0111885 0.778733 -0.0130692 0.952096 0.0335884 1.11541L1.28402 5.4906C1.33632 5.67346 1.44678 5.8343 1.59867 5.94877C1.75056 6.06324 1.93561 6.12511 2.1258 6.125L6.1256 6.125C6.35767 6.125 6.58024 6.21719 6.74434 6.38129C6.90844 6.54539 7.00063 6.76796 7.00063 7.00004C7.00063 7.23211 6.90844 7.45468 6.74434 7.61878C6.58024 7.78288 6.35767 7.87507 6.1256 7.87507L2.1258 7.87507C1.93561 7.87497 1.75056 7.93683 1.59867 8.0513C1.44678 8.16577 1.33632 8.32661 1.28402 8.50948L0.0344624 12.8847C-0.0122877 13.0479 -0.0105196 13.2213 0.0395511 13.3835C0.0896219 13.5458 0.185831 13.69 0.316447 13.7986C0.447062 13.9071 0.606437 13.9753 0.775136 13.9948C0.943837 14.0143 1.11457 13.9843 1.26652 13.9085L13.517 7.7832L13.517 7.78232Z"
        fill="#8E8E9E"
      />
    </svg>
  );

  const Avatar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <rect width="30" height="30" rx="2" fill="#5536DA" />
      <path
        d="M23 23V21C23 19.9391 22.5786 18.9217 21.8284 18.1716C21.0783 17.4214 20.0609 17 19 17H11C9.93913 17 8.92172 17.4214 8.17157 18.1716C7.42143 18.9217 7 19.9391 7 21V23"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.0001 13C17.2093 13 19.0001 11.2091 19.0001 9C19.0001 6.79086 17.2093 5 15.0001 5C12.791 5 11.0001 6.79086 11.0001 9C11.0001 11.2091 12.791 13 15.0001 13Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  return (
    <>
      <div className="mainMessageContainer">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.user === userOne ? "left" : "right"}`}
          >
            <h4>{message.user}</h4>
            <p>
              {Avatar}
              {message.message}
            </p>
          </div>
        ))}
      </div>

      <div className="Input_Cont">
        <h5>User 1</h5>
        <h4>{userOne}</h4>
        <button className="Btn_1" onClick={handleOne}>
          {SendButton}
        </button>
        <input
          value={inputOne}
          className="userOne"
          type="text"
          onChange={(e) => setInputOne(e.target.value)}
        />
        <h5>User 2</h5>
        <h4>{userTwo}</h4>
        <button className="Btn_2" onClick={handleTwo}>
          {SendButton}
        </button>
        <input
          value={inputTwo}
          className="userTwo"
          type="text"
          onChange={(e) => setInputTwo(e.target.value)}
        />
      </div>
    </>
  );
};

export default Input;
