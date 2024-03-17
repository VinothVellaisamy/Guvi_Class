var a = 15;
var a = 25;
console.log(a);

let b = 13;
b = 15;

console.log(b);

const c = 30;
console.log(c);

const col_arr = ["mango", 5, "chocolate", "milk"];
console.log(col_arr);
console.log(...col_arr);

const batch1 = ["sanjay", "ragul"];
const batch2 = ["keni", "raja"];
const batch3 = ["prashal", "subash"];
const allStudents = [... batch1, ...batch2, ...batch3];

console.log(allStudents);

function getAllData (data1, data2, ...all){
    console.log(data1);
    console.log(data2);
    console.log("remeining all", all);
} 

getAllData ("san", "sam", "pras", "raj", "sub");