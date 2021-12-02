import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        operator: "",
        currentNumber: [],
        equation: []
    }
    //current number display
    showNumber = (e) => {
        let currentNumberNew = e.target.innerText
        console.log(currentNumberNew)

        let newNumArray = this.state.equation
        if (newNumArray.length === 0 && e.target.value === '0') {
            alert('Select another number besides 0 to start')
        } else {
            newNumArray.push(currentNumberNew)
            console.log(newNumArray)

            this.setState({
                currentNumber:  [...this.state.currentNumber, currentNumberNew],
                equation: newNumArray
            })
        }
        
    }
    //AC button
    clearNumber = () => {
        console.log("cleared")
        this.setState({
            currentNumber: 0,
            equation: []
        })
    }
    //operator buttons (+ - * /)
    calculate = (e) => {
        let oldArray = this.state.equation
        oldArray.map(function(item) {
            return parseInt(item, 10);
        })
       // let newNumArray = this.state.equation
        console.log(e.target.value)
        this.setState({
            operator: e.target.value,
        }) 
    }
    //percent button *bonus*
    percent = () => {
        this.setState({
            currentNumber: this.state.currentNumber*100,
            equation: [...this.state.equation, (this.state.currentNumber*100)]
        })
    }
    //equal sign button
    equals = (e) => {
        console.log("equal button clicked")
        let oldArray = this.state.equation
        let sign = this.state.operator
        console.log("this is operator sign:", sign)
        let newNumArray = oldArray.map(function(item) {
            return parseInt(item, 10);
        })
        if(newNumArray.length < 2) {
            alert("you need to select an operator and one more number before clicking =")
        } else if (newNumArray.length >= 2) {
            //addition
            if (this.state.operator === "+") {
                let numOne = parseInt(newNumArray[newNumArray.length-2])
                let numTwo = parseInt(newNumArray[newNumArray.length-1])
                let sum = numOne + numTwo
                console.log(sum)
                this.setState({
                    currentNumber: sum,
                    equation: [...this.state.equation, sum]
                })
            //subtraction
            } else if (this.state.operator === "-") {
                let numOne = parseInt(newNumArray[newNumArray.length-2])
                let numTwo = parseInt(newNumArray[newNumArray.length-1])
                let sum = numOne - numTwo
                console.log(sum)
                this.setState({
                    currentNumber: sum,
                    equation: [...this.state.equation, sum]
                })
            //multiplication
            } else if (this.state.operator === "x") {
                let numOne = parseInt(newNumArray[newNumArray.length-2])
                let numTwo = parseInt(newNumArray[newNumArray.length-1])
                let sum = numOne * numTwo
                console.log(sum)
                this.setState({
                    currentNumber: sum,
                    equation: [...this.state.equation, sum]
             })
            //division
            } else if (this.state.operator === "/") {
                let numOne = parseInt(newNumArray[newNumArray.length-2])
                let numTwo = parseInt(newNumArray[newNumArray.length-1])
                let sum = numOne / numTwo
                console.log(sum)
                this.setState({
                    currentNumber: sum,
                    equation: [...this.state.equation, sum]
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
                        <button onClick={this.percent} className="calc-button calc-button-top">%</button>
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
                        <button onClick={this.showNumber} className="calc-button width-2" value="0">0</button>
                        <button className="calc-button">.</button>
                        <button onClick={this.equals} className="calc-button calc-button-op">=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator