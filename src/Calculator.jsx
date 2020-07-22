import React from 'react'

const Calculator = props => {
    // Declare state variables

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{props.total}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={() => props.clear()}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top" onClick={() => props.logic()}>%</button>
                    <button className="calc-button calc-button-op" onClick={() => props.logic()}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value={7} onClick={(e) => props.clickNumber(e)}>7</button>
                    <button className="calc-button" onClick={(e) => props.clickNumber(e)}>8</button>
                    <button className="calc-button" onClick={(e) => props.clickNumber(e)}>9</button>
                    <button className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => props.clickNumber(e)}>4</button>
                    <button className="calc-button" onClick={(e) => props.clickNumber(e)}>5</button>
                    <button className="calc-button" onClick={(e) => props.clickNumber(e)}>6</button>
                    <button className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => props.clickNumber(e)}>1</button>
                    <button className="calc-button" onClick={(e) => props.clickNumber(e)}>2</button>
                    <button className="calc-button" onClick={(e) => props.clickNumber(e)}>3</button>
                    <button className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={(e) => props.clickNumber(e)}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op"onClick={(e) => props.logic(e)}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator