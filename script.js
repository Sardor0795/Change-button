const button = document.querySelector("button");

const width = document.querySelector(".width");
const height = document.querySelector(".height");
const bgColor = document.querySelector(".bgColor");
const color = document.querySelector(".color");
const fSize = document.querySelector(".fSize");
const padding = document.querySelector(".padding");
const bWidth = document.querySelector(".bWidth");
const bStyle = document.getElementById("bStyle");
const fStyle = document.getElementById("fStyle");
const fWeight = document.getElementById("fWeight");
const position = document.getElementById("position");
const cursor = document.getElementById("cursor");
const bColor = document.querySelector(".bColor");
const tContent = document.querySelector(".tContent");
const pTop = document.querySelector(".pTop");
const pLeft = document.querySelector(".pLeft");
const bRadius = document.querySelector(".bRadius");

// Input Func

width.addEventListener("input", () => {
  button.style.width = width.value + "px";
});
height.addEventListener("input", () => {
  button.style.height = height.value + "px";
});
fSize.addEventListener("input", () => {
  button.style.fontSize = fSize.value + "px";
});
padding.addEventListener("input", () => {
  button.style.padding = padding.value + "px";
});
bWidth.addEventListener("input", () => {
  button.style.borderWidth = bWidth.value + "px";
});
tContent.addEventListener("input", () => {
  button.textContent = tContent.value;
});
pTop.addEventListener("input", () => {
  button.style.top = pTop.value + "px";
});
pLeft.addEventListener("input", () => {
  button.style.left = pLeft.value + "px";
});
bRadius.addEventListener("input", () => {
  button.style.borderRadius = bRadius.value + "px";
});

// Change Func

bgColor.addEventListener("change", () => {
  button.style.backgroundColor = bgColor.value;
});
color.addEventListener("change", () => {
  button.style.color = color.value;
});
bStyle.addEventListener("change", () => {
  button.style.borderStyle = bStyle.value;
});
bColor.addEventListener("change", () => {
  button.style.borderColor = bColor.value;
});
fStyle.addEventListener("change", () => {
  button.style.fontStyle = fStyle.value;
});
fWeight.addEventListener("change", () => {
  button.style.fontWeight = fWeight.value;
});
position.addEventListener("change", () => {
  button.style.position = position.value;
});
cursor.addEventListener("change", () => {
  button.style.cursor = cursor.value;
});

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
  width.value = "";
  height.value = "";
  bgColor.value = "";
  color.value = "";
  fSize.value = "";
  padding.value = "";
  bWidth.value = "";
  bStyle.value = "";
  fStyle.value = "";
  fWeight.value = "";
  position.value = "";
  cursor.value = "";
  bColor.value = "";
  tContent.value = "";
  pTop.value = "";
  pLeft.value = "";
  bRadius.value = "";
  button.style = "";
});

// onClick func

// button.addEventListener("click", () => {
//   button.style = `

//     width: ${width.value}px;
//     height: ${height.value}px;
//     background-color: ${bgColor.value};
//     color: ${color.value};
//     font-size: ${fSize.value}px;
//     padding: ${padding.value}px;
//     border-width: ${bWidth.value}px;
//     border-style: ${bStyle.value};
//     font-style: ${fStyle.value};
//     font-weight: ${fWeight.value};
//     position: ${position.value};
//     cursor: ${cursor.value};
//     border-color: ${bColor.value};
//     top: ${pTop.value}px;
//     left: ${pLeft.value}px;
//     border-radius: ${bRadius.value}px;

//     `;
//   button.textContent = tContent.value;
// });
