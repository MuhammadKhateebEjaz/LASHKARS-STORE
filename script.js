// ===== ORDER MODAL =====

const modal = document.getElementById("orderModal");
const productName = document.getElementById("productName");
const productInput = document.getElementById("productInput");
const priceInput = document.getElementById("priceInput");

// Open Order Popup

function openOrder(product, price){

    modal.style.display = "flex";

    productName.innerHTML =
    "Ordering: " + product +
    "<br>Price: Rs. " + price;

    productInput.value = product;
    priceInput.value = "Rs. " + price;

    document.body.style.overflow = "hidden";
}

// Close Order Popup

function closeOrder(){

    modal.style.display = "none";

    document.body.style.overflow = "auto";
}

// ===== CART SYSTEM =====

let cart = [];

// Add Product To Cart

function addCart(name, price){

    cart.push({
        name: name,
        price: price
    });

    document.getElementById("cartCount").innerHTML = cart.length;

    alert(name + " Added To Cart 🛒");
}

// Open Cart

function openCart(){

    let box = document.getElementById("cartItems");

    if(cart.length === 0){

        box.innerHTML = "<p>Your cart is empty</p>";

    }else{

        box.innerHTML = "";

        cart.forEach(item => {

            box.innerHTML += `
            <p>
                ${item.name} - Rs ${item.price}
            </p>
            `;

        });

    }

    document.getElementById("cartModal").style.display = "flex";
}

// Close Cart

function closeCart(){

    document.getElementById("cartModal").style.display = "none";
}

// Close Modal When Click Outside

window.onclick = function(event){

    if(event.target == modal){

        closeOrder();
    }

    if(event.target == document.getElementById("cartModal")){

        closeCart();
    }
}
