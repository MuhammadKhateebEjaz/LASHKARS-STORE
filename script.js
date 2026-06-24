// ==========================
// ORDER MODAL
// ==========================

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

// ==========================
// CART SYSTEM
// ==========================

let cart = [];

// Add To Cart

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

        box.innerHTML = `
        <p>Your cart is empty</p>
        `;

    }else{

        let total = 0;

        box.innerHTML = "";

        cart.forEach((item,index)=>{

            total += Number(item.price);

            box.innerHTML += `
            <div class="cart-item">

                <p>
                    ${item.name} - Rs ${item.price}

                    <button onclick="removeItem(${index})">
                        ❌
                    </button>

                </p>

            </div>
            `;

        });

        box.innerHTML += `
        <hr>

        <h3 style="margin-top:15px;">
            Total: Rs ${total}
        </h3>

        <button onclick="checkoutCart()">
            Checkout 🚀
        </button>
        `;
    }

    document.getElementById("cartModal").style.display = "flex";
}

// Close Cart

function closeCart(){

    document.getElementById("cartModal").style.display = "none";
}

// Remove Item

function removeItem(index){

    cart.splice(index,1);

    document.getElementById("cartCount").innerHTML = cart.length;

    openCart();
}

// WhatsApp Checkout

function checkoutCart(){

    if(cart.length === 0){

        alert("Cart is Empty");

        return;
    }

    let message = "🛒 LASHKARS STORE ORDER%0A%0A";

    let total = 0;

    cart.forEach(item=>{

        message +=
        item.name +
        " - Rs " +
        item.price +
        "%0A";

        total += Number(item.price);

    });

    message += "%0A💰 Total: Rs " + total;

    // اپنا WhatsApp نمبر لگاؤ

    let whatsappNumber = "923496550742";

    window.open(
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        message,
        "_blank"
    );
}

// ==========================
// CLOSE MODALS ON OUTSIDE CLICK
// ==========================

window.onclick = function(event){

    if(event.target == modal){

        closeOrder();
    }

    if(event.target ==
        document.getElementById("cartModal")){

        closeCart();
    }
}
