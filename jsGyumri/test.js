
// let array = [2,3,4,1,10,9,7,5,6];
// let array1 = [2,3,4,8,10,9,7,5,6,1];
// let sum = 0;
// let allSum = 0;
// let missingNumber = 0;

// function count(array1){
//    for(let i = 0; i < array1.length;i+=1){
//        allSum = allSum + array1[i]; 
//    }
//     return allSum ;  
// }

// count(array1);


// for(let i = 0; i < array.length;i++){
//     sum = sum + array[i];
//     missingNumber = allSum - sum ;
    
// }

// console.log(missingNumber);

 // version of internet 


// let arr = [2,3,1,4,8,6,5,9,10];
// let i = 1;

// while(arr.indexOf(i) !== -1) {
//   i++;
// }

// console.log(i);

// let array = [2,3,4,1,10,9,7,5,6];
//  let sum = 0;
//  let count = 10;


// for(let i = 0; i < array.length;i++){
//      count = i+1+count;
//         sum += array[i];
    
//  }

// console.log(count- sum);


// let array = [2,3,4,1,10,9,7,5,6];
// let sum = 0;
// let count = 0;


//  for(let i = 0; i < array.length;i++){
//      count = i+count
//         sum += array[i]
//         if(i >= array.length-2){
//         count += i+2;
//        }
    
//  }

//  console.log(count- sum);


// First exercises
// let lines = 7;
// let str = " ";
// let star = "*";
// for(let i = 0; i < lines; i++){
//     str += star;
//     console.log(str);
// }
// Second exercises
// for(let i = 1;i <= 100;i++){
//     if(i % 3 === 0){
//         console.log("Fizz")
//     }
//     else if(i % 5 === 0){
//         console.log("Buzz")
//     }
//     else{
//         console.log(i);
//     }
// }

// for(let i = 1;i<=100;i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz");
//     }
//     else{
//         console.log(i);
//     }
// }

// function min(a,b){
//    if(a > b) {
//        console.log(a);
//    } else if(b>a){
//        console.log(b);
//    }    
//    else{
//        console.log("ERKU TVERY HAVASAREN")
//    }
// }
// console.log(min(10,10));

// let arr = [10,20,30,49,50];
// let sum = 0;
// for(let i of arr.length){
//       if(i > arr[0] + 1){
//           i = sum;
//           console.log("amenamec tivy" + sum);
//       }
//       else if ([i] < arr[0]+1){
//           i++;
//       }
//       else{
//           console.log("this is equal numbers");
//       }
// }


// let list = [34, 1, 529, -78, 89.7, 1243, 2000, 300000]; 
// function maxElement (list){
//     let max;
//     let min = list[0];
//     for(let i = 0; i < list.length; i++){
//         if((list[i]) < min){
//             min = list[i]; 
//         } else {
//             max = list[i];
//         }
//     }
//     return max;
// }

// console.log(maxElement(list))


                             /// Prototypes 
// let mercedesA ={
//     color:"black",
//     inside:"true",
//     outside:"false",
//      driveCar(){
//         console.log("Good driver");
//     }
// }                             

// let mercedesS = {
//     color:"black",
//     __proto__ : mercedesA,
// }

// // mercedesS.__proto__ = mercedesA;
// console.log(mercedesS.driveCar());

// __proto equal === only Null or Object


// let houseFirst ={
//     place:"100",
//     window:"two",
//     openDoor(){
//         console.log("open the door");
//     }
// }

// let houseSecond = {
//     place:"140",
//     window:"four",
// }


// houseSecond.openDoor = function(){
//     console.log("open the window");
// }

// houseSecond.__proto__ = houseFirst;
// console.log(houseSecond.openDoor());



// let animal = {  //// ?????
//   walk() {
//     if (!this.isSleeping) {
//       console.log(`I walk`);
//     }
//   },
//   sleep() {
//     this.isSleeping = true;
//   }
// };

// let rabbit = {
//   name: "White Rabbit",
//   __proto__: animal
// };

// // модифицирует rabbit.isSleeping
// rabbit.walk();

// console.log(rabbit.isSleeping); // true


// let houseFirst ={
//         place:"100",
//         window:"two",
//         openDoor(){
//             console.log("open the door");
//         }
//     }
   
//     let houseSecond = {
//         place:"140",
//         window:"four",
//         __proto__:houseFirst,
//     }

// console.log(Object.keys(houseSecond));
// for( let user in houseSecond)console.log(user);


                           // Getter (get) and Setter ( Set)
// let user = {
//     name:"Sergey",
//     age:20,
                        
// get fullInfo(){
//      return ` name ${this.name} age ${this.age}`;
//  }
// }
// console.log(user.fullInfo);


