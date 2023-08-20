//Usando typescript
var list = document.querySelector('#lista');
var showUser = function () {
    try {
        fetch('https://fakestoreapi.com/users')
            .then(function (response) { return response.json(); })
            .then(function (response) { return response.map(function (item) {
            list.innerHTML += "\n            <li title=\"".concat(item.username, "\">\n            <img src=\"images/transferir.jpeg\" alt=\"\">\n            <h4><strong>Nome:</strong> ").concat(item.name.firstname, "</h4>\n            <h4><strong>Sobrenome:</strong> ").concat(item.name.lastname, "</h4>\n            <a href=\"mailto:").concat(item.email, "\">\n              <p><strong>E-mail:</strong> ").concat(item.email, " </p>\n            </a>\n            <a href=\"").concat(item.phone, "\">\n              <p><strong>Telefone:</strong> ").concat(item.phone, "</p>\n            </a>\n            <a href=\"#!\"><strong>Localiza\u00E7\u00E3o:</strong> <address>Endere\u00E7o: ").concat(item.address.city, ", ").concat(item.address.street, ", ").concat(item.address.number, ", ").concat(item.address.zipcode, "</address>\n            </a>\n            <a id=\"btn\" href=\"https://www.google.com/maps?q=").concat(item.address.geolocation.lat, ",").concat(item.address.geolocation.long, "\" target=\"_blank\">Ir para endere\u00E7o</a>\n          </li>            \n            ");
            console.log(response);
        }); });
    }
    catch (error) {
        console.log(error); //Mostra o erro no terminal do node
    }
};
showUser();
