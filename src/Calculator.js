import React, { Component } from "react";

class Calculator extends Component {
  // Declare state variables
    state = {
        saved: 0,
        input: [],
        operator: '',
        message: 'Hello!'
    }

    clearCalculator = () => {
        this.setState({
            saved: 0,
            input: [],
            operator: '',
            message: ''
        })
    }

    //user clicks number
    recordNumber = (e) => {
        //save in array
        if (this.state.input.length === 0 && e.target.innerText != 0) {
            this.setState({
                input: [e.target.innerText],
                message: [e.target.innerText]
            })
        } else if ( this.state.input.length > 0) {
            this.setState({
                input: [...this.state.input, e.target.innerText],
                message: [...this.state.input, e.target.innerText]
            })
        }
        
    }

    //user clicks operator
    recordOperator = (e) => {
        //if input exists
        if (this.state.input.length > 0 && !this.state.operator) {
            this.setState({
                //join previous input into saved
                saved: this.state.input.join(""),
                //clear input
                input: [],
                //record operator
                operator: e.target.innerText
                //screen doesn't change
            })
        //otherwise throw error
        } else {
            this.setState({
                message: 'Please enter a number first!'
            })
        }
        console.log(typeof this.state.saved)
    }
    
    //user clicks equal
    calculate = (operator) => {
        //evaluate first input -operator- second input
        switch (operator) {
            case ('+'):
                this.setState({
                    message: +this.state.saved + +this.state.input.join(""),
                    saved: +this.state.saved + +this.state.input.join(""),
                    operator: '',
                    input: []
                })
                break
            case ('-'):
                this.setState({
                    message: +this.state.saved - +this.state.input.join(""),
                    saved: +this.state.saved - +this.state.input.join(""),
                    operator: '',
                    input: []
                })
                break
            case ('/'):
                this.setState({
                    message: +this.state.saved / +this.state.input.join(""),
                    saved: +this.state.saved / +this.state.input.join(""),
                    operator: '',
                    input: []
                })
                break
            case ('x'):
                this.setState({
                    message: +this.state.saved * +this.state.input.join(""),
                    saved: +this.state.saved * +this.state.input.join(""),
                    operator: '',
                    input: []
                })
                break
            default:
                this.setState({
                    message: 'Something went wrong!'
                })
        }
    }

  render() {
    return (
      <div className="container">
        <h1>React Calculator</h1>
        <div className="calc-container">
            <p>Values: {this.state.saved}</p>
          <div className="answer-box">{this.state.message}</div>
          <div className="calc-row">
            <button className="calc-button calc-button-top" onClick={this.clearCalculator}>AC</button>
            <button className="calc-button calc-button-top">+/-</button>
            <button className="calc-button calc-button-top" onClick={this.recordOperator}>%</button>
            <button className="calc-button calc-button-op" onClick={this.recordOperator}>/</button>
          </div>
          <div className="calc-row">
            <button className="calc-button" onClick={this.recordNumber}>7</button>
            <button className="calc-button" onClick={this.recordNumber}>8</button>
            <button className="calc-button" onClick={this.recordNumber}>9</button>
            <button className="calc-button calc-button-op" onClick={this.recordOperator}>x</button>
          </div>
          <div className="calc-row">
            <button className="calc-button" onClick={this.recordNumber}>4</button>
            <button className="calc-button" onClick={this.recordNumber}>5</button>
            <button className="calc-button" onClick={this.recordNumber}>6</button>
            <button className="calc-button calc-button-op" onClick={this.recordOperator}>-</button>
          </div>
          <div className="calc-row">
            <button className="calc-button" onClick={this.recordNumber}>1</button>
            <button className="calc-button" onClick={this.recordNumber}>2</button>
            <button className="calc-button" onClick={this.recordNumber}>3</button>
            <button className="calc-button calc-button-op" onClick={this.recordOperator}>+</button>
          </div>
          <div className="calc-row">
            <button className="calc-button width-2" onClick={this.recordNumber}>0</button>
            <button className="calc-button" onClick={this.recordNumber}>.</button>
                    <button className="calc-button calc-button-op" onClick={() => this.calculate(this.state.operator)}>=</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator