let searchicon = document.querySelector("#search-bar")
let sideSearch = document.getElementById("sideSearch")
let searchclosebtn = document.querySelector("#close-search")

searchicon.addEventListener("click",()=>{
    sideSearch.classList.add("active-search")
})
searchclosebtn.addEventListener("click",()=>{
    sideSearch.classList.remove("active-search")
})
