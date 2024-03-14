import React, { useState } from "react";
import "./Calculator.css"; // Make sure to import the CSS file

export default function Calculator() {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState(null);

  const addition = () => {
    const sum = Number(input) + Number(input2);
    setResult(sum);
  };
  const subtraction = () => {
    const difference = Number(input) - Number(input2);
    setResult(difference);
  };

  const multiplication = () => {
    const product = Number(input) * Number(input2);
    setResult(product);
  };
  const division = () => {
    const ipt = Number(input);
    const ipt2 = Number(input2);
    if (ipt !== 0) {
      // Check to avoid division by zero
      const quotient = ipt / ipt2;
      setResult(quotient);
    } else {
      setResult("Cannot divide by zero"); // Error message for division by zero
    }
  };

  const reset = () => {
    setInput("");
    setInput2("");
    setResult(null);
  };

  return (
    <div className="calculator-box">
      {" "}
      {/* New wrapper div for the box */}
      <div className="calculator">
        <h2 className="title">Calculator</h2>
        <div className="input-group">
          <input
            type="number"
            className="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <input
            type="number"
            className="input"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
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
    </div>
  );
}
