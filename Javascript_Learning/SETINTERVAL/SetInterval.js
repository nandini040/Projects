const body = document.body;
const stopChanging = document.querySelector("button");

const id = setInterval(()=>{
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const bgColor = `rgb(${red}, ${green}, ${blue})`;
  body.style.background =bgColor;
},1000)

stopChanging.addEventListener("click", ()=>{
    clearInterval(id);
    stopChanging.textContent = body.style.background;
})