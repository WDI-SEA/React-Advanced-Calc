import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    //State needs to be stored for a the result value
    //State needs to be stored for clear button
    //State needs to be stored for numerical value
    state = {
        currentVal: 0,
        numericalVal: [],

    }

    //Will need a helper meathod to clear the display
    clearHelper = () => {
        this.setState({
            currentVal: 0,
            numericalVal: []
        })
    }

    //Need a helper method to track the numerical string 
    //of values from buttons pressed.
    //Every number is going to call the same function but 
    //pass in a separate number or operator to display
    operationsHelper = (e) => {
        this.setState({
            numericalVal: [...this.state.numericalVal, e]
        })
        console.log('This is my current numericalVal: ', this.state.numericalVal)
    }



render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.currentVal}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={this.clearHelper}>AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => this.operationsHelper(7)}>7</button>
                    <button className="calc-button" onClick={(e) => this.operationsHelper(8)}>8</button>
                    <button className="calc-button" onClick={(e) => this.operationsHelper(9)}>9</button>
                    <button className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => this.operationsHelper(4)}>4</button>
                    <button className="calc-button" onClick={(e) => this.operationsHelper(5)}>5</button>
                    <button className="calc-button" onClick={(e) => this.operationsHelper(6)}>6</button>
                    <button className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={(e) => this.operationsHelper(1)}>1</button>
                    <button className="calc-button" onClick={(e) => this.operationsHelper(2)}>2</button>
                    <button className="calc-button" onClick={(e) => this.operationsHelper(3)}>3</button>
                    <button className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={(e) => this.operationsHelper(3)}>0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator