

const DOMSelectors = {
    formA: document.querySelector(".formA"),
    formB: document.querySelector(".formB"),
    button: document.querySelector("button"),
    input: document.querySelector("input"),
    card: document.querySelector(".card"),
    cardTitle: document.querySelector("h2"),
    cardImage: document.querySelector("img"),
    cardDesc: document.querySelector("p"),
}


DOMSelectors.formA.addEventListener("submit", function(event) {
    event.preventDefault();

}
)

function addCard() {
    DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        ''
    )
}