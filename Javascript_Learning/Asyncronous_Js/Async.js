// console.log("script start");//Firstly this line of code will be executed 

// for(let i=1; i<1000; i++){  //After completion of first line this for loop will be executed and util and unless this for loop is not executed completely next line will not be executed.
//    console.log("inside for loop");
// }

// console.log("Script end");//After complete execution of for loop this line will be executed.

// console.log("script start");//Firstly this line of code will be executed 
// function hello(){//After completion of line 14 this function will be executed 
//    console.log("Hello World!!");
// }
// setTimeout(hello, 1000);
// console.log("script end");//After completion of line 9 this line will be executed not line no. 10 because we have used setTimeout method due to which the hello function will be executed after a delay of 1sec

// console.log("script start");
// setTimeout(()=>{
//     console.log("inside setTimeout");
// }, 1000);
// console.log("script End");

// console.log("script start");//first this line will be printed on console.then as the setTimeout method is a method that is executed by browser so that part will be sent to browser for execution and till then next line of js code will be executed i.e for loop but as setTimeout function is set to 0ms so the browser will send the callback function to JS code but still the settimeout will wait in the call back queue as Js is busy in execution of for loop and as the for loop will be executed last line will be executed and ion the console script end will be printed and then the call back will be executed and on console the inside setTimeout will be printed.
// setTimeout(()=>{
//     console.log("inside setTimeout");
// }, 0);
// for(let i=0; i<100; i++){
//    console.log("....");
// }
// console.log("script End");

// console.log("script start");
// const id = setTimeout(()=>{
//     console.log("inside for loop");
//  }, 1000);

//  for(i=0; i<100; i++){
//     console.log("...");
//  }
//  console.log("setTimeout id",id);
//  console.log("clear setTimeout");
//  clearTimeout(id);
//  console.log("script end");

var Hello = document.querySelector(".categoryIcon")
Hello.addEventListener("click",()=>{
   alert("Hello Bro")
})
