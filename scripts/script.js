// JavaScript Document
console.log("hi");

var menuOpenButton = document.querySelector("header > button");

menuOpenButton.addEventListener("click", openMenu);

function openMenu() {
    var deNav = document.querySelector("header > nav");
    
    deNav.classList.add("open");
}

//sluit button//
var menuSluitButton = document.querySelector("header nav button");

menuSluitButton.addEventListener("click", sluitMenu);

function sluitMenu() {
    var deNav = document.querySelector("header > nav");
    
    deNav.classList.remove("open");
}