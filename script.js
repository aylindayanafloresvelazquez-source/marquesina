// Datos a mostrar
const nombre = "Aylin Dayana Flores Velázquez";
const campus = "Campus Texcoco";
const proyecto = "Portafolio JS";

// Seleccionamos el elemento
const marqueeElement = document.getElementById('marqueeText');

// Creamos la cadena de texto con separadores visuales
const textoFinal = `${nombre} • ${campus} • ${proyecto} • `;

// Repetimos el texto 3 veces para que el ciclo sea infinito y fluido
marqueeElement.textContent = textoFinal.repeat(3);