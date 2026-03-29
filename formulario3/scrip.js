document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (event) {

        let confirmacion = confirm("¿Seguro que deseas enviar el formulario?");

        if (!confirmacion) {
            event.preventDefault();
        } else {
            alert("Formulario enviado correctamente");
        }

    });

});

