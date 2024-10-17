
const DOMSelectors = {
    container: document.querySelector(".container"),
    form: document.querySelector("form"),
    buttonC: document.querySelector(".buttonC"),
    buttonR: document.querySelector(".buttonR"),
    inputN: document.querySelector(".inputN"),
    inputI: document.querySelector(".inputI"),
    inputD: document.querySelector(".inputD"),
    inputR: document.querySelector(".inputR"),
    card: document.querySelector(".card"),
    cardTitle: document.querySelector("h2"),
    cardImage: document.querySelector("img"),
    cardText: document.querySelector(".textholder"),
    cardDesc: document.querySelector("p"),
}


DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (event.submitter === DOMSelectors.buttonC) {
        createButton();
    } else {
        removeButton();
    }
    event.target.reset();
}
)


function createButton() {
    let header = DOMSelectors.inputN.value;
    let image = DOMSelectors.inputI.value;
    let desc = DOMSelectors.inputD.value;
    addCard(header, image, desc);
}

function removeButton() {
    let card = document.querySelector(".card");
    let title = document.querySelector("h2");
    let img = document.querySelector("img");
    let text = document.querySelector(".textholder");
    let para = document.querySelector("p");
    subtractCard(card, title, img, text, para);
}


function addCard(header, image, desc) {
    DOMSelectors.container.insertAdjacentHTML(
        "afterbegin",
        `<div class="card">
            <h2>${header}</h2>
            <img src="${image}" alt="Desired Image" class="image">
            <div class="textholder">
                <p class="info">${desc}</p>
            </div>
        </div>`
    )
}

function subtractCard(card, title, img, text, para) {
    card.remove();
    title.remove();
    img.remove();
    text.remove();
    para.remove();
}