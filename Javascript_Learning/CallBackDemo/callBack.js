// callbacks, callback hell, pyramid of dom
//asynchronous programming

//Callback hell :-
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


setTimeout(()=>{
  heading1.textContent ="one";
  heading1.style.color = "blue";
  setTimeout(()=>{
    heading2.textContent ="Two";
    heading2.style.color = "green";
    setTimeout(()=>{
        heading3.textContent ="Three";
        heading3.style.color = "yellow";
        setTimeout(()=>{
            heading4.textContent ="Four";
            heading4.style.color = "purple";
            setTimeout(()=>{
                heading5.textContent ="five";
                heading5.style.color = "lightgreen";
                setTimeout(()=>{
                    heading6.textContent ="six";
                    heading6.style.color = "pink";
                    setTimeout(()=>{
                        heading7.textContent ="seven";
                        heading7.style.color = "brown";
                        setTimeout(()=>{
                            heading8.textContent ="eight";
                            heading8.style.color = "red";
                            setTimeout(()=>{
                                heading9.textContent ="nine";
                                heading9.style.color = "black";
                                setTimeout(()=>{
                                    heading10.textContent ="Ten";
                                    heading10.style.color = "aqua";
                                  }, 1000);
                              }, 1000);
                          }, 1000);
                      }, 1000);
                  }, 1000);
              }, 1000);
          }, 1000);
      }, 1000);
    }, 1000);
}, 1000);