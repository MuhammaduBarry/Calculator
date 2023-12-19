const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const bntEqual = document.querySelector("#btn-equal");
const decimal = document.querySelector("#btn-decimal");
let num1 = "";
let num2 = "";

// we are listening to our first number
function getNum1() {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", recordNum1);
  }
  decimal.addEventListener("click", decimalAddAndRemoveNum1);
}
function decimalAddAndRemoveNum1(e) {
  // adds
  recordNum1(e);
  //removes event listener
  decimal.removeEventListener("click", decimalAddAndRemoveNum1);
}
function decimalAddAndRemoveNum2(e) {
  // adds
  recordNum2(e);
  //removes event listener
  decimal.removeEventListener("click", decimalAddAndRemoveNum2);
}

function recordNum1(e) {
  num1 += e.target.value;
  console.log("recording num1");
  console.log(num1);
}

let operator = 0;
// this is listening for our operations
const getOperation = () => {
  for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener("click", (e) => {
      num1 = parseFloat(num1);
      for (let i = 0; i < numbers.length; i++) {
        numbers[i].removeEventListener("click", recordNum1);
      }
      getNum2();
      operator = e.target.getAttribute("id");
    });
  }
};

// this is listening for our second number
function getNum2() {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", recordNum2);
  }
  decimal.addEventListener("click", decimalAddAndRemoveNum2);
}

function recordNum2(e) {
  num2 += e.target.value;
  console.log("recording num 2");
}

function listenEquals() {
  bntEqual.addEventListener("click", () => {
    for (let i = 0; i < numbers.length; i++) {
      numbers[i].removeEventListener("click", recordNum2);
    }
    displayResult();
    reset();
  });
}

function displayResult() {
  num2 = parseFloat(num2);
  console.log(classifyOperation(operator));
}

function reset() {
  num1 = classifyOperation(operator);
  console.log("result:", num1);
  num2 = "";
  getOperation();
}

// TO BE USED
const classifyOperation = (id) => {
  switch (id) {
    case "remainder":
      return num1 % num2;
    case "quotient":
      return num1 / num2;
    case "add":
      return num1 + num2;
    case "multiplication":
      return num1 * num2;
    case "sub":
      return num1 - num2;
    default:
      console.log("OOOPS SOMETHING WENT WRONG");
  }
};

function calculate() {
  getNum1();
  getOperation();
  listenEquals();
}

calculate();
