import './App.css';
// import './App.html';
import './script.jsx';
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <body>
      <textarea
        id="largeTextInput"
        rows="4"
        cols="50"
        placeholder="Enter your text here"
        value={inputValue}
        onChange={handleInputChange}
      ></textarea>

      <p>Your Note: {inputValue}</p>
      </body>
    </div>
  );
}

export default App;
