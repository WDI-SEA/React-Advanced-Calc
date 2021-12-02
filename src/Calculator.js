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
    //     this.decimal = this.decimal.bind(this);
    //     this.plusMinus = this.plusMinus.bind(this);
    //     this.reset = this.reset.bind(this);
    //   }

    // Function to handle inputs from number buttons
    inputNumber(e) {
        e.preventDefault();

        // Getting the value from the pressed button
        const value = e.target.innerHTML;

        console.log(value);

        // appending the value from the button to the current number
        this.setState((prevState) => {
            return {
                number:
                    prevState.number === '0' && value === '0' // prevents number from having multiple 0's at the beginning
                        ? '0'
                        : prevState.number % 1 === 0 && value !== '0' // if it's a whole number
                            ? Number(prevState.number + value) // it returns a Number() to get rid of 0's in the front when a number is typed, also includes
                            : prevState.number + value, // value !== "0" so you can type a 0 right after the comma
                result: prevState.operator ? prevState.result : '0', // this line resets the result if a new number was typed with no operator stored
            };
        });
    }

    // Function to handle operator
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

    // Function to handle reset/clear button
    reset() {
        this.setState({ result: '0', number: '0', operator: '' });
    }

    // Function to handle equal input
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

      // function to handle comma input
  decimal() {
    // concats "," to current number if number doesn't include one already
    if (this.state.number)
      this.setState({
        number: !this.state.number.toString().includes('.') ? this.state.number + '.' : this.state.number,
      });
  }

    // Function to handle negation of number
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
                    <Display output={number ? number : result + operator} />
                    <div className="calc-row">
                        <button value="AC" className="calc-button calc-button-top" onClick={this.reset}>AC</button>
                        <button value="+/-" className="calc-button calc-button-top" onClick={this.plusMinus}>+/-</button>
                        <button value="%" className="calc-button calc-button-top" onClick={this.percent}>%</button>
                        <button value="/" className="calc-button calc-button-op" onClick={this.operator}>/</button>
                    </div>
                    <div className="calc-row">
                        <button value="7" className="calc-button" onClick={this.inputNumber}>7</button>
                        <button value="8" className="calc-button" onClick={this.inputNumber}>8</button>
                        <button value="9" className="calc-button" onClick={this.inputNumber}>9</button>
                        <button value="x" className="calc-button calc-button-op" onClick={this.operator}>x</button>
                    </div>
                    <div className="calc-row">
                        <button value="4" className="calc-button" onClick={this.inputNumber}>4</button>
                        <button value="5" className="calc-button" onClick={this.inputNumber}>5</button>
                        <button value="6" className="calc-button" onClick={this.inputNumber}>6</button>
                        <button value="-" className="calc-button calc-button-op" onClick={this.operator}>-</button>
                    </div>
                    <div className="calc-row">
                        <button value="1" className="calc-button" onClick={this.inputNumber}>1</button>
                        <button value="2" className="calc-button" onClick={this.inputNumber}>2</button>
                        <button value="3" className="calc-button" onClick={this.inputNumber}>3</button>
                        <button value="+" className="calc-button calc-button-op" onClick={this.operator}>+</button>
                    </div>
                    <div className="calc-row">
                        <button value="0" className="calc-button width-2" onClick={this.inputNumber}>0</button>
                        <button value="." className="calc-button" onClick={this.decimal}>.</button>
                        <button value="=" className="calc-button calc-button-op" onClick={this.equals}>=</button>
                    </div>
                </div>
            </div>
        )
    }
}

class Display extends Component {
    render() {
      const { output } = this.props;
      return <div className="answer-box">{output}</div>;
    }
  }

export default Calculator