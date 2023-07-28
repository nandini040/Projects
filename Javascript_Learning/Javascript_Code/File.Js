
//Learning Javascript is fun
console.log("Hello world");

// To declare a variable
 var First_Name = "Nandini";

//To use a variable
console.log(First_Name);

// To change the value of variable
First_Name = "Subhangini";

//To use a variable
console.log(First_Name);

// var Name ="komal";
// var Name ="Runu";
// console.log(Name);

// let Name_new="Komal";
// Name_new="Kirti";
// console.log(Name_new); 

// let Name="    Nandini    ";
// console.log(Name.length);
// //Name.trim(); //if we write this then the value of name will not be trimed to trim the value we will do as follow
// Name= Name.trim();
// console.log(Name.length);

// let Name="Nandini";
// Name= Name.slice(0,4);
// console.log(Name);

// let age=7;
// let Name="nandini";
// console.log(typeof age);
// console.log(typeof "nandini");
// age=age+"";
// console.log(typeof age);
// let my_Name="45";
// console.log(typeof my_Name);
// my_Name=+"45";
// console.log(typeof my_Name);

// let str1="Nandini";
// let str2="Chaudhary";
// let full_Name=str1 + " " + str2;
// console.log(full_Name);

// let age=22;
// let Name="Nandini";

// // let about_Me="My name is " + Name + " and my age is " + age;
// // console.log(about_Me);
// let about_Me=`My name is ${Name} and my age is ${age}`;
// console.log(about_Me);


// let first_Name;
// console.log(typeof first_Name);
// first_Name="Nandini";
// console.log(typeof first_Name , first_Name);

// let Variable=null;
// console.log(Variable);
// Variable="Nandini";
// console.log(Variable , typeof Variable);
// console.log(typeof null);//It is a bug , error in javascript

// let Num= BigInt(12);
//     //or
// let Num_ber= 12n; 
// console.log(typeof Num);
// console.log(typeof Num_ber);

// let age=20;
// let drink=(age>=5?"coffee":"milk");
// console.log(drink);

// let num=4;
// let userGuess= +prompt("Guess a number");
// if(userGuess===num){
//    console.log("your guess is right");
// }
// else{
//    if(userGuess<num)
//     {
//       console.log("Too low!!!");
//     }
// else{
//    console.log("Too high!!!");
//     }
// }


// let Temperature=50;

// if(Temperature<0){
//     console.log("Extremly cold outside");
// }
// else if(Temperature<16){
//     console.log("Its cold outside");
// }
// else if(Temperature<25){
//     console.log("Weather is okay");
// }
// else if(Temperature<35){
//     console.log("It's hot outside");
// }
// else if(Temperature<45){
//     console.log("Its Extremely hot outside");
// }
// else{
//     console.log("Turn on Ac otherwise you will die");
// }

// let day = 0;

// switch(day){
//    case 0: {
//       console.log("Sunday");
//       break;
//    }
//    case 1: {
//       console.log("Monday");
//       break;
//    }
//    case 2: {
//       console.log("Tuesday");
//       break;
//    }
//    case 3: {
//       console.log("Wednesday");
//       break;
//    }
//    case 4: {
//       console.log("Thrusday");
//       break;
//    }
//    case 5: {
//       console.log("Friday");
//       break;
//    }
//    case 6: {
//       console.log("Saturday");
//       break;
//    }
//    default: {
//       console.log("Please enter a valid number between 0 & 6");
//    }
// }

//sum of natural number
// let num=0;
// let sum=0;
// while(num<=10){
//   sum+=num;
//   num++;
// }
// console.log(sum);

// let num=0;
// do{
//    console.log(num);
//    num++;
// }while(num<10);

// let num=10;
// let sum=0;
// for(let i=0;i<=num;i++)
// {
//     sum+=i;
// }
// console.log(sum);

// for(let i=0;i<=10;i++)
// {
//    if(i===4)
//    {
//       break;
//    }
//    console.log(i);
// }
// console.log("you jumped out of loop becz condition inside if became true and break statement is encountered which made you jump here");

// let fruits=["orange", "apple", "Banana"];
// let number=[1, 2, 3, 4];
// let mixed=[1, 2, 3.5, null, "Nandini"];
// console.log(fruits);
// console.log(number);
// console.log(mixed);

// let fruits=["orange", "apple", "Banana"];
//   console.log(fruits);
//   console.log(Array.isArray(fruits));

// let fruits=["orange", "apple", "Banana"];
//   console.log(fruits);
//   fruits.push("mango");
//   console.log(fruits);

// let fruits=["orange", "apple", "Banana"];
// console.log(fruits);
// let poppedItem=fruits.pop();
// console.log(fruits);
// console.log(`popped item is ${poppedItem}`);

// let fruits=["orange", "apple", "Banana"];
// console.log(fruits);
// fruits.unshift("Mango");
// console.log(fruits);


// let fruits=["orange", "apple", "Banana"];
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// let name_of_variable=["orange", "apple", "Banana"];
//   console.log(name_of_variable);
//   let removedItem=name_of_variable.shift();
//   console.log(`Removed item is ${  removedItem}`);

// let array1=["item1","item2"];
// let array2=["item1","item2","item3","item4"];
// console.log(array1===array2);
// array1.push("item3");//only array1 will be modified not array 2.
// console.log(array1);
// console.log(array2);

// let array1=["item1","item2"];
// let array2=array1.slice(0).concat(["item3","item4"]);
// console.log(array1===array2);
// array1.push("item3");//only array1 will be modified not array 2.
// console.log(array1);
// console.log(array2);

// let array1=["item1","item2"];
// let array2=["item3","item4"];
// let array3=[...array1,...array2];
// console.log(array1===array2);
// console.log(array1);
// console.log(array2);
// console.log(array3);

// let arr=["Nandini","Subhangini","Kirti","Mamta"];
// let arr2=[];
// let n=arr.length;
// for(let i=0;i<length;i++){
//   arr2.push(arr[i].toUpperCase());
// }
// console.log(arr2);

// const arr1=["Nandini","Subhangini","Kirti","Mamta"];
// const arr2=[];
// let n=arr1.length;
// let i=0;
// while(i<n)
// {
//   arr2.push(arr1[i].toUpperCase());
//   i++;
// }
// console.log(arr2);

// const Names=["Nandini","Subhangini","Kirti","mamta"];
// const Names2=[];
// for(let name of Names){  
//    Names2.push(name.toUpperCase());
// }
// console.log(Names2);

// const Names1=["Nandini","subhangini","kirti"];
// const Names2=[];
// for(let index in Names1){ //here index repersent each index of array Names1
//    Names2.push(Names1[index].toUpperCase());
// }
// console.log(Names2);

//destructuring of array
// const Arr=["item1","item2"];
// let[a,b]=Arr;
// console.log("value of a is",a);
// console.log("value of b is",b);

// const person = {
//   Name:"Nandini",
//   age:22
// };
// console.log(person, typeof person);

// const person = {
//   Name:"Nandini",
//   age:22,
//   hobbies:["listning music", "Sleeping"]
// };
// console.log(person);

// const person = {
//   Name:"Nandini",
//   age:22,
//   hobbies:["listning music", "Sleeping"]
// };
// console.log(person);
// person.Gender="Female";
// console.log(person);

// const key="email";
// const person = {
//      Name:"Nandini",
//      age:22,
//      "person hobbies":["listning music", "Sleeping"]
// };
// person[key]="nandinina040@gmail.com";
// console.log(person);

// const person={
//   name:"Nandini",
//   age:22,
//   hobbies:["Listning Music", "sleeping"]
// };
// for(let key in person){
//   //console.log(person[key]);
//   console.log(`${key} : ${person[key]}`);
//   //console.log(key, ":", person[key]);
// }

// const person={
//   name:"Nandini",
//   age:22,
//   hobbies:["Listning Music", "sleeping"]
// };
// // let p=Object.keys(person);
// // console.log(typeof Object.keys(person));
// // console.log(Array.isArray(p));//to check wheather p is array or not
// for(let key of Object.keys(person)){
//   console.log(person[key]);
// }

// const key1="objkey1";
// const key2="objKey2";

// const value1="myvalue1";
// const value2="myvalue2";

// const obj={
//    [key1]:value1,
//    [key2]:value2
// };
// console.log(obj);

// const key1="objkey1";
// const key2="objKey2";

// const value1="myvalue1";
// const value2="myvalue2";

// const obj={};

// obj[key1]=value1;
// obj[key2]=value2;

// console.log(obj);

// const obj1={
//   key1:"value1",
//   key2:"value2"
// };
// const obj2={
//   key1:"value1",
//   key3:"value3",
//   key4:"value4"
// };
// const new_obj={ ...obj1, ...obj2, key5:"value5"};//both the objects have same key key1 then while spreading the new object will have key value pair of last spreaded object as in this case its obj2 which is spreaded in last so key 1 of obj 2 will be in new object
// const obj_new={..."abc"};
// const new_o={...["item1","item2"]};
// console.log(new_obj);
// console.log(obj_new);
// console.log(new_o);

// const Person={
//   Name:"Nandini",
//   age:"12"
// };

// const full_Name= Person.Name;
// const Age=Person.age;

// console.log(full_Name);
// console.log(Age);

// const person={
//   Name:"Nandini",
//   age:22
// };
// const{Name, age}=person;
// console.log(Name);
// console.log(age);

// const person={
//   Name:"Nandini",
//   age:22
// };
// const{Name: full_Name, age:Age}=person;
// console.log(full_Name);
// console.log(Age);

// const person={
//   Name:"Nandini",
//   age:22,
//   Course:"Btech",
//   Branch:"IT"
// };
// const{Name: full_Name, age:Age, ...rest_of_properties}=person;
// console.log(full_Name);
// console.log(Age);
// console.log(rest_of_properties);

// const users = [
//   {  Name:"Nandini",
//   age:22,
//   Course:"Btech",
//   Branch:"IT"},
//   {  Name:"Subhangini",
//   age:22,
//   Course:"Btech",
//   Branch:"IT"},
//   {  Name:"Mamta",
//   age:21,
//   Course:"Btech",
//   Branch:"IT"}
// ];
// for(let user of users){
//   console.log(user);
// }


// const users = [
//   {  Name:"Nandini",
//   age:22,
//   Course:"Btech",
//   Branch:"IT"},
//   {  Name:"Subhangini",
//   age:22,
//   Course:"Btech",
//   Branch:"IT"},
//   {  Name:"Mamta",
//   age:21,
//   Course:"Btech",
//   Branch:"IT"}
// ];
// for(let user of users){
//   console.log(user.Name);
// }

// const users=[
//   {Name:"Nandini", age:22, Course:"Btech", Branch:"IT"},
//   {Name:"Subhangini", age:22, Course:"Btech", Branch:"Cse"},
//   {Name:"Mamta", age:22, Course:"Btech", Branch:"IT"}
// ];

// const[user1, user2, user3]=users;
// console.log(user1);
// console.log(user2);
// console.log(user3);

// const users=[
//   {Name:"Nandini", age:22, Course:"Btech", Branch:"IT"},
//   {Name:"Subhangini", age:22, Course:"Btech", Branch:"Cse"},
//   {Name:"Mamta", age:22, Course:"Btech", Branch:"IT"}
// ];

// const[{Name: user1first_Name, age:Age}, , {Branch:user3Branch}]=users;//it will give us name of object 1 and branch of object 3
// console.log(user1first_Name, Age);
// console.log(user3Branch);


// function singHappyBirthday(){
//   console.log("Happy Birthday to you....");
// }
// singHappyBirthday();//this will cal the function


// function sumOfTwoNumbers(a1, a2){
//    console.log(a1+a2);
// }

// sumOfTwoNumbers(2,4);

// function sumOfTwoNumbers(a1, a2){
//   return a1+a2;
// }
// let value = sumOfTwoNumbers(2,4);
// console.log(value);


// function sumOfTwoNumbers(a1, a2){
//   return a1+a2;
// }
// let value1 = sumOfTwoNumbers(2,4);//(argument1, argument2)
// console.log(value1);//output will be 6
// let value2 = sumOfTwoNumbers();
// console.log(value2);//output will be NaN i.e not a number because we have not passed any argument while calling the function so a1 and a2 will be undefined as they didn't got any value and sum of two undefined number is NaN

// function isEven(num){
//   if(num%2==0){
//      return true;
//   }
//   else{
//     return false;
//   }
// }
// let even=isEven(2);
// console.log(even);


// function get_first_char(str){
//   console.log(str[0]);
// }
// get_first_char("Nandini");

// function find_target(Arr, target){
//   let n=Arr.length;
//   for(let i=0;i<n;i++)
//   {
//      if(Arr[i]===target)
//      {
//         return i;
//      }
//   }
//   return -1;
// }
// let Array=[10,20,30,40];

// let Target_index=find_target(Array,30);
// console.log(Target_index);

// const singHappyBirthday=function(){
//   console.log("Happy Birthday to you.....");
// }
// singHappyBirthday();

// const sumOfNumbers =function(a1,a2){
//   return a1+a2;
// }
// const sum=sumOfNumbers(2,4);
// console.log(sum);

// const sayHappyBirthday = () =>{
//   console.log("Happy Birthday to you....");
// }
// sayHappyBirthday();

// const sumOfNumbers= (a1,a2)=>{
//   return a1+a2;
// }
// console.log(sumOfNumbers(2,4));

// const isEven = (num) =>{
//   if(num%2===0){
//      return true;
//   }
//   else{
//      return false;
//   }
// }
// let Even= isEven(6);
// console.log(Even);


// //function call
// Hello();
// //function declarartion
// function Hello(){
//    console.log("Hello world");
// }

//function expression
// Hello();
// let Hello=function(){
//   console.log("Hello World");
// }//This code will throw an error

// //Arrow function
// Hello();
// const Hello = () =>{
//   console.log("Hello world");
// } //this code will throw error

// const app = () =>{
//   const Func = () =>{
//      console.log("You are inside my app");
//   }
//   const sum = (a1, a2) => {
//      console.log(a1+a2);
//   }
//   console.log("Inside App");
//   Func();
//   sum(2,4);
// }
// app();

// const var0="value0";
// function App(){
//    const var1="value1";
//       const func1 = function(){
//       console.log("Inside App i am a variable and my value is:-",var1);
//    }
//    const func2 = () =>{
//          const var2="value2";
//          console.log("Inside func2 i am a variable and my value is:-",var2)
//    }
//    console.log("You are inside app and i am trying to access a variable which is not in this App function but it is present outside the function App", var0);
//    func1();
//    func2();
// }
// App();


// function App(){
//   if(true){
//      var var1="value1";
//      console.log(var1);//wil not throw error becz var1 is defined with in this block
//   }
//   if(true){
//     let var2="value2";
//     //console.log(var2);//wil not throw error becz var2 is defined with in this block
//  }
//  if(true){
//   const var3="value3";
//   //console.log(var3);//wil not throw error becz var3 is defined with in this block
// }
//   console.log(var1);//wil not throw error becz var1 is defined using var and var has function scope so it can be accessed anywhere witin th function. 
//   console.log(var2);//throw an error becz var2 is defined using let and let has block scope so outside if it will throw error 
//   console.log(var3);//throw an error becz var3 is defined using Const and Const has block scope so outside if it will throw error 
//  }
// App();
// console.log(var1);//throw an error becz var1 is defined using Var and var has function scope so outside fuction App it will  throw error.

// function Sum(a1=2,a2=3){
//   console.log(a1+a2);
// } 
// Sum();

// function all(a,b,...c){
//   console.log(`a is ${a}`);
//   console.log(`b is ${b}`);
//   console.log('c is',c);
// }
// all(1,2,3,4,5,6,7,8);

// function sum_all(...numbers){
//   let sum=0;
//   for(number of numbers){
//      sum = sum+number;
//   }
//   console.log(sum);
// }
// sum_all(1,2,3,4,5,6);

// const person = {
//   Name:"Nandini",
//   age:22,
//   Gender:"Female"
// } 

// function Person_all(obj){
//      console.log(obj.Name);
//      console.log(obj.age);
// }
// Person_all(person);


// const person = {
//   Name:"Nandini",
//   age:22,
//   Gender:"Female"
// } 

// function Person_all({Name:Full_Name,age:Age}){
//      console.log(Full_Name);
//      console.log(Age);
// }
// Person_all(person);


// function func2(name){
//   console.log("you are inside func2");
//   console.log(`your name is ${name}`);
// }

// function func1(callBack){
//   console.log("Hello there i am a function and i can call another function as follow");
//   callBack("Nandini");
// }

// func1(func2);


// function myfunc(){
//   function Hello(){
//      return "Hello world";
//   }
//   return Hello;
// }

// const result=myfunc();
// console.log(result());

// const numbers=[4,2,5,8];

// function get_number(number, index){
//    console.log("index is",index);
//    console.log(`${number}*2 = ${number*2}`);
// }
// get_number(numbers[0], 0);
// get_number(numbers[1], 1);


// const numbers=[4,2,5,8];

// function get_number(number, index){
//    console.log("index is",index);
//    console.log(`${number}*2 = ${number*2}`);
// }
// for(let i=0;i<numbers.length;i++){
//    get_number(numbers[i],i);
// }

// const numbers=[4,2,5,8];

// function get_number(number, index){
//    console.log("index is",index);
//    console.log(`${number}*2 = ${number*2}`);
// }
// numbers.forEach(get_number);

// const numbers=[4,2,5,8];
// numbers.forEach(function(number, index){
//    console.log("index is",index);
//    console.log(`${number}*2 = ${number*2}`);
// });

// const numbers=[4,2,5,8];
// numbers.forEach((number,index)=>{
//    console.log("Index of",number,"is this",index);
// })


// const numbers=[2,5,3,6,7];
// const square=function(numbers){
//    return numbers*numbers;
// }
// const Square_array=numbers.map(square);
// console.log(Square_array);



// const numbers=[2,5,3,6,7];
// const Square_array=numbers.map(function(numbers){
//    return numbers*numbers;
// });
// console.log(Square_array);

// const array=[1,7,8,3];
// const isEven=function(arr){
//     if(arr%2===0)
//     {
//        return true;
//     }
// }
// const even=array.filter(isEven);
// console.log(even);

// const array=[1,7,8,3];
// const even=array.filter(function(arr){
//     if(arr%2===0)
//     {
//        return true;
//     }
// });
// console.log(even);

// const numbers=[1,2,3,4];
// const sum = numbers.reduce((accumulator, currentValue) =>{
//    return accumulator + currentValue;
// },100);
// console.log(sum);

// const userCart=[
//   {id:1, Name:"Mobile", price:12000},
//   {id:1, Name:"Laptop", price:22000},
//   {id:1, Name:"TV", price:15000},
//  ];

//  const total_price= userCart.reduce((totalPrice, currentProduce)=>{
//     return totalPrice+currentProduce.price;
//  },0)
//  console.log(total_price);

// const arr=[3000,1,4,2000,9];
// console.log(arr.sort());

// const arr=["Nandini","Mamta","subhangini"];
// console.log(arr.sort());

// const arr=[3000,1,4,2000,9];
// arr.sort((a,b)=>{
//   return a-b;
// })
// console.log(arr);

// const products =[
//   {ID:1, Name:"Nandini", price:300},
//   {ID:2, Name:"Subhangini", price:3000},
//   {ID:3, Name:"Kirti", price:200},
//   {ID:4, Name:"Mamta", price:8000}
// ];

// const lowToHigh=products.slice(0).sort((a,b)=>{
//   return a.price-b.price;
// });

// const highToLow=products.slice(0).sort((a,b)=>{
//   return b.price-a.price;
// });
// console.log(products);
// console.log(lowTohigh);

// const myArray = ["Hello", "cat", "Dog", "Lion"];
// function isLength(str){
//    return str.length===3;
// };

// const arr=myArray.find(isLength);
// console.log(arr);


// const products =[
//   {ID:1, Name:"Nandini", price:300},
//   {ID:2, Name:"Subhangini", price:3000},
//   {ID:3, Name:"Kirti", price:200},
//   {ID:4, Name:"Mamta", price:8000}
// ];

// const arr=products.find((user)=>{
//   return user.ID===3;
// });
// console.log(arr);

// const numbers = [4,2,7,5,3];

// const ans = numbers.every((number)=>{
//    return number%2===0;
// });
// console.log(ans);

// const userCart=[
//   {id:1, Name:"Mobile", price:12000},
//   {id:1, Name:"Laptop", price:22000},
//   {id:1, Name:"TV", price:15000},
//  ];

//  const lessThan=userCart.every((user)=>{
//     return user.price<30000;
//  });
//  console.log(lessThan);

// const numbers = [7,5,3];

// const ans = numbers.some((number)=>{
//    return number%2===0;
// });
// console.log(ans);

// const userCart=[
//   {id:1, Name:"Mobile", price:12000},
//   {id:1, Name:"Laptop", price:22000},
//   {id:1, Name:"TV", price:15000},
//  ];

//  const lessThan=userCart.some((user)=>{
//     return user.price<30000;
//  });
//  console.log(lessThan);

// const myArray = new Array(10).fill(-1);
// console.log(myArray);


// const myArray=[1,2,3,4,5,6,7];
// const arr=myArray.fill(0, 2, 5);
// console.log(arr);


// const myArr = ['item1','item2','item3'];
// const deleted_item=myArr.splice(1, 2);//this will delete a item from the first index of array.
// console.log ("array after deletion of items",myArr);
// console.log ("deleted items are",deleted_item);
// myArr.splice(1, 0, "inserted item");//this will insert a item at the first index of array. zero here is that no idem is deleted, 1 here is the index at which we want to insert the item and "inserted item" is the item that we are going to insertm in the array
// console.log (myArr);
// const myArr = ['item1','item2','item3'];
// myArr.splice(1, 2, "inserted item2","inserted item3");
// console.log (myArr);

// const first_Name="Nandini";
// for(let char of first_Name){
//    console.log(char);
// }


// const users_Name=["Nandini","Kirti","subhangini"];
// for(let user of users_Name){
//    console.log(user);
// }


// const first_Name="Nandini";
// console.log(first_Name.length);
// console.log(first_Name[4]);


// const my_Array=["Nandini","Kirti","subhangini"];
// console.log(my_Array.length);
// console.log( my_Array[2]);

// const numbers = new Set([2,5,6]);//Inside the brackets we can write any iterable like array and string.
// console.log(numbers);


// const numbers= new Set();//here we created a empty set and we can add elements in this set using add method
// numbers.add(1);
// numbers.add(2);
// console.log(numbers);

// const numbers= new Set();//here we created a empty set and we can add elements in this set using add method
// numbers.add(1);
// numbers.add(2);
// numbers.add(2);//this will be ignored because we have already inserted 2 before
// numbers.add(["item1","item2"]);//we can also store array in a set
// numbers.add(["item1","item2"]);//this will also get added in the set it will not be ignored because both the array have different location.
// console.log(numbers);

// const numbers= new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// if(numbers.has(1)){
//    console.log("1 is present");
// }
// else{
//    console.log("1 is not present");
// }
// console.log(numbers);

// const numbers= new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// for(let number of numbers){
// console.log(number);
// }

// const myArray = [1,2,4,4,5,6,5,6];
// const uniqueItems= new Set(myArray);
// console.log(uniqueItems);

// const myArray = [1,2,4,4,5,6,5,6];
// const uniqueItems= new Set(myArray);
// console.log(uniqueItems);
// let length=0;
// for(let i of uniqueItems)
// {
//    length=length+1;
// }
// console.log(length);

// const person = new Map();
// person.set("firstName","Nandini");
// person.set("age",22);
// person.set(1,"one");
// console.log(person)
// person.get("firstName");
// //console.log(person.keys());
// for(let key of person.keys()){ 
//    console.log(key, typeof key);
// }

// const person = new Map();
// person.set("firstName","Nandini");
// person.set("age",22);
// for(let key of person){
//    console.log(Array.isArray(key));//here it will give us array of key value pair to chack it it's returning array or not we can use Array.isArray()
// }

// //if we want to print both key value using for loop then we have to destructure it as foolow
// const person = new Map();
// person.set("firstName","Nandini");
// person.set("age",22);
// for(let [key, value] of person){//here we have destructure the array
//    console.log(key, value);//here we have printed the key value pair
// }

// //Another way to create a map
// const person =new Map([["firstName","Nandini"],["age",22]]);
// console.log(person);


// const person = {
//     firstName:"Nandini",
//     age: 22,
//     about: function(){
//        console.log(`person firstName is ${firstName} and age is ${age}`)
//     }
//  };
 
//  person.about();//it will call the about function of person object and here in we will get error 

// const person = {
//     firstName:"Nandini",
//     age: 22,
//     about: function(){
//        console.log(`person firstName is ${this.firstName} and age is ${this.age}`)
//     }
//  };
//  person.about();


// function personInfo(){
//     console.log(`person firstName is ${this.firstName} and age is ${this.age}`)
//  };

// const person1 = {
//  firstName:"Nandini",
//  age: 22,
//  about: personInfo
// };
// const person2 = {
//  firstName:"Subhangini",
//  age: 22,
//  about: personInfo
// };
// const person3 = {
//  firstName:"kirti",
//  age: 20,
//  about: personInfo
// };
// const person4 = {
//  firstName:"Mamta",
//  age: 21,
//  about: personInfo
// };
// person1.about(); //here 'this' will be person1 object
// person2.about();//here 'this' will be person2 object
// person3.about();//here 'this' will be person3 object
// person4.about();//here 'this' will be person4 object


// console.log(this);// this will print window objects in JS window is a global object.


// function myfunc(){
// "use strict";
// console.log(this);
// }
// myfunc();

// const user1 = {
//     Name:"Nandini",
//     age: 22,
//     about: function(){
//        console.log(this.Name, this.age);
//     }
//  }
 
//  const user2 = {
//     Name:"Mamta",
//     age: 21
//  }
 
//  user1.about();//it will call the about function of user1


// const user1 = {
//     Name:"Nandini",
//     age: 22,
//     about: function(){
//        console.log(this.Name, this.age);
//     }
//  }
 
//  const user2 = {
//     Name:"Mamta",
//     age: 21
//  }
 
//  user1.about.call(user2);//it will call the about function for user2

// function about(){
//     console.log(this.Name, this.age);
//  }
// const user1 = {
//  Name:"Nandini",
//  age: 22,
// }

// const user2 = {
//  Name:"Mamta",
//  age: 21
// }

// about.call(user1);
// about.call(user2);



// //if the function have some more arguments then we can also pass that in call function as shown we have passed hobby and fav person
// function about(Hobby, favPerson){
//     console.log(this.Name, this.age, Hobby, favPerson);
//  }
// const user1 = {
//  Name:"Nandini",
//  age: 22,
// }

// const user2 = {
//  Name:"Mamta",
//  age: 21
// }

// about.call(user1, "singing", "LataMangeskar");
// about.call(user2, "Dancing", "Micaljackson");

// const user1 = {
//     Name:"Nandini",
//     age: 22,
//     about: ()=>{
//         console.log(this);
//        console.log(this.Name, this.age);
//     }
//  }
//  user1.about();


// const user1 = {
//    Name:"Nandini",
//    age: 22,
//    about: function(){
//       console.log(this);
//       console.log(this.Name, this.age);
//    }
// }
// const myfunc = user1.about;
// console.log(myfunc);
// myfunc();

// const user1 = {
//    Name:"Nandini",
//    age: 22,
//    about: function(){
//       console.log(this.Name, this.age);
//    }
// }
// const myfunc = user1.about.bind(user1);
// myfunc();


// const user1={
//     Name:"Nandini",
//     age: 20,
//     about(){
//        console.log(this.Name, this.age);
//     }
//  }
//  user1.about();

// const user = {
//    firstName:"Nandini",
//    lastName:"Chaudhary",
//    email: "nandinina040@gamil.com",
//    age:22,
//    address: "house number, colony, pincode, state",
//    about: function(){
//       return`${this.firstName} is ${this.age} years old.`;
//    },
//    is18:function(){
//       return this.age>=18;
//    }
// }
// const about_user=user.about();
// console.log(about_user);

// function create_User(firstName,  lastName, email,  age, address){
//    const user = {};
//    user.firstName =firstName;
//    user.lastName =lastName;
//    user.email =email;
//    user.age = age;
//    user.about =function(){
//       return`${this.firstName} is ${this.age} years old.`;
//    }
//    user.is18 =function(){
//       return this.age>=18;
//    }
//    return user;    
// }
 
// const user1= create_User("Nandini", "chaudhary", "nandinina040@gamil.com", 22, "house number, colony, pincode, state");
// console.log(user1);
// console.log(user1.is18());
// console.log(user1.about());

// const userMethods={ //this object has been created in heap memory and it is pointing to a single memory not getting created in different memory location again and again
//    about:function(){
//       return`${this.firstName} is ${this.age} years old.`;
//    },
//    is18:function(){
//       return this.age>=18;
//    }
// }
// function create_User(firstName,  lastName, email,  age, address){
//    const user = {};
//    user.firstName =firstName;
//    user.lastName =lastName;
//    user.email =email;
//    user.age = age;
//    user.about=userMethods.about;//refering to about method of userMethods object that means refering to the same memory location not getting created in different memory location
//    user.is18=userMethods.is18;//refering to is18 method of userMethods object that means refering to the same memory locationnot getting created in different memory location
//    return user;    
// }
 
// const user1= create_User("Nandini", "chaudhary", "nandinina040@gamil.com", 22, "house number, colony, pincode, state");
// const user2= create_User("Subhangini", "chaudhary", "subhangini121@gamil.com", 22, "house number, colony, pincode, state");
// const user3= create_User("Mamta", "Arora", "mamtaaroksh@gamil.com", 21, "house number, colony, pincode, state");
// console.log(user1.about());
// console.log(user3.about());

// const obj1={
//    key1: "value1",
//    key2: "value2"
// }
// const obj2={
//    key3: "value3"
// }
// console.log(obj2.key2);

// const obj1={
//    key1: "value1",
//    key2: "value2"
// }
// const obj2={};//object created 
// obj2.key3="value3";// property of obj2
// console.log(obj2.key2);//output will be undefined

// const obj1={
//    key1: "value1",
//    key2: "value2"
// }
// const obj2=Object.create(obj1);// it will create a empty object obj2
// obj2.key3="value3";
// console.log(obj2.key2);

// const obj1={
//    key1: "value1",
//    key2: "value2"
// }
// const obj2=Object.create(obj1);// it will create a empty object obj2
// obj2.key3="value3";
// obj2.key2="uniqueItems";
// console.log(obj2.key2);
// console.log(obj2.__proto__);//here we will get to see that proto of obj2 is obj1

// function hello(){
//    console.log("hello world");
// }
// console.log(hello.prototype);//here we will get a object that have a property constructor(it is a function an its value is the function hello that we have created)

// function hello(){
//    console.log("hello world");
// }
// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// console.log(hello.prototype);

// function hello(){
//    console.log("hello world");
// }
// hello.prototype.abc = "abc";//property having key abc and value "abc" added to object prototype
// hello.prototype.xyz = "xyz";//property having key xyz and value "xyz" added to object prototype
// hello.prototype.sing = function(){
//    console.log("lalalala");
// };
// console.log(hello.prototype);
// hello.prototype.sing();

// function create_User(firstName,  lastName, email,  age, address){
//    const user = Object.create(create_User.prototype);//create a empty object and also a proto of object prototype 
//    user.firstName =firstName;
//    user.lastName =lastName;
//    user.email =email;
//    user.age = age;
//    return user;    
// }
// create_User.prototype.about =function(){
//       return`${this.firstName} is ${this.age} years old.`;
//    }
// create_User.prototype.is18=function(){
//       return this.age>=18;
//    }
// create_User.prototype.sing= function(){
//       return "Sare gama padh nisha";
//    }
// const user1= create_User("Nandini", "chaudhary", "nandinina040@gamil.com", 22, "house number, colony, pincode, state");
// const user2= create_User("Subhangini", "chaudhary", "subhangini121@gamil.com", 22, "house number, colony, pincode, state");
// const user3= create_User("Mamta", "Arora", "mamtaaroksh@gamil.com", 21, "house number, colony, pincode, state");
// console.log(user1.about());
// console.log(user3.about());

// function Create_User(Name, Age){
//    this.Name = Name;
//    this.Age =  Age;
// }
// Create_User.prototype.about = function(){
//    console.log(this.Name, this.Age);
// }
// const user1 = new Create_User("Nandini", 22);
// user1.about();

// function create_User(firstName,  lastName, email,  age, address){
//    this.firstName =firstName;
//    this.lastName =lastName;
//    this.email =email;
//    this.age = age;    
// }
// create_User.prototype.about =function(){
//       return`${this.firstName} is ${this.age} years old.`;
//    }
// create_User.prototype.is18=function(){
//       return this.age>=18;
//    }
// create_User.prototype.sing= function(){
//       return "Sare gama padh nisha";
//    }
// const user1= new create_User("Nandini", "chaudhary", "nandinina040@gamil.com", 22, "house number, colony, pincode, state");
// const user2= new create_User("Subhangini", "chaudhary", "subhangini121@gamil.com", 22, "house number, colony, pincode, state");
// const user3= new create_User("Mamta", "Arora", "mamtaaroksh@gamil.com", 21, "house number, colony, pincode, state");
// console.log(user1.about());
// console.log(user3.about());

// function Create_User(firstName,  lastName, email,  age, address){
//    this.firstName =firstName;
//    this.lastName =lastName;
//    this.email =email;
//    this.age = age;    
// }
// Create_User.prototype.about =function(){
//       return`${this.firstName} is ${this.age} years old.`;
//    }
// Create_User.prototype.is18=function(){
//       return this.age>=18;
//    }
// Create_User.prototype.sing= function(){
//       return "Sare gama padh nisha";
//    }
// const user1= new Create_User("Nandini", "chaudhary", "nandinina040@gamil.com", 22, "house number, colony, pincode, state");
// //To see all the key of user1 we can see that using for in loop
// for(let key in user1){
//    if(user1.hasOwnProperty(key)){//this will check that  the key is of its own or is of prototype and if it is its own proprty then it will print the key otherwise it will not print the key
//       console.log(key);
//    }
// }

// let numbers =[1,2,3];
// console.log(numbers.flat());
// console.log(numbers);

// let numbers =new Array(1,2,3);
// console.log(Array.prototype);

// let numbers =[1,2,3];
// console.log(Object.getPrototypeOf(numbers));
// console.log(numbers);

// class CreateUser{
//    constructor(firstName, lastName, email, age){
//       console.log("Constructor called");
//      this.firstName =firstName;
//      this.lastName =lastName;
//      this.email =email;
//      this.age = age;  
//    }

//    about(){
//       return`${this.firstName} is ${this.age} years old`;
//    }
   
//    is18(){
//        return this.age>=18;
//    }

//    sing(){
//       return "Sare gama padh nisha";
//    }
// }

// const User1 = new CreateUser("Nandini", "chaudhary", "nandinina040@gmail.com", 22);
// console.log(User1.about());
// console.log(Object.getPrototypeOf(User1));

// class Animal{
//    constructor(Name, age){
//       this.Name =Name;
//       this.age =age;
//    }

//    eat(){
//       return `${this.Name} is eating`;
//    }
//    isSuperCute(){
//       return this.age<=2;
//    }
//    isCute(){
//       return true;
//    }
// }
// const Animal1 = new Animal("Tommy", 10);
// console.log(Animal1.eat());

// class Animal{
//    constructor(Name, age){
//       this.Name =Name;
//       this.age =age;
//    }

//    eat(){
//       return `${this.Name} is eating`;
//    }
//    isSuperCute(){
//       return this.age<=2;
//    }
//    isCute(){
//       return true;
//    }
// }
// class Dog extends Animal{

// }

// const Dog1 = new Dog("Tom" , 1);
// console.log(Dog1.eat());

// class Animal{
//    constructor(Name, age){
//       this.Name =Name;
//       this.age =age;
//    }

//    eat(){
//       return `${this.Name} is eating`;
//    }
//    isSuperCute(){
//       return this.age<=2;
//    }
//    isCute(){
//       return true;
//    }
// }
// class Dog extends Animal{
//    constructor(Name, age, speed){
//       super(Name, age);//this will add name and age 
//       this.speed = speed;
//    }
   
//    run(){
//       console.log(this.speed);
//       return `${this.Name} is running at speed of ${this.speed} Kmph`;
//    }
// }

// const Dog1 = new Dog("Tom", 1, 45);
// console.log(Dog1.run());

// class Animal{
//    constructor(Name, age){
//       this.Name =Name;
//       this.age =age;
//    }

//    eat(){
//       return `${this.Name} is eating`;
//    }
//    isSuperCute(){
//       return this.age<=2;
//    }
//    isCute(){
//       return true;
//    }
// }
// class Dog extends Animal{
//    constructor(Name, age, speed){
//       super(Name, age);//this will add name and age 
//       this.speed = speed;
//    }
    
//    eat(){
//       return `${this.Name} is Modified eating`;
//    }
   
//    run(){
//       console.log(this.speed);
//       return `${this.Name} is running at speed of ${this.speed} Kmph`;
//    }
// }

// const Dog1 = new Dog("Tom", 1, 45);
// console.log(Dog1.run());
// console.log(Dog1.eat());// if we have same eat method in parent class as well as in sub class then if we call the method using the object of sub class then sub class method will be called.


// class Person{
//    constructor(firstName, lastName, age){
//       this.firstName= firstName;
//       this.lastName = lastName;
//       this.age = age;
//    }

//    get fullName(){
//       return`${this.firstName} ${this.lastName}`;
//    }
// }
// const person1 = new Person("Nandini", "chaudhary", 22);

// console.log(person1.firstName);
// console.log(person1.fullName);

// class Person{
//    constructor(firstName, lastName, age){
//       this.firstName= firstName;
//       this.lastName = lastName;
//       this.age = age;
//    }

//    get fullName(){
//       return`${this.firstName} ${this.lastName}`;
//    }

//    set fullName(fullName){
//        const [firstName, lastName]= fullName.split(" ") //when ever in the full name it will get a space then it will split the name and store it in a list([Nandini, Chauddhary])// here basically we are setting the value of firstname and lastname and taking its value from fullname
//        this.firstName= firstName;
//        this.lastName= lastName;
//    }
   
// }
// const person1 = new Person("Nandini", "chaudhary", 22);

// person1.fullName="Subhangini Chaudhary";
// console.log(person1);

// class Person{
//    constructor(firstName, lastName, age){
//       this.firstName= firstName;
//       this.lastName = lastName;
//       this.age = age;
//    }
//    static classInfo(){ //static method
//       return "this is person class";
//    }
//    static desc = "this is description";//static property
//    get fullName(){
//       return`${this.firstName} ${this.lastName}`;
//    }

//    set fullName(fullName){
//        const [firstName, lastName]= fullName.split(" ");
//        this.firstName= firstName;
//        this.lastName= lastName;
//    }
//     eat(){
//       return `${this.firstName} is  eating`;
//    }
   
// }
// const person1 = new Person("Nandini", "chaudhary", 22);
// console.log(person1.eat());
// console.log(Person.classInfo());//classinfo has been directly called using the class
// console.log(Person.desc);//desc has been directly called using the class

