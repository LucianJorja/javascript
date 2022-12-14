
const cart = [];

const sortCheaperToExpensive = () =>{
    products.sort ((a,b) => a.price - b.precio)
    showSortedList()
}

const showSortedList = () => {
    const sortedList = products.map (product => {
        return '- '+product.name+' $'+product.price
    });
    alert('Lista de precios'+'\n'+sortedList.join('\n'));
    buyProducts(sortedList);
}

const buyProducts = (productsList) =>{

    let keepBuying;
    let productName = '';
    let productQuantity = 0;

    do{
        productName = prompt('¿Qué producto desea añadir?'+'\n\n'+productsList.join('\n'));
        productQuantity = parseInt(prompt('¿Cúantos queres añadir?'));

        const product = products.find(product => product.name.toLowerCase() === productName.toLowerCase());

        if (product) {
            addToTheCart(product, product.id, productQuantity);
        }else{
            alert('El producto no se encuentra en el catálogo.');
        }

        keepBuying = confirm('¿Desea añadir otro producto?')
    }while(keepBuying);
    
    confirmPurchase();
}

const addToTheCart = (product, productId, productQuantity) => {
    const repeatedProduct = cart.find(product => product.id === productId);
    if(repeatedProduct){
        repeatedProduct.quantity += productQuantity
    }else{
        product.quantity += productQuantity;
        cart.push(product)
    }
    console.log(cart);
}

const confirmPurchase = () => {
    const productsList = cart.map (product => {
        return '- '+product.name+' - Cantidad: '+ product.quantity
    });

    const confirmP = confirm('Checkout: '
        +'\n\n'+productsList.join('\n')
        +'\n\nPresione "Aceptar" si desea continuar la compra, presione "Cancelar" para cancelar la compra.'
    );
    
    if(confirmP){
        endPurchase(productsList);
    }
};


const endPurchase = (productsList) => {
    const totalQuantity = cart.reduce((acc, element) => acc + element.quantity, 0);
    const totalPrice = cart.reduce((acc, element) => acc + (element.price * element.quantity), 0);
    
    // let totalPurchase = calculateIva(totalPrice);

    alert('Detalles de tu compra:'
    +'\n\n'+productsList.join('\n')
    +'\n\nTotal de productos: '+totalQuantity
    +'\n\nEl total de tu compra es: '+totalPrice
    );

}

// const calculateIva = (productsList) =>{
//     const add =  (a, b) => a + b;
//     const substract = (a,b) => a - b;

//     let calculateIva = x => x * 1.21;

//     let productPrice = productsList;
//     let discountPrice = productsList * 0.80;

//     const iva = calculateIva(productPrice);
//     const priceWithIva = add(productPrice, iva);
//     const totalPurchase = substract(priceWithIva, discountPrice)
//     return totalPurchase;
// }

sortCheaperToExpensive()



