import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [theme, setTheme] = useState('light');

  // Handle click of a number or operator button
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Handle equals button (calculate result)
  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  // Clear input and result
  const clearInput = () => {
    setInput('');
    setResult('');
  };

  // Toggle light/dark theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Delete the last character
  const deleteLastChar = () => {
    if (input.length > 0) {
      setInput(input.slice(0, -1));
    }
  };

  return (
    <div className={`calculator ${theme}`}>
      <div className='calculator-heading'> CALCULATOR </div>
      <div className="toggle-theme">
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="display">
        <div className="input">{input || '0'}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">

        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button className='btn-del'onClick={deleteLastChar}>DEL</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('+')}>+</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('*')}>*</button> 

        <button className="btn-reset" onClick={clearInput}>RESET</button>
        <button className="btn-equal" onClick={calculateResult}>=</button>

      </div>
    </div>
  );
}

export default Calculator;
