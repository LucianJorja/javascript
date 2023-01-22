const paintProducts = async () => {
    const container = document.getElementById('product-container')

    const data = await productsController()

    data.forEach( product => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML += `<div class="card-image">
                            <img src="${product.img}">
                            <span class="card-title">${product.name}</span>
                            <a class="btn-floating btn-medium right waves-effect waves-light blue"><i id=${product.id} class="material-icons add">add</i></a>    
                        </div>
                        <div class="card-content">
                            <p>Talle "${product.size}"</p>
                            <p>$ ${product.price}</p>
                        </div>
                    `
        container.appendChild(div)
    });
};
