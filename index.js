

const DOMSelectors = {
    container: document.querySelector(".container"),
    formA: document.querySelector(".formA"),
    formB: document.querySelector(".formB"),
    button: document.querySelectorAll("button"),
    inputN: document.querySelector(".inputN"),
    inputI: document.querySelector(".inputI"),
    inputD: document.querySelector(".inputD"),
    inputR: document.querySelector(".inputR"),
    card: document.querySelectorAll(".card"),
    cardTitle: document.querySelectorAll("h2"),
    cardImage: document.querySelectorAll("img"),
    cardDesc: document.querySelector("p"),
}


DOMSelectors.formA.addEventListener("submit", function(event) {
    event.preventDefault();
    let header = DOMSelectors.inputN.value;
    let image = DOMSelectors.inputI.value;
    let desc = DOMSelectors.inputD.value;
    addCard(header, image, desc);
    event.target.reset();
}
)

DOMSelectors.formB.addEventListener("submit", function(event) {
    event.preventDefault();
    let title = DOMSelectors.inputR.value;
    subtractCard(title);
    event.target.reset();
}
)

function addCard(header, image, desc) {
    DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div class="card"><h2>${header}</h2><img src="${image}" alt="Some Image" class="image"><p class="info">${desc}</p></div>`
    )
}

function subtractCard(header) {
    let cardTitle = Array.from(DOMSelectors.cardTitle)
    console.log(cardTitle[0])
}