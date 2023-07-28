const mainButton = document.querySelector("button");
const body = document.body;
const current = document.querySelector(".color");

function randomColorGenerator(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}
mainButton.addEventListener("click",()=>{
      const randomColor = randomColorGenerator();
      body.style.backgroundColor = randomColor;
      current.textContent =randomColor
})

