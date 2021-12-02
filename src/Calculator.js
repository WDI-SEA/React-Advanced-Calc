import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.props.labelDisplay}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" value='AC' onClick={e => this.props.onClick(e.target.value)}>AC</button>
                    <button className="calc-button calc-button-top" onClick={e => this.props.onClick(e.target.value)}>+/-</button>
                    <button className="calc-button calc-button-top" value='%' onClick={e => this.props.onClick(e.target.value)}>%</button>
                    <button className="calc-button calc-button-op" value='/' onClick={e => this.props.onClick(e.target.value)}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value='7' onClick={e => this.props.onClick(e.target.value)}>7</button>
                    <button className="calc-button" value='8' onClick={e => this.props.onClick(e.target.value)}>8</button>
                    <button className="calc-button" value='9' onClick={e => this.props.onClick(e.target.value)}>9</button>
                    <button className="calc-button calc-button-op" value='*' onClick={e => this.props.onClick(e.target.value)}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value='4' onClick={e => this.props.onClick(e.target.value)}>4</button>
                    <button className="calc-button" value='5' onClick={e => this.props.onClick(e.target.value)}>5</button>
                    <button className="calc-button" value='6' onClick={e => this.props.onClick(e.target.value)}>6</button>
                    <button className="calc-button calc-button-op" value='-' onClick={e => this.props.onClick(e.target.value)}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value='1' onClick={e => this.props.onClick(e.target.value)}>1</button>
                    <button className="calc-button" value='2' onClick={e => this.props.onClick(e.target.value)}>2</button>
                    <button className="calc-button" value='3' onClick={e => this.props.onClick(e.target.value)}>3</button>
                    <button className="calc-button calc-button-op" value='+' onClick={e => this.props.onClick(e.target.value)}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" value='0' onClick={e => this.props.onClick(e.target.value)}>0</button>
                    <button className="calc-button" value='.' onClick={e => this.props.onClick(e.target.value)}>.</button>
                    <button className="calc-button calc-button-op" value='=' onClick={e => this.props.onClick(e.target.value)}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator