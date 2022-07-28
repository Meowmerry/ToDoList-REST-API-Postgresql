document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.setAttribute("id", "container");
  document.querySelector("body").appendChild(container);

 




  // create input todo add
  const divBoxContainer = document.createElement("div");
  divBoxContainer.setAttribute("id", "divBoxContainer");
  container.append(divBoxContainer);
  divBoxContainer.style.textAlign = "center";

  const title = document.createElement("h1");
  title.innerText = "To Do List";
  divBoxContainer.appendChild(title);

  
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


   // create input todo edit
   const divBoxContainerEdit = document.createElement("div");
   divBoxContainerEdit.setAttribute("id", "divBoxContainerEdit");
   container.append(divBoxContainerEdit);
   divBoxContainerEdit.style.textAlign = "center";

   const lineSpan1 = document.createElement('span');
   lineSpan.setAttribute('class','lineSpan1');
   divBoxContainerEdit.appendChild(lineSpan1);
 
   const inputEdit = document.createElement("input");
   inputEdit.setAttribute("class", "inputEdit");
   lineSpan1.append(inputEdit);
 
   const inputButtonEdit = document.createElement('input');
   inputButtonEdit.setAttribute('id', 'inputButtonEditEdit');
   inputButtonEdit.setAttribute('type', 'submit');
   inputButtonEdit.setAttribute('value', 'EDIT');
   inputButtonEdit.setAttribute('label', 'text');
   lineSpan1.append(inputButtonEdit)
  




})