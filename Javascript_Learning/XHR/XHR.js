//the first step will be create a object using XHR

//const URL = "https://jsonplaceholder.typicode.com/posts";
//const xhr = new XMLHttpRequest();
//console.log(xhr);//this will return the xhr object
//console.log(xhr.readyState);// ths is give the state of xhr object. here the state will be 0 becz till now the request has been unsent i.e client has been created open() not called yet.
/*we have to configure the request using xhr object so step1 for this will be to use open method this open method will take two values
1. which request we have to make GET, POST, PUT, PATCH or DELETE.
2. we have to pass the URL on which we are going to make the request*/
//xhr.open("GET", URL);//this task will be performed in the background asyncronously.
//console.log(xhr.readyState);//ths is give the state of xhr object. here the state will be 1 becz open has been called
// xhr.onreadystatechange = function(){
//    //console.log(xhr.readyState);// this will give the state of xhr object and here the state will be 2, 3, 4 becz 2 is for--> send has been called and header and status are available. 3 is for --> Loading downloading response test hold partial data. 4--> DOne the operation is completed. we will get the response when ready state value will be 4.
//     if(xhr.readyState === 4){
//         //console.log("Here we will be getting the response becz value of ready state is 4:", xhr.readyState);
//         console.log(xhr.response);//this will give the response that we will be getting from the request that we have made. type of this response that we will be getting is string.
//         const response = xhr.response;// This will return the response in the form of JSON string
//         const data =JSON.parse(response);//here we are parsing i.e change the response into javascript object i.e JSON object.
//         console.log(data);
//     }
    
// }
// xhr.send();//here we have to send the xhr request 

                //OR

// xhr.onload =function(){
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(data);
// }
// xhr.send();


//HTTP METHODS OR ROUTES
//GET is to Read Something or to get something
//POST means to create some data
//DELETE is used to delete some data
//PUT is used when We have somedata present with us we have to change or update that data 
//PATCH is used when we don't have to update everything but we only want to update some part

//HTTP Status code:- It plays a very important role becz it tells us that the response has been recieved properly or not

//Five classes defined by the standard:-
//1XX informational response - the request was received, continuing process
//2XX successful - the request was successfully received, understood, and accepted
//3XX redirection - further action needs to be taken in order to complete the request.
//4XX client error - the request contains bad syntax or cannot be fulfilled 
//5xx server error - the server failed to fulfill an apparently vaild request

//Onreadystate change works only when the state changes 
//onload works only when the ready state is 4

//Error Handling :- 
// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// xhr.open("GET", URL);
// xhr.onload = ()=>{

//     if(xhr.status >=200 && xhr.status<300){
//     const data =JSON.parse(xhr.response);
//     console.log(data);
//     }
//     else{
//         console.log("Something went wrong");
//     }
// }
// xhr.onerror = ()=>{
//         console.log("Network error");
//     }
// xhr.send();


//To Make a request one after one:- suppose we want the fourth object from a=the response that we are getting then we will do as follow:-
// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// xhr.open("GET", URL);
// xhr.onload = ()=>{

//     if(xhr.status >=200 && xhr.status<300){
//     const data =JSON.parse(xhr.response);
//     //console.log(data);
//     const id = data[3].id;//each JSON object has a id so we only want the if not the whole object so we wrote id i.e we need id of object 3 from all the objects  
    
//     const URL2 =`${URL}/${id}`;
//     const xhr2 = new XMLHttpRequest();
//     xhr2.open("GET", URL2);
//     xhr2.onload =()=>{
//         const data1=JSON.parse(xhr2.response);
//         console.log(data1);
//     }
//     xhr2.send();
//     }
//     else{
//         console.log("Something went wrong");
//     }
// }
// xhr.onerror = ()=>{
//         console.log("Network error");
//     }
// xhr.send();


//Promisify the above thing:-

// const URL = "https://jsonplaceholder.typicode.com/posts";

// function sendRequest(method, url){
//     return new Promise(function(resolve, reject){
//          const xhr = new XMLHttpRequest();
//          xhr.open(method, url);
//          xhr.onload = ()=>{
//              if(xhr.status >=200 && xhr.status<300){
//                  resolve(xhr.response);
//              }
//              else{
//                  reject(new Error("Something went wrong"));
//              }
//          }
//          xhr.onerror =()=>{
//                 reject(new Error("Network Error"));
//          }
//          xhr.send();
//     })
// }

// sendRequest("GET", URL)
//  .then(response =>{
//     const data =JSON.parse(response);
//     return data;
// })
// .then(data=>{
// const id = data[3].id;
// return id;
// })
// .then(id=>{
//     const url =`${URL}/${id}`;
//     return sendRequest("GET", url)
// })
// .then(newResponse=>{
//     const newData = JSON.parse(newResponse);
//     console.log(newData);
// })
// .catch(error=>{
//     console.log(error);
// })

//Fetch

// const URL = "https://jsonplaceholder.typicode.com/posts";
// fetch(URL)   //fetch method by default send a get request and it return a promise as a response so we can resolve that using then  
//   .then(response =>{
//       if(response.ok){//here we are checking that the response is properly coming or not if not the we throw the error which is catched be the catch and error is printed  
//         return response.json()//here we are getting the response as a string so to get json object as a response we use Json and it also gives promise as a response so we need to resolve it using then
//       }
//       else{
//           throw new Error("Something went wrong!!!")
//       }
      
//   })
//   .then(data =>{
//       console.log(data);//here the response is resolved and we will get the Json object
//   })
//   .catch(error =>{ //this catch only works when any kind of network issue is encounterd but if some error is thrown from previous steps then also it catches the error and prints the error
//       console.log("inside catch");
//       console.log(error); //if the request has been rejected then we are printing some error 
//   })

// const URL = "https://jsonplaceholder.typicode.com/posts";
// //to send a peost request we need to pass the URL on which we want to make the request, then we need to provide the method thata weather we want to get something or post etc, then if we are making post request then we need to pass the what ever we want to post in the body and last is header which is very imp to specify.
// fetch(URL, {
//     method: "POST",
//     body: JSON.stringify({
//         title:'hello',
//         bodu:'bar',
//         userId:1,
//     }),
//     header: {
//         'content-type': 'application/json; charset=UTF-8',
//     },
// })
// .then(response=>{
//     if(response.ok){
//         return response.json();
//     }
//     else{
//         throw new Error("Something went wrong");
//     }
// })
// .then(data=>{
//   console.log(data);
// })
// .catch(error=>{
//     console.log(error);
// })


//asyn await

// const URL = "https://jsonplaceholder.typicode.com/posts";
// async function getPosts(){
//     const response = await fetch(URL);
//     if(response.ok){
//     const data = await response.json();
//     return data;
//     }
//     else{
//         throw new Error("Something went wrong");
//     }
// }
// getPosts()
// .then(myData=>{
//     console.log(myData)
// })
// .catch(error=>{
//     console.log(error);
// })

//async await using arrow function
const URL  = "https://jsonplaceholder.typicode.com/posts";
const getPosts = async()=>{
    const response = await fetch(URL);
    if(response.ok){
        const data = await response.json();
        return data;
    }
    else{
        throw new Error("Something went wrong");
    }
}

getPosts()
.then(MyData=>{
    console.log(MyData);
})
.catch(error=>{
    console.log(error);
})




