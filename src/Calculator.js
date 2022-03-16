import React, {useState} from 'react'
function Calculator () {
    // Declare state variables
    const [firstNumber, setFirstNumber] = useState("")
    const [secondNumber, setSecondNumber] = useState("")
    const [result, setResults] = useState("")
    const [operator, setOperator] = useState("")
    const [error, setError] = useState("")
    //function to set the number.
    const numberHandler = (e) => {
        console.log(firstNumber)
        if(firstNumber === null){
            setFirstNumber(e.target.value)
        } else (
            setFirstNumber(firstNumber + e.target.value)
        )
    }

    const operatorHandler = (e) => {
        setOperator(e.target.value)
        setSecondNumber(firstNumber * 1)
        setFirstNumber("")
    }

    const percentageHandler = () => {
        setOperator("")
        if(firstNumber && !secondNumber){
            setResults((firstNumber * 1) / 100)
        } else if (!firstNumber && secondNumber) {
            setResults((secondNumber * 1) / 100)
        } else if (!firstNumber && !secondNumber && result){
            setResults((result * 1) / 100)
        }
    }

    const calculate = () => {
        if(operator !== ""){
            if(operator === "+"){
                setResults((firstNumber * 1) + (secondNumber * 1))
                setFirstNumber("")
                setSecondNumber("")
            } else if (operator === "-") {
                setResults((firstNumber * 1) - (secondNumber * 1))
                setFirstNumber("")
                setSecondNumber("")
                
            } else if (operator === "*") {
                setResults((firstNumber * 1) * (secondNumber * 1))
                setFirstNumber("")
                setSecondNumber("")
            } else {
                setResults((firstNumber * 1) / (secondNumber * 1))
                setFirstNumber("")
                setSecondNumber("")
            }
        } else {
            setResults(firstNumber)
        }
    }

    const clear = () => {
        setFirstNumber("")
        setSecondNumber("")
        setResults("")
        setOperator("")
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                    {
                        firstNumber ? <p>Values: {firstNumber}</p> : <p>Values: {secondNumber}</p>
                    
                    }
                <div className="answer-box">{
                    error ? <p>{error}</p> : <p>{result}</p>
                }
                    
                </div>
                <div className="calc-row">
                    <button onClick={clear} className="calc-button calc-button-top">AC</button>
                    <button onClick={operatorHandler} className="calc-button calc-button-top">+/-</button>
                    <button onClick={percentageHandler} className="calc-button calc-button-top">%</button>
                    <button onClick={operatorHandler} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={numberHandler} value={7} className="calc-button">7</button>
                    <button onClick={numberHandler} value={8} className="calc-button">8</button>
                    <button onClick={numberHandler} value={9} className="calc-button">9</button>
                    <button onClick={operatorHandler} value="*" className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={numberHandler} value={4} className="calc-button">4</button>
                    <button onClick={numberHandler} value={5} className="calc-button">5</button>
                    <button onClick={numberHandler} value={6} className="calc-button">6</button>
                    <button onClick={operatorHandler} onClick={setOperator} value="-" className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={numberHandler} value={1} className="calc-button">1</button>
                    <button onClick={numberHandler} value={2} className="calc-button">2</button>
                    <button onClick={numberHandler} value={3} className="calc-button">3</button>
                    <button onClick={operatorHandler} value="+" className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={numberHandler}  value={0} className="calc-button width-2">0</button>
                    <button onClick={numberHandler} value={"."} className="calc-button">.</button>
                    <button onClick={calculate} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}


export default Calculator