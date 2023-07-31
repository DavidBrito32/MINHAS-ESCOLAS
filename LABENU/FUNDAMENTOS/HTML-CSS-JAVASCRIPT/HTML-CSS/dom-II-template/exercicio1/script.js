const lia = document.createElement("li");
const liaDois = document.createElement("li");
lia.innerHTML = "Item 0";
liaDois.innerHTML = "Item 5";

lista.insertAdjacentElement("afterbegin", lia);
lista.insertAdjacentElement("beforeend", liaDois);