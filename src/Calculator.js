import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        input: [],
        sum: '',
        display: ''
    }

    inputNumber = (e) => {
        console.log('Clicking')
        if (e.target.innerText === '.' && this.state.sum.includes('.')) {
            this.throwError()
        } else {
            this.setState({
                sum: this.state.sum + e.target.innerText,
                display: this.state.sum + e.target.innerText
            })
        }
    } 
    
    inputSign = (e) => {
        let tempInput = this.state.input
        let target = e.target.innerText
        let number = this.state.sum
        console.log(tempInput.length)

        if (this.state.sum === '') {
            this.throwError()
        } else {
            tempInput.push(number)
            tempInput.push(target)
            this.setState({
                input: tempInput,
                sum: '',
                display: tempInput.join('')
            })
        }
    }

    clearInput = () => {
        this.setState({
            input: [],
            sum: '',
            display: ''
        })
    }

    setSum = () => {
        let tempInput = this.state.input
        let number = this.state.sum
        tempInput.push(number)
        tempInput = tempInput.join('')
        this.setState({
            sum: '',
            input: [eval(tempInput)],
            display: eval(tempInput)
        })
    }

    throwError = () => {
        this.setState({
            input: [],
            sum: '',
            display: 'ERROR'
        })
    }

render(){

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.display}</div>
                <div className="calc-row">
                    <button onClick={this.clearInput} className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button onClick={this.inputSign} className="calc-button calc-button-top">%</button>
                    <button onClick={this.inputSign} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.inputNumber} className="calc-button">7</button>
                    <button onClick={this.inputNumber} className="calc-button">8</button>
                    <button onClick={this.inputNumber} className="calc-button">9</button>
                    <button onClick={this.inputSign} className="calc-button calc-button-op">*</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.inputNumber} className="calc-button">4</button>
                    <button onClick={this.inputNumber} className="calc-button">5</button>
                    <button onClick={this.inputNumber} className="calc-button">6</button>
                    <button onClick={this.inputSign} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.inputNumber} className="calc-button">1</button>
                    <button onClick={this.inputNumber} className="calc-button">2</button>
                    <button onClick={this.inputNumber} className="calc-button">3</button>
                    <button onClick={this.inputSign} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.inputNumber} className="calc-button width-2">0</button>
                    <button onClick={this.inputNumber} className="calc-button">.</button>
                    <button onClick={this.setSum} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator