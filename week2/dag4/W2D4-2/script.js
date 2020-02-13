// add anmial
const addLionToSpotted = function(event) {
    const animalClicked = event.target.id;
    const newLi = document.createElement("li");
    const writeLion = document.createTextNode(animalClicked);
    newLi.appendChild(writeLion);  
    document.getElementById("spotted-animals-list").appendChild(newLi);
}



// remove all
const removeAll = function () {
    const list = document.getElementById("spotted-animals-list");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
}}

// remove first
const removeFirst = function () {
    const list = document.getElementById("spotted-animals-list");
    list.removeChild(list.childNodes[0]);
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("remove-first-item-button").addEventListener("click", removeFirst);

    document.getElementById("remove-all-button").addEventListener("click", removeAll);

    const animalButtons = document.querySelectorAll("li");
    animalButtons.forEach(function(animalButton) {
    animalButton.addEventListener("click", addLionToSpotted)
});
});