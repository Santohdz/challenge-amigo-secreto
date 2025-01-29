'use strict'; //Activando el modo estricto

let listaAmigos = [];

function agregarAmigo () {
    let amigo = document.getElementById('amigo').value.trim(); // Obtener el valor del input y eliminar espacios innecesarios al inicio y final
    // Validar que solo contenga letras (sin números ni caracteres especiales)
    let regex = /^[a-zA-Z\s]+$/; // Solo permite letras y espacios
    
    if (amigo && regex.test(amigo)) {
        let nombreConFormato = aplicarFormatoNombre(amigo); // Aplicar formato
        listaAmigos.push(nombreConFormato); // Agregar el nombre con formato a la lista
        limpiarCaja(); 
        mostrarLista();
    }
    else {
        alert("Por favor, ingresa un nombre válido");
        limpiarCaja(); 
    }
    console.log (listaAmigos);
}

function mostrarLista () {
    document.getElementById('listaAmigos').innerHTML = listaAmigos.join("<br>");
}

// Limpiar input
function limpiarCaja () {
    document.querySelector('#amigo').value = "";
}
 
// Convertir la primera letra a mayúscula y el resto a minúscula
function aplicarFormatoNombre (nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}
