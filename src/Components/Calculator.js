import React, { useState } from "react";

export default function Calculator(e) {
  const [input, setInput] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState(null);

  const addition = () => {
    const sum = input + input2;
    setResult(sum);
  };

  return (
    <div>
      <>
        <h2>Calculator</h2>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <p>{input}</p>

        <input
          type="number"
          value={input2}
          onChange={(e) => setInput2(Number(e.target.value))}
        />
        <p>{input2}</p>
      </>
      <button onClick={addition}>+</button>
      <p>Result:{result}</p>
    </div>
  );
}
// calculadora
// 2 input - pega 1 input
