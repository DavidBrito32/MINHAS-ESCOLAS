const addElement = () => {
    const container = document.getElementById('container');
    container.innerHTML += `<article class="item" onclick="removeItem(event)"></article>`;
}

function removeItem(event){
    const itemRemover = event.target; //estou pegando a localizacao -> apos isso o target me retorna o elemento mais proximo do click
    itemRemover.remove();
    console.log(itemRemover);
}