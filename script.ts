window.onload = () => {
  const gridMap = document.getElementById("hex-grid") as HTMLDivElement;
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
};

function createHexDivElement(): HTMLDivElement {
  const hexDiv = document.createElement("div");
  const hexTop = document.createElement("div");
  hexTop.classList.add("top");
  hexDiv.appendChild(hexTop);
  const hexMiddle = document.createElement("div");
  hexMiddle.classList.add("middle");
  hexDiv.appendChild(hexMiddle);
  const hexBottom = document.createElement("div");
  hexBottom.classList.add("bottom");
  hexDiv.appendChild(hexBottom);
  return hexDiv;
}
