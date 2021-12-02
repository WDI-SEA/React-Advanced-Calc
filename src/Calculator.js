import React, { Component } from 'react';

class Calculator extends Component {
  // Declare state variables

  state = {
    num1: '',
    num2: '',
    result: '',
    operation: '',
    dec1: false,
    dec2: false,
    firstNum: false,
  };

  // Check to see if the first number is a number and the second number is a number. If it receives two nan it will return NAN as a result.
  setNum = (e) => {
    if (!this.state.firstNum) {
      if (this.state.num1.includes('.')) {
        this.setState({ dec1: true });
      }
      if (this.state.num1.includes('.') && e === '.') {
        return;
      } else if (!this.state.dec1 && e === '.') {
        this.setState({ num1: this.state.num1 + e.target.value, result: '', dec1: true });
      } else {
        this.setState({ num1: this.state.num1 + e.target.value, result: '' });
      }
    } else {
      if (this.state.dec2 && e === '.') {
        return;
      } else if (!this.state.dec2 && e === '.') {
        this.setState({ num2: this.state.num2 + e.target.value, result: '', dec2: true });
      } else {
        this.setState({ num2: this.state.num2 + e.target.value, result: '' });
      }
    }
  };

  //Clears all in the .answer-box
  clear = () => {
    this.setState({
      num1: '',
      num2: '',
      result: '',
      operation: '',
      firstNum: false,
    });
  };

  add = (num1, num2, operation) => {
    if (operation && num2) {
      this.fnc(num1, num2, operation);
      this.setState({ operation: '+', firstNum: true });
    }
    if (num1) {
      this.setState({ operation: '+', firstNum: true });
    }
  };
  minus = (num1, num2, operation) => {
    if (!num1) {
      this.setState({ num1: '-' });
    } else if (num1 && !operation) {
      this.setState({ operation: '-', firstNum: true });
    } else if (operation && !num2) {
      this.setState({ num2: '-' });
    } else if (operation && num2) {
      this.fnc(num1, num2, operation);
      this.setState({ operation: '-', firstNum: true });
    }
  };
  times = (num1, num2, operation) => {
    if (operation && num2) {
      this.fnc(num1, num2, operation);
      this.setState({ operation: '*', firstNum: true });
    } else if (num1) {
      this.setState({ operation: '*', firstNum: true });
    }
  };
  div = (num1, num2, operation) => {
    if (operation && num2) {
      this.fnc(num1, num2, operation);
      this.setState({ operation: '/', firstNum: true });
    }
    if (num1) {
      this.setState({ operation: '/', firstNum: true });
    }
  };

  fnc = (num1, num2, operation) => {
    if (operation === '+') {
      this.setState({
        firstNum: false,
        // The unary plus operator (+) precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.
        num1: +num1 + +num2,
        num2: '',
        operation: '',
      });
    } else if (operation === '-') {
      this.setState({
        firstNum: false,
        num1: num1 - num2,
        num2: '',
        operation: '',
      });
    } else if (operation === '*') {
      this.setState({
        firstNum: false,
        num1: num1 * num2,
        num2: '',
        operation: '',
      });
    } else {
      this.setState({
        firstNum: false,
        num1: num1 / num2,
        num2: '',
        operation: '',
      });
    }
  };
  render() {
    return (
      <div className='container'>
        <h1>React Calculator</h1>
        <div className='calc-container'>
          <p>Values: </p>
          <div className='answer-box'>
            {this.state.num1} {this.state.operation} {this.state.num2}
          </div>
          <div className='calc-row'>
            <button className='calc-button calc-button-top ' onClick={() => this.clear()}>
              AC
            </button>
            <button className='calc-button calc-button-top'>+/-</button>
            <button className='calc-button calc-button-top'>%</button>
            <button
              className='calc-button calc-button-op'
              onClick={() => this.div(this.state.num1, this.state.num2)}>
              /
            </button>
          </div>
          <div className='calc-row'>
            <button className='calc-button' value='7' onClick={(e) => this.setNum(e)}>
              7
            </button>
            <button className='calc-button' value='8' onClick={(e) => this.setNum(e)}>
              8
            </button>
            <button className='calc-button' value='9' onClick={(e) => this.setNum(e)}>
              9
            </button>
            <button
              className='calc-button calc-button-op'
              onClick={() => this.times(this.state.num1, this.state.num2)}>
              x
            </button>
          </div>
          <div className='calc-row'>
            <button className='calc-button' value='4' onClick={(e) => this.setNum(e)}>
              4
            </button>
            <button className='calc-button' value='5' onClick={(e) => this.setNum(e)}>
              5
            </button>
            <button className='calc-button' value='6' onClick={(e) => this.setNum(e)}>
              6
            </button>
            <button
              className='calc-button calc-button-op'
              onClick={() => this.minus(this.state.num1, this.state.num2)}>
              -
            </button>
          </div>
          <div className='calc-row'>
            <button className='calc-button' value='1' onClick={(e) => this.setNum(e)}>
              1
            </button>
            <button className='calc-button' value='2' onClick={(e) => this.setNum(e)}>
              2
            </button>
            <button className='calc-button' value='3' onClick={(e) => this.setNum(e)}>
              3
            </button>
            <button
              className='calc-button calc-button-op'
              onClick={() => this.add(this.state.num1, this.state.num2)}>
              +
            </button>
          </div>
          <div className='calc-row'>
            <button className='calc-button width-2' value='0' onClick={(e) => this.setNum(e)}>
              0
            </button>
            <button className='calc-button' value='.' onClick={(e) => this.setNum(e)}>
              .
            </button>
            <button
              className='calc-button calc-button-op'
              onClick={() => this.fnc(this.state.num1, this.state.num2, this.state.operation)}>
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
