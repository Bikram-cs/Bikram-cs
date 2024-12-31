import React, { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    inputRef.current.value = "";
    
    //update chat history with user's message
    setChatHistory((history) => [...history,{ role: "user", text: userMessage }]);

    //Delay 300 ms Before showing "Thinking..." and generayion response
    setTimeout(() => {
      //Add Thinking... place holder for bot's response 
      setChatHistory((history) => [...history, {role: "model", text: "Thinking..."}])

    //call the function to generate the bot's response
    generateBotResponse([...chatHistory, {role: "user", text: userMessage }] );
    }, 300);
  };

  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />
      <button className="material-symbols-rounded">arrow_upward</button>
    </form>
  );
};

export default ChatForm;
