import { createBoardContainer } from "../board/index.js";

export const createMainContainer = (): HTMLElement => {
  const mainContainer = document.createElement("main");
  mainContainer.classList.add("main-container");

  mainContainer.appendChild(createBoardContainer());

  return mainContainer;
};
