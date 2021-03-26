'use strict';
 //Popoxakanner 3 dzev 
/*let x = 4;
var y = 5;
const z = 8;
console.log("Popoxakan"+ x,y,z);
console.log(typeof(x));
*/

// Popoxakannerov gorcoxutyunner
/*let num1 = 5;
let num2 = 8;
console.log(num1/num2);
let str_1="10";
let str_2="10";
console.log(str_1+str_2);//ete tiva stringi mej grac kpcnuma irar
console.log(Math.min(4,7,-6.5));
console.log(Math.min(-8,2,1,0,9,-10));
console.log(Math.sin());
*/

// If and Else
/*let num = 5;
if(num === 5){
    console.log(true);
} else {
    console.log(false);
}
*/
// kam nshany ||; && ev nsahny
/*
let num1 = 6;
let num3 = 7
if(num1 === 5 && num3 === 7 ){
    console.log(true);
} else if(num1 <= 5  ){
    console.log("poqr");
} 
else {
    console.log(false);
}
*/

//Switch and case
/*let num = 5;
switch(num){
   case 5:console.log(num);
    break;  
    default:console.log("Else nman bana");
}
*/

//Masivner
/* Mi toxanoc
let arr =[true,5,5.4,"text"];
console.log(arr[1]);
console.log(arr.length);
*/
 // Mi qani toxerov iranc mejel eli masiv
/*
let arr1 =[[5,9,10],[2,4,7],[1,9,8]];
console.log(arr1[1][0]);
*/

// Cikler While for
/*
for( let i=5;i<=20;i++){
    console.log(i);
}*/

/*
let x = 200;
while(x<=1000){
    console.log(x);
    x+=100; 
} */

// Harcnel
/*
for(let i = 5;i<20;i+=2){
    if(i>10){
     break;
    };
    console.log(i);
} 
*/
// Confirm prompt
/* const myNameIs = prompt("What is your name");
console.log(myNameIs);*/

/*   
const isYouWomen =confirm("Is you women?");
console.log(isYouWomen);
*/
/*
let thisIsString = confirm("123");
thisIsString = Number("123");
console.log(thisIsString);
*/
/*
let a =10;
let b = 5;
console.log(10 % 5 );
console.log(10 ** 5 );
console.log(2+10 +"1");//Gumaruma irar heto darznuma tox 121 
console.log("4"/"2"); //erku toxic stacvuma tiv 2
console.log(+true); // + nshany Number bari karj dzevna darznuma tiv barery 1
 */
/*
let world = "2";
let star = "1";
console.log(+world + +star);
//console.log("2">1);// hamamtutyunneri jamanak sring darnuma number
  */ 

/* Qnnarkel
let b = 0b1111;
console.log(b);
let o =0o12;
console.log(o);
*/

//console.log(undefined || 0 || null || true && "0" && " " && 5 || 9);
  //This is Operator ??
/*let firstName = null;
let lastName = "Vahag";
let snapChat;
console.log( snapChat??firstName??lastName??"Error");
*/
/*
let lastName = "Vahag";
let snapChat = "";
console.log( snapChat??firstName??lastName??"Error");

/*
  This is diference with ?? and ||
let firstName = null;
let lastName = "Vahag";
let snapChat;
console.log( snapChat||firstName||lastName||"Error");
*/

//Question
/*
for(let i = 0 ; i > 100;){
    prompt;
   if(i>100){
       alert("Okay");
   } else if(i<100){
        prompt("Mutqagreq 100 mec tiv");
   }
}

let num;
do {
  num = prompt("Введите число, большее 100?");
} while (num <= 100 && num);
*/


/* Switch Case 
let x = 5;
switch(x){
    case 4:
     console.log("many");
     break;
     case 4:
      console.log("okey");
      break;
      default:
        console.log("error");        
}


let arg = prompt("Введите число?");
switch (arg) {
  case '0':
  case '1':
    alert( 'Один или ноль' );
    break;

  case '2':
    alert( 'Два' );
    break;

  case 3:
    alert( 'Никогда не выполнится!' );
    break;
  default:
    alert( 'Неизвестное значение' );
    */

//Function 
/*
let user = "Sergey" ;
function lookMessage(){
    let user1 = "Hello " + user;
    console.log(user1) ;
}
lookMessage();
*/

/*
for(let i = 0;i<=100;i++){
  if(i % 2 == 0) continue; {
  }
  console.log(i);
}
/*
// 2 variant
for(let i = 0;i<=100;i+=2){
  console.log(i);
}
*/
/*
let arr = [];
for(let i = 0;i<=10;i++){
   arr.push(i); 
  } 
  console.log(arr);
*/
/*
let x = prompt("What is official name of Javascript? ");
if(x === "ecmascript"){
  alert("Very Well");
}else{
  alert("Did you know ecmascript");
}
*/
/*
let num = prompt("Writte your age");
if(num>0){
  alert (1);
}
alert(-1)
else if (num<0){
}
else{
  alert(0);
}*/
/*
let age = prompt("write your age ");
if(age>=14 && age <=90){
   alert("Okay");
}else{
  alert("sorry");
}
*/  
 
/*  
 let age = prompt();

if ( (age >= 14 && age <= 90)){
  alert("sorry");
}
 else  if ( age < 14  ||  age > 90 ){
    alert("okay");
 } 

 */
/*
let x = prompt("Write your login");
if(x === "Admin"  ){
  let y =  prompt("Password");

 if( y === "I am boss"){
   alert("hello boss");
 }else if (y === "" || y === null ) {
   alert("cancel");
}
else{
  alert("password incorect");
}
}else if(x === "" || x === null){
  alert("cancel");
} else{
  alert("I dont know you");
}
*/

//Question
/*
let i = prompt("Write number which is big 100");


if(i < 100 && i !== null){ 
  while(i <= 100 ){
    i = prompt("Error write again") ;
   if(i>100){
     alert("okay");
   } 
  }
}
else if(i > 100){
  console.log("okay");    
}
*/

// version 1 Meruj
/*
let i = prompt("Write number which is big 100");
if (i > 100) {
  alert ("okay"); 
}

if (i < 100 && i !== null) {
  while (i<100) {
      i = prompt("wrong");
      if (i>100) {
          alert("okay");
      }
  }
}
*/

// this [] is undefined and string dont read Mth.max 
// Math.min() this is right
/*
let arr  =  Math.max[ "Sona " + 1,10,19,28,37,46];
let arr1 =  Math.min(2,11,20,29,38,47);
console.log(arr);
console.log(arr1);
*/
/*
var arr = [];
for (var i = 0; i < 10; i++) {
	arr.push( Math.random().toFixed(2));
}
console.log(arr);
 
// Random number 
var arr = [];
for (var i = 0; i < 10; i++) {
	arr.push( Math.floor(Math.random()*10));
}
console.log(arr);
*/
/*
let x = 1;
let arr = [x];
for(x = 1 ; x <= 46; x+=9){
arr.push("Sona" + x );
}
console.log(arr);
*/
// Random number cod is Math.floor(Math.random()* 40) 
//console.log(Math.floor(Math.random()* 40));


/*
// computer version
var arr = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (var i = 0; i < arr.length; i++) {
	if(arr[i] > 0 && arr[i] < 10) {
		console.log(arr[i]);
	}
}
*/

/*
function getCapital (country,nation){
  console.log(country + " " + nation);
}
capital("Armenia","from"); 
capital("our","country");
*/
/*
function maxNum(a,b,c,d){
   console.log(Math.min(a,b,c,d));
 }
 maxNum(1,0,-4,8);

 // computer version
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}*/
/*
function myFunction(x,n){
  console.log(Math.pow(x,n));
}
myFunction(8,2);
*/
/*

function ask(question,yes,no){
 let x = prompt("Do you like football");
 if(x === "yes") {
   yesSure();
 }
else if (x === "no"){
  noSure();
}else{
  alert("you must answer yes or no");
}
}
 function yesSure(){
  alert("Oh is very good");
} 
function noSure(){
  alert("okay");
}

ask("",yesSure,noSure);
*/
// question
 /*
let arr = [1, 2, 4, -1, -3, 8, 7, 0, 5, 18, 12];
for(let x = 0;x < arr.length; x++ ){
   if(arr[x] === 5){
       console.log("okey"); 
        
   }
}
*/
/*
let arr = [1, 2, 4, -1, -3, 8, 7, 0, 5, 18, 12];
let sum = 0; 
let count = 0;

for(let i = 0;i < arr.length;i++){
  sum = sum + arr[i] ; 
}
console.log(sum/arr.length);
*/
//let arr = [1, 2, 4, -1, -3, 8, 7, 0, 5, 18, 12];
/*
function my1(a,b){
  let sum = a-b;
  if(sum < 0){
    return -1 * sum;
  }else {
    return sum;
  }
}
console.log(my1(10,2));
*/
/*
function getAge(age){
  if(age > 25 && age < 65){
    return true;
  }else{
    return false;
  }
}

function getAge1(age){
  let count = 2;
  for(let i = 2; i <= age/2;i++){
      if(age % i === 0){
        count++;
      }
  }
  if(count = 2){
    return true;
  }else{
    return false;
  }
}
 console.log(getAge(20));
 console.log(getAge1(17));
*?

 /*  // My version
let a = ["Seroj","Gor","Eron","Aren"];
let b = 3 ;

while(b < a.length){
  console.log(a[b]);
  b--;  
if(b < 0){
  break;
 }
}
*/
/*
let x = [5,10 ,20,430,23.590,1230];
 let i = 0;
 while(i < x.length){
   console.log(x[i] * 2);
   i++;
}
*/
/*
function getNumber(start,finish){
  let sum = 0; 
    for(let i = start; i <= finish;i++){
       sum = sum + i;
      }       
     return sum; 
}
console.log(getNumber(1,10));
 */
/*
function getMult(start,finish){
  let pow = 1;
     for( let i = start;i <= finish;i++){
       if(i % 2 == 0){
           pow = pow * i;
       }
     }
    return pow;
}
console.log(getMult(1,10));
*/
// Version 1 
/*
let getUserOld = prompt("How old are you?");
if(getUserOld < 10){
  console.log('hi');
}else if(getUserOld >= 10 && getUserOld < 18){
  console.log('hello');
}else{
  console.log('greetings');
}
*/
/* version 2 function
 function getUserOld(startAge) {
  if(startAge < 10){
    console.log('hi');
  }else if(startAge >= 10 && startAge < 18){
    console.log('hello');
  }else{
    console.log('greetings');
  }
}
  getUserOld(10);
*/
/*
function computeTriangleArea(high,basis){
    let s = 0;
    s = high * basis / 2 ;
    console.log(s); 
}
computeTriangleArea(4,5);
*/
/*
let arr = [1,2,3,4];
function reverse(){
   let i = 3;
   while(i < arr.length){
     console.log(arr[i])
     i--;   
   if(i < 0 ){
     break;
   }
 }
}
reverse();
*/
/*
let arr = [4, 3, 6, 10, 2];
function average(arr){
  let sum = 0;
  for(let i = 0; i < arr.length;i++){
    sum = sum + arr[i];
  }
  console.log(sum/arr.length);
}
average(arr = [4, 3, 6, 10, 2]);
*/
/*
function rgb(a,b,c){
    if(a,b,c === undefined){
      console.log("RGB is " + 0,0,0);
    } else {
      console.log( "RGB is " + a,b,c);
    }
}
rgb(100,120,200);
*/
/*
let arr = [4,6,6,7,10,20];
function avg(num){
  let sum = 0;
  for(let i = 0;i < num.length;i++){
      sum = sum + arr[i];
  }
  console.log(sum/num.length);
}
avg(arr);
*/
// functional Literal
/*
let o = function(a,b){
    console.log(a * b);
}
 o(5,6);
*/
/*
function add(num){
  console.log (num + sum(20,30));
}
add(10);

function sum(a,b){
   return ( a + b);
}
sum(20,30);
*/
/*
 let city1 = {
   name : "Yerevan",
   population: "10 Milion" 
 }
console.log(city1.name);
*/
// shift and unshift
// 1 avelacnel masivi skzbic inch vor arjeq
// 2 grl kod vori ognutyamb function kancheluc arjeqy nsheluc orinak 100 cuyc ta te masivi mej 100 vor inexume gtnvum 
/*
unshift - Ինչպես զանգվածի սկզբում ավելացնել արժեք

    let a = [2, 13, 20];
    a.unshift(10); // aը այժմ ունի [10, 2, 13, 20];

shift - Ինչպես կարդալ և հանել զանգվածի առաջին արժեքը

    let a = [2, 13, 20];
    a.shift(); // aը այժմ ունի [13, 20];

push - Ինչպես զանգվածի վերջում ավելացնել արժեք

    let a = [2, 13, 20];
    a.push(10); // aը այժմ ունի [2, 13, 20, 10];


pop - Ինչպես կարդալ և հանել զանգվածի վերջին արժեքը

    let a = [2, 13, 20];
    a.pop(); // aը այժմ ունի [2, 13];

concat - Ինչպես միավորել երկու զանգված միասին և ստանալ նոր զանգված

    let a = [2, 13, 20];
    let b = [7, 9];
    let z = a.concat(b); // zն այժմ ունի [2, 13, 20, 7, 9];

findIndex - Ինչպես գտնել զանգվածի արժեքի ինդեքսը

    let a = [2, 13, 20];
    let b = a.findIndex(function(val) { // bն այժմ ունի 1
        return val === 13;
    });

find - Ինչպես գտնել արժեք զանգվածում

    let a = [{name: "Joe", age: 10}, {name: "Mike", age: 30}, {name: "Jill", age: 24}];
    let b = a.find(function(val) {  // bն այժմ ունի {name: "Mike", age: 30}
        return val.age === 24;
    });
*/
/*
let city1 = {
  name:"Moscow",
  population: 10e6,
}
console.log(city1);

 let fullCities = {
    city1 :{
    name:"Yerevan",
    name1:"Gyumri",
 },
   city2:{
        name2:"Ashtarak",
   }
  }
  delete fullCities.city2.name2;
console.log(fullCities.city2.name2);
*/
// version 1
/*
let a = 4;
let b = 5;
let c = b; // 5
 b = a ; // 4
 a = c ;
console.log(a,b);
 version 2
let a = 4;
let b = 5;
 a = b - a;// 1
 b = b - a;//4
 a = b + a ; //5
console.log(a,b);

// object
let user = {
  name:"John",
  surname:"Smith",
}
user.name = "Pet";
delete user.name ;
console.log(user.name);
*/
/*
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;
 for(let key in salaries){
  sum = sum + salaries[key];
 }
console.log("salary of workers "+ sum)
*/
/* Question 1
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj){
   for(let key in obj){
     if(typeof obj[key] =="number"){
      obj[key] *= 2;
     }
   }
} 
console.log(multiplyNumeric(menu));
*/
/* 
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
*/
/* 
let obj = {
  "0":1,
   0:2,
}; // vercnuma string 0 ev numberi mej erkusic meky u numbery u 2 gumaruma 2 
console.log(obj["0"] + obj[0]);
*/
/* Math.floor(3.6 === 3),Math.ceil(3.1=== 4).Math.trunc(3.2===delete 2 (3)).Math.round,
toFixed(2),isFinite(stuguma tiva te che),isNaN,Math.random(return random number),
Math.max and min (return max and min),Math.pow(2*10)
let i = 3.5;
console.log(Math.round(i));
 1e6 === 1 000 000,1e-6 === 0.00006 
//let a = 4; Object.is()-method === 
//let b = 5;
//console.log(Object.is(a,b));
let a = "100px";
let b = "s200px";
let z = "12.4";
console.log(parseFloat(z)); read only 12.4 numbers in string
console.log(parseInt(a)); read only numbers in string
console.log(parseInt(b));
*/
/*
let getNumber;
function  mySummer(getNumber){
  let sum = 0;
  let i = 0;
  while(i<2){
    getNumber = +prompt("Write number");
    sum = sum + getNumber;
    i++;
  }
 console.log( "Your summer is " + sum);
}
mySummer();

let getNumber;
function readNumber(getNumber){
 getNumber =+prompt("write number");
  while(true){
   getNumber === Number;
    console.log(getNumber);
    break;
   }
   if(getNumber === "" || getNumber === null){}
  }

readNumber(getNumber);
*/ //  toLowerCase (Poqratar); toUpperCase(Mecatar);
//let str = "Sergio Ramos";
//console.log(str.slice(0,3));

// i++ ; (i+=1) write this version
//let z ="Zagreb";// How to get codPoint z = 90;
//console.log("Zagreb".codePointAt(4));
//console.log(String.fromCodePoint(230));// help string point get cod 
/*
function ucFirst(name){  
  return name[0].toUpperCase() + name.slice(1);

}
console.log(ucFirst("vasya"));
*/
/*
let arr = [1,2,3,4];
arr.shift(); // delete first number
arr.unshift(5);// unshift in firts place
arr.push(6);// push end number pop and push ashxatumen arag
arr.pop();//delete end number
console.log(arr);
*/
/*
let num = [1,2,3,4];
for (let num1 of num){
  console.log(num1);
} // for of //this is a cicle for array === for(let i;i<num.length;i+=1)
*/ 
/*
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[(styles.length - 1) / 2] = "Классика";
console.log(styles);
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
*/
/*
let names = "Sergey,Ani,Viktoria";
let arr = names.split(', ');
for(let name of arr){
  console.log(name);
}

let arr1 = [ 1, 2, 15,10,12 ];
let result = arr1.reduce((sum,numbers)=> sum + numbers,0) ;
console.log(result);
*/
/*
console.log(Array.isArray([]));
console.log(Array.isArray({}));

push (...items) – добавляет элементы в конец,
pop() – извлекает элемент с конца,
shift() – извлекает элемент с начала,
unshift(...items) – добавляет элементы в начало.
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
let arr = [ 10, 2, 15 ];

arr.sort(function(a,b){return a-b});
console.log(arr);
*/

/* 1

function bigNum(a,b,c){
  if(a > b && a > c){
    console.log("amenamec tivy " + a);
  } else if (b > a && b > c){
    console.log("amenamec tivy " + b);
  }else{
    console.log( "amenamec tivy " + c);
  }
}
bigNum(20,12,10);
console.log(Math.max(12,22,14));
*/
/*

function num(a,b,c){
  console.log(num.length);
Num(12,5,9);

function Num(a,b,c){ // 4
  for(let i = 0; i < Num.length;i+=1){
    if(i % 2 == 0){
      console.log(true);
    }else{
      console.log(false);
    }
  }
}
Num(12,21,8);
*/
/*
let a;
let b;
let c;
 
function getSum(a,b,c){
  let sum = 0;
   for(let i = 0;i<getSum.length;i+=1){
  if( i % 2 === 0){
   sum = sum + i;
  }
}
 console.log(sum);
}
getSum(4,12,7);
*/
/*
let people = [
  {name : "Sergey",
   age: 25,
   },
   {
     name:"Karen",
     age:45,
   }
];

let user = people.map(function(val,i){
       return val.name;
});

let age1 = people.map(function(agePeople,i){
   return agePeople.age;
});
console.log(age1);
console.log(people);
console.log(user);
*/
/*
let a = 14;
let b = 7;

if(a / 1 && a / a && a % b !== 0){
   console.log(true);
 }else{
   console.log(false);
 }
*/
/*
let x = [7,19,22];

let unshift = function(arr, val){
  let i = arr.length-1;
  while(i>=0){
    arr[i+1] = arr[i];
    i-=1;
  }
 x[0] = val;
};
unshift(x,10);
console.log(x);
*/
/*
let x = [7,19,22,10,12];

let findIndex = function(arr,fun){
 let i = 0;
  while(i < arr.length){
    if(fun(arr[i])){
      return i;
    }
    else{
      return -1;
    }
    i+=1;
 }
}

console.log(findIndex(x,function(val){
  return val === 100;
}));
*/
/*
let str ="The four major categories of B2B product purchasers are";
 function chnageA(text){
   for(let i = 0;i<text.length;i+=1){
      if(text([i])  === "a"){
         return "*";
        }
   }
}
chnageA(str);
console.log(str);
*/
/*
function palindrom(name){
  name = name.toLowerCase();   
    if(name === ){
     
 }
}
palindrom(Anna);
*/
//let x = 2 ;// vercnuma 2 frcnum darcnuma -2(+1) === -3
//console.log(~x);


