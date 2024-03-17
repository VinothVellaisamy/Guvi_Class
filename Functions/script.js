console.log("working");
function vinoMyName() {
    console.log("My Name is Vino");
    console.log("execution done------");
}

vinoMyName();
vinoMyName();
vinoMyName();
vinoMyName();
vinoMyName();

console.log("Program done");

function addTwoNumbers(num1, num2) {
    const value = num1 + num2;
    console.log(value);
}

addTwoNumbers(5, 10);
addTwoNumbers(25, 30);

let anon_func = function (param){
    console.log("I'm anonymous functions", param);
}

anon_func('new param');

let arrow_func = (a, b) => a + b;
console.log("function value", arrow_func(30, 10));

(function callMe(name){
    console.log("I'm called", name);
})("immediate");