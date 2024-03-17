console.log("working good");
//Medthods in Array
const arr = [1, 23, 54, 6, 7, 9, 32];
console.log("----push medthod------");

arr.push(59);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(59);
console.log(arr);

arr.shift();
console.log(arr);

console.log("org arr", arr);
const newArr = arr.slice(0,4);