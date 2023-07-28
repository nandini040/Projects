const todoForm = document.querySelector(".todo-form");
const todoList = document.querySelector(".todo-list");
const todoButton = document.querySelector(".todo-buttons");
const textEntered = document.querySelector(".todo-form input[type='text']");


todoForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  const liValue = textEntered.value;
  const  newLi = document.createElement("li");
  const liItem = ` <span class="text">${liValue}</span>
  <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
  </div>`; 
  newLi.innerHTML = liItem;
  todoList.append(newLi);
  textEntered.value=" ";
});


todoList .addEventListener("click", (e)=>{
      if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
      }
      if(e.target.classList.contains("remove")){
        const li = e.target.parentNode.parentNode;
        li.remove();
   }
});