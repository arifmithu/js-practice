function addNumbers(a,b){
    return a+b;
}

function subtractNumbers(a,b){
    return a-b;
}
function multiplyNumbers(a,b){
    return a*b;
}
function divideNumber(a,b){
    return a/b;
}
function simpleCalculator(num1, num2, operation){
    if(operation == "add"){
        return addNumbers(num1, num2);
    }
    else if(operation == "subtract"){
        return subtractNumbers(num1, num2);
    }
    else if(operation == "multiply"){
        return multiplyNumbers(num1, num2);
    }
    else if(operation == "divide"){
        return divideNumber(num1, num2);
    }
    else return "Operation is not valid.Only 'add','subtract', 'multiply' and  'divide' operations are valid.";
}
console.log(simpleCalculator(3,2, "2"));