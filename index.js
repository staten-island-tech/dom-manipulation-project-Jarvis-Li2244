
const DOMSelectors = {
    container: document.querySelector(".container"),
    form: document.querySelector("form"),
    inputN: document.querySelector(".inputN"),
    inputI: document.querySelector(".inputI"),
    inputD: document.querySelector(".inputD"),
}

removeButton()

DOMSelectors.form.addEventListener("submit", function(event) {
    event.preventDefault();
    createButton();
    removeButton();
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
    let buttons = document.querySelectorAll(".buttonR")
    buttons.forEach(button => button.addEventListener("click", function(event) {
        event.target.parentElement.remove()
    }))
}

function addCard(header, image, desc) {
    DOMSelectors.container.insertAdjacentHTML(
        "afterbegin",
        `<div class="card">
            <h2>${header}</h2>
            <div class="imageholder">
                <img src="${image}" alt="Desired Image" class="image">
            </div>
            <div class="textholder">
                <p class="info">${desc}</p>
            </div>
            <button class="buttonR">Remove Card</button>
        </div>`
    )
}
