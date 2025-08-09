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
    resultado.textContent = '';
}
