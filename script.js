const containerButton = document.querySelector(".btn-container");
const operatorButton = document.querySelectorAll(".operation");
const numbers = document.querySelectorAll(".number");
const decimal = document.querySelector("#btn-decimal");
const equalButton = document.querySelector("#btn-equal");
let firstNumberString = "";
let secondNumberString = "";

const firstNumber = () => {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", firstNumberStringRecord);
  }
  decimal.addEventListener("click", decimalButtonFirstNumber);
};
// this records and tracks our number string
const firstNumberStringRecord = (e) => {
  console.log("numberString 1:");
  firstNumberString += e.target.value;
  console.log(firstNumberString);
};

// this also records our number string but only allows us to click our decimal once
const decimalButtonFirstNumber = (e) => {
  firstNumberStringRecord(e);
  decimal.removeEventListener("click", decimalButtonFirstNumber);
};

const secondNumber = () => {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", secondNumberStringRecord);
  }
  decimal.addEventListener("click", decimalButtonSecondNumber);
};
// this tracks our second number
const secondNumberStringRecord = (e) => {
  console.log("numberString 2:");
  secondNumberString += e.target.value;
  console.log(secondNumberString);
};

// this also records our number string but only allows us to click our decimal once
const decimalButtonSecondNumber = (e) => {
  secondNumberStringRecord(e);
  decimal.removeEventListener("click", decimalButtonSecondNumber);
};

// this listens for our operator and only lets us click it once then it starts our secondNumber
let operator;

const operatorRecord = (e) => {
  console.log("operator:");
  console.log(e.target.value);
  for (let i = 0; i < operatorButton.length; i++) {
    operatorButton[i].removeEventListener("click", operatorRecord);
  }
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].removeEventListener("click", firstNumberStringRecord);
  }
  secondNumber();
  operator = e.target.getAttribute("id");
};

//this is our operator that contains our first number and our Second
const operation = () => {
  for (let i = 0; i < operatorButton.length; i++) {
    operatorButton[i].addEventListener("click", operatorRecord);
  }
};

// this button listens for our equal button
const listenEqual = () => {
  equalButton.addEventListener("click", () => {
    firstNumberString = parseFloat(firstNumberString);
    secondNumberString = parseFloat(secondNumberString);
    reset();
  });
};

// we need to reset our function once we obtain our results
const reset = () => {
  firstNumberString = mathFunction(operator);
  console.log("result:", firstNumberString);
  secondNumberString = "";
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].removeEventListener("click", secondNumberStringRecord);
  }
  operation();
};

// this function takes our 2 numbers and does the math accordingly
const mathFunction = (id) => {
  switch (id) {
    case "remainder":
      return firstNumberString % secondNumberString;
    case "divide":
      return firstNumberString / secondNumberString;
    case "add":
      return firstNumberString + secondNumberString;
    case "multiplication":
      return firstNumberString * secondNumberString;
    case "subtraction":
      return firstNumberString - secondNumberString;
    default:
      console.log("OOPS SOMETHING WENT WRONG");
  }
};

firstNumber();
operation();
listenEqual();
