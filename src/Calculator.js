import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        currentNum: 0,
        displayVal: 0,
        previousNum: 0,
        operator: '',
    }

    // create a function that will input the num value to the current num
    // concat those numbers until an operator is clicked
    // don't allow 0 to begin a number ---------- COME BACK TO!!!!!!!!!! ----------
    inputNumVal = (e) => {
        console.log('this is the number clicked\n', e)
        if (this.state.currentNum === 0) {
            this.setState({
                currentNum: e
            })
        } else if (this.state.currentNum !== 0) {
            this.setState({
                currentNum: this.state.currentNum + e
            })
        }
    }

    // create a function to set/pass operator once one has been clicked
    // if operators are clicked b2b, throw an error to user
    setOperator = (e) => {
        console.log('this is the operator clicked\n', e)
        this.setState({
            previousNum: this.state.currentNum,
            operator: e,
            currentNum: ''
        })
    }

    // create a function that will evaluate equation
    // attach helper method to = button
    evalEquation = () => {
        console.log('this is the current num: ', this.state.currentNum)
        console.log('this is the previous num: ', this.state.previousNum)
    }

    // clear function that will reset states
    // attach helper method to AC button
    clearCalc = () => {
        this.setState({
            currentNum: 0,
            displayVal: 0,
            previousNum: 0,
            operator: '',
        })
    }

    render() {
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    <div className="answer-box">{this.state.currentNum}</div>
                    <div className="calc-row">
                        <button className="calc-button calc-button-top" onClick={this.clearCalc}>AC</button>
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
                        <button className="calc-button calc-button-op" onClick={this.evalEquation}>=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator