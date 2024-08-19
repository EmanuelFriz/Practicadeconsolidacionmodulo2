// scripts.js

// Asegúrate de que el script se ejecute solo después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Evento que se ejecuta cuando se envía el formulario de contacto
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Obtiene los valores de los campos del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validación básica de los campos del formulario
        if (name && email && message) {
            alert('Formulario enviado con éxito.'); // Muestra un mensaje de éxito
        } else {
            alert('Por favor, complete todos los campos.'); // Muestra un mensaje de error si falta algún campo
        }
    });
});