import React, { Component } from 'react'

class Calculator extends Component {
    constructor(props) {
        super(props);
    // Declare state variables
    this.state = {
        result: '0',
        number: '0',
        operator: ''
    }

    /// The bind() method creates a new function, when invoked, has the this sets to a provided value. 
    /// The bind() method allows an object to borrow a method from another object without making a copy of that method.
        this.handleInputNumber = this.handleInputNumber.bind(this);
        this.handleOperator = this.handleOperator.bind(this);
        this.handleEquals = this.handleEquals.bind(this);
        this.handleDecimal = this.handleDecimal.bind(this);
        this.handlePlusMinus = this.handlePlusMinus.bind(this);
        this.handleReset = this.handleReset.bind(this);
      }

    // Function to handle inputs from number buttons
    handleInputNumber(e) {
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
    handleOperator(e) {
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
    handleReset() {
        this.setState({ result: '0', number: '0', operator: '' });
    }

    // Function to handle equal input
    handleEquals() {
        let newResult = 0;
        switch (this.state.operator) {
            case '+':
                newResult = Number(this.state.result) + Number(this.state.number);
                break;
            case '-':
                newResult = this.state.result - this.state.number;
                break;
            case 'x':
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

      // Function to handle decimal input
  handleDecimal() {
    // concats "," to current number if number doesn't include one already
    if (this.state.number)
      this.setState({
        number: !this.state.number.toString().includes('.') ? this.state.number + '.' : this.state.number,
      });
  }

    // Function to handle negation of number
    handlePlusMinus() {
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
                        <Button value="AC" className="calc-button calc-button-top" onClick={this.handleReset}/>
                        <Button value="+/-" className="calc-button calc-button-top" onClick={this.handlePlusMinus}/>
                        <Button value="%" className="calc-button calc-button-top" onClick={this.handlePercent}/>
                        <Button value="/" className="calc-button calc-button-op" onClick={this.handleOperator}/>
                    </div>
                    <div className="calc-row">
                        <Button value="7" className="calc-button" onClick={this.handleInputNumber}/>
                        <Button value="8" className="calc-button" onClick={this.handleInputNumber}/>
                        <Button value="9" className="calc-button" onClick={this.handleInputNumber}/>
                        <Button value="x" className="calc-button calc-button-op" onClick={this.handleOperator}/>
                    </div>
                    <div className="calc-row">
                        <Button value="4" className="calc-button" onClick={this.handleInputNumber}/>
                        <Button value="5" className="calc-button" onClick={this.handleInputNumber}/>
                        <Button value="6" className="calc-button" onClick={this.handleInputNumber}/>
                        <Button value="-" className="calc-button calc-button-op" onClick={this.handleOperator}/>
                    </div>
                    <div className="calc-row">
                        <Button value="1" className="calc-button" onClick={this.handleInputNumber}/>
                        <Button value="2" className="calc-button" onClick={this.handleInputNumber}/>
                        <Button value="3" className="calc-button" onClick={this.handleInputNumber}/>
                        <Button value="+" className="calc-button calc-button-op" onClick={this.handleOperator}/>
                    </div>
                    <div className="calc-row">
                        <Button value="0" className="calc-button width-2" onClick={this.handleInputNumber}/>
                        <Button value="." className="calc-button" onClick={this.handleDecimal}/>
                        <Button value="=" className="calc-button calc-button-op" onClick={this.handleEquals}/>
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

  class Button extends Component {
    render() {
      const { value, onClick, className, disabled } = this.props;
  
      return (
        <button value={value} className={'calc-button' + className} onClick={onClick} disabled={disabled}>
          {value}
        </button>
      );
    }
  }

export default Calculator