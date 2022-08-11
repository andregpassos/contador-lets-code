let buttonPlus = document.getElementById("buttonPlus");
let buttonMinus = document.getElementById("buttonMinus");
let textCont = document.getElementById("textContador");

let contador = localStorage.getItem('contador');

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('contador') !== null) 
    textCont.textContent = localStorage.getItem('contador');
})

function updateTextContador() {
  textCont.style.color = "#6d4b02";
  localStorage.setItem('contador', contador);
  textCont.textContent = localStorage.getItem('contador');
}

function addContador() {
  if (contador > 9) {
    textCont.style.color = "red";
    alert("Contador atingiu o valor máximo!");
    return;
  }
  contador++;
  updateTextContador();
}

function subContador() {
  if (contador < -9) {
    textCont.style.color = "red";
    alert("Contador atingiu o valor mínimo!");
    return;
  }
  contador--;
  updateTextContador();
}

buttonPlus.addEventListener('click', () => addContador());
buttonMinus.addEventListener('click', () => subContador());

function resetContador() {
  contador = 0;
  updateTextContador();
}