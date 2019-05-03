import React, { Component } from 'react'

class Calculator extends Component {
	state = {
		num1: '',
		num2: '',
		result: '',
		func: '',
		decUsed1: false,
		decUsed2: false,
		firstNum: false
	}
	setNum = (e, num) => {
		if (!this.state.firstNum) {
			if (this.state.num1.includes('.')) {
				this.setState({ decUsed1: true })
			}
			if (this.state.num1.includes('.') && num === '.') {
				return
			} else if (!this.state.decUsed1 && num === '.') {
	  		this.setState({ num1: this.state.num1 + e.target.value, result: '', decUsed1: true });
			} else {
				this.setState({ num1: this.state.num1 + e.target.value, result: '' });
			}
		} else {
			if (this.state.decUsed2 && num === '.') {
				return
			} else if (!this.state.decUsed2 && num === '.') {
	  		this.setState({ num2: this.state.num2 + e.target.value, result: '', decUsed2: true });
			} else {
				this.setState({ num2: this.state.num2 + e.target.value, result: '' });
			}
		}
	}
	clear = () => {
		this.setState({ 
			num1: '',
			num2: '',
			result: '',
			func: '',
			posInt: true,
			firstNum: false
		})
	}
	posNeg = () => {
		if (this.state.num1) {
			if (!this.state.firstNum) {
				this.setState({ num1: -this.state.num1 });
			} else if (this.state.num1 && this.state.num2) {
				this.setState({ num2: -this.state.num2 });
			}
		}
	}
	sum = (num1, num2) => {
		if (this.state.func) {
			this.fnc(this.state.num1, this.state.num2, this.state.func)
			this.setState({ func: '+', firstNum: true });
		}
		if (this.state.num1) {
			this.setState({ func: '+', firstNum: true });
		}
	}
	sub = (num1, num2) => {
		if (!this.state.num1) {
			this.setState({ num1: '-' })
		} else if (this.state.num1 && !this.state.func) {
			this.setState({ func: '-', firstNum: true });
		} else if (this.state.func && !this.state.num2) {
			this.setState({ num2: '-'})
		} else if (this.state.func && this.state.num2) {
			this.fnc(this.state.num1, this.state.num2, this.state.func)
			this.setState({ func: '-', firstNum: true });
		}
	}
	mlt = (num1, num2) => {
		if (this.state.func) {
			this.fnc(this.state.num1, this.state.num2, this.state.func)
			this.setState({ func: '*', firstNum: true });
		}
		else if (this.state.num1) {
			this.setState({ func: '*', firstNum: true });
		}
	}
	div = (num1, num2) => {
		if (this.state.func) {
			this.fnc(this.state.num1, this.state.num2, this.state.func)
			this.setState({ func: '/', firstNum: true });
		}		if (this.state.num1) {
			this.setState({ func: '/', firstNum: true });
		}
	}
	mod = (num1, num2) => {
		if (this.state.func) {
			this.fnc(this.state.num1, this.state.num2, this.state.func)
			this.setState({ func: '%', firstNum: true });
		}		if (this.state.num1) {
			this.setState({ func: '%', firstNum: true });
		}
	}
	fnc = (num1, num2, func) => {
		switch (func) {
			case ('+'):
				this.setState({ firstNum: false, num1: (parseFloat(num1, 10) + parseFloat(num2, 10)).toString(), num2: '', func: '', decUsed1: false, decUsed2: false });
				break
			case ('-'):
				this.setState({ firstNum: false, num1: (parseFloat(num1, 10) - parseFloat(num2, 10)).toString(), num2: '', func: '', decUsed1: false, decUsed2: false });
				break
			case ('*'):
				this.setState({ firstNum: false, num1: (parseFloat(num1, 10) * parseFloat(num2, 10)).toString(), num2: '', func: '', decUsed1: false, decUsed2: false });
				break
			case ('/'):
				this.setState({ firstNum: false, num1: (parseFloat(num1, 10) / parseFloat(num2, 10)).toString(), num2: '', func: '', decUsed1: false, decUsed2: false });
				break
			case ('%'):
				this.setState({ firstNum: false, num1: (parseFloat(num1, 10) % parseFloat(num2, 10)).toString(), num2: '', func: '', decUsed1: false, decUsed2: false });
				break
			default:
				return
		}
	}
	render() {
		return (
			<div className="container">
			  <h1>+-*/% with React!</h1>
			  <div className="numbers">
		  	<h3 className="display">{this.state.num1} {this.state.func} {this.state.num2}</h3>
			  <div className="add">
			    <button className="top-input" onClick={() => this.clear()}>AC</button>
			    <button className="top-input" onClick={() => this.posNeg()}>+/-</button>
			    <button className="top-input" onClick={() => this.mod(this.state.num1, this.state.num2)}>%</button>
			    <button className="operator"onClick={() => this.div(this.state.num1, this.state.num2)}>/</button>
			    <br />
			    <input type="button"
					  name="7"
					  value="7"
					  className="input"
					  onClick={ (e) => this.setNum(e, 7) }
					/>
			    
			   	<input type="button"
					  name="8"
					  value="8"
					  className="input"
					  onClick={ (e) => this.setNum(e, 8) }
					/>
			    
			    <input type="button"
					  name="9"
					  value="9"
					  className="input"
					  onClick={ (e) => this.setNum(e, 9) }
					/>
					
			    <button className="operator"onClick={() => this.sum(this.state.num1, this.state.num2)}>+</button>
			    <br />
			    <input type="button"
					  name="4"
					  value="4"
					  className="input"
					  onClick={ (e) => this.setNum(e, 4) }
					/>
			    
			    <input type="button"
					  name="5"
					  value="5"
					  className="input"
					  onClick={ (e) => this.setNum(e, 5) }
					/>
			    
			    <input type="button"
					  name="6"
					  value="6"
					  className="input"
					  onClick={ (e) => this.setNum(e, 6) }
					/>
					
			    <button className="operator"onClick={() => this.sub(this.state.num1, this.state.num2)}>-</button>
			    <br />
			    
					<input type="button"
					  name="1"
					  value="1"
					  className="input"
					  onClick={ (e) => this.setNum(e, 1) }
					/>
			    
			    <input type="button"
					  name="2"
					  value="2"
					  className="input"
					  onClick={ (e) => this.setNum(e, 2) }
					/>
			    
			    <input type="button"
					  name="3"
					  value="3"
					  className="input"
					  onClick={ (e) => this.setNum(e, 3) }
					/>
					
			    <button className="operator"onClick={() => this.mlt(this.state.num1, this.state.num2)}>*</button>
			    <br />
			    <input type="button"
					  name="0"
					  value="0"
					  className="zero-input"
					  onClick={ (e) => this.setNum(e, 0) }
					/>
					<input type="button"
					  name="."
					  value="."
					  className="input"
					  onClick={ (e) => this.setNum(e, '.') }
					/>
			    <button className="operator" onClick={() => this.fnc(this.state.num1, this.state.num2, this.state.func)}>=</button>
			    <br />
			  </div>
			  </div>
			</div>
		)
	}

}

export default Calculator