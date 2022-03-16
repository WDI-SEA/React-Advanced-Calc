import React, { useState } from "react";

export default function Calculator() {
  // Declare state variables
  const [num1, setNum1] = useState("");
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [operator, setOperator] = useState("");
  const [tempOp, setTempOp] = useState("");

  // const []

  const reset = () => {
    setNum1("");
    setNum("");
    setResult("");
    setError("");
    setOperator("");
    setTempOp("");
  };

  const box = () => {};

  const handleNumClick = (e) => {
    // console.log("NUM-CLICKED", e.target.value)
    let currentNum = e.target.value;
    setNum(num + currentNum);
    console.log("SETNUM IS", num);
  };

  const handleOpClick = (e) => {
    let op = e.target.value;
    if (num1 && num) {
      getResult();
      setTempOp(op);
    } else if (!tempOp && operator) {
      setError("ERROR, too many operators, pls clear and try again");
    } else if (result) {
      setNum1(result);
      setOperator(op);
      setResult("");
    } else if (num === "") {
      setOperator("");
      setError("enter # first, pls clear and try again");
    } else if (num1 === "") {
      setNum1(num);
      setNum("");
      setOperator(op);
    }
  };

  const getResult = () => {
    // if (num1.length<1 || num.length<1) {
    //   setError("ERROR:missing set of values");
    console.log("NUM1:", num1);
    console.log("NUM2:", num);
    if (operator === "+") {
      setResult(parseInt(num1) + parseInt(num));
    } else if (operator === "-") {
      setResult(parseInt(num1) - parseInt(num));
    } else if (operator === "/") {
      setResult(parseInt(num1) / parseInt(num));
    } else if (operator === "x") {
      setResult(parseInt(num1) * parseInt(num));
    }
    // setNum(result)
    setNum1("");
    setNum("");
    setOperator("");
    // setResult("")
  };

  const handleResetClick = (e) => {
    console.log("RESETCLICKED");
  };

  console.log("CURRENT STATEEEEE************");
  console.log("num1:", num1);
  console.log("num:", num);
  console.log("result:", result);
  console.log("error:", error);
  console.log("operator:", operator);
  console.log("temp op:", tempOp);
  console.log("CURRENTSTATE END**********");

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div className="calc-container">
        <p>Values:{error} </p>
        <div className="answer-box">{result ? result : num}</div>
        <div className="calc-row">
          <button
            onClick={reset}
            value="AC"
            className="calc-button calc-button-top"
          >
            AC
          </button>
          <button
            onClick={handleOpClick}
            value="negPos"
            className="calc-button calc-button-top"
          >
            +/-
          </button>
          <button
            onClick={handleOpClick}
            value="modulo"
            className="calc-button calc-button-top"
          >
            %
          </button>
          <button
            onClick={handleOpClick}
            value="div"
            className="calc-button calc-button-op"
          >
            /
          </button>
        </div>
        <div className="calc-row">
          <button onClick={handleNumClick} value="7" className="calc-button">
            7
          </button>
          <button onClick={handleNumClick} value="8" className="calc-button">
            8
          </button>
          <button onClick={handleNumClick} value="9" className="calc-button">
            9
          </button>
          <button
            onClick={handleOpClick}
            value="x"
            className="calc-button calc-button-op"
          >
            x
          </button>
        </div>
        <div className="calc-row">
          <button onClick={handleNumClick} value="4" className="calc-button">
            4
          </button>
          <button onClick={handleNumClick} value="5" className="calc-button">
            5
          </button>
          <button onClick={handleNumClick} value="6" className="calc-button">
            6
          </button>
          <button
            onClick={handleOpClick}
            value="-"
            className="calc-button calc-button-op"
          >
            -
          </button>
        </div>
        <div className="calc-row">
          <button onClick={handleNumClick} value="1" className="calc-button">
            1
          </button>
          <button onClick={handleNumClick} value="2" className="calc-button">
            2
          </button>
          <button onClick={handleNumClick} value="3" className="calc-button">
            3
          </button>
          <button
            onClick={handleOpClick}
            value="+"
            className="calc-button calc-button-op"
          >
            +
          </button>
        </div>
        <div className="calc-row">
          <button
            onClick={handleNumClick}
            value="0"
            className="calc-button width-2"
          >
            0
          </button>
          <button className="calc-button">.</button>
          <button onClick={getResult} className="calc-button calc-button-op">
            =
          </button>
        </div>
      </div>
    </div>
  );
}
