import React, {Component} from 'react';
import './App.css';
import Calculator from './Calculator'



class App extends Component {

  state = {
    finalResult: '',
    firstNumber: '',
    secondNumber: '',
    operator: '',
    error: 'Try again'
  }



  calculate = () => {
    this.setState({
      finalResult: eval(this.state.firstNumber + this.state.operator + this.state.secondNumber)
    })
    
  }

  clear = () => {
    this.setState({
      finalResult: '',
      firstNumber: '',
      secondNumber: '',
      operator: '',
      decimal: ''
    })
  }



  onClick = (buttonClicked) => {
    const operators = ['/', '*', '+', '-']
    const decimal = '.'

    if (buttonClicked === '%') {
      return;
    }

    if (buttonClicked === 'AC') {
      this.clear()
      return;
    }

    if (buttonClicked === '=') {
      this.calculate()
      this.setState({
        firstNumber: '',
        secondNumber: '',
        operator: ''
      })
      return;
    }

    if (operators.includes(buttonClicked)) {
      this.setState({
        operator: buttonClicked
      })
      return;
    }

    if (buttonClicked === '.') {
      let number = this.state.operator ? this.state.secondNumber : this.state.firstNumber
      if (number.includes(buttonClicked)) {
        return;
      }
    }



    if (buttonClicked === '0' && this.state.operator === '' && this.state.firstNumber === '') {
     this.setState({
       firstNumber: this.state.error
     })
     return;
    }

    if (buttonClicked == '0' && this.state.operator && this.state.firstNumber && this.state.secondNumber == '') {
     this.setState({
       secondNumber: this.state.error,
       firstNumber: '',
       operator: ''
     })
     return;
    }
    

    if (!this.state.operator) {
      this.setState({
        firstNumber: this.state.firstNumber += buttonClicked
      })
    } else {
      this.setState({
        secondNumber: this.state.secondNumber += buttonClicked
      })
      return;
    }

    // console.log('button bein clicked right here', buttonClicked)
    // console.log('final result', this.state.finalResult)
    
  }


  render(){
    return (
      <div className="App">
        <Calculator onClick={ this.onClick } labelDisplay={this.state.finalResult ? this.state.finalResult : `${this.state.firstNumber} ${this.state.operator} ${this.state.secondNumber}`}/>
      </div>
    )
  }
}

export default App;
