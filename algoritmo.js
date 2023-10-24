function registrarUsuario(nombreUsuario, email,) {
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuariosRegistrados.push({ nombreUsuario, email });

    localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));

}
const nombreUsuario = document.querySelector("#nombreUsuario").value;
const email = document.querySelector("#email").value;
document.addEventListener('submit', function (e) {
    e.preventDefault();
    const formRegistro = document.querySelector("#registroForm");

    registrarUsuario(nombreUsuario, email);

    alert("registro exitoso");
    this.reset();
});


const usuarioInicioSesion = document.querySelector("#usuarioInicioSesion").value;
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

















