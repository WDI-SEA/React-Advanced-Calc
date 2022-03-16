import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
 state = {
     display: '',
     total: '',
     operator: ''
 }

// Handle Click => Records the clicked number into a number
handleInputNumber = (e) => {
    // console.log('Number is being clicked')
    const numberClick = e.target.innerText
    // console.log(numberClick)
    this.setState({
        display: numberClick


    })
}

// Calculation
handleCalculate = (e) => {
    e.preventDefault()
    // console.log('Math!')
    let result
    switch(this.state.operator){
        case '+':
            result = parseFloat(this.state.total) + parseFloat(this.state.display)
            break
        case '-':
            result = parseFloat(this.state.total) - parseFloat(this.state.display)
            break
        case 'x':
            result = parseFloat(this.state.total) * parseFloat(this.state.display)
            break
        case '/':
            result = parseFloat(this.state.total) / parseFloat(this.state.display)
            break
        case '%':
            result = parseFloat(this.state.total) % parseFloat(this.state.display)
            break
        default:
            console.log('Math operation not valid')
            result= "Math operation not valid"
    }
    this.setState({
        display: result,
        total: 0

    })
}

// Operation
handleOperator = (e) => {
    // console.log('operation!')
    if(this.state.display){
        let newTotal = this.state.display
        this.setState({
            operator: e.target.innerText,
            total: newTotal
        })
    }
}

// Clear Function
handleClearCalc = () => {
    // console.log('AC has been clicked')
    this.setState({
        display: '',
        total: 0,
        operator: ''
    })
}

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: {this.state.total} </p>
                <div className="answer-box">{this.state.display}</div>
                <div className="calc-row">
                    <button onClick={this.handleClearCalc} className="calc-button calc-button-top">AC</button>
                    <button onClick={this.handleInputNumber} className="calc-button calc-button-top">+/-</button>
                    <button onClick={this.handleOperator} className="calc-button calc-button-top">%</button>
                    <button onClick={this.handleOperator} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.handleInputNumber} className="calc-button">7</button>
                    <button onClick={this.handleInputNumber} className="calc-button">8</button>
                    <button onClick={this.handleInputNumber} className="calc-button">9</button>
                    <button onClick={this.handleOperator} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.handleInputNumber} className="calc-button">4</button>
                    <button onClick={this.handleInputNumber} className="calc-button">5</button>
                    <button onClick={this.handleInputNumber} className="calc-button">6</button>
                    <button onClick={this.handleOperator} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.handleInputNumber} className="calc-button">1</button>
                    <button onClick={this.handleInputNumber} className="calc-button">2</button>
                    <button onClick={this.handleInputNumber} className="calc-button">3</button>
                    <button onClick={this.handleOperator} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.handleInputNumber} className="calc-button width-2">0</button>
                    <button onClick={this.handleInputNumber} className="calc-button">.</button>
                    <button onClick={this.handleCalculate} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator