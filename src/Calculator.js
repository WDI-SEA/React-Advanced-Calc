import React, { useState, useEffect } from 'react'

let DEFAULT_VALUE = 0;
let DEFAULT_OPERATOR = ''


const Calculator = props => {
    // Declare state variables
  let [number, setNumber] = useState(DEFAULT_VALUE);
  let [operator, setOperator] = useState(DEFAULT_OPERATOR);
  let [answer, setAnswer] = useState(DEFAULT_VALUE);
  let [choice, setChoice] = useState(DEFAULT_VALUE);

  useEffect( () => {
          const getAnswer = async () => {
              let calc;
              switch (operator) {
                case 'sub':
                    calc = choice - number;
                    break;
                case 'add':
                    calc = choice + number;
                    break;
                case 'mod':
                    calc = choice % number;
                    break;
                  case 'div':
                      calc = choice / number;
                      break;
                  case 'mul':
                      calc = choice * number;
                      break;
                  default:
                      setChoice('my Calc')
              }


              setAnswer(calc);
              setChoice(calc);
              console.log(calc);
              console.log(answer);
              console.log(operator);
          }

        ;
      },);


//clear AC
const Clear = () => {
  setNumber(DEFAULT_VALUE);
  setOperator(DEFAULT_OPERATOR);
  setChoice(DEFAULT_VALUE);
  setAnswer(DEFAULT_VALUE);
}
// Const op = opperation caller
const changeOperator = (e) => {
  if(e.target.value === 'equal') {
    getAnswer(answer)
  }
    setOperator(e.target.value);
    }


const changeView = (e) => {
        let View = e.target.value;
        setChoice(View);
        setNumber(View);
    }



    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box" >{choice}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={Clear}>AC</button>
                    <button className="calc-button calc-button-top" >+/-</button>
                    <button className="calc-button calc-button-top" onClick={changeOperator} value={'mul'} >%</button>
                    <button className="calc-button calc-button-op" onClick={changeOperator} value={'divide'} >/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={changeView} value={7} >7</button>
                    <button className="calc-button" onClick={changeView} value={8} >8</button>
                    <button className="calc-button" onClick={changeView} value={9} >9</button>
                    <button className="calc-button calc-button-op" onClick={changeOperator} value={'mul'} >x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={changeView} value={4} >4</button>
                    <button className="calc-button" onClick={changeView} value={5} >5</button>
                    <button className="calc-button" onClick={changeView} value={6} >6</button>
                    <button className="calc-button calc-button-op" onClick={changeOperator} value={'sub'} >-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={changeView} value={1} >1</button>
                    <button className="calc-button" onClick={changeView} value={2} >2</button>
                    <button className="calc-button" onClick={changeView} value={3} >3</button>
                    <button className="calc-button calc-button-op" onClick={changeOperator} value={'add'} >+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={changeView} value={0}  >0</button>
                    <button className="calc-button" onClick={changeView} >.</button>
                    <button className="calc-button calc-button-op" onClick={changeOperator} value={'equal'}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator
