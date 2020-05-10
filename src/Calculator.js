import React from 'react';


const Calculator = props => {
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
            <p> {props.expression}</p>
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={props.clear}>AC</button>
                    <button className="calc-button calc-button-top" value="+/-" onClick={props.callPlusMinus}>+/-</button>
                    <button className="calc-button calc-button-top" value="%" onClick={props.createExpression}>%</button>
                    <button className="calc-button calc-button-op" value="/" onClick={props.createExpression}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value = "7" onClick={props.createExpression}>7</button>
                    <button className="calc-button" value = "8" onClick={props.createExpression}>8</button>
                    <button className="calc-button" value = "9" onClick={props.createExpression}>9</button>
                    <button className="calc-button calc-button-op" value="*" onClick={props.createExpression}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value = "4" onClick={props.createExpression}>4</button>
                    <button className="calc-button" value = "5" onClick={props.createExpression}>5</button>
                    <button className="calc-button" value = "6" onClick={props.createExpression}>6</button>
                    <button className="calc-button calc-button-op" value="-" onClick={props.createExpression}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value = "1" onClick={props.createExpression}>1</button>
                    <button className="calc-button" value = "2" onClick={props.createExpression}>2</button>
                    <button className="calc-button" value = "3" onClick={props.createExpression}>3</button>
                    <button className="calc-button calc-button-op" value="+" onClick={props.createExpression}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" value = "0" onClick={props.createExpression}>0</button>
                    <button className="calc-button" value = "." onClick={props.handleDecimalDot}>.</button>
                    <button className="calc-button calc-button-op" onClick={props.compute}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator