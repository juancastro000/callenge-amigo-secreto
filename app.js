const nombres = [];

const input = document.getElementById('amigo');
const lista = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

function agregarNombre() {
    const nombre = input.value.trim();
    if (!nombre) {
        resultado.textContent = "introduce un nombre";
        return;
    }

    if (nombres.includes(nombre)) {
        resultado.textContent = "ese nombre ya esta en la lista";
        return;
    }

    nombres.push(nombre);
    input.value ="";
    renderLista();
    resultado.textContent = '';
}

function renderLista() {
    lista.innerHTML='';
    if (nombres.length === 0) {
        lista.innerHTML = '<li>No hay nombres</li>'
        return;
    }
    nombres.forEach((n) => {
        const li = document.createElement('li');
        li.textContent = n;
        lista.appendChild(li);
    });
}
