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
        updateCartTotal(cart);
    } else {
        duplicatedProduct.quantity++
        updateCartTotal(cart);
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

const updateCartTotal = (cart) => {
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
    
    if(endPurchase){
        
    }

    updateCart(cart);
    updateCartTotal(cart);
};

const updateCart = (cart) => {
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

const endPurchase = document.querySelector('.endPurchase');

if(endPurchase){
    endPurchase.addEventListener('click', sendPurchase)
}

function sendPurchase(e){
    e.preventDefault()
    
    if (cart ==''){
        Swal.fire({
            icon: 'error',
            title: 'No hay ningún producto en el carrito!',
            text: 'Debe agregar un producto al carrito!',
        })
    }else{
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Gracias por su compra!',
            text: 'Su compra ha sido realizada correctamente!',
            showConfirmButton: false,
            timer: 2500
        })
        setTimeout(() =>{
            window.location.reload();
        }, 3000);
    }
    localStorage.clear();
}