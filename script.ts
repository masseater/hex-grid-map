window.onload = () => {
  setHexGrid("hex-grid");
};

function setHexGrid(id: string) {
  const gridMap = document.getElementById(id) as HTMLDivElement;
  const column = parseInt(gridMap.dataset["column"]) ?? 10;
  const row = parseInt(gridMap.dataset["row"]) ?? 5;

  for (let r = 0; r < row; r++) {
    const rowClsDiv = document.createElement("div");
    rowClsDiv.classList.add("row");

    let offset = 0;
    if (r % 2 != 0) {
      rowClsDiv.classList.add("even");
      offset = 1;
    }

    for (let c = 0; c < column - offset; c++) {
      const hexDiv = createHexDivElement();
      hexDiv.classList.add("hex");
      rowClsDiv.appendChild(hexDiv);
    }

    gridMap.appendChild(rowClsDiv);
  }
}

function createHexDivElement(): HTMLDivElement {
  const hexDiv = document.createElement("div");
  hexDiv.appendChild(createHaveClassDivElement("top"));
  hexDiv.appendChild(createHaveClassDivElement("middle"));
  hexDiv.appendChild(createHaveClassDivElement("bottom"));
  return hexDiv;
}

function createHaveClassDivElement(name: string) {
  const div = document.createElement("div");
  div.classList.add(name);
  return div;
}
