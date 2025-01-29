'use strict'; //Activando el modo estricto

const listaAmigos = []; // Usamos const porque no reassignamos la lista
const listaHTML = document.getElementById('listaAmigos'); // Accedemos una sola vez al DOM

// Función para agregar un amigo
function agregarAmigo () {
    let amigo = document.getElementById('amigo').value.trim(); // Obtener el valor del input y eliminar espacios innecesarios al inicio y final
    // Validar que solo contenga letras y espacios (permitimos tildes, ñ y otros caracteres)
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; 
    
    if (amigo && regex.test(amigo)) {
        const nombreConFormato = aplicarFormatoNombre(amigo); // Aplicar formato
        listaAmigos.push(nombreConFormato); // Agregar el nombre con formato a la lista
        limpiarCaja(); 
        mostrarLista();
    } else {
        alert("Por favor, ingresa un nombre válido");
        limpiarCaja(); 
    }
}

// Función para mostrar la lista de amigos
function mostrarLista () {
    listaHTML.innerHTML = listaAmigos.join("<br>"); // Usamos <br> para separar los nombres con salto de línea
}

// Función para limpiar el contenido del input
function limpiarCaja () {
    document.querySelector('#amigo').value = "";
}
 
// Función para aplicar formato al nombre (Primera letra en mayúscula y el resto en minúscula)
function aplicarFormatoNombre (nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

// Función para sortear un amigo de la lista
function sortearAmigo() {
    if (listaAmigos.length === 0) { // Verificamos si la lista está vacía
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }
    // Sorteamos un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio]; // Obtenemos el nombre del array
    limpiarLista(); // Limpiamos la lista visualmente
    listaHTML.textContent = "🎉 El amigo secreto sorteado es: " + amigoSorteado + " 🎉";
}

// Función para limpiar el contenido de la lista de amigos
function limpiarLista() {
    listaAmigos.length = 0;  
}