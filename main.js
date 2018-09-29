
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
  };

//how do I tell this function to do this 4*2- mathType is the word multiply

const multiply = (n1, n2) => {
    return n1 * n2;
};// this is a seperate multiply function
const calculate = (num1,num2,mathType) =>{
    
    let answer =0;

    switch(mathType){
    case 'multiply':
    answer = multiply (num1,num2); //this is going to figure out which function to call
    break;
    case 'divide':
    answer = divide(num1,num2);
    break;
    case 'add':
    answer = add(num1,num2);
    break;
    case 'subtract':
    answer = subtract (num1,num2);
    break;
    default:
    answer = 'nope';
}

printToDom (answer,'result');
}

(calculate(4, 2, 'multiply'));
//how do I tell this function to do this 4*2- mathType is the word multiply

//Need to print to DOM the div ID for result in HTML
