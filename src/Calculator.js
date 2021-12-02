import React, { Component } from 'react'

const ADD = 1
const SUB = 2
const MUL = 3
const DIV = 4
const MOD = 5

class Calculator extends Component {

state = {
    display: '',
    runningTotal: 0,
    operator: ADD
}
addDigit = (e) => {
    if(this.state.display==='Must enter a number, dunder'){
        this.setState({
            display: e.target.innerText
        })
    } else {
        this.setState({
            display: this.state.display + e.target.innerText
        })
    }
}
dividedBy = () => {
    this.evaluate(this.state.operator)
    this.setState({
        display: '',
        operator: DIV
    })
}
times = () => {
    this.evaluate(this.state.operator)
    this.setState({
        display: '',
        operator: MUL
    })
}
minus = () => {
    this.evaluate(this.state.operator)
    this.setState({
        display: '',
        operator: SUB
    })
}
plus = () => {
    this.evaluate(this.state.operator)
    this.setState({
        display: '',
        operator: ADD
    })
}
mod = () => {
    this.evaluate(this.state.operator)
    this.setState({
        display: '',
        operator: MOD
    })
}
evaluate = (operator, callback) => {
    switch(operator) {
        case ADD:
            this.setState({
                runningTotal: this.state.runningTotal + Number(this.state.display)
            }, callback)
        break
        case SUB:
            this.setState({
                runningTotal: this.state.runningTotal - Number(this.state.display)
            }, callback)
        break
        case MUL:
            this.setState({
                runningTotal: this.state.runningTotal * Number(this.state.display)
            }, callback)
        break
        case DIV:
            this.setState({
                runningTotal: this.state.runningTotal / Number(this.state.display)
            }, callback)
        break
        case MOD:
            this.setState({
                runningTotal: this.state.runningTotal % Number(this.state.display)
            }, callback)
        break
        default:
            console.log('Something went wrong!')
    }
}
equals = () => {
    if(this.state.display==='' || this.state.display==='Must enter a number, dunder'){
        this.setState({
            display: 'Must enter a number, dunder'
        })
    } else {
        this.evaluate(this.state.operator,() => {
            this.setState({
                display: this.state.runningTotal,
                runningTotal: 0
            })
        })
    }
}
clear = () => {
    this.setState({
        runningTotal: 0,
        display: '',
        operator: ADD
    })
}
changeSign = () => {
    this.setState({
        display: -1*Number(this.state.display)
    })
}

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <div className="answer-box">{this.state.display}</div>
                <div className="calc-row">
                    <button onClick={this.clear} className="calc-button calc-button-top">AC</button>
                    <button onClick={this.changeSign} className="calc-button calc-button-top">+/-</button>
                    <button onClick={this.mod} className="calc-button calc-button-top">%</button>
                    <button onClick={this.dividedBy} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={e=>this.addDigit(e)} className="calc-button">7</button>
                    <button onClick={e=>this.addDigit(e)} className="calc-button">8</button>
                    <button onClick={e=>this.addDigit(e)} className="calc-button">9</button>
                    <button onClick={this.times} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={e=>this.addDigit(e)} className="calc-button">4</button>
                    <button onClick={e=>this.addDigit(e)} className="calc-button">5</button>
                    <button onClick={e=>this.addDigit(e)} className="calc-button">6</button>
                    <button onClick={this.minus} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={e=>this.addDigit(e)} className="calc-button">1</button>
                    <button onClick={e=>this.addDigit(e)} className="calc-button">2</button>
                    <button onClick={e=>this.addDigit(e)} className="calc-button">3</button>
                    <button onClick={this.plus} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={e=>this.addDigit(e)} className="calc-button width-2">0</button>
                    <button onClick={e=>this.addDigit(e)} className="calc-button">.</button>
                    <button onClick={this.equals} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}
export default Calculator