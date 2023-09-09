// script.js
const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("password");
const secretCard = document.getElementById("secret-card");

// Contraseña válida (cambia esto a la fecha importante)
const correctPassword = "10/07/2023";

passwordForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const userPassword = passwordInput.value;

    if (userPassword === correctPassword) {
        // Mostrar la carta al ingresar la contraseña correcta
        secretCard.style.display = "block";
    } else {
        alert("Fijate si la escribiste bien amor");
    }
});

const mensajeSecreto = "Te amo";
const letrasMensaje = mensajeSecreto.split("");
const corazones = document.querySelectorAll(".heart");
let letrasDescubiertas = 0;
let mensajeDescubierto = "";

function mostrarLetra(index) {
    if (letrasDescubiertas < letrasMensaje.length) {
        corazones[index].style.color = "red";
        corazones[index].style.opacity = 0;
        mensajeDescubierto += letrasMensaje[letrasDescubiertas];
        letrasDescubiertas++;
        if (letrasDescubiertas === letrasMensaje.length) {
            mostrarMensaje();
        }
    }
}

function mostrarMensaje() {
    const resultadoParrafo = document.getElementById('resultado');
    resultadoParrafo.textContent = `Mensaje secreto: "${mensajeDescubierto}" ¡Te amo muxo waa!`;
    resultadoParrafo.style.color = 'red';
    ocultarCorazones();
}

function ocultarCorazones() {
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.style.display = 'none';
}

// Reaparecer los corazones si el mensaje no aparece
function mostrarCorazones() {
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.style.display = 'block';
    for (let i = 0; i < corazones.length; i++) {
        corazones[i].style.color = 'black';
        corazones[i].style.opacity = 1;
    }
}

// Evento para reaparecer los corazones si el mensaje no se encuentra
setInterval(() => {
    if (letrasDescubiertas !== letrasMensaje.length) {
        mostrarCorazones();
    }
}, 2000); // Cambia este valor (en milisegundos) para ajustar el tiempo antes de reaparecer los corazones
