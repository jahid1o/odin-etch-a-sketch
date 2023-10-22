function createGrid(size) {
    let gridContainer = document.querySelector("#grid-container")
    let gridSize = (600 / size)
    for (let row = 0; row < size; row++) {

        for (let column = 0; column < size; column++) {
            let columnGrid = document.createElement("div")
            columnGrid.style.cssText = `width: ${gridSize}; height: ${gridSize};`
            gridContainer.appendChild(columnGrid)
        }
    }
}

function clearGrid() {
    document.querySelectorAll("#grid-container").forEach(element => {
        element.remove()
    });
}

createGrid(16)