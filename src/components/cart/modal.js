const modalContainer = document.querySelector('.modal-container');
const openCart = document.querySelector('#shop-cart');
const closeCart = document.querySelector('#btn-close-cart');
const modalCart = document.querySelector('.modal-cart');

openCart.addEventListener('click', () => {
    modalContainer.classList.toggle('modal-active')
});

closeCart.addEventListener('click', () => {
    modalContainer.classList.toggle('modal-active')
});

modalContainer.addEventListener('click', () => {
    closeCart.click()
});

modalCart.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.classList.contains('delete-button')) {
        deleteProductFromCart(e.target.value);
    }
});