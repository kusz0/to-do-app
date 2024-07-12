const ul = document.getElementById("list-container");
const btn = document.querySelector(".todo-app button");
const input = document.getElementById("input-box");
const span = document.querySelector("#list-container li span")

function toDoFunc() {
    if(input.value === "") {
        alert("write some task")
    }else{
        let li =document.createElement("li");
        li.innerHTML = input.value;
        ul.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    
    input.value = ""
    saveData();
}
function listFnc(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
    }else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}

btn.addEventListener("click",toDoFunc);
ul.addEventListener("click",listFnc);


function saveData() {
    localStorage.setItem("data", ul.innerHTML);
}
function showTask() {
    ul.innerHTML = localStorage.getItem("data");
}
showTask()