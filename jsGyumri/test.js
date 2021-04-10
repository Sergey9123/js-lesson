
// function sumTo(n){
//     let sum = 0;
//   if(n == 1){
//       return 1;
//  }else{
//      sum =  n + sumTo(n-1);
//  }
//   return sum;
// }
// console.log(sumTo(10));

// function sumTo(n){
//     let sum = 0;
//  for(let i = 1;i <= n;i+=1){
//    sum = sum + i;
//  }
//  return sum;
// }
// console.log(sumTo(100));

// function factorial(n){
//     let sum = 0;
//     if(n == 1){
//         return 1 ;
//     }else{
//        sum = n * factorial(n-1); 
//     }
//     return sum;
// }
// console.log(factorial(5));

// function fib(n) {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
//   }
// console.log(fib(5));

// function fib(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//       let c = a + b;// 2+3
//       a = b;//2
//       b = c; // 3
//     }
//     return b;
//   }
  
//  console.log( fib(5));

// function sumAll(...args) { 
//     let sum = 0;
//     for (let arg of args) {
//         sum = sum + arg;
//     }
  
//     return sum;
//   }
  
//   console.log(sumAll(1,2,3,4,6));

// function randomName(){
//   console.log(arguments[0])
// }
 
// console.log(randomName("Sergey","Karen",))

// let arr1 = [1,2,3,6,8,0,12,56];
// let arr2 = [4,12,33,45];

// console.log(Math.max(...arr1,...arr2,));

// let arr1 = [1,2,3,6,8,0,12,56];
//  let arr2 = [4,12,33,45];

//  let array = [...arr1,...arr2]
// console.log(array);

// let str = "Sergey";

// for(let x of str){
//      console.log(x);
// }

//let str = "Sergey";
//console.log([...str]);

//let str = "Hello";
//console.log( Array.from(str) );
//Если ... располагается в конце списка аргументов функции, то это «остаточные параметры». Он собирает остальные неуказанные аргументы и делает из них массив.
//Если ... встретился в вызове функции или где-либо ещё, то это «оператор расширения». Он извлекает элементы из массива.

// (function  (){
//   console.log("hi");
// })();

// !function(){
//     console.log("hi");
// }();

// var str = "Sergey";
// console.log(window.str);


// let namesJson = {
//     name: "Mike",
//     age: 30,
//     anyObject:{
//         name:"Carol",
//         age: 23,
//     }
// }
// console.log(JSON.stringify(namesJson,undefined,2));

// function sum(x){
//    return function(y){
//      return x + y ;
//  }    
// }

// let count = sum(20);
// console.log(count(10));

// let person1 = ["Sergey","Karen","Armine"];
// let person2 = ["Julia","Sergey"];

// function userName(onePerson){
//     return function(secondPerson){
//      console.log(onePerson +" "+ secondPerson);
//     }
// }
// let sum = userName(person1);
// sum(person2);
// console.log("111"[3]);
// console.log("111"[2]);

// let a = new Array(1,2);
// let b = new Array(3);
// console.log(a[0] + b [0]);
