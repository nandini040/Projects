const grandParent = document.querySelector(".grandparent");
const Parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const body= document.body;

child.addEventListener("click", ()=>{
    console.log("Capture!!! child");
}, true)
Parent.addEventListener("click", ()=>{
    console.log("Capture!!! parent");
}, true)
grandParent.addEventListener("click", ()=>{
    console.log("Capture!!! grandParent");
}, true)
body.addEventListener("click", ()=>{
    console.log("Capture!!! body");
}, true)

child.addEventListener("click", ()=>{
    console.log("Bubble!!! child");
})
Parent.addEventListener("click", ()=>{
    console.log("Bubble!!! parent");
})
grandParent.addEventListener("click", ()=>{
    console.log("Bubble!!! grandParent");
})
body.addEventListener("click", ()=>{
    console.log("Bubble!!! body");
})


// grandParent.addEventListener("click", (e)=>{
//    console.log(e.target);
// })