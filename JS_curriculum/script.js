document.addEventListener("DOMContentLoaded", function () {

    // 1. Cambiar color del nombre
    const nombre = document.querySelector("h1");
    nombre.style.color = "#ffcc00";

    // 2. Agregar mensaje dinámico
    const mensaje = document.createElement("p");
    mensaje.textContent = "Bienvenido a mi hoja de vida";
    mensaje.style.fontWeight = "bold";
    mensaje.style.color = "white";

    nombre.parentNode.appendChild(mensaje);

    // 3. Efecto en la imagen
    const foto = document.querySelector(".foto");

    foto.addEventListener("mouseover", function () {
        foto.style.transform = "scale(1.1)";
        foto.style.transition = "0.3s";
    });

    foto.addEventListener("mouseout", function () {
        foto.style.transform = "scale(1)";
    });

});



