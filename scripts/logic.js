// Cart
let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')
// Open Cart
cartIcon.onclick = () => {
    cart.classList.add('active')
}
// Close Cart
closeCart.onclick = () => {
    cart.classList.remove('active')
}

// Cart Logic
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready()
}

// Main Function
function ready(){
    // Remove old items from cart
    var removeCartButtons = document.getElementsByClassName('fa-trash')
    console.log(removeCartButtons)
    for(var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    //Quantity Changes
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for(var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    //Add To Cart
    var addCart = document.getElementsByClassName("buy-item")
    for(var i = 0; i < addCart.length; i++){
        var button = addCart[i]
        button.addEventListener('click', addCartClicked)
    }
    //Buy button work
    document.getElementsByClassName('buy-btn')[0].addEventListener('click', buyButtonClicked);
}
// Buy Button
function buyButtonClicked(){
    alert('Your Order is placed')
    var cartContent = document.getElementsByClassName('cart-content')[0]
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild)
    }
    updateTotal();
}


// Add to Cart
function addCartClicked(event){
    var button = event.target
    var shopProducts = button.parentElement.parentElement.parentElement.parentElement
    var shopProductsImgContainer = button.parentElement.parentElement.parentElement
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText
    var price = shopProducts.getElementsByClassName('price')[0].innerText
    var productImage = shopProductsImgContainer.getElementsByClassName('product-img')[0].src
    addProductToCart(title, price, productImage)
    updateTotal()
}

function addProductToCart(title, price, productImage){
    var cartShopBox = document.createElement("div")
    cartShopBox.classList.add("cart-box")
    var cartItems = document.getElementsByClassName('cart-content')[0]
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title')
    for(var i = 0; i < cartItemsNames.length; i++){
        if(cartItemsNames[i].innerHTML == title){
            alert('You have already add this item to cart')
            return
        }
    }
var cartBoxContent = `
                    <img src="${productImage}" alt="" class="cart-img">
                      <div class="detail-box">
                        <div class="cart-product-title">${title}</div>
                        <div class="cart-price">${price}</div>
                        <input type="number" value="1" class="cart-quantity">
                      </div>
                      <i class="fa-solid fa-trash"></i>`;
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox)
cartShopBox.getElementsByClassName('fa-trash')[0].addEventListener('click', removeCartItem)
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)
}

// Quantity Changed fn
function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updateTotal();
}


// Remove Items From Cart
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updateTotal()
}

// Update Total
function updateTotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0]
    var cartBoxes = cartContent.getElementsByClassName('cart-box')
    var total = 0
    for(var i = 0; i < cartBoxes.length; i++){
        var button = cartBoxes[i]
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName('cart-price')[0]
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace("$", ""))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName('total-price')[0].innerText = '$' + total;
}