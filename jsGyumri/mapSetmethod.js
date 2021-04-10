/*
let prices = new Map([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);
  
  for(let y of prices.keys()){
      console.log(y);
  }

  let fruits = new Map([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);
  
  for(let x of fruits.values()){
      console.log(x);
  }

  let map = new Map([
    ['1',  'str1'],
    [1,    'num1'],
    [true, 'bool1']
  ]);
  
console.log( map.get(true));

let obj = {
    name: "John",
    age: 30
  };
  
  let map = new Map(Object.entries(obj));
  console.log(map.get(age));



  let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);

  console.log(prices.orange)

let john = { name: "John" };

let array = [ john ];

john = null;

console.log(john.name);
console.log(array[0]);


let john = { name: "John" };

let map = new Map();

john = null;

console.log(map.set(john))


let weakMap = new WeakMap();

let obj = {};

console.log(weakMap.set(obj, "ok"));


let user = {
    surname:"Smith",
    age:20,
}

for(let y  of Object.keys(user)){
    console.log(y);
}

let arr = ["Sergey", "Khachatryan"];
let[name,surname]= arr;
console.log(surname);


let [name1,name2,...name3] = ["sergey","Khachatryan","asdafs","dasmfjlkasfjk"];
console.log(name3[1]);

let now = new Date();
console.log(now);


let date = new Date("2017-01-26");
console.log(date);

console.log(new Date(2021,3,3,19,12,));

let time = new Date();
console.log(time.getFullYear());


let date = new Date(2016, 1, 28);
console.log(date.getDate() + 2);
*/


