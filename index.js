// ¡Buena suerte!
// Introduce la altura en cm
// Introduce el peso en kg
// Al hacer clic en Compute BMI debe aparecer el IMC
// IMC = Peso (kg) / Estatura (m)2. (cm/10000)
// También debería indicar mediante un mensaje de texto si es un peso normal según este baremo
// Menos de 18.5 → Bajo peso
// 18.5 - 24.9 → Peso normal
// 25 - 29.9 → Sobrepeso
// 30 o más → Obesidad

// BONUS: Redondea a dos decimales el IMC

const height = document.getElementById("height");
const weight = document.getElementById("weight");
const btn = document.getElementById("btn");
const bmiResult = document.getElementById("bmi-result");

btn.addEventListener("click", ()=>{
    let imc = weight.value / Math.pow(height.value/100, 2);
    bmiResult.value = imc.toFixed(2);
});