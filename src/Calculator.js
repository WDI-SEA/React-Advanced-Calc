import React, { Component } from 'react';

export default class Calculator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      display:0,
      input: "",
      operator: "",
      num1:0,
      num2:0,
      res:0
    };
  }

 addToInput = val => {

   let value =this.state.input + val.target.textContent
   this.setState({
     input: value,
     display: value
   });
 };

 addDecimal = val => {
   // only add decimal if there is no current decimal point present in the input area
   if (this.state.input.indexOf(".") === -1) {
     this.setState({ input: this.state.input + val });
   }
 };

 addZeroToInput = val => {
   // if this.state.input is not empty then add zero
   if (this.state.input !== "") {
     this.setState({ input: this.state.input + val });
   }
 };

 clean = () => {
   this.setState({
     display:0,
     input: "",
     operator: "",
     num1:0,
     num2:0,
     res:0
   });
 };

 add = () => {
  if(this.state.input){
    this.setState({
      num1: this.state.input,
      operator:"+",
      display:0,
      input:0
     });

    }
 };

 subtract = () => {
   if(this.state.input){
     this.setState({
       num1: this.state.input,
       operator:"-",
       display:0,
       input:0
      });

     }
 };

 multiply = () => {
   if(this.state.input){
     this.setState({
       num1: this.state.input,
       operator:"*",
       display:0,
       input:0
      });

     }
 };

 divide = () => {
   if(this.state.input){
     this.setState({
       num1: this.state.input,
       operator:"/",
       display:0,
       input:0
      });

     }
 };






 result= () =>{

   if(!!this.state.input){

       if(this.state.operator === '+'){
             this.setState({
               display:parseInt(this.state.num1) + parseInt(this.state.input)
             })
       } else if(this.state.operator === '-'){
              this.setState({
                display:parseInt(this.state.num1) - parseInt(this.state.input)
              })
        }else if(this.state.operator === '*'){
               this.setState({
                 display:parseInt(this.state.num1) * parseInt(this.state.input)
               })
         } if(this.state.operator === '/'){
                this.setState({
                  display:parseInt(this.state.num1) / parseInt(this.state.input)
                })
          }


     }
 }




  render() {

    return (
      <div className="container">
        <div className="screen">{this.state.display}</div>
        <div className="row">
          <button className="normal-color" onClick={this.clean}>AC</button>
          <button className="normal-color" >+/-</button>
          <button className="normal-color" >%</button>
          <button className="other-color" onClick={this.divide}>/</button>
        </div>
        <div className="row">
          <button className="normal-color" onClick={this.addToInput}>7</button>
          <button className="normal-color" onClick={this.addToInput}>8</button>
          <button className="normal-color" onClick={this.addToInput}>9</button>
          <button className="other-color" onClick={this.multiply}>*</button>
        </div>
        <div className="row">
          <button className="normal-color" onClick={this.addToInput}>4</button>
          <button className="normal-color" onClick={this.addToInput}>5</button>
          <button className="normal-color" onClick={this.addToInput}>6</button>
          <button className="other-color" onClick={this.subtract}>-</button>
        </div>
        <div className="row">
          <button className="normal-color" onClick={this.addToInput}>1</button>
          <button className="normal-color" onClick={this.addToInput}>2</button>
          <button className="normal-color" onClick={this.addToInput}>3</button>
          <button className="other-color" onClick={this.add}>+</button>
        </div>
        <div className="row">
          <button className="zero-color" onClick={this.addZeroToInput}>0</button>
          <button className="normal-color">.</button>
          <button className="other-color" onClick={this.result}>=</button>
        </div>
      </div>
    )
  }
}
