let buttonPlus = document.getElementById("buttonPlus");
let buttonMinus = document.getElementById("buttonMinus");
let textCont = document.getElementById("textContador");

let contador = localStorage.getItem('contador');

document.addEventListener('DOMContentLoaded', () => {
  textCont.textContent = localStorage.getItem('contador');
})

function addContador() {
  if (contador > 9) {
    textCont.style.color = "red";
    alert("Contador atingiu o valor máximo!");
    return;
  }
  textCont.style.color = "#6d4b02";
  contador++;
  localStorage.setItem('contador', contador);
  textCont.textContent = localStorage.getItem('contador');
}

function subContador() {
  if (contador < -9) {
    textCont.style.color = "red";
    alert("Contador atingiu o valor mínimo!");
    return;
  }
  textCont.style.color = "#6d4b02";
  contador--;
  localStorage.setItem('contador', contador);
  textCont.textContent = localStorage.getItem('contador');
}

buttonPlus.addEventListener('click', () => addContador());
buttonMinus.addEventListener('click', () => subContador());

function resetContador() {
  contador = 0;
  localStorage.setItem('contador', contador);
  textCont.textContent = localStorage.getItem('contador');
}