import React, { useState } from "react";

export default function Calculator() {
  let [num, setNum] = useState("");
  let [prevNum, setPrevNum] = useState("");
  let [operator, setOperator] = useState("");
  let [result, setResult] = useState("0");

  const changeState = (e) => {
    setNum(num + e.target.value);
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div className="calc-container">
        <p>Values: </p>
        <div className="answer-box">{num}</div>
        <div className="calc-row">
          <button className="calc-button calc-button-top">AC</button>
          <button className="calc-button calc-button-top">+/-</button>
          <button className="calc-button calc-button-top">%</button>
          <button className="calc-button calc-button-op">/</button>
        </div>
        <div className="calc-row">
          <button
            onClick={(e) => changeState(e.target.innerText)}
            className="calc-button"
            value="7"
          >
            7
          </button>
          <button
            onClick={(e) => changeState(e.target.innerText)}
            className="calc-button"
            value="8"
          >
            8
          </button>
          <button
            onClick={(e) => changeState(e.target.innerText)}
            className="calc-button"
            value="9"
          >
            9
          </button>
          <button
            // onClick=
            className="calc-button calc-button-op"
          >
            x
          </button>
        </div>
        <div className="calc-row">
          <button
            onClick={(e) => changeState(e.target.innerText)}
            className="calc-button"
            value="4"
          >
            4
          </button>
          <button
            onClick={(e) => changeState(e.target.innerText)}
            className="calc-button"
            value="5"
          >
            5
          </button>
          <button
            onClick={(e) => changeState(e.target.innerText)}
            className="calc-button"
            value="6"
          >
            6
          </button>
          <button
            // onClick={() => setOperation("-")}
            className="calc-button calc-button-op"
          >
            -
          </button>
        </div>
        <div className="calc-row">
          <button
            onClick={(e) => changeState(e.target.innerText)}
            className="calc-button"
            value="1"
          >
            1
          </button>
          <button
            onClick={(e) => changeState(e.target.innerText)}
            className="calc-button"
            value="2"
          >
            2
          </button>
          <button
            onClick={(e) => changeState(e.target.innerText)}
            className="calc-button"
            value="3"
          >
            3
          </button>
          <button
            // onClick={() => setOperation("+")}
            className="calc-button calc-button-op"
          >
            +
          </button>
        </div>
        <div className="calc-row">
          <button className="calc-button width-2">0</button>
          <button className="calc-button">.</button>
          <button className="calc-button calc-button-op">=</button>
        </div>
      </div>
    </div>
  );
}
