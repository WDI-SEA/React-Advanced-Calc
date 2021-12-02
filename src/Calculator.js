import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables

    state = {
        currentNum: 0,
        previousNum: 0,
        operator: "",
    }

    // some sort of input value function?

    inputVal = (e) => {
        if (this.state.currentNum === 0 && e === 0 || this.state.currentNum === "Error") {
            this.setState({
                currentNum: 0
            })
        } else if (this.state.currentNum === 0 && e > 0) {
            this.setState({
                currentNum: e
            })
        } else if (this.state.currentNum !== 0) {
            this.setState({
                currentNum: this.state.currentNum + e
            })
        }
    }

    // operator function?

    setOperator = (e) => {
        if (this.state.operator !== "") {
            this.setState({
                currentNum: "Error",
                operator: ""
            })
        } else {
            this.setState({
                previousNum: this.state.currentNum,
                operator: e,
                currentNum: ""
            })
        }
    }

    // create the solution
    solution = () => {
        let previousNum = Number(this.state.previousNum)
        let currentNum = Number(this.state.currentNum)
        let result = 0
        if (this.state.operator === "+") {
            result = previousNum + currentNum
        } else if (this.state.operator === "-") {
            result = previousNum - currentNum
        } else if (this.state.operator === "/") {
            result = previousNum / currentNum
        } else if (this.state.operator === "*") {
            result = previousNum * currentNum
        } else if (this.state.operator === "%") {
            result = previousNum % currentNum
        }
        this.setState({
            currentNum: result,
            previousNum: result,
            operator: ""
        })
    }

    // function to clear calc
    clearCalc = () => {
        this.setState({
            currentNum: 0,
            previousNum: 0,
            operator: ""
        })
    }
    render() {
        return (
            <div className="container">
                <h1>React ~Advanced~ Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    <div className="answer-box">{this.state.currentNum}</div>
                    <div className="calc-row">
                        <button className="calc-button calc-button-top" onClick={this.clearCalc}>AC</button>
                        <button className="calc-button calc-button-top">+/-</button>
                        <button className="calc-button calc-button-top" onClick={(e) => this.setOperator('%')}>%</button>
                        <button className="calc-button calc-button-op" onClick={(e) => this.setOperator('/')}>/</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" onClick={(e) => this.inputVal("7")}>7</button>
                        <button className="calc-button" onClick={(e) => this.inputVal("8")}>8</button>
                        <button className="calc-button" onClick={(e) => this.inputVal("9")}>9</button>
                        <button className="calc-button calc-button-op" onClick={(e) => this.setOperator("*")}>x</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" onClick={(e) => this.inputVal("4")}>4</button>
                        <button className="calc-button" onClick={(e) => this.inputVal("5")}>5</button>
                        <button className="calc-button" onClick={(e) => this.inputVal("6")}>6</button>
                        <button className="calc-button calc-button-op" onClick={(e) => this.setOperator("-")}>-</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" onClick={(e) => this.inputVal("1")}>1</button>
                        <button className="calc-button" onClick={(e) => this.inputVal("2")}>2</button>
                        <button className="calc-button" onClick={(e) => this.inputVal("3")}>3</button>
                        <button className="calc-button calc-button-op" onClick={(e) => this.setOperator("+")}>+</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button width-2" onClick={(e) => this.inputVal("0")}>0</button>
                        <button className="calc-button">.</button>
                        <button className="calc-button calc-button-op" onClick={this.solution}>=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator