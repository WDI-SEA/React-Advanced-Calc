import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        firstNumbers: '',
        secondNumbers: '',
        operator: '',
        sum: '',
        error: 'Can not press 0 first'
    }

    handleNumber = (clicked) => {
        const calcFunctions = ['/', '+', '*', '-']
        let buttonValue = clicked.target.value
        //for checking
        // console.log('this is click button', clicked)
        // console.log('this is buttonV', buttonValue)
        if(calcFunctions.includes(buttonValue)) {
            this.setState({
                operator: buttonValue
            })
            return
        } 

         if (!this.state.operator) {
            this.setState({
                firstNumbers: this.state.firstNumbers += buttonValue
            })
            if(this.state.firstNumbers == '0') {
                //checking
                // console.log('this is wrong')
                this.setState({
                    firstNumbers: this.state.error
                })
            } 
        } else {
            this.setState({
                secondNumbers: this.state.secondNumbers += buttonValue
            })
            if(this.state.secondNumbers == '0') {
                //checking
                // console.log('this is wrong')
                this.setState({
                    secondNumbers: this.state.error,
                    firstNumbers: '',
                    operator: ''
                })
            } 
            return
        }
    }
    
    equalButton = () => {
        this.setState ({
            sum: eval(this.state.firstNumbers + this.state.operator + this.state.secondNumbers),
            firstNumbers: '',
            secondNumbers: '',
            operator: ''
        })
    }

    clear = () => {
        this.setState({
            firstNumbers: '',
            secondNumbers: '',
            operator: '',
            sum: ''
        })
    }

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.firstNumbers} {this.state.operator} {this.state.secondNumbers} {this.state.sum} {this.equalButton}</div>
                <div className="calc-row">
                    <button onClick={this.clear} className="calc-button calc-button-top">AC</button>
                    <button value='+/-' onClick={this.handleNumber} className="calc-button calc-button-top">+/-</button>
                    <button value='%'onClick={this.handleNumber} className="calc-button calc-button-top">%</button>
                    <button value='/' onClick={this.handleNumber} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button value='7' onClick={this.handleNumber} className="calc-button">7</button>
                    <button value='8' onClick={this.handleNumber}className="calc-button">8</button>
                    <button value='9'  onClick={this.handleNumber} className="calc-button">9</button>
                    <button value='*' onClick={this.handleNumber} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button value='4' onClick={this.handleNumber} className="calc-button">4</button>
                    <button value='5' onClick={this.handleNumber} className="calc-button">5</button>
                    <button value='6' onClick={this.handleNumber} className="calc-button">6</button>
                    <button value='-' onClick={this.handleNumber} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button value='1' onClick={this.handleNumber} className="calc-button">1</button>
                    <button value='2' onClick={this.handleNumber} className="calc-button">2</button>
                    <button value='3' onClick={this.handleNumber} className="calc-button">3</button>
                    <button value='+' onClick={this.handleNumber} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button value='0' onClick={this.handleNumber} className="calc-button width-2">0</button>
                    <button value='.' onClick={this.handleNumber} className="calc-button">.</button>
                    <button value='=' onClick={this.equalButton} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator