

const listarProdutos = () => {
    try{
        fetch('https://fakestoreapi.com/products')
        .then(resposta  => resposta.json())
        .then(listaDeProdutos => {
            listaDeProdutos.map(item => {
                //@ts-ignore
                produtos.innerHTML += `
                <li>
                <div class="image">
                  <span><box-icon type='solid' name='heart'></box-icon>
                  ${item.rating.rate}</span>
                  <img src="${item.image}" alt="">
                </div>
                <h4>${item.title}</h4>
                <h5>${item.category}</h5>
                <p>${item.description}</p>
                <h6>R$:${item.price}</h6>
                <a href="#!">Comprar</a>
              </li>

                `;
            })   
        })



    }catch (error){
       alert(`Error: ${error.message}`);
    }
}

const listarCategorias = () => {
    try{
        fetch('https://fakestoreapi.com/products/categories')
        .then(resposta => resposta.json())
        .then(listaDeCategorias => {
            listaDeCategorias.map(item => {
                //@ts-ignore
                filtro.innerHTML += `<option>${item}</option>`
            })
        })
    }catch (erro) {
        alert(`Erro: ${erro.message}`)
    }
}

listarProdutos();
listarCategorias();