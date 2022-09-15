const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
});

var modal = document.getElementById("detail");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  detail.style.display = "block";
}
span.onclick = function() {
  detail.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == detail) {
    detail.style.display = "none";
  }
}
var modal = document.getElementById("detail1");
var btn = document.getElementById("myBtn1");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  detail.style.display = "block";
}
span.onclick = function() {
  detail.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == detail) {
    detail.style.display = "none";
  }
}