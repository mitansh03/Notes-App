const generateNotes = document.getElementById("btn");
const noteBox = document.querySelector(".input-box");
const noteContainer = document.querySelector(".notes-container");

generateNotes.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  inputBox.className = "input-box"
  inputBox.style.cssText = `
  
  margin-top = 100px;
`;
  inputBox.setAttribute("contenteditable", "true");
  noteContainer.appendChild(inputBox);
});


