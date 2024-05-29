const param = new URLSearchParams(window.location.search)

window.addEventListener("load", () => {

    document.getElementById("image").src = param.get("img")
    document.getElementById("title").innerText = param.get("title")
    document.getElementById("price").innerText = "₹ " + param.get("price")

})

AddToCart.addEventListener("click", () => {
    let cartdata = {
        title: param.get("title"),
        image: param.get("img"),
        price: param.get("price")
    }

    fetch("https://jp-overlays-json-data.onrender.com/cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cartdata)
      }).then((res) => res.json())
        .then((data) => alert("Item Add To Cart..."))
        .catch((err) => console.log(err))

})

// ================ QUANTITY ===============

let a=1;

let minus = document.getElementById("minus")
let num = document.getElementById("num")
let plus = document.getElementById("plus")

plus.addEventListener("click",()=>{
  a++;

  num.innerText=a
})
minus.addEventListener("click",()=>{
  if(a>1){
    a--
    num.innerText=a
    }
})
