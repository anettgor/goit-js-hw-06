function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let initialValue = 30;

const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const destroyBtn = document.querySelector("[data-destroy]");
const createBtn = document.querySelector("[data-create]");

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    const newDivs = document.createElement("div");
    Object.assign(newDivs.style, {
      backgroundColor: getRandomHexColor(),
      height: `${initialValue}px`,
      width: `${initialValue}px`,
    });
    // alternative option for Object.assign
    //newDivs.style.backgroundColor = getrandomHexColor()
    //newDivs.style.height = `${initialValue}px`
    //newDivs.style.width = `${initialValue}px`
    initialValue += 10;
    boxes.appendChild(newDivs);
  }
};

const destroyBoxes = () => {
  initialValue = 30;
  boxes.innerHTML = "";
  input.value = "";
};

createBtn.addEventListener("click", () => {
  createBoxes(input.value);
});

destroyBtn.addEventListener("click", destroyBoxes);
