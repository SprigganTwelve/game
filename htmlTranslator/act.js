let input = document.querySelector("input");
let button = document.querySelector("button");
let divElement = document.querySelector(".stockElement");

button.addEventListener("click", () => {
  divElement.innerHTML = "";
  divElement.innerHTML = input.value;
});

button.addEventListener("keydown", (it) => {
  if (it == "Enter") {
    divElement.innerHTML = "";
    divElement.innerHTML = input.value;
  }
});
