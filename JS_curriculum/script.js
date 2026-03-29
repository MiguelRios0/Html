// Espera a que cargue toda la página
document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (event) {

        // Obtener valores
        const password = document.querySelector('input[name="password"]').value;
        const usuario = document.querySelector('input[name="usuario"]').value;

        // Validación extra de contraseña
        if (password.length < 16) {
            alert("La contraseña debe tener exactamente 16 caracteres.");
            event.preventDefault();
            return;
        }

        // Validación simple de usuario
        if (usuario.length < 3) {
            alert("El usuario debe tener al menos 3 caracteres.");
            event.preventDefault();
            return;
        }

        // Confirmación antes de enviar
        let confirmacion = confirm("¿Seguro que deseas enviar el formulario?");
        if (!confirmacion) {
            event.preventDefault();
            return;
        }

        // Si todo está bien
        alert("Formulario enviado correctamente");
    });

});



