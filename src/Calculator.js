import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        currentNum: 0,
        previousNum: null,
        operator: '',
        numValue: []
    }

    // create a function that will input the num value to the current num
    // concat those numbers until an operator is clicked
    inputNumVal = (e) => {
        console.log('this is e\n', e)
        let newNum = e
        this.setState({
            currentNum: newNum
        })
    }

    // create a function to set/pass operator once one has been clicked
    // if operators are clicked b2b, throw an error to user

    // create a function that will evaluate equation
    // attach helper method to = button

    // clear function that will reset states
    // attach helper method to AC button

    render() {
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    <div className="answer-box">{this.state.currentNum}</div>
                    <div className="calc-row">
                        <button className="calc-button calc-button-top">AC</button>
                        <button className="calc-button calc-button-top">+/-</button>
                        <button className="calc-button calc-button-top">%</button>
                        <button className="calc-button calc-button-op" onClick={(e) => this.setOperator('/')}>/</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" onClick={(e) => this.inputNumVal('7')}>7</button>
                        <button className="calc-button" onClick={(e) => this.inputNumVal('8')}>8</button>
                        <button className="calc-button" onClick={(e) => this.inputNumVal('9')}>9</button>
                        <button className="calc-button calc-button-op" onClick={(e) => this.setOperator('*')}>x</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" onClick={(e) => this.inputNumVal('4')}>4</button>
                        <button className="calc-button" onClick={(e) => this.inputNumVal('5')}>5</button>
                        <button className="calc-button" onClick={(e) => this.inputNumVal('6')}>6</button>
                        <button className="calc-button calc-button-op" onClick={(e) => this.setOperator('-')}>-</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" onClick={(e) => this.inputNumVal('1')}>1</button>
                        <button className="calc-button" onClick={(e) => this.inputNumVal('2')}>2</button>
                        <button className="calc-button" onClick={(e) => this.inputNumVal('3')}>3</button>
                        <button className="calc-button calc-button-op" onClick={(e) => this.setOperator('+')}>+</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button width-2" onClick={(e) => this.inputNumVal('0')}>0</button>
                        <button className="calc-button">.</button>
                        <button className="calc-button calc-button-op">=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator