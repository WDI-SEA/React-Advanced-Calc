import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        result: '0',
        number: '0',
        operator: ''
    }

//     this.inputNumber = this.inputNumber.bind(this);
//     this.operator = this.operator.bind(this);
//     this.equals = this.equals.bind(this);
//     this.handleCommaInput = this.handleCommaInput.bind(this);
//     this.plusMinus = this.plusMinus.bind(this);
//     this.reset = this.reset.bind(this);
//   }

  // function to handle operator inputs
  operator(e) {
    const operation = e.target.innerHTML;

    this.setState((prevState) => {
      return {
        operator: operation,
        result: prevState.number ? prevState.number : prevState.result,
        number: operation === '-' && prevState.number === '0' ? '-' : '',
      };
    });
  }

    // Function to handle clear button
    reset() {
        this.setState({ result: '0', number: '0', operator: '' });
    }

      // function to handle equal input
  equals() {
    let newResult = 0;
    switch (this.state.operator) {
      case '+':
        newResult = Number(this.state.result) + Number(this.state.number);
        break;
      case '-':
        newResult = this.state.result - this.state.number;
        break;
      case '*':
        newResult = this.state.result * this.state.number;
        break;
      case '/':
        newResult = this.state.result / this.state.number;
        break;
      default:
        newResult = this.state.number ? this.state.number : this.state.result;
    }

    this.setState({ number: '', operator: '', result: Number(newResult) });
  }

 // function to handle negation of number
 plusMinus() {
    if (!this.state.number && this.state.result) {
      // special case: number is empty and result isn't (e.g. after equal operation) it inverts the result
      this.setState({ result: -this.state.result });
    } else {
      // default case: negates current number
      this.setState({ number: -this.state.number });
    }
  }

    render() {
        const { number, result, operator } = this.state;
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    <div className="answer-box">TBD</div>
                    <div className="calc-row">
                        <button className="calc-button calc-button-top" onClick={this.reset}>AC</button>
                        <button className="calc-button calc-button-top" onClick={this.plusMinus}>+/-</button>
                        <button className="calc-button calc-button-top" onClick={this.percent}>%</button>
                        <button className="calc-button calc-button-op" onClick={this.operator}>/</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" onClick={this.inputNumber}>7</button>
                        <button className="calc-button" onClick={this.inputNumber}>8</button>
                        <button className="calc-button" onClick={this.inputNumber}>9</button>
                        <button className="calc-button calc-button-op" onClick={this.operator}>x</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" onClick={this.inputNumber}>4</button>
                        <button className="calc-button" onClick={this.inputNumber}>5</button>
                        <button className="calc-button" onClick={this.inputNumber}>6</button>
                        <button className="calc-button calc-button-op" onClick={this.operator}>-</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" onClick={this.inputNumber}>1</button>
                        <button className="calc-button" onClick={this.inputNumber}>2</button>
                        <button className="calc-button" onClick={this.inputNumber}>3</button>
                        <button className="calc-button calc-button-op" onClick={this.operator}>+</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button width-2" onClick={this.inputNumber}>0</button>
                        <button className="calc-button">.</button>
                        <button className="calc-button calc-button-op" onClick={this.equals}>=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator