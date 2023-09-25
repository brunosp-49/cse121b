/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let addNumber1 = Number(document.querySelector("#add1").value);
  let addNumber2 = Number(document.querySelector("#add2").value);

  document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

function subtract(number1, number2) {
  return number1 - number2;
}

function subtractNumbers() {
  let subtractNumber1 = Number(document.querySelector("#subtract1").value);
  let subtractNumber2 = Number(document.querySelector("#subtract2").value);

  document.querySelector("#difference").value = subtract(
    subtractNumber1,
    subtractNumber2
  );
}

document
  .querySelector("#subtractNumbers")
  .addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => {
  return number1 * number2;
};

const multiplyNumbers = () => {
  let multiplyNumber1 = Number(document.querySelector("#factor1").value);
  let multiplyNumber2 = Number(document.querySelector("#factor2").value);

  document.querySelector("#product").value = multiply(
    multiplyNumber1,
    multiplyNumber2
  );
};

document
  .querySelector("#multiplyNumbers")
  .addEventListener("click",multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (number1, number2) => {
    return number1 / number2;
  };
  
  const divideNumbers = () => {
    let divideNumber1 = Number(document.querySelector("#dividend").value);
    let divideNumber2 = Number(document.querySelector("#divisor").value);
  
    document.querySelector("#quotient").value = divide(
      divideNumber1,
      divideNumber2
    );
  };
  
  document
    .querySelector("#divideNumbers")
    .addEventListener("click",divideNumbers);

/* Decision Structure */

var currentDate = new Date();
var currentYear = currentDate.getFullYear();

document.getElementById("year").innerHTML = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Odds Only Array */

document.getElementById("array").innerHTML = numbersArray;

let oddNumbers = numbersArray.filter((e) => e % 2 !== 0);

document.getElementById("odds").innerHTML = oddNumbers;

/* Output Evens Only Array */

document.getElementById("array").innerHTML = numbersArray;

let evenNumbers = numbersArray.filter((e) => e % 2 === 0);

document.getElementById("evens").innerHTML = evenNumbers;

/* Output Sum of Org. Array */

let sumOfArray = numbersArray.reduce((sum, number) => sum + number);

document.getElementById("sumOfArray").innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */

let multipliedArray = numbersArray.map(number => number * 2);
document.getElementById("multiplied").innerHTML = multipliedArray;

/* Output Sum of Multiplied by 2 Array */

let sumOfMultipliedArray = multipliedArray.reduce((sum, number) => sum + number);
document.getElementById("sumOfMultiplied").innerHTML = sumOfMultipliedArray;
