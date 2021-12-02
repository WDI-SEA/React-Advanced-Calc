import React, { Component } from 'react'


class Calculator extends Component {
    // Declare state variables

    state = {
        display: '0',
        currentState: 'input1',
        firstValue: '',
        secondValue: '',
        math: '',
    }


    clearState = (e) => {
        e.preventDefault()
        this.setState({
            display: '',
            currentState: 'input1',
            firstValue: '',
            secondValue: '',
            math: '',
        })
    }

    handleNumbers = (e) => {
        e.preventDefault()

        if(this.state.firstValue == '' && e.target.innerText == '0'){
        }else {
        
            if(this.state.firstValue.includes('.') && e.target.innerText.includes('.')) {
                }else{
                    if(this.state.currentState == 'input1'){    
                        let value = this.state.firstValue + e.target.innerText
                        this.setState({
                        firstValue: value,
                        display: value
                        })
                    }
            }
        }
        if(this.state.secondValue.includes('.') && e.target.innerText.includes('.')) {
        }else{
            if(this.state.currentState == 'input2'){

                let value = this.state.secondValue + e.target.innerText
                let display = this.state.display + e.target.innerText
                this.setState({
                    secondValue: value,
                    display: display
                })
            }
        }
}


    handleOperators = (e) => {
        e.preventDefault()

        if(this.state.currentState == 'input1'){

            let value = this.state.display + ' ' + e.target.innerText + ' '

            this.setState({
                currentState: 'input2',
                display: value,
                math: e.target.innerText
            })
        }else {
            this.setState({
                currentState: 'Error',
                display: 'Error'
            })
        }
    }

    handleSolve = (e) => {

        e.preventDefault()

        let math_it_up = {
            '+': function (x, y) { return x + y },
            '-': function (x, y) { return x - y },
            '/': function (x,y) { return x / y},
            'x': function (x,y) { return x * y},
            '%': function (x,y) { return x % y}
        }

  
        if(this.state.currentState == 'input2'){
            if(this.state.secondValue != ''){

                let result = math_it_up[this.state.math](Number(this.state.firstValue), Number(this.state.secondValue))
                this.setState({
                    display: result,
                    currentState: 'input1',
                    firstValue: '',
                    secondValue: '',
                    math: '',
                })
            }
            else {
                this.setState({
                    currentState: 'Error',
                    display: 'Error'
                })
            }
            
        }
        else if(this.state.currentState == 'input1'){
            this.setState({
                display: this.state.firstValue,
                currentState: 'input1',
                firstValue: '',
                secondValue: '',
                math: '',
            })
        }
        else {
            this.setState({
                currentState: 'Error',
                display: 'Error'
            })
        }

    }

    turnNegitve = (e) =>{
        e.preventDefault()

        if(this.state.firstValue == ''){

        }else {
            if(this.state.currentState == 'input1'){ 
                    let number = Number(this.state.firstValue)*-1
                    console.log(number)
                    let str = number.toString()

                    this.setState({
                        firstValue: str,
                        display: str
                    })
            }
            if(this.state.currentState == 'input2'){ 
                let number = Number(this.state.secondValue)*-1
                console.log(number)
                let str = number.toString()

                this.setState({
                    secondValue: str,
                    display: this.state.firstValue + ' ' + this.state.math + ' ' + str
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
                <div className="answer-box">{this.state.display}</div>
                <div className="calc-row">
                    <button onClick={this.clearState} className="calc-button calc-button-top">AC</button>
                    <button onClick={this.turnNegitve} className="calc-button calc-button-top">+/-</button>
                    <button onClick={this.handleOperators} className="calc-button calc-button-top">%</button>
                    <button onClick={this.handleOperators} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.handleNumbers} className="calc-button">7</button>
                    <button onClick={this.handleNumbers} className="calc-button">8</button>
                    <button onClick={this.handleNumbers} className="calc-button">9</button>
                    <button onClick={this.handleOperators} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.handleNumbers} className="calc-button">4</button>
                    <button onClick={this.handleNumbers} className="calc-button">5</button>
                    <button onClick={this.handleNumbers} className="calc-button">6</button>
                    <button onClick={this.handleOperators} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.handleNumbers} className="calc-button">1</button>
                    <button onClick={this.handleNumbers} className="calc-button">2</button>
                    <button onClick={this.handleNumbers} className="calc-button">3</button>
                    <button onClick={this.handleOperators} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.handleNumbers} className="calc-button width-2">0</button>
                    <button onClick={this.handleNumbers} className="calc-button">.</button>
                    <button onClick={this.handleSolve} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}



export default Calculator