
// Get Elements

const modal = document.getElementById("orderModal");

const productName = document.getElementById("productName");

const productInput = document.getElementById("productInput");

const priceInput = document.getElementById("priceInput");




// OPEN ORDER POPUP

function openOrder(product, price){


    modal.style.display = "flex";


    productName.innerHTML =
    "Ordering: " + product + 
    "<br>Price: Rs. " + price;



    productInput.value = product;


    priceInput.value = "Rs. " + price;



    // Disable background scroll

    document.body.style.overflow="hidden";


}






// CLOSE ORDER POPUP


function closeOrder(){


    modal.style.display="none";


    document.body.style.overflow="auto";


}






// Close when click outside


window.onclick=function(event){


    if(event.target == modal){


        closeOrder();


    }


}




let cart=[];


function addCart(name,price){


cart.push({

name:name,
price:price

});


document.getElementById("cartCount").innerHTML = cart.length;


alert(name+" Added To Cart 🛒");


}



function openCart(){


let box=document.getElementById("cartItems");


box.innerHTML="";


cart.forEach(item=>{


box.innerHTML += `

<p>
${item.name} - Rs ${item.price}
</p>

`;

});


document.getElementById("cartModal").style.display="flex";


}



function closeCart(){

document.getElementById("cartModal").style.display="none";

}
