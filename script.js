const buttonContainer = document.querySelector('.btn-container');
const numbers = document.querySelectorAll('.number');
let numberString = "";


const buttonValues = () => {
    buttonContainer.addEventListener('click', (e) => {
        console.log(e.target.value)
    })
}

const firstNumber = (e) => {
    numberString += e.target.value;
    console.log("numberString");
}

firstNumber(buttonValues());