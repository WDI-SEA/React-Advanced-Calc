import React, { Component } from 'react'

class Calculator extends Component {

    state = {
        result: 0,
        input: [],
        operation: '',
        savedInput1: {}
    }

    // triggered when a number is clicked
    handleNumClick = (e) => {
        console.log('you clicked:', e.target.value)
        this.inputNum(e.target.value)
    }

    // sets state to add 
    inputNum = (digit) => {
        this.setState({
            input: [...this.state.input, digit]
        })
    }

    // save a number to a saved input
    commitInput = (input) => {
        this.setState({
            savedInput1: this.state.input.join(''),
            input: []
        })
    }

    // triggered when AC is clicked
    handleAcClick = () => {
        console.log('clicked AC')
        this.setState({
            input: []
        })
    }


    render(){
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    <div className="answer-box">{this.state.input.join('')}</div>
                    <div className="calc-row">
                        <button onClick={this.handleAcClick} className="calc-button calc-button-top">AC</button>
                        <button className="calc-button calc-button-top">+/-</button>
                        <button className="calc-button calc-button-top">%</button>
                        <button className="calc-button calc-button-op">/</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={(e) => this.handleNumClick(e)} className="calc-button" value="7">7</button>
                        <button onClick={(e) => this.handleNumClick(e)} className="calc-button" value="8">8</button>
                        <button onClick={(e) => this.handleNumClick(e)} className="calc-button" value="9">9</button>
                        <button className="calc-button calc-button-op">x</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={(e) => this.handleNumClick(e)} className="calc-button" value="4">4</button>
                        <button onClick={(e) => this.handleNumClick(e)} className="calc-button" value="5">5</button>
                        <button onClick={(e) => this.handleNumClick(e)} className="calc-button" value="6">6</button>
                        <button className="calc-button calc-button-op">-</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={(e) => this.handleNumClick(e)} className="calc-button" value="1">1</button>
                        <button onClick={(e) => this.handleNumClick(e)} className="calc-button" value="2">2</button>
                        <button onClick={(e) => this.handleNumClick(e)} className="calc-button" value="3">3</button>
                        <button onClick={this.commitInput} className="calc-button calc-button-op">+</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={(e) => this.handleNumClick(e)} className="calc-button width-2" value="0">0</button>
                        <button className="calc-button">.</button>
                        <button className="calc-button calc-button-op">=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator