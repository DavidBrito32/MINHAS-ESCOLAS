var listarProdutos = function () {
    try {
        fetch('https://fakestoreapi.com/products')
            .then(function (resposta) { return resposta.json(); })
            .then(function (listaDeProdutos) {
            listaDeProdutos.map(function (item) {
                //@ts-ignore
                produtos.innerHTML += "\n                <li>\n                <div class=\"image\">\n                  <span><box-icon type='solid' name='heart'></box-icon>\n                  ".concat(item.rating.rate, "</span>\n                  <img src=\"").concat(item.image, "\" alt=\"\">\n                </div>\n                <h4>").concat(item.title, "</h4>\n                <h5>").concat(item.category, "</h5>\n                <p>").concat(item.description, "</p>\n                <h6>R$:").concat(item.price, "</h6>\n                <a href=\"#!\">Comprar</a>\n              </li>\n\n                ");
            });
        });
    }
    catch (error) {
        alert("Error: ".concat(error.message));
    }
};
var listarCategorias = function () {
    try {
        fetch('https://fakestoreapi.com/products/categories')
            .then(function (resposta) { return resposta.json(); })
            .then(function (listaDeCategorias) {
            listaDeCategorias.map(function (item) {
                filtro.innerHTML += "<option>".concat(item, "</option>");
            });
        });
    }
    catch (erro) {
        alert("Erro: ".concat(erro.message));
    }
};
listarProdutos();
listarCategorias();
