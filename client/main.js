document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.setAttribute("id", "container");
  document.querySelector("body").appendChild(container);

  const divBoxContainer = document.createElement("div");
  divBoxContainer.setAttribute("id", "divBoxContainer");
  container.append(divBoxContainer);
  divBoxContainer.style.textAlign = "center";

  const title = document.createElement("h1");
  title.innerText = "To Do List";
  divBoxContainer.appendChild(title);

  // create input todo add
  const lineSpan = document.createElement('span');
  lineSpan.setAttribute('class','lineSpan');
  divBoxContainer.appendChild(lineSpan);

  const inputAddList = document.createElement("input");
  inputAddList.setAttribute("class", "inputDiv");
  lineSpan.append(inputAddList);

  const inputButton = document.createElement('input');
  inputButton.setAttribute('id', 'inputButton');
  inputButton.setAttribute('type', 'submit');
  inputButton.setAttribute('value', 'ADD');
  inputButton.setAttribute('label', 'text');
  lineSpan.append(inputButton)
  




})