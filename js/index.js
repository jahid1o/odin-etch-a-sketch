let gridContainer = document.querySelector("#grid-container")

function createGrid(size) {
    // dividing size by 600 because #grid-container size is 600x600 pixels using css
    let gridSize = (600 / size)
    for (let row = 0; row < size; row++) {

        for (let column = 0; column < size; column++) {
            let columnGrid = document.createElement("div")
            columnGrid.style.cssText = `width: ${gridSize}; height: ${gridSize};`

            columnGrid.addEventListener("mouseover", () => {
                columnGrid.style.cssText += "background-color: grey;"
            })
            gridContainer.appendChild(columnGrid)
        }
    }
}

function clearGrid() {
    gridContainer.querySelectorAll("div").forEach(element => {
        element.remove()
    });
}

createGrid(16)

const resizeBtn = document.querySelector("#grid-resize-btn")

resizeBtn.addEventListener("click", () => {
    let userInput = Number(prompt("Please enter grid size (only numbers between 16 and 100)"))
    
    while (isNaN(userInput) || userInput < 16 || userInput > 100) {
        userInput = Number(prompt("Please enter grid size (only numbers between 16 and 100)"))
    }
    clearGrid()
    createGrid(userInput)
})

const borderCheckbox = document.querySelector("#border-checkbox")

borderCheckbox.addEventListener("click", () => {
    if (borderCheckbox.checked) {
        gridContainer.classList.add("grid-child-border")
    } else if (!borderCheckbox.checked) {
        gridContainer.classList.remove("grid-child-border")
    }
})