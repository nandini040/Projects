//to change text on the HTML page

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent);
// mainHeading.textContent="This is something else";
// console.log(mainHeading.textContent);

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent);//this will give the whole text(Manage your Task BRO!)

// const Heading = document.getElementById("main-heading");
// console.log(Heading.innerText);//this will give only the inner text(Manage your Task)


// const mainHeading = document.querySelector("div.headline h2");
// console.log(mainHeading.style);
// mainHeading.style.color= "black";
// mainHeading.style.backgroundColor="green";

// //get any attribute value:-
// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));

// //set any attribute value:-
// link.setAttribute("href", "https://www.youtube.com/watch?v=Llsq1y-HWs4&t=14710s");
// console.log(link.getAttribute("href"));

// // const some = document.querySelector("div.headline h2");
// // console.log(some.getAttribute("id"));
// // some.setAttribute("id", "HEHEHE");
// // console.log(some.getAttribute("id"));


// const navItems = document.getElementsByClassName("nav-item");//this will reutrn's a html collection (basically it is a array like object but not array)
// console.log(navItems);


// const navItems = document.querySelectorAll(".nav-item");//this will reutrn's a Node list (basically it is a array like object but not array)
// console.log(navItems);
// console.log(navItems[1]);

// const navItems = document.getElementsByTagName("a");
// console.log(navItems);
// for(let i=0; i<navItems.length; i++){
//    const navItem=navItems[i];
//    navItem.style.backgroundColor="rgb(211, 206, 206)";
//    navItem.style.color="black";
//    navItem.style.fontWeight="bold";
//    navItem.style.padding='8px 10px';
//    navItem.style.borderRadius='50px';
// }

// const navItems = document.getElementsByTagName("a");
// console.log(navItems);
// for(let navItem of navItems)
// {
//   navItem.style.backgroundColor="rgb(211, 206, 206)";
//    navItem.style.color="black";
//    navItem.style.fontWeight="bold";
//    navItem.style.padding='8px 10px';
//    navItem.style.borderRadius='50px';
// }

// let navItems = document.getElementsByTagName("a");
// navItems =Array.from(navItems);
// console.log(Array.isArray(navItems));
// navItems.forEach((navItems)=>{
//    navItems.style.backgroundColor="rgb(211, 206, 206)";
//    navItems.style.color="black";
//    navItems.style.fontWeight="bold";
//    navItems.style.padding='8px 10px';
//    navItems.style.borderRadius='50px';
// })

// const navItems = document.querySelectorAll("a");
// for(let i=0; i<navItems.length; i++)
// {
//    const navItem=navItems[i];
//    navItem.style.backgroundColor="rgb(211, 206, 206)";
//    navItem.style.color="black";
//    navItem.style.fontWeight="bold";
//    navItem.style.padding='8px 10px';
//    navItem.style.borderRadius='50px';
// }

// const navItems=document.querySelectorAll("a");
// for(let navItem of navItems){
//    navItem.style.backgroundColor="rgb(211, 206, 206)";
//    navItem.style.color="black";
//    navItem.style.fontWeight="bold";
//    navItem.style.padding='8px 10px';
//    navItem.style.borderRadius='50px';
// }

// const navItems=document.querySelectorAll("a");
// navItems.forEach((navItems)=>{
//    navItems.style.backgroundColor="rgb(211, 206, 206)";
//    navItems.style.color="black";
//    navItems.style.fontWeight="bold";
//    navItems.style.padding='8px 10px';
//    navItems.style.borderRadius='50px';
// })

// const heading = document.querySelector(".headline");
// console.log(heading.innerHTML);
// heading.innerHTML = "<h2>Hello BRO </h2>";
// heading.innerHTML += "<button class='btn'>Learn More</button>";
// console.log(heading.innerHTML);

// const rootNode = document.getRootNode();
// //console.log(rootNode);
// const htmlElementNode1 = rootNode.childNodes[1];
// //console.log(htmlElementNode1);
// const htmlElementNode2= rootNode.childNodes[1];
// console.log(htmlElementNode2.childNodes);//gives a node list that conatins head at 0, text(for new line between head and body) at 1 and body at 2
// const headElementNode = htmlElementNode1.childNodes[0];
// console.log(headElementNode);
// const BodyElementNode = htmlElementNode1.childNodes[2];
// console.log(BodyElementNode);
// const textNode1 = headElementNode.childNodes[1];
// const textNode2 = headElementNode.childNodes[3];
// const textNode3 = headElementNode.childNodes[5];
// const textNode4 = headElementNode.childNodes[7];
// const textNode5 = headElementNode.childNodes[9];
// const textNode6 = headElementNode.childNodes[11];
// console.log(textNode1);
// console.log(textNode2);
// console.log(textNode3);
// console.log(textNode4);
// console.log(textNode5);
// console.log(textNode6);
// console.log(htmlElementNode1.parentNode);//this will give parent of html element i.e document
// console.log(headElementNode.nextSibling);//this will give the next sibling of head node that is text
// console.log(headElementNode.nextSibling.nextSibling);//this will give the next sibling of text node that is body
// console.log(headElementNode.nextElementSibling)//this will ignore the newline and space sibling and will only give the next eliment i.e body.

// const some = document.querySelector("h1");
// const parentSome = some.parentNode;
// parentSome.style.backgroundColor = 'rgb(20, 58, 56)';
 
// //we can directly select body
// const body =document.body;
// console.log(body);

// const head=document.querySelector("head");
// console.log(head);
// const title = head.querySelector("title");
// console.log(title.childNodes);


// const Root = document.getRootNode();
// const htmlElement = Root.childNodes[1];
// const head = htmlElement.children[0];
// const headChild = head.children;
// console.log(headChild);


// const todoSection = document.querySelector(".todo-section");
// console.log(todoSection.classList);
// // todoSection.classList.add('bgdark');//giving class through Js
// todoSection.classList.remove("abc");//to remove any calass through Js
// console.log(todoSection.classList);

// const todoSection = document.querySelector(".todo-section");
// console.log(todoSection.classList.contains("abc"));

// const todoSection = document.querySelector(".todo-section");
// todoSection.classList.toggle("bgdark");//this will add the class bgdark in the classList as this class doesn't exist in the classList
// todoSection.classList.toggle("bgdark");//this will remove the class bgdark from the classList as this class exist in the classList

// const todoList = document.querySelector(".todo-list");
// // console.log(todoList.innerHTML);
// // todoList.innerHTML = "<li>New todo</li>";//this will overwrite the previous text and set it to new todo but we don't want this we want to add the new todo in form of list

// todoList.innerHTML += "<li>New todo</li>";
// todoList.innerHTML += "<li>todo2</li>";

// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach Student");
// const todoList = document.querySelector(".todo-list");
// newTodoItem.append(newTodoItemText);
// todoList.append(newTodoItem);
// console.log(newTodoItem);
            //or
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach Students";
// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem);
// console.log(newTodoItem);

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach Students";
// const todoList = document.querySelector(".todo-list");
// todoList.prepend(newTodoItem);
// console.log(newTodoItem);

// const todo1 = document.querySelector('.todo-list li');
// todo1.remove();

// const newTodoItem = document.createElement("li"); newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);


// const newTodoItem = document.createElement("li"); newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.after(newTodoItem);

// const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend", "<li>Teach Student</li>");
// todoList.insertAdjacentHTML("afterbegin", "<li>Teach Myself</li>");
// todoList.insertAdjacentHTML("beforebegin", "<li>Teach</li>");
// todoList.insertAdjacentHTML("afterend", "<li>Teach something</li>");

// const ul = document.querySelector(".todo-list");
// const li1 = document.createElement("li");
// li1.textContent ="new todo";
// const li2 = li1.cloneNode(true);
// ul.append(li1);
// ul.prepend(li2);

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent ="new todo";
// ul.appendChild(li);

// const ul = document.querySelector(".todo-list");
// const li =document.createElement("li");
// li.textContent = "new todo";
// const referenceNode = document.querySelector(".list");
// ul.insertBefore(li ,  referenceNode);

// const ul = document.querySelector(".todo-list");
// const li =document.createElement("li");
// li.textContent = "new todo";
// const referenceNode = document.querySelector(".list");
// ul.replaceChild(li ,  referenceNode);

// const ul = document.querySelector(".todo-list");
// const referenceNode = document.querySelector(".list");
// ul.removeChild(referenceNode);

// const listItems = document.querySelectorAll(".todo-list li");
// const Todo2 = document.createElement("li");
// Todo2.textContent = "Todo2";
// const ul = document.querySelector(".todo-list");
// ul.append(Todo2);
// console.log(listItems);

// const ul = document.querySelector(".todo-list");
// const listItem = ul.getElementsByTagName("li");
// const Todo2 = document.createElement("li");
// Todo2.textContent = "Todo2";
// ul.append(Todo2);
// console.log(listItem);

// const sectionTodo = document.querySelector(".todo-section");
// const info = sectionTodo.getBoundingClientRect();
// console.log(info);

// const btn = document.querySelector(".btn-headline");
// btn.onclick = function(){
//    console.log("You Clicked Me!!!");
// }
// const btn = document.querySelector(".btn-headline");
// function clickMe(){
//    console.log("You clicked Me!!");
// }
// btn.addEventListener("click", clickMe);

// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click", function clickMe(){
//    console.log("You clicked Me!!");
// });

// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click", ()=>{
//    console.log("You clicked Me!!");
// });

// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click",function(){
//    console.log("You clicked Me!!!");
//    console.log("value of this");
//    console.log(this);
// })

// const btn = document.querySelector(".btn-headline");
// btn.addEventListener("click",()=>{
//    console.log("You clicked Me!!!");
//    console.log("value of this");
//    console.log(this);//it will print the window object
// })

// const allButtons = document.querySelectorAll(".my-buttons button");
// // console.log(allButtons);
// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this.textContent);//here this will point to the button on which we click and will print the content written on the button
//     })
// }


// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function(){
//    console.log(this);
// })

// const Button = document.querySelector(".btn-headline");
// Button.addEventListener("mouseover", ()=>{
//   console.log("mouseover event ocurred!!!");
// });

// Button.addEventListener("mouseleave", ()=>{
//    console.log("mouseLeave event occured!!!");
// });


