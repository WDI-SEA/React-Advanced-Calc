import React from 'react';


class  Calculus extends React.Component {

  state = {
    answer: '0',
    error : '',
    storedNum:'',
    currentNum:'',
    operator:''
  }

  clear = () => {
    this.setState({
      answer: '0',
      error : '',
      storedNum:'',
      currentNum:'',
      operator:''
    })
  }

  setNum = (e) =>{
    if(e.target.value !== '0' || this.state.currentNum !== ''){
      this.setState({ currentNum: this.state.currentNum + e.target.value , error:''})
    }
  }

  setDot = (e) =>{
    if(!this.state.currentNum || this.state.currentNum === '-'){
      this.setState({ currentNum : '0.'})
    }
    else if(this.state.currentNum.indexOf('.') === -1 ){
      this.setState({currentNum:this.state.currentNum + '.'})
    }
  }


  pm = () =>{
    console.log('plus/minus')
  }

  calculate = (e) =>{
    if(!this.storedNum ||  !this.state.operator){
      return 'please provide a valid expression'
    } else if(!this.state.currentNum){
      return 'please provide a valid expression'
    } else{
      let answer=''
      let num1 = Number(this.state.storedNum)
      let num2 = Number(this.state.currentNum)

      if(typeof num1 === 'number' && typeof num2 === 'number'){
        switch(this.state.operator){
          case '+':
           return num1 + num2
           case '-':
            return num1 - num2
            case '*':
             return num1 * num2
             case '/':
              return num1 / num2
              case '%':
               return num1 % num2
        }
      }else {
        this.setState({
          error:'Invalid expression'
        })
      }
    }
  }

  getAnswer = () =>{
   let answer = this.calculate()
   if(typeof answer === 'number'){
     this.setState({
       error:'',
       answer:answer,
       storedNum: '',
       currentNum:answer,
       operator : ''
     })
   }
   else{
     this.setState({error:'errorr'})
   }
  }


  setOp = (e) =>{
    console.log("set operator",e.target.value)
    if(this.state.operator){
      if(this.state.storedNum && !this.state.currentNum){
        this.setState({operator:e.target.value, error:''})
      }else if(this.state.storedNum && this.state.currentNum && this.state.currentNum === '-'){
         this.getAnswer()
      }
        else {
          this.setState({error:'Operator was already set '})
        }

    }else if(!this.state.currentNum && e.target.value === '-'){
      this.setState({error:'', currentNum:e.target.value})
    }else if(!this.state.currentNum){
      this.setState({error:'A numerical value must be set first '})
    }else{
      this.setState({
        operator:e.target.value,
        storedNum:this.state.currentNum,
        currentNum:'',
        error:''
      })
    }
  }

render(){
  return (

    <div className="container">
    <div>
     History : {this.state.storedNum || this.state.currentNum}
     {this.state.operator}
     {this.state.operator ? this.state.currentNum : ''}
    </div>
    <div>
    <p>{this.state.error}</p>
    </div>
      <div className="screen"> {this.state.answer}</div>
      <div className="row">
        <button className="normal-color" onClick={this.clear} >AC</button>
        <button className="normal-color" onClick={this.pm}>+/-</button>
        <button className="normal-color" onClick={this.setOp} value="%">%</button>
        <button className="other-color" onClick={this.setOp} value="/">/</button>
      </div>
      <div className="row">
        <button className="normal-color" onClick={this.setNum} value="7" >7</button>
        <button className="normal-color" onClick={this.setNum} value="8" >8</button>
        <button className="normal-color" onClick={this.setNum} value="9" >9</button>
        <button className="other-color" onClick={this.setOp} value="*" >*</button>
      </div>
      <div className="row">
        <button className="normal-color" onClick={this.setNum} value="4" >4</button>
        <button className="normal-color" onClick={this.setNum} value="5" >5</button>
        <button className="normal-color" onClick={this.setNum} value="6" >6</button>
        <button className="other-color"  onClick={this.setOp} value="-" >-</button>
      </div>
      <div className="row">
        <button className="normal-color" onClick={this.setNum} value="1" >1</button>
        <button className="normal-color" onClick={this.setNum} value="2" >2</button>
        <button className="normal-color" onClick={this.setNum} value="3" >3</button>
        <button className="other-color" onClick={this.setOp} value="+" >+</button>
      </div>
      <div className="row">
        <button className="zero-color" onClick={this.setNum} value="0" >0</button>
        <button className="normal-color" onClick={this.setDot} value="." >.</button>
        <button className="other-color" onClick={this.getAnswer} value="="  >=</button>
      </div>

    </div>
  );
 }
}

export default Calculus;


//onClick={ (e) => {this.setNum(e)}}
