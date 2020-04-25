window.onload = () => {
  const gridMap = document.getElementById("hex-grid") as HTMLDivElement;
  const column = parseInt(gridMap.dataset["column"]) ?? 10;
  const row = parseInt(gridMap.dataset["row"]) ?? 5;

  for (let r = 0; r < row; r++) {
    const rowClsDiv = document.createElement("div");
    rowClsDiv.classList.add("row");

    for (let c = 0; c < column; c++) {
      const hexDiv = createHexDivElement();
      hexDiv.classList.add("hex");
      rowClsDiv.appendChild(hexDiv);
    }

    gridMap.appendChild(rowClsDiv);
  }
};

function createHexDivElement(): HTMLDivElement {
  const hexDiv = document.createElement("div");
  const hexLeft = document.createElement("div");
  hexLeft.classList.add("left");
  hexDiv.appendChild(hexLeft);
  const hexMiddle = document.createElement("div");
  hexMiddle.classList.add("middle");
  hexDiv.appendChild(hexMiddle);
  const hexRight = document.createElement("div");
  hexRight.classList.add("right");
  hexDiv.appendChild(hexRight);
  return hexDiv;
}
