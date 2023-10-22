

const errorUsuario = document.querySelector("#mensaje-error")


function registrarUsuario(nombreUsuario, email,) {
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuariosRegistrados.push({ nombreUsuario, email });

    localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));

}
document.getElementById('registroForm'),('submit', function (e) {
    e.preventDefault();
   
    const nombreUsuario = document.querySelector("#nombreUsuario").value;
    const email = document.querySelector("#email").value;
    registrarUsuario( nombreUsuario, email);

    alert("registro exitoso");
    this.reset();
});


document.getElementById('inicioSesionForm'),('submit', function(e) {
    e.preventDefault();

const usuarioInicioSesion= document.querySelector("#usuarioInicioSesion").value;
const emailInicioSesion = document.querySelector("#emailInicioSesion").value;

const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];


const usuarioEncontrado = usuariosRegistrados.find(user => user.nombreUsuario === usuarioInicioSesion && user.email === emailInicioSesion); 

if (usuarioEncontrado) {
    alert('Inicio de sesión exitoso');
} else {
    alert('Usuario o correo electrónico incorrectos');
}

this.reset();
}); 

















