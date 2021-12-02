import React, { Component } from 'react'

const ADD = 1
const SUB = 2
const MUL = 3
const DIV = 4

class Calculator extends Component {

state = {
    display: '',
    runningTotal: 0,
    operator: ADD
}
addDigit = (e) => {
    console.log(this.state.runningTotal)
    this.setState({
        display: this.state.display + e.target.innerText
    })
}
dividedBy = () => {
    console.log(this.state.runningTotal)
    this.evaluate(this.state.operator)
    this.setState({
        display: '',
        operator: DIV
    })
}
times = () => {
    console.log(this.state.runningTotal)
    this.evaluate(this.state.operator)
    this.setState({
        display: '',
        operator: MUL
    })
}
minus = () => {
    console.log(this.state.runningTotal)
    this.evaluate(this.state.operator)
    this.setState({
        display: '',
        operator: SUB
    })
}
plus = () => {
    console.log(this.state.runningTotal)
    this.evaluate(this.state.operator)
    this.setState({
        display: '',
        operator: ADD
    })
}
evaluate = (operator) => {
    switch(operator) {
        case ADD:
            this.setState({
                runningTotal: this.state.runningTotal + Number(this.state.display)
            })
        break
        case SUB:
            this.setState({
                runningTotal: this.state.runningTotal - Number(this.state.display)
            })
        break
        case MUL:
            this.setState({
                runningTotal: this.state.runningTotal * Number(this.state.display)
            })
        break
        case DIV:
            this.setState({
                runningTotal: this.state.runningTotal / Number(this.state.display)
            })
        break
        default:
            console.log('Something went wrong')
    }
}
equals = () => {
    if(this.state.display===''){
        console.log('Must enter a number, dunder')
        this.setState({
            display: 'Must enter a number, dunder'
        })
    } else {
        console.log('runningTotal in equals: ',this.state.runningTotal)
        console.log('display in equals: ',this.state.display)
        this.evaluate(this.state.operator)
        console.log('runningTotal after evaluate: ',this.state.runningTotal)
        this.setState({
            display: this.state.runningTotal
            // runningTotal: 0
        })
    }
}

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.display}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
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