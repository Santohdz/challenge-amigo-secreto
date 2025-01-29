'use strict'; //Activando el modo estricto

let listaAmigos = [];

function agregarAmigo () {
    let amigo = document.getElementById('amigo').value.trim(); // Obtener el valor del input y eliminar espacios innecesarios al inicio y final
    if (amigo) {
        let nombreConFormato = aplicarFormatoNombre(amigo);
        listaAmigos.push(nombreConFormato); // Agregar el nombre con formato a la lista
        limpiarCaja(); 
        mostrarLista();
    }
    else {
        alert("Por favor, ingresa un nombre válido");
    }
    console.log (listaAmigos);
}

function mostrarLista () {
    document.getElementById('listaAmigos').textContent = listaAmigos.join(", ");
}

// Limpiar input
function limpiarCaja () {
    document.querySelector('#amigo').value = "";
}

// Convertir la primera letra a mayúscula y el resto a minúscula
function aplicarFormatoNombre (nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}
