
//inicia sesion
document.addEventListener('submit', function (e) {
    e.preventDefault();

    const formInicioSesion = document.querySelector("#inicioSesionForm");
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioInicioSesion = document.querySelector("#usuarioIniciarSesion").value;
    const emailInicioSesion = document.querySelector("#emailInicioSesion").value;



    const usuarioEncontrado = usuariosRegistrados.find(user => user.nombre === usuarioInicioSesion && user.correo === emailInicioSesion);

    if (usuarioEncontrado) {
        alert('Inicio de sesión exitoso');
        window.location.href = "turnos.html";
    } else {
        alert('Usuario o correo electrónico incorrectos');
    }

    formInicioSesion.reset();
});

















