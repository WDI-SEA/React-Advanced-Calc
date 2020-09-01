import React, {useState} from 'react';

const Calculator = props => {
  // Declare state variables
  let [num, setNum] = useState(0);
  let [num2, setNum2] = useState(0);
  let [operator, setOperator] = useState(null);
  let [total, setTotal] = useState(null);




  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div className="calc-container">
        <p>Values: </p>
        <div className="answer-box">TBD</div>
        <div className="calc-row">
          <button className="calc-button calc-button-top" onClick={}>AC</button>
          <button className="calc-button calc-button-top" onClick={}>+/-</button>
          <button className="calc-button calc-button-top" onClick={}>%</button>
          <button className="calc-button calc-button-op" onClick={}>/</button>
        </div>
        <div className="calc-row">
          <button className="calc-button" onClick={}>7</button>
          <button className="calc-button" onClick={}>8</button>
          <button className="calc-button" onClick={}>9</button>
          <button className="calc-button calc-button-op" onClick={}>x</button>
        </div>
        <div className="calc-row">
          <button className="calc-button" onClick={}>4</button>
          <button className="calc-button" onClick={}>5</button>
          <button className="calc-button" onClick={}>6</button>
          <button className="calc-button calc-button-op" onClick={}>-</button>
        </div>
        <div className="calc-row">
          <button className="calc-button" onClick={}>1</button>
          <button className="calc-button" onClick={}>2</button>
          <button className="calc-button" onClick={}>3</button>
          <button className="calc-button calc-button-op" onClick={}>+</button>
        </div>
        <div className="calc-row">
          <button className="calc-button width-2" onClick={}>0</button>
          <button className="calc-button" onClick={}>.</button>
          <button className="calc-button calc-button-op" onClick={}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;