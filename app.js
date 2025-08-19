// 1. Declaración del array para almacenar los nombres de amigos
let amigos = [];

// 2. Función para agregar un nuevo amigo a la lista
function agregarAmigo() {
    // Obtener el elemento input donde se escribe el nombre
    const inputAmigo = document.getElementById('amigo');
    
    // Obtener el valor del input y eliminar espacios en blanco al inicio/final
    const nombreAmigo = inputAmigo.value.trim();

    // Validación: Verificar si el campo está vacío
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre');
        return; // Salir de la función si no hay nombre
    }

    // Agregar el nombre válido al array 'amigos'
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada para nuevo texto
    inputAmigo.value = '';

    // Verificar en consola
    console.log('Amigos actualizados:', amigos);
    
    // Actualizar la lista visual en pantalla
    actualizarListaAmigos();
}

// 3. Función para actualizar la lista visual de amigos en el HTML
function actualizarListaAmigos() {
    // Obtener el elemento <ul> donde se mostrarán los nombres
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar todo el contenido previo de la lista
    listaAmigos.innerHTML = '';
    
    // Recorrer el array 'amigos' para crear los elementos de lista
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento <li> para cada amigo
        const li = document.createElement('li');
        
        // Asignar el nombre del amigo como texto del elemento
        li.textContent = amigos[i];
        
        // Agregar el elemento <li> a la lista <ul>
        listaAmigos.appendChild(li);
    }
}

// 4. Función para sortear un amigo secreto aleatoriamente
function sortearAmigo() {
    // Validación: Verificar si hay amigos para sortear
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Agrega al menos uno.');
        return; // Salir de la función si no hay amigos
    }

    // Generar un índice aleatorio basado en la cantidad de amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre del amigo sorteado usando el índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio];

    // Obtener el elemento donde se mostrará el resultado
    const elementoResultado = document.getElementById('resultado');
    
    // Mostrar el resultado con formato HTML (usando <strong> para resaltar)
    elementoResultado.innerHTML = `
        <li>¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</li>
    `;
}