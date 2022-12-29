let cart = [];

const productContainer = document.getElementById('product-container');

productContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('add')) {
        validateProductsInCart(event.target.id)
    }
});

const validateProductsInCart = (productId) => {
    const duplicatedProduct = cart.find(product => product.id == productId);

    if (!duplicatedProduct) {
        const product = products.find(product => product.id == productId);
        cart.push(product);
        paintCartProduct(product);
        loadCartTotal(cart);
    } else {
        duplicatedProduct.quantity++
        loadCartTotal(cart);
    }
};

const paintCartProduct = (product) => {
    const container = document.getElementById('cart-container');
    const div = document.createElement('div');
    div.classList.add('productInCart');
    div.innerHTML =`
        <p>${product.name}</p>
        <p>Precio: $${product.price}</p>
        <p id=cantidad${product.id}>Cantidad: ${product.quantity}</p>
        <button class="btn waves-effect waves-ligth delete-button" value="${product.id}">X</button>
    `
    container.appendChild(div);
};

const loadCartTotal = (cart) => {
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPurchase= cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    paintCartTotal(totalQuantity, totalPurchase);
    saveCartOnStorage(cart);
};

const paintCartTotal = (totalQuantity, totalPurchase) => {
    const cartCounter = document.getElementById('cart-counter');
    const totalPrice = document.getElementById('totalPrice');

    cartCounter.innerText = totalQuantity;
    totalPrice.innerText = totalPurchase;
};

const deleteProductFromCart = (productId) => {
    const productIndex= cart.findIndex(product => product.id == productId);
    cart.splice(productIndex, 1);

    loadCart(cart);
    loadCartTotal(cart);
};

const loadCart = (cart) => {
    const container = document.getElementById('cart-container');
    
    container.innerHTML= '';

    cart.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('productInCart');
        div.innerHTML= `
            <p>${product.name}</p>
            <p>Precio: $${product.price}</p>
            <p id=cantidad${product.id}>Cantidad: ${product.quantity}</p>
            <button class="btn rightwaves-effect waves-ligth delete-button" value="${product.id}">X</button>
        `
        container.appendChild(div);
    });
};

const saveCartOnStorage = (cart) => {
    localStorage.setItem('carrito', JSON.stringify(cart));
};
const getCartFromStorage = () => {
    const cartStorage = JSON.parse(localStorage.getItem('carrito'));
    return cartStorage;
};

