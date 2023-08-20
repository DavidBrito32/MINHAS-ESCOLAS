//Usando typescript

type rating = {
  rate: number;
  count: number;
}

interface produtos {
  title: string;
  category: string;
  description: string;
  price: number;
  image: string;
  id: number;
  rating: rating;
}


let list : any = document.querySelector('#lista');
const showUser = () => {
    try{
        fetch('https://fakestoreapi.com/users')
        .then(response => response.json())
        .then(response => response.map((item) => {
            list.innerHTML += `
            <li title="${item.username}">
            <img src="images/transferir.jpeg" alt="">
            <h4><strong>Nome:</strong> ${item.name.firstname}</h4>
            <h4><strong>Sobrenome:</strong> ${item.name.lastname}</h4>
            <a href="mailto:${item.email}">
              <p><strong>E-mail:</strong> ${item.email} </p>
            </a>
            <a href="${item.phone}">
              <p><strong>Telefone:</strong> ${item.phone}</p>
            </a>
            <a href="#!"><strong>Localização:</strong> <address>Endereço: ${item.address.city}, ${item.address.street}, ${item.address.number}, ${item.address.zipcode}</address>
            </a>
            <a id="btn" href="https://www.google.com/maps?q=${item.address.geolocation.lat},${item.address.geolocation.long}" target="_blank">Ir para endereço</a>
          </li>            
            `
            console.log(response);
        }))      
    }catch (error){
        console.log(error); //Mostra o erro no terminal do node
    }
}

showUser();