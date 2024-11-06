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
};