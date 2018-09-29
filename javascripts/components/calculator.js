import{printToDom} from '../helpers/utli.js';
import{add, divide, multiply, subtract} from '../helpers/maths.js';


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

export{calculate}