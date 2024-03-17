// Task3

let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };
let flag = true;

if (Object.keys(obj1).length == Object.keys(obj2).length) {
    for (key in obj1) {
      if (obj1[key] == obj2[key]) {
        continue;
      } else {
        flag = false;
        break;
      }
    }
  } else {
    flag = false;
  }
  console.log("Are the two JSON objects identical? " + flag);

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = () => {
  console.log(xhr);
  console.log(xhr.status);

  let data = JSON.parse(xhr.response);
  console.log(data[0].flag);
//   data.forEach(element => {
//     console.log(element.flag);
//   });
for(let i=0; i<data.length; i++) {
    console.log(data[i].flag)
}
console.log(data[0])
data.forEach(element => {
    console.log(element.name.common,element.region,element.subregion,element.population)
});

};

