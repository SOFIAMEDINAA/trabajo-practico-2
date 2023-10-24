const usuarioInicioSesion = document.querySelector("#usuarioIniciarSesion").value;
const emailInicioSesion = document.querySelector("#emailInicioSesion").value;

document.addEventListener('submit', function (e) {
    e.preventDefault();

    const formInicioSesion = document.querySelector("#inicioSesionForm");
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];


    const usuarioEncontrado = usuariosRegistrados.find(user => user.nombreUsuario === usuarioInicioSesion && user.email === emailInicioSesion);

    if (usuarioEncontrado) {
        alert('Inicio de sesión exitoso');
    } else {
        alert('Usuario o correo electrónico incorrectos');
    }

    this.reset();
});

















