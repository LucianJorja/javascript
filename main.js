
const buyProducts = ()  => {
    let product = ''
    let quantity = 0;
    let price= 0;
    let totalPurchase = 0;
    let keepBuying = false

    do{
        product = prompt('¿Querés comprar remera, pantalón, buso, campera o los cuatro productos?')
        quantity = parseInt(prompt('¿Cuántos queres comprar?'));
        let validatedQuantity = validateQuantity(quantity);
        
        switch (product) {
            case 'remera':
                price = 2200
                break;
            case 'pantalón':
                price = 3100
                break;
            case 'buso':
                price = 4300
                break;
            case 'campera':
                price = 3500
                break;
            case 'los cuatro productos':
                price = 13100
                    break;
            default:
                alert('Ingresaste un producto que no está a la venta.')
                price = 0
                validatedQuantity = 0
        }
        
        totalPurchase += price * validatedQuantity;

        keepBuying = confirm('¿Quiere seguir comprando?')
    } while (keepBuying);


    const totalWithDiscount = applyDiscount(totalPurchase);
    calculateDelivery(totalWithDiscount);
    const totalPrice = calculateIva(totalPurchase);

};

const validateQuantity = (quantity) => {
    while (Number.isNaN (quantity) || quantity <= 0) { 
        if (quantity <= 0 ) {
            alert('Debe ingresar un número válido.')
        } else {
            alert('Debe ingresar un número')
        }
        quantity = parseInt(prompt('¿Cuántos queres comprar'));
        
    }
    return quantity;
};

const applyDiscount = (totalPurchase) => {
    let totalWithDiscount = 0;

    if (totalPurchase >= 12000){
         totalWithDiscount = totalPurchase * 0.90
        return totalWithDiscount;
    } else {
        return totalPurchase;
    }


};


const calculateDelivery = (totalPurchase) => {
    let deliveryToAdress = false
    
    deliveryToAdress = confirm('¿Querés envío a domicilio?')

    if (deliveryToAdress && totalPurchase >= 8000) {
        alert('Tiene envío gratis a domicilio. El total de tu compra es $'+ totalPurchase)
    } else if (deliveryToAdress && totalPurchase < 8000 && totalPurchase !== 0) {
        totalPurchase += 1800;
        alert('El total de tu compra, más envío, es $' +totalPurchase)
    }else{
        alert('El total de tu compra es $' +totalPurchase)
    }
}

const calculateIva = (totalPurchase) =>{
    const add =  (a, b) => a + b;
    const substract = (a,b) => a - b;

    const calculateIva = x => x * 0.21;

    let productPrice = totalPurchase;
    let discountPrice = totalPurchase * 0.80;

    const iva = calculateIva(productPrice);
    const priceWithIva = add(productPrice, iva);
    const totalPrice = substract(priceWithIva, discountPrice)
    return totalPrice;
}


    buyProducts ()