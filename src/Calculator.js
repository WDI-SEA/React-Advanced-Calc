import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables

    let [num, setNum] = useState(0); //defines the num
    let [operator, setOperator] = useState(""); //operator
    let [total, setTotal] = useState(""); //total
    let [error, setError] = (""); //does this work?
    let [working, setWorking] = useState(false);
    let [num2, setNum2] = useState(0);

  
     //clear button this should be simple to do?
     const clear = () => {
      setTotal(0);
      setNum("");
      setOperator("");
    }
  
    //operator function for my +, -, *, /, and i guess % <- need to look up
    const formula = () => {
      if (operator === '+') {
        setTotal ( parseInt(num) + parseInt(num2))
      } else if (operator === '-') {
        setTotal ( parseInt(num) - parseInt(num2))
      } else if (operator === '/') {
        setTotal ( parseInt(num) / parseInt(num2))
      } else if (operator === '*') {
        setTotal ( parseInt(num) * parseInt(num2))
      } else if (operator === '%') {
        // 100 % 7 = 2 
        // // a = 100, n = 7
        // 100 - (7 * floor(100/7)) = 2 | (total / num) = totalOne | (num * totalOne) = totalTwo | total - totalTwo = whatsLeft
        let total1 = total / parseInt(num);
        let total2 = num * Math.floor(total1);
        let whatsLeft = total - total2;
        setTotal(Math.round(whatsLeft));
      }
    }
  
    let handleButtons = (e) => {
      if (operator == '') {
        setWorking(false)
        setNum(num + e.target.value)
        // formula()
      } else {
        setNum2(num2 + e.target.value)
      }
    }
  
    let handleOperator = (e) => {
        setWorking(true)
        setOperator(e.target.value)
    } 


    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p> {num} {operator} {num2} </p> 
                <div className="answer-box">{total}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top"
                        onClick={clear}>AC</button>
                    <button className="calc-button calc-button-top" onClick={handleOperator} value='+/-'>+/-</button>
                    <button className="calc-button calc-button-top" onClick={handleOperator} value='%'>%</button>
                    <button className="calc-button calc-button-op" onClick={handleOperator} value='/'>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handleButtons} value='7'>7</button>
                    <button className="calc-button" onClick={handleButtons} value='8'>8</button>
                    <button className="calc-button" onClick={handleButtons} value='9'>9</button>
                    <button className="calc-button calc-button-op" onClick={handleOperator} value='*'>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handleButtons} value='4'>4</button>
                    <button className="calc-button" onClick={handleButtons} value='5'>5</button>
                    <button className="calc-button" onClick={handleButtons} value='6'>6</button>
                    <button className="calc-button calc-button-op" onClick={handleOperator} value='-'>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handleButtons} value='1'>1</button>
                    <button className="calc-button" onClick={handleButtons} value='2'>2</button>
                    <button className="calc-button" onClick={handleButtons} value='3'>3</button>
                    <button className="calc-button calc-button-op" onClick={handleOperator} value='+'>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={handleButtons}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op" 
                        onClick={formula}>=</button>
                </div>
                    <p>{error}</p>
            </div>
        </div>
    )
}

export default Calculator