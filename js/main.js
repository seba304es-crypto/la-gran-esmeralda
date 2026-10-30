/* La Gran Esmeralda
Practica 1 | Jornada 2 |Autor: Sebastián González Valerio */

// Mensaje de arranque
console.log("La Gran Esmeralda v3.0: main.js cargando correctamente");

// Saludo según la hora
const saludo = document.querySelector("#saludo");
const hora = new Date().getHours();

if (saludo) {
    if (hora >= 5 && hora < 12) {
        saludo.textContent = "¡Buenos días! Bienvenido a La Gran Esmeralda";
    } else if (hora >= 12 && hora < 19) {
        saludo.textContent = "¡Buenas tardes! Bienvenido a La Gran Esmeralda";
    } else {
        saludo.textContent = "¡Buenas noches! Bienvenido a La Gran Esmeralda";
    }
}