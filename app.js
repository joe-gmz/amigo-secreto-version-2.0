let amigos = [];

function agregarParticipante() {
    let nombreParticipante = document.getElementById("nombreParticipante").value.trim();
    console.log("Nombre ingresado:", nombreParticipante);
    
    //Verificampos que el nombre no esté vacío.
    if (nombreParticipante === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    } 
    // Verificamos si el nombre ya está en la lista.
    if (amigos.includes(nombreParticipante)) {
        alert(`${nombreParticipante} ya está en la lista de participantes. Ingresa el apellido si no es la misma persona.`);
        document.getElementById("nombreParticipante").value = "";
        return;
    }
    // Agregamos el nombre a la lista de participantes.
    amigos.push(nombreParticipante);
    document.getElementById("nombreParticipante").value = "";
    
    actualizarLista();
}


function actualizarLista() {
    let lista = document.getElementById("listaParticipantes")
    lista.innerHTML = "";
    // Recorremos el array de amigos y creamos un elemento de lista para cada uno.
    for (i = 0; i < amigos.length; i++) {
        let nuevoParticipante = document.createElement("li");
        nuevoParticipante.textContent = amigos[i];
        lista.appendChild(nuevoParticipante);
    }
    const botonSorteo = document.getElementById("botonSorteo").disabled = amigos.length === 0;
}

function realizarSorteo() {
    // Verificamos que haya participantes en la lista.
    if (amigos.length === 0) {
        alert("No hay participantes para el sorteo, por favor agrega los nombres");
        return;
    }
        document.getElementById("botonSorteo").disabled = amigos.length === 0;
        // Realizamos el sorteo aleatoriamente.
        let sorteo = Math.floor(Math.random() * amigos.length);
        document.getElementById("resultado").innerHTML = `🎉Tu amigo(a) secreto es: <strong>${amigos[sorteo]}</strong> ! Felicidades!🎉`;

}

