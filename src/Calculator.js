import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state={
        display: '',
        operator: null,
        readyForNewNum: false
    }
    operationsHelper = (e) => {
        this.setState({
            readyForNewNum: true,
            operator: e.target.innerText
        })
    }

    inputNum = (e) => {
        if(this.state.readyForNewNum===true){
            this.setState({
                display: e.target.innerText, 
                readyForNewNum: false
            }) 
        } else {
            this.setState({
                display: this.state.display + e.target.innerText
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
                    <button onClick={this.operationsHelper}className="calc-button calc-button-top">AC</button>
                    <button onClick={this.operationsHelper}className="calc-button calc-button-top">+/-</button>
                    <button onClick={this.operationsHelper}className="calc-button calc-button-top">%</button>
                    <button onClick={this.operationsHelper}className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.inputNum}className="calc-button">7</button>
                    <button onClick={this.inputNum}className="calc-button">8</button>
                    <button onClick={this.inputNum}className="calc-button">9</button>
                    <button onClick={this.operationsHelper}className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.inputNum}className="calc-button">4</button>
                    <button onClick={this.inputNum}className="calc-button">5</button>
                    <button onClick={this.inputNum}className="calc-button">6</button>
                    <button onClick={this.operationsHelper}className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.inputNum}className="calc-button">1</button>
                    <button onClick={this.inputNum}className="calc-button">2</button>
                    <button onClick={this.inputNum}className="calc-button">3</button>
                    <button onClick={this.operationsHelper}className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.inputNum}className="calc-button width-2">0</button>
                    <button onClick={this.operationsHelper}className="calc-button">.</button>
                    <button onClick={this.operationsHelper}className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator