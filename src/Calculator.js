import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        operator: null,
        num1: "",
        num2: "",
        display: null
        
    }

changeOperator = (symbol) => {
    if(this.state.num1.length > 1 && this.state.num2 === ""){
    this.setState({
        operator: symbol,
        display: symbol
    })}
}

setNum = (value) => {
    // console.log(value)
    if(this.state.num1 === '' && value === 0 ){
        this.setState({
            num1: "",
            display: ""
        })
    }else if(this.state.operator === null ){
        this.setState({
            num1: " " +  this.state.num1 + value,
            display: " " +  this.state.num1 + value,
        })
    }else if(this.state.num2 === '' && value === 0 ){
        this.setState({
            num2: "", 
            display: "" 
        })
    }else if(this.state.operator !== null ){
        this.setState({
            num2: " " +  this.state.num2 + value,
            display: " " +  this.state.num2 + value,
        })
    }

}

evaluate = () => {

    let newNum1 = Number(this.state.num1)
    let newNum2 = Number(this.state.num2)
    let answer = ""

    if(this.state.operator === '/'){
        answer = newNum1 / newNum2
        this.setState({
            display: answer
        })
    }else if(this.state.operator === '*'){
        answer = newNum1 * newNum2
        this.setState({
            display: answer
        })
    }else if(this.state.operator === '+'){
        answer = newNum1 + newNum2
        this.setState({
            display: answer
        })
    }else if(this.state.operator === '-'){
        answer = newNum1 - newNum2
        this.setState({
            display: answer
        })
    }else{
        this.setState({
            display: NaN
        })
    }

}

allClear = () => {
    this.setState({
        operator: null,
        num1: "",
        num2: "",
        display: ""
    })

}

render(){

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.display}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={() => this.allClear()}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick={() => this.changeOperator('/')}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => this.setNum(7)}>7</button>
                    <button className="calc-button" onClick={() => this.setNum(8)}>8</button>
                    <button className="calc-button" onClick={() => this.setNum(9)}>9</button>
                    <button className="calc-button calc-button-op" onClick={() => this.changeOperator('*')}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => this.setNum(4)}>4</button>
                    <button className="calc-button" onClick={() => this.setNum(5)}>5</button>
                    <button className="calc-button" onClick={() => this.setNum(6)}>6</button>
                    <button className="calc-button calc-button-op" onClick={() => this.changeOperator('-')}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => this.setNum(1)}>1</button>
                    <button className="calc-button" onClick={() => this.setNum(2)}>2</button>
                    <button className="calc-button" onClick={() => this.setNum(3)}>3</button>
                    <button className="calc-button calc-button-op" onClick={() => this.changeOperator('+')}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2"onClick={() => this.setNum(0)}>0</button>
                    <button className="calc-button" onClick={() => this.setNum('.')}>.</button>
                    <button className="calc-button calc-button-op" onClick={() => this.evaluate()}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator