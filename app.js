// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


function agregarAmigo() {
        // Tomar el valor del input
        const input = document.getElementById("amigo");
        const nombre = input.value.trim();
        
        // Verificar que el nombre no esté vacío
        if (nombre === "") {
            alert("Ingrese un nombre valido");
            return;
        }
        
        // Crear un nuevo elemento de lista
        const lista = document.getElementById("listaAmigos");
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nombre;
        
        // Agregar el nuevo elemento a la lista
        lista.appendChild(nuevoElemento);
        
        // Limpiar el input después de agregar el amigo
        input.value = "";
    }
    
    function sortearAmigo() {
        const lista = document.getElementById("listaAmigos");
        const amigos = lista.getElementsByTagName("li");
        
        if (amigos.length === 0) {
            alert("No hay ningun amigo en la lista para sortear");
            return;
        }
        
        // Elegir un amigo aleatorio
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSeleccionado = amigos[indiceAleatorio].textContent;
        
        // Limpiar la lista y mostrar solo el seleccionado
        lista.innerHTML = "";
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigoSeleccionado;
        nuevoElemento.style.color = "green";
        nuevoElemento.style.fontSize = "2em";
        nuevoElemento.style.fontWeight = "bold";
        lista.appendChild(nuevoElemento);
    }

