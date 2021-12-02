import { COMPARISON_BINARY_OPERATORS } from '@babel/types'
import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        operator: "",
        currentNumber: 0,
        equation: []
    }

    showNumber = (e) => {
        let currentNumberNew = e.target.innerText
        console.log(currentNumberNew)

        let newNumArray = this.state.equation
        newNumArray.push(currentNumberNew)
        console.log(newNumArray)

        this.setState({
            currentNumber: currentNumberNew,
            equation: newNumArray
        })
        
    }
    clearNumber = () => {
        console.log("cleared")
        this.setState({
            currentNumber: 0,
            equation: []
        })
    }
    calculate = (e) => {
        let oldArray = this.state.equation
        let newNumArray = oldArray.map(function(item) {
            return parseInt(item, 10);
        })
        console.log(e.target.value)
        
        this.setState({
            operator: e.target.value,
        })
        
    }
    equals = (e) => {
        console.log("this is equal")
        let oldArray = this.state.equation
        let sign = this.state.operator
        console.log("this is sign", sign)
        let newNumArray = oldArray.map(function(item) {
            return parseInt(item, 10);
        })
        if (newNumArray.length >= 2) {
            if (this.state.operator === "+") {
                let numOne = parseInt(newNumArray[0])
                let numTwo = parseInt(newNumArray[1])
                let sum = numOne + numTwo
                console.log(sum)
                this.setState({
                    currentNumber: sum
                })
            } else if (this.state.operator === "-") {
                let numOne = parseInt(newNumArray[0])
                let numTwo = parseInt(newNumArray[1])
                let sum = numOne - numTwo
                console.log(sum)
                this.setState({
                    currentNumber: sum
                })
            } 
            
            
        }
    }
        
    

render(){
    
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.currentNumber}</div>
                <div className="calc-row">
                    <button onClick={this.clearNumber} className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button onClick={this.calculate} className="calc-button calc-button-op" value="/">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.showNumber} className="calc-button">7</button>
                    <button onClick={this.showNumber} className="calc-button">8</button>
                    <button onClick={this.showNumber} className="calc-button">9</button>
                    <button onClick={this.calculate} className="calc-button calc-button-op" value="x">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.showNumber} className="calc-button">4</button>
                    <button onClick={this.showNumber} className="calc-button">5</button>
                    <button onClick={this.showNumber} className="calc-button">6</button>
                    <button onClick={this.calculate} className="calc-button calc-button-op" value="-">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.showNumber} className="calc-button">1</button>
                    <button onClick={this.showNumber} className="calc-button">2</button>
                    <button onClick={this.showNumber} className="calc-button">3</button>
                    <button onClick={this.calculate} className="calc-button calc-button-op" value="+">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.showNumber} className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button onClick={this.equals} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator