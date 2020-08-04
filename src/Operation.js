let  number = 0;
let previousInput = null;
let previousNumber = null;
let previousOperation = null;
let repeatNumber = null;
let repeatOperation = null;
let clearable = false;
let OperationEnum = {
    addition: "+",
    subtraction: "-",
    multiplication: "x",
    division: "\u00F7",
    percentage: "%",
    sign: "+/-",
    equal: "=",
    allClear: "AC",
  };

const Operation = {

    updatePreviousStatus(number, input) {
       
       previousNumber = number;
       previousInput = input;
       previousOperation = input;
    },
  
    // Handle and process all digit inputs including .
    handleDigitInput(input) {
    
      let clearable = true;
  
      if (this.isOperation(previousInput)) {
        number = "";
      }
  
      if (input === "." && this.containDecimalPoint(number)) {
        return number;
      }
  
      if (input === "." && number === "") {
        number = "0.";
        return number;
      }
  
      number += input;
  
      previousInput = input;
  
      return this.removeZero(number);
    },
  
    // Handle all operation other than digit inputs.
    handleOperationInput(input) {
      if (
        input === OperationEnum.addition ||
        input === OperationEnum.subtraction ||
        input === OperationEnum.multiplication ||
        input === OperationEnum.division
      ) {
        return this.handleBasicMathOperation(input);
      }
  
      if (input === OperationEnum.percentage) {
        return this.handlePercentageOperation();
      }
  
      if (input === OperationEnum.sign) {
        return this.handleSignOperation();
      }
  
      if (input === OperationEnum.allClear) {
        return this.handleAllClearOperation();
      }
  
      if (input === OperationEnum.clear) {
        return this.handleClearOperation();
      }
  
      if (input === OperationEnum.equal) {
        return this.handleEqualOperation(input);
      }
    },
  
    // Only handle basic +, -, /, x operations
    handleBasicMathOperation(input) {
      let repeatNumber = null;
      let repeatOperation = null;
  
      if (previousNumber == null) {
        this.updatePreviousStatus(number, input);
  
        return number;
      } else {
        let temp = previousInput;
        previousInput = input;
  
        if (
          temp !== input &&
          previousOperation !== OperationEnum.equal &&
          temp !== "="
        ) {
          if (previousOperation === OperationEnum.addition) {
            number = this.add(previousNumber, number);
          }
          if (previousOperation === OperationEnum.subtraction) {
            number = this.subtract(previousNumber, number);
          }
          if (previousOperation === OperationEnum.multiplication) {
            number = this.muliply(previousNumber, number);
          }
          if (previousOperation === OperationEnum.division) {
            number = this.divide(previousNumber, number);
          }
  
          this.updatePreviousStatus(number, input);
  
          return number;
        } else {
          this.updatePreviousStatus(number, input);
  
          return number;
        }
      }
    },
  
    handlePercentageOperation () {
      if (number === "") {
        number = "0";
      }
  
      number = this.percentage(number);
  
      return number;
    },
  
    handleSignOperation() {
      if (number === "") {
        number = "0";
      }
  
      number = this.changeSign(number);
  
      return number;
    },
  
    handleAllClearOperation() {
      return this.allClear();
    },
  
    handleClearOperation() {
      return this.clear();
    },
  
    // Paramter operation is one of add, subtract, multiply or divide
    perform(operation) {
      if (repeatNumber !== null) {
        number = operation(number, repeatNumber);
      } else {
        repeatNumber = number;
        number = operation(previousNumber, number);
      }
    },
  
    handleEqualOperation(input) {
      if (previousNumber == null) {
        this.updatePreviousStatus(number, input);
  
        return number;
      } else {
        previousInput = input;
  
        if (
          previousOperation !== OperationEnum.equal &&
          input === OperationEnum.equal
        ) {
          let temp = number;
  
          if (previousOperation === OperationEnum.addition) {
            this.perform(this.add);
          }
          if (previousOperation === OperationEnum.subtraction) {
            this.perform(this.subtract);
          }
          if (previousOperation === OperationEnum.multiplication) {
            this.perform(this.muliply);
          }
          if (previousOperation === OperationEnum.division) {
            this.perform(this.divide);
          }
  
          repeatNumber = temp;
          repeatOperation = previousOperation;
          previousInput = input;
          previousOperation = input;
  
          return number;
        } else {
          let temp = number;
  
          if (repeatNumber != null) {
            if (repeatOperation === OperationEnum.addition) {
              number = this.add(number, repeatNumber);
            }
            if (repeatOperation === OperationEnum.subtraction) {
              number = this.subtract(number, repeatNumber);
            }
            if (repeatOperation === OperationEnum.multiplication) {
              number = this.muliply(number, repeatNumber);
            }
            if (repeatOperation === OperationEnum.division) {
              number = this.divide(number, repeatNumber);
            }
          }
  
          this.updatePreviousStatus(temp, input);
  
          return number;
        }
      }
    },
  
    calculate (input) {
      if (this.isDigit(input)) {
        return this.handleDigitInput(input);
      }
  
      if (this.isOperation(input)) {
        return this.handleOperationInput(input);
      }
  
      return "Error";
    },
  
    isDigit(input) {
      return !isNaN(input) || input === ".";
    },
  
    isOperation(input) {
      return Object.values(OperationEnum).includes(input);
    },
  
    add(previousNumber, number) {
      return (parseFloat(previousNumber) + parseFloat(number)).toString();
    },
  
    subtract(previousNumber, number) {
      return (parseFloat(previousNumber) - parseFloat(number)).toString();
    },
  
    muliply(previousNumber, number) {
      return (parseFloat(previousNumber) * parseFloat(number)).toString();
    },
  
    divide(previousNumber, number) {
      return (parseFloat(previousNumber) / parseFloat(number)).toString();
    },
  
    percentage(number) {
      return (parseFloat(number) / 100).toString();
    },
  
    changeSign(number) {
      return parseFloat(number) === 0
        ? "0"
        : (parseFloat(number) * -1).toString();
    },
  
    clear() {
      previousInput = null;
      previousNumber = null;
      previousOperation = null;
      repeatNumber = null;
      repeatOperation = null;
      clearable = false;
  
      return number;
    },
  
    allClear() {
      number = "";
      previousInput = null;
      previousNumber = null;
      previousOperation = null;
      repeatNumber = null;
      repeatOperation = null;
      clearable = false;
  
      return "0";
    },
  
    removeZero(number) {
      if (number.length > 1 && number[0] === "0" && number[1] !== ".") {
        return this.removeZero(number.substr(1, number.length));
      }
  
      return number;
    },
  
    containDecimalPoint(number) {
      return number.includes(".");
    },
  }
  
  export default Operation;