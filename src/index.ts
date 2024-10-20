import { createMainContainer } from "./ui/mainContaienr/index.js";

const mainContainer = createMainContainer();

document.body.appendChild(mainContainer);

const boxButton = document.querySelectorAll(".box__box-button");

if (!boxButton) {
  throw new Error("Button does not exist");
}

boxButton.forEach((button) => {
  button.addEventListener("click", (evet) => {
    evet.preventDefault();

    button.classList.add("active");
  });
});
