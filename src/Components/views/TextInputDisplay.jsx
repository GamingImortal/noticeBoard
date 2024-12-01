import React, { useState } from "react";

const TextInputDisplay = () => {
  // State to hold the user input
  const [userInput, setUserInput] = useState("");
  const [displayText, setDisplayText] = useState("");

  // Function to handle input change
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  // Function to handle button click
  const handleSubmit = () => {
    setDisplayText(userInput);
    setUserInput(""); // Clear the input field after submission
  };

  return (
    <div>
      <div id="inputDiv">
        <label htmlFor="userInput">Enter your text: </label>
        <input
          type="text"
          id="userInput"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type something here..."
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div id="displayDiv">
        {displayText && <p>You entered: {displayText}</p>}
      </div>
    </div>
  );
};

export default TextInputDisplay;
