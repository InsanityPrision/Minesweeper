import { createMainContainer } from "./ui/mainContaienr/index.js";

const mainContainer = createMainContainer();

document.body.appendChild(mainContainer);

const boxButton = document.querySelectorAll(".box__box-button");

const onlyMinesInactive = () => {
  const minesTotal = document.querySelectorAll(".mine").length;
  const inactiveTotal = document.querySelectorAll(".inactive").length;

  if (minesTotal === inactiveTotal) {
    const gameOverWarning = document.createElement("div");
    gameOverWarning.classList.add("you-win");
    gameOverWarning.textContent = "Congratulations you win!!";

    mainContainer.appendChild(gameOverWarning);
  }
};

if (!boxButton) {
  throw new Error("Button does not exist");
}

boxButton.forEach((button) => {
  button.addEventListener("click", (evet) => {
    evet.preventDefault();

    button.classList.add("active");

    if (button.children.namedItem("mine")) {
      const gameOverWarning = document.createElement("div");
      gameOverWarning.classList.add("warning");
      gameOverWarning.textContent = "Game Over";

      mainContainer.appendChild(gameOverWarning);
    }
  });
});

const boxes = document.querySelectorAll(".box");

if (!boxes) {
  throw new Error("Box does not exist");
}

boxes.forEach((box) => {
  box.addEventListener("click", (evet) => {
    evet.preventDefault();

    box.classList.replace("inactive", "active");
    onlyMinesInactive();
  });
});
