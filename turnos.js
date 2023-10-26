const listaTurnosElement = document.querySelector("#lista-turnos");
let listaTurnos = JSON.parse(localStorage.getItem("turnos")) || [];

//actualiza la lista de turnos
function actualizarListaTurnos() {
    listaTurnosElement.innerHTML = '';
    listaTurnos.forEach(turno => {
        const listItem = document.createElement("li");
        listItem.innerText = `Servicio: ${turno.servicio}, Fecha: ${turno.fecha}, Hora: ${turno.hora}`;
        listaTurnosElement.appendChild(listItem);
    });
}

//almacena los turnos en el localStore
function guardarEnLocalStorage() {
    localStorage.setItem("turnos", JSON.stringify(listaTurnos));
}


/* function turnoNoDisponible(fecha, hora, servicio) {
    return listaTurnos(turno => turno.fecha === fecha , turno.hora === hora, turno.servicio === servicio);
}  */

//permite que puedas sacar turno posterior a la fecha y hora actual
function turnoEnElPasado(fecha, hora) {
    const ahora = new Date();
    const fechaHoraSeleccionada = new Date(`${fecha} ${hora}`);
    return fechaHoraSeleccionada < ahora;
}

//Agendar turnos
function tomarTurno() {
    const fecha = document.querySelector("#fecha").value;
    const hora = document.querySelector("#hora").value;
    const servicio = document.querySelector("#selectServicios").value;

    if ((fecha, hora, servicio)) {
        if (turnoEnElPasado(fecha, hora)) {
            alert("No puedes agendar turnos en el pasado.");   
        } else {
            const turno = { servicio, fecha, hora };
            listaTurnos.push(turno);
            guardarEnLocalStorage();
            actualizarListaTurnos();
 
        }
    }};

    actualizarListaTurnos();