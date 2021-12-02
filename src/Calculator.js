import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        input: [],
        saved: 0,
        operator: '+',
    }

    clearScreen = (e) => {
        console.log("Final total: ", this.state.final)
        this.setState({
            input: [],
            saved: 0,
        })
    }

    buttonHandle = (e) => {
        let input = e.target.value
        this.setState({
            input: [...this.state.input, input]
        })
        if (input[0] === '0') {
            input.slice(0,1)
        }
        this.setState({
            view: this.state.input
        })
    }

    operator = (e) => {
        console.log("This is the operator clicked: ", e.target.value)
        console.log("Current saved state: ", this.state.saved)
        this.setState({
            saved: parseInt(this.state.input.join(""))
        })
        this.setState({
            input: []
        })
        let op = e.target.value
        this.setState({
            operator: op
        })
    }

    evalute = () => {
        let first = parseInt(this.state.input.join(""))
        if (this.state.operator === '+') {
            this.setState({
                input: this.state.saved + first
            })
        }
        else if (this.state.operator === '/') {
            this.setState({
                input: this.state.saved / first
            })
        }
        else if (this.state.operator === '*') {
            this.setState({
                input: this.state.saved * first
            })
        }
        else if (this.state.operator === '-') {
            this.setState({
                input: this.state.saved - first
            })
        }
        else if (this.state.operator === '%') {
            this.setState({
                input: this.state.saved % first
            })
        }
    }

    render() {
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    <div className="answer-box">{this.state.input}</div>
                    <div className="calc-row">
                        <button onClick={this.clearScreen} className="calc-button calc-button-top">AC</button>
                        <button className="calc-button calc-button-top">+/-</button>
                        <button onClick={this.operator}className="calc-button calc-button-top" value="%">%</button>
                        <button onClick={this.operator} className="calc-button calc-button-op" value="/">/</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.buttonHandle} value="7" className="calc-button">7</button>
                        <button onClick={this.buttonHandle} value="8" className="calc-button">8</button>
                        <button onClick={this.buttonHandle} value="9" className="calc-button">9</button>
                        <button onClick={this.operator} className="calc-button calc-button-op" value="*">x</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.buttonHandle} value="4" className="calc-button">4</button>
                        <button onClick={this.buttonHandle} value="5" className="calc-button">5</button>
                        <button onClick={this.buttonHandle} value="6" className="calc-button">6</button>
                        <button onClick={this.operator} className="calc-button calc-button-op" value="-">-</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.buttonHandle} className="calc-button" value="1" >1</button>
                        <button onClick={this.buttonHandle} className="calc-button" value="2" >2</button>
                        <button onClick={this.buttonHandle} value="3" className="calc-button">3</button>
                        <button onClick={this.operator} className="calc-button calc-button-op" value="+">+</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.buttonHandle} value="0" className="calc-button width-2">0</button>
                        <button className="calc-button">.</button>
                        <button onClick={this.evalute} className="calc-button calc-button-op" value="=">=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator