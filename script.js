
const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("subscribe");
const backdropEl = document.getElementById("backdrop");
const mainSectionEl = document.getElementById("mainSection");
const prgEl = document.getElementById("prg");


buttonEl.addEventListener("click", (event) => {
 event.preventDefault(event);
  backdropEl.classList.remove("hidden");
  mainSectionEl.classList.add("hidden");
  
 prgEl.textContent = inputEl.value;

});