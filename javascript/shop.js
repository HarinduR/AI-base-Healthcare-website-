let cartItems = [];

function addItemToCart(productName, productPrice) {
    cartItems.push({ name: productName, price: productPrice, quantity: 1 });
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartElement = document.getElementById("cartItem");
    if (cartItems.length === 0) {
        cartElement.innerHTML = "Your cart is empty";
    } else {
        cartElement.innerHTML = "";
        cartItems.forEach(item => {
            cartElement.innerHTML += `<div>${item.name} - Rs.${item.price.toFixed(2)} - Quantity: ${item.quantity}
                <button class="removeItem" data-name="${item.name}"><i class="fas fa-trash-alt"></i></button>
                <button class="increaseQuantity" data-name="${item.name}"><i class="fas fa-plus"></i></button>
                <button class="decreaseQuantity" data-name="${item.name}"><i class="fas fa-minus"></i></button>
            </div>`;
        });
    }
    updateTotalCost();
}

function updateTotalCost() {
    let totalCost = cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
    const totalElement = document.getElementById("total");
    totalElement.textContent = `RS ${totalCost.toFixed(2)}`;
}

function removeFromCart(productName) {
    cartItems = cartItems.filter(item => item.name !== productName);
    updateCartDisplay();
}

function increaseQuantity(productName) {
    const item = cartItems.find(item => item.name === productName);
    if (item) {
        item.quantity++;
        updateCartDisplay();
    }
}

function decreaseQuantity(productName) {
    const item = cartItems.find(item => item.name === productName);
    if (item && item.quantity > 1) {
        item.quantity--;
        updateCartDisplay();
    }
}

// Function to show order summary popup
function showOrderSummaryPopup() {
    let orderSummary = "Your Order Summary:\n";
    cartItems.forEach(item => {
        orderSummary += `${item.quantity} ${item.name} at a cost of Rs.${(item.price * item.quantity).toFixed(2)}\n`;
    });
    const totalCost = cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
    orderSummary += `Total bill: Rs.${totalCost.toFixed(2)}`;
    alert(orderSummary);
}

// Add event listeners for buttons
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-secondary')) {
        const productName = event.target.parentElement.querySelector('.product-name').textContent;
        const productPrice = parseFloat(event.target.parentElement.querySelector('.product-price').textContent.replace(/[^\d.-]+/g, ''));
        addItemToCart(productName, productPrice);
        document.getElementById('sidebar').classList.add('active');
    } else if (event.target.classList.contains('removeItem')) {
        const productName = event.target.dataset.name;
        removeFromCart(productName);
    } else if (event.target.classList.contains('increaseQuantity')) {
        const productName = event.target.dataset.name;
        increaseQuantity(productName);
    } else if (event.target.classList.contains('decreaseQuantity')) {
        const productName = event.target.dataset.name;
        decreaseQuantity(productName);
    } else if (event.target.id === 'closeCart') {
        document.getElementById('sidebar').classList.remove('active');
    } else if (event.target.id === 'clearCart') {
        cartItems = [];
        updateCartDisplay();
    } else if (event.target.id === 'continueShopping') {
        showOrderSummaryPopup();
        // Redirect to a new page after showing the popup
        window.location.href = 'newpage.html'; // Change 'newpage.html' to the desired URL
    }
});
