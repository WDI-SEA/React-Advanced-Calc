import React, { useState } from 'react'

const Calculator = props => {
    // Declare state variables
    const [result, setResult] = useState('0');
    const [num, setNum] = useState('');
    const [operator , setOperator] = useState('');

    let numPick = (e) => {
        e.preventDefault()
        setNum(num + e.target.value)
        console.log(e.target.value)
    
    }

    let buttonOperator = (e) => {
        setOperator(e.target.value)
        console.log(e.target.value)
    }

	let compute = (e) => {
        let num1 = num;
		let num2 = num;
        let math_it = {
            '+': function (x, y) { return x + y },
            '-': function (x, y) { return x - y },
            '*': function (x, y) { return x * y },
            '/': function (x, y) { return x / y }
        }
        let computation = math_it[operator](Number(num1), Number(num2))
		
        setResult(computation)
        
	}
    
    let  clear = (e) => {
        setResult('0')
        setNum('')
        setOperator('')
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>{num}</p>
                <div className="answer-box">{result}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clear}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick={buttonOperator} value="/">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numPick} value="7">7</button>
                    <button className="calc-button" onClick={numPick} value="8">8</button>
                    <button className="calc-button" onClick={numPick} value="9">9</button>
                    <button className="calc-button calc-button-op" onClick={buttonOperator} value="*">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numPick} value="4">4</button>
                    <button className="calc-button" onClick={numPick} value="5">5</button>
                    <button className="calc-button" onClick={numPick} value="6">6</button>
                    <button className="calc-button calc-button-op" onClick={buttonOperator} value="-">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={numPick} value="1">1</button>
                    <button className="calc-button" onClick={numPick} value="2">2</button>
                    <button className="calc-button" onClick={numPick} value="3">3</button>
                    <button className="calc-button calc-button-op" onClick={buttonOperator} value="+">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={numPick} value="0">0</button>
                    <button className="calc-button" onClick={numPick} value=".">.</button>
                    <button className="calc-button calc-button-op" onClick={compute} >=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator