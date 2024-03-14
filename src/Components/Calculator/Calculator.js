import React, { useState } from "react";
import "./Calculator.css"; // Make sure to import the CSS file

export default function Calculator() {
  const [input, setInput] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState(null);

  const addition = () => {
    const sum = input + input2;
    setResult(sum);
  };
  const subtraction = () => {
    const difference = input - input2;
    setResult(difference);
  };

  const multiplication = () => {
    const product = input * input2;
    setResult(product);
  };
  const division = () => {
    if (input2 !== 0) {
      // Check to avoid division by zero
      const quotient = input / input2;
      setResult(quotient);
    } else {
      setResult("Cannot divide by zero"); // Error message for division by zero
    }
  };

  const reset = () => {
    setInput(0);
    setInput2(0);
    setResult(null);
  };

  return (
    <div className="calculator">
      <h2 className="title">Calculator</h2>
      <div className="input-group">
        <input
          type="number"
          className="input"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <p className="input-value">{input}</p>

        <input
          type="number"
          className="input"
          value={input2}
          onChange={(e) => setInput2(Number(e.target.value))}
        />
        <p className="input-value">{input2}</p>
      </div>
      <div className="buttons">
        <button className="operator-button" onClick={addition}>
          +
        </button>
        <button className="operator-button" onClick={subtraction}>
          -
        </button>
        <button className="operator-button" onClick={multiplication}>
          *
        </button>
        <button className="operator-button" onClick={division}>
          /
        </button>
      </div>
      <button className="reset-button" onClick={reset}>
        Reset
      </button>

      <p className="result">Result: {result}</p>
    </div>
  );
}
