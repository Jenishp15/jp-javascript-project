let menuicon = document.querySelector("#menu-icon");
let menu = document.getElementById("sideMenu");
let menuclosebtn = document.querySelector("#close-menu");

menuicon.addEventListener("click",()=>{
    menu.classList.add("active-menu")
})

menuclosebtn.addEventListener("click",()=>{
    menu.classList.remove("active-menu")
})