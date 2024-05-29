let productdata=[]

function fetchdata(){
    fetch("https://jp-overlays-json-data.onrender.com/mens")
    .then((res)=>res.json())
    .then((data)=>{
        cardlist(data)
        productdata=data
    })
    .catch((err)=>console.log(err))
}
fetchdata()

function cardlist(data){
    let store=data.map((el)=>card(el.img,el.title,el.price,el.xs,el.s,el.m,el.l,el.xl,el.xxl))

    document.getElementById("container").innerHTML=store.join("")
}

function card(img,title,price,xs,s,m,l,xl,xxl){
    return `
        <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-12 t-shirts-product">
        <a href="discription.html?title=${encodeURIComponent(title)}&img=${encodeURIComponent(img)}&price=${encodeURIComponent(price)}">
            <img src="${img}" alt="">
            <p><a href="#">${title}</a></p>
            <p class="price">₹ ${price}</p>
            <div class="size justify-content-center">
            <a href="#"><strike>${xs}</strike></a>
            <a href="#">${s}</a>
            <a href="#">${l}</a>
            <a href="#">${m}</a>
            <a href="#">${xl}</a>
            <a href="#">${xxl}</a>
            </div>
            </a>
        </div> `
}


// ================ Short Data ================

let lowtohigh =document.getElementById("lowtohighbtn")
let hightolow =document.getElementById("hightolowbtn")

lowtohigh.addEventListener("click",()=>{
    alert("Data shorted..")

    const short = productdata.sort((a,b)=> a.price-b.price )
    cardlist(short)
})

hightolow.addEventListener("click",()=>{
    alert("Data shorted..")

    const short = productdata.sort((a,b)=> b.price-a.price )
    cardlist(short)
})

