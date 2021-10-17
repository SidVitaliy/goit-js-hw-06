function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  span: document.querySelector(".color"),
  changeBtn: document.querySelector(".change-color"),
}

refs.changeBtn.addEventListener("click", () => {
  let color = getRandomHexColor();
  refs.span.textContent = color;
  document.body.style.backgroundColor = color;
})