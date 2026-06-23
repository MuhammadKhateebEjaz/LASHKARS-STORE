
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
