// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");


// div.addEventListener("click" , function() {
//     console.log("div was clicked");
// });

// ul.addEventListener("click" , function(event) {
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for(li of lis) {
//     li.addEventListener("click" , function(event) {
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// }

let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

btn.addEventListener("click", function() {
    console.log(input.value);
    let lis = document.createElement("li");
    lis.innerText = input.value;

    let btns = document.createElement("button");
    btns.innerText = "delete";
    btns.classList.add("delete");
   
    lis.append( " " ,btns);
    ul.appendChild(lis);
    input.value = " ";  
});

ul.addEventListener("click" , function(event) {
    // console.log(event.target.nodeName);
    // console.log("button clicked");

    if(event.target.nodeName == "BUTTON") {
       let listItem =  event.target.parentElement;
       listItem.remove();
        console.log("deleted");
    }
    // else {
    //     console.log("don't delete");
    // }
});

// let delBtn = document.querySelectorAll(".delete");
//     for(btns of delBtn) {
//        btns.addEventListener("click" , function() {
//            let par = this.parentElement ;
//            console.log(par);
//            par.remove();
//        });
//     }


