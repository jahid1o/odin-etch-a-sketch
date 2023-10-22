function createGrid(size) {
    let gridContainer = document.querySelector("#grid-container")
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
    document.querySelectorAll("#grid-container > div").forEach(element => {
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