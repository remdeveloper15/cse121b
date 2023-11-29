/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2)
{
    return number1 + number2;
}

function addNumbers()
{
    let addNumber1 = Number(document.querySelector('#add1').value);
    
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
let subtract = function(number1, number2)
{
    return number1 - number2
}

let subtractNumbers = function()
{
    let addNumber1 = Number(document.querySelector('#subtract1').value);
    
    let addNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(addNumber1, addNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => 
{
    let addNumber1 = Number(document.querySelector('#factor1').value);
    
    let addNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(addNumber1, addNumber2);   
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide(number1, number2)
{
    return number1 / number2;
}

function divideNumbers()
{
    let addNumber1 = Number(document.querySelector('#dividend').value);
    
    let addNumber2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(addNumber1, addNumber2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

function total()
{
    let addSubtotal = Number(document.querySelector('#subtotal').value);
    
    if (document.getElementById('member').checked)
    {
        let subtotal1 = addSubtotal * 15 / 100;
        addSubtotal -= subtotal1;
    }
        
    document.querySelector('#total').textContent = `$ ${addSubtotal.toFixed(2)}`;  
}

document.querySelector('#getTotal').addEventListener('click', total);

/* ARRAY METHODS - Functional Programming */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ,13];

 
/* Output Source Array */
document.querySelector('#array').textContent = numbers;

/* Output Odds Only Array */
document.querySelector('#odds').textContent = numbers.filter(number => number % 2 === 1);

/* Output Evens Only Array */
document.querySelector('#evens').textContent = numbers.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = numbers.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = numbers.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
let double = document.querySelector('#multiplied').textContent = numbers.map(number => number * 2);

document.querySelector('#sumOfMultiplied').textContent = double.reduce((sum, number) => sum + number);
