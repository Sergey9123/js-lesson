/* 
let x = "Hello World My name is Sergey Khachatryan";

let y = x.split("l");
console.log(y);
*/
/*
let arr = [1,2,3,4,5,6,7];
let deleteTwoNumbers = arr.splice(0,3,23,12);
console.log(arr);

let arr1 = [1,2,3,4,5,6,7];
arr1.splice(1,0,44,23);
console.log(arr1);

let arr2 = [1,2,3,4,5,6,7];
arr2.splice(-1,0,44,23);
console.log(arr2);

let arr3 = [1,2,3,4,5,6,7];
console.log(arr3.slice(0,5));

let arr4 = [1,2,3,4,5,6,7];
console.log(arr4.slice(-3));

let arr5 = [1,2,3,4];
console.log(arr5.concat([5,6,7,8,9]));

let arr6 = ["Karen","Sergey"].forEach;
console.log(arr6);

let arr7 = [1,2,3,8,9,19,0];
console.log(arr7.indexOf(0));//indxOf show me 0 where index of 0 === 6 index // start untill end
console.log(arr7.lastIndexOf(8));// end untill start 
console.log(arr7.includes(19));// includes show 19 true or false 

let users = [
   {id:4 ,name:"Sergey"},
   {id:5, name:"Vasil"},
   {id:6,name:"Karlos"}
];
let user = users.find(item=>item.id == 4);
console.log(user.name);
/*
let users = [
  {id:4 ,name:"Sergey"},
  {id:5, name:"Vasil"},
  {id:6,name:"Karlos"},
  {id:7 ,name:"Sergey1"},
  {id:8, name:"Vasil2"},
  {id:9,name:"Karlos3"}
];

let user = users.filter(item => item.id<8);
console.log(user.length);

let members = ["Artyom","Ani","Vlad"].map(item => item.length);
console.log(members);//map words write words Artyom = 6 letter

let members1 = ["Artyom","Ani","Vlad"];
 members1.sort(); 
 console.log(members1);

 function compareNumeric(a, b) { 
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [ 1, 2, 15 ];

arr.sort(compareNumeric);
console.log(arr);

let members1 = ["Artyom","Ani","Vlad"];
console.log(members1.reverse());

let arr1 = [ 1, 2, 15,10,12 ];
let result = arr1.reduce((sum,numbers)=> sum + numbers,0) ;
console.log(result);

splice(pos, deleteCount, ...items) – начиная с индекса pos, удаляет deleteCount элементов и вставляет items.
slice(start, end) – создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).
concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.
Для поиска среди элементов:

indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
findIndex похож на find, но возвращает индекс вместо значения.
Для перебора элементов:

forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.
Для преобразования массива:

map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
sort(func) – сортирует массив «на месте», а потом возвращает его.
reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
split/join – преобразует строку в массив и обратно.
reduce(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента
 и передавая промежуточный результат между вызовами.
Дополнительно:

Array.isArray(arr) проверяет, является ли arr массивом.
Обратите внимание, что методы sort, reverse и splice изменяют исходный массив.

*/
/*
let members = [
  {name:"Sergey"},
  {age: 21},
  {surname:"Khachatryan"}
];

let getAnswer = members.find(item => item.age);
console.log(getAnswer.age);


let array = [1,2,3,4,5,6,7];
let getAnswer = array.findIndex(item => item == 7);
console.log(getAnswer);


let array = [1,2,3,4,5,6,7];
let getAnswer = array.forEach(item =>console.log(item));


let array = ["Karen","Sergey","Artur"];
let names = ["Karen","Sergey","Artur"].map(element =>element.length);
console.log(names);
console.log(array);


let array = [2,5,1,8,9,21];

let sortOfnumbers = array;
 sortOfnumbers.sort();
 console.log(array);
console.log(sortOfnumbers);


let array = [2,5,1,8,9,21];
console.log(array.reverse());


let array = "My best wishes";
console.log(array.split());

let array = ["My best wishes"];
console.log(array.join());


let array = [2,5,1,8,9,21];
let reducer = (num1,num2) => num1 + num2
console.log(array.reduce(reducer,1));//  num1+num2 = 46  + 1 
*/
console.log(Array.isArray({ age:12}));
console.log(Array.isArray([1,2,3]));

