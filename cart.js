let carticon = document.querySelector("#cart-icon");
let cart = document.getElementById("cartTab");
let closebtn = document.querySelector("#close-cart");

carticon.addEventListener("click", () => {
    cart.classList.add("active-cart")
})

closebtn.addEventListener("click", () => {
    cart.classList.remove("active-cart")
})


// ============ ADD TO CART ============ 

function fetchdata(){
    fetch("https://jp-overlays-json-data.onrender.com/cart")
    .then((res)=>res.json())
    .then((data)=>{cartlist(data)
    })
    .catch((err)=>{console.log(err)})
}
fetchdata()

function cartlist(data){
    let store=data.map((el)=>
        cartitem(el.image,el.title,el.price,el.id)
    )

    document.getElementById("cartfetchdata").innerHTML=store.join("")
    fetchdata()
}

function cartitem(image,title,price,id){
    return`
    <div class="cart-item " id="cart-item" data-id="${id}">
        <div class="img">
            <img src="${image}" alt="">
        </div>
        <div class="content">
            <div class="head">
                <p class="title">${title}</p>
                <p class="price"> ₹ ${price}</p>
            </div>
        <div class="size"><p>size : M</p></div>
            <div class="quentity">
                <div>
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                </div>
                <a href="#" id="removebtn" class="removebtn" data-id="${id}">Remove</a>
            </div>
        </div>
    </div>`

}

// =================== ADD TO CART END =====================


// ================= DELETE ====================    


document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("removebtn")) {
        dataProduct(e.target.dataset.id);
        }
})

function dataProduct(id){
    fetch(`https://jp-overlays-json-data.onrender.com/cart/${id}`,{
        method:'DELETE',
    })
    .then((res)=>res.json())
    .then((data)=>{
        alert("Item Deleted...")
        fetchdata()
    })
    .catch((err)=>{
        console.log(err)
        alert("something went wrong...")
    })
}

// =============== DELETE END ===================