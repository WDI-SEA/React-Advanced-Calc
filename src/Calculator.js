import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables

    state = {
        num1: '',
        operator: '',
        num2: '',
        result: '',
        screen: ''
        
    }


    calculate = (event) => {
        event.persist()
        if(this.state.operator === "+"){
            const result = +this.state.num1 + +this.state.num2
            this.setState(() => {
                return {
                    screen: result
                }
            })
        } else if (this.state.operator === "-"){
            const result = this.state.num1 - this.state.num2

            this.setState(() => {
                return {
                    screen: result
                }
            })
        } else if (this.state.operator === "x"){
            const result = this.state.num1 * this.state.num2

            this.setState(() => {
                return {
                    screen: result
                }
            })
        } else if (this.state.operator === "/"){
            const result = this.state.num1 / this.state.num2

            this.setState(() => {
                return {
                    screen: result
                }
            })
        }
        console.log(this.state.result)

        }

    addOperator = (event) => {
        event.persist()
        if(this.state.operator === '' && this.state.num1 !== ''){
            this.setState(() => {
                this.state.operator = event.target.innerText
                return {
                    screen: this.state.num1 + this.state.operator + this.state.num2 
                }
            })
        } else if(this.state.num1 === '' && this.state.operator === '') {
            this.setState(() => {
            return{
            screen: 'Can not add an operator before adding a number'
            }
            })
        } else if (this.state.operator !== ''){
            this.setState(() => {
            return{
            screen: 'Can not add multiple operators'
            }
        })
        }
    }

    clear = (event) => {
        event.persist()
        
        this.setState(() => {
            this.state.result = ''
            this.state.num1 = ''
            this.state.num2 = ''
            this.state.operator =  ''
        return {
            screen: this.state.result
        }
        })
        console.log('result value', this.state.result)
    }


    logNum = (event) => {
        event.persist()
        if(this.state.operator === ''){
            this.setState(() => {
                this.state.num1 = this.state.num1 + event.target.innerText
                return {
                    screen: this.state.num1 + this.state.operator + this.state.num2 
                }
            })
        } else {
            this.setState(() => {
                this.state.num2 = this.state.num2 + event.target.innerText
                return {
                    screen: this.state.num1 + this.state.operator + this.state.num2 
                }
        })
    }
    }

    modulo = (event) => {
        event.persist()
        if(this.state.num1 === ''){
        this.setState(() => {
        return {
            screen: 'Can not add an operator before adding a number'
        }
        })
        } else if(this.state.operator === '' && this.state.num1 !== ''){
            this.setState(() => {
                this.state.result = this.state.num1 / 100
                return {
                    screen: this.state.result
                }
            })
        }
    }




render(){
    console.log(this.state.operator, "operators value")
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">
                    
                    {this.state.screen}
                    
                    </div>
                <div className="calc-row">
                    <button onClick={this.clear} className="calc-button calc-button-top">AC</button>

                    <button className="calc-button calc-button-top">+/-</button>

                    <button onClick={this.modulo} className="calc-button calc-button-top">%</button>

                    <button onClick={this.addOperator} className="calc-button calc-button-op">/</button>

                </div>
                <div className="calc-row">
                    <button onClick={this.logNum} className="calc-button"                    
                    >7</button>

                    <button onClick={this.logNum} className="calc-button">8</button>

                    <button onClick={this.logNum} className="calc-button">9</button>

                    <button onClick={this.addOperator} className="calc-button calc-button-op">x</button>

                </div>
                <div className="calc-row">
                    <button onClick={this.logNum} className="calc-button">4</button>

                    <button onClick={this.logNum} className="calc-button">5</button>

                    <button onClick={this.logNum} className="calc-button">6</button>

                    <button onClick={this.addOperator}className="calc-button calc-button-op">-</button>

                </div>
                <div className="calc-row">
                    <button onClick={this.logNum} className="calc-button">1</button>

                    <button onClick={this.logNum} className="calc-button">2</button>

                    <button onClick={this.logNum} className="calc-button">3</button>

                    <button onClick={this.addOperator} className="calc-button calc-button-op">+</button>

                </div>
                <div className="calc-row">
                    <button onClick={this.logNum} className="calc-button width-2">0</button>

                    <button className="calc-button">.</button>

                    <button onClick= {this.calculate} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator