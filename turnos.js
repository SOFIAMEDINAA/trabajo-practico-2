const listaTurnosElement = document.querySelector("#lista-turnos");
let listaTurnos = JSON.parse(localStorage.getItem("turnos")) || [];

function actualizarListaTurnos() {
    listaTurnosElement.innerHTML = '';
    listaTurnos.forEach(turno => {
        const listItem = document.createElement("li");
        listItem.innerText = `Servicio: ${turno.servicio}, Fecha: ${turno.fecha}, Hora: ${turno.hora}`;
        listaTurnosElement.appendChild(listItem);
    });
}

function guardarEnLocalStorage() {
    localStorage.setItem("turnos", JSON.stringify(listaTurnos));
}

function tomarTurno() {
    const fecha = document.querySelector("#fecha").value;
    const hora = document.querySelector("#hora").value;
    const servicio = document.querySelector("#selectServicios").value;

    

    if (fecha, hora, servicio) {
        const turno = {servicio, fecha, hora};
        listaTurnos.push(turno);
        guardarEnLocalStorage();
        actualizarListaTurnos();
    }
}

actualizarListaTurnos();