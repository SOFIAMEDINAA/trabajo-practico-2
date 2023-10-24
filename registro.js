const nombreUsuario = document.querySelector("#nombreUsuario").value;
const email = document.querySelector("#email").value; 

function registrarUsuario(nombreUsuario, email,) {
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuariosRegistrados.push({ nombreUsuario, email });

    localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));

}

document.addEventListener('submit', function (e) {
    e.preventDefault();
    const formRegistro = document.querySelector("#registroForm");

    registrarUsuario(nombreUsuario, email);

    alert("registro exitoso");
    this.reset();
});