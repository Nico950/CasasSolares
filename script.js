var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var resultado = document.getElementById("resultado");

input1.addEventListener("input", calcularEnergiaAnual);
input2.addEventListener("input", calcularEnergiaAnual);

function calcularEnergiaAnual() {
  var valor1 = parseFloat(input1.value.slice(0, 4)) || 0;
  var valor2 = parseFloat(input2.value.slice(0, 4)) || 0;
  var valor3 = parseFloat(input3.value) || 0.79;

  var energiaAnual = valor1 * valor2 * valor3;

  resultado.textContent = energiaAnual.toFixed(2);
}

// Obtener elementos de entrada y resultado
var input4 = document.getElementById("input4");
var input5 = document.getElementById("input5");
var input6 = document.getElementById("input6");
var input7 = document.getElementById("input7");
var input8 = document.getElementById("input8");
var input9 = document.getElementById("input9");
var input10 = document.getElementById("input10");
var input11 = document.getElementById("input11");
var input12 = document.getElementById("input12");
var input13 = document.getElementById("input13");
var input14 = document.getElementById("input14");
var input15 = document.getElementById("input15");
var resultado2 = document.getElementById("resultado2");
var resultado1 = document.getElementById("resultado1");

// Escuchar cambios en los campos de entrada
input4.addEventListener("input", calcularSuma);
input5.addEventListener("input", calcularSuma);
input6.addEventListener("input", calcularSuma);
input7.addEventListener("input", calcularSuma);
input8.addEventListener("input", calcularSuma);
input9.addEventListener("input", calcularSuma);
input10.addEventListener("input", calcularSuma);
input11.addEventListener("input", calcularSuma);
input12.addEventListener("input", calcularSuma);
input13.addEventListener("input", calcularSuma);
input14.addEventListener("input", calcularSuma);
input15.addEventListener("input", calcularSuma);

// Calcular la suma y el 40%
function calcularSuma() {
  var suma = parseFloat(input4.value) || 0;
  suma += parseFloat(input5.value) || 0;
  suma += parseFloat(input6.value) || 0;
  suma += parseFloat(input7.value) || 0;
  suma += parseFloat(input8.value) || 0;
  suma += parseFloat(input9.value) || 0;
  suma += parseFloat(input10.value) || 0;
  suma += parseFloat(input11.value) || 0;
  suma += parseFloat(input12.value) || 0;
  suma += parseFloat(input13.value) || 0;
  suma += parseFloat(input14.value) || 0;
  suma += parseFloat(input15.value) || 0;

  var resultado40 = suma * 0.4;

  resultado2.textContent = suma.toFixed(2);
  resultado1.textContent = resultado40.toFixed(2);
}
