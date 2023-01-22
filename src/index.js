document.addEventListener('DOMContentLoaded', () => {
    paintProducts();

    if (localStorage.getItem('carrito')) {
        cart = getCartFromStorage()
            updateCart(cart);
            updateCartTotal(cart);
        }
    
})