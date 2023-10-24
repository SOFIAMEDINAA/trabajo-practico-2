function seleccionarTurno() {
    const selectedTurno = document.querySelector('.selected');
    if (selectedTurno) {
        const fechaHora = selectedTurno.textContent;
        localStorage.setItem('turnoSeleccionado', fechaHora);
        alert("Turno seleccionado: " + fechaHora + "\nGuardado en el Local Storage.");
    } else {
        alert("Por favor, selecciona un turno antes de guardar.");
    }
}

// Asignar la función a un botón
document.getElementById('selectButton').addEventListener('click', seleccionarTurno);

// Agregar la funcionalidad de selección de turno
const turnos = document.querySelectorAll('.day:not(.day-header)');
turnos.forEach(turno => {
    turno.addEventListener('click', () => {
        // Eliminar la clase "selected" de todos los turnos
        turnos.forEach(t => t.classList.remove('selected'));
        // Agregar la clase "selected" al turno seleccionado
        turno.classList.add('selected');
    });
});