document.addEventListener('DOMContentLoaded', () => {
    paintProducts();

    if (localStorage.getItem('carrito')) {
        cart = getCartFromStorage()
            loadCart(cart);
            loadCartTotal(cart);
        }
    
})