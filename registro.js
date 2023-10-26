const nombreUsuario = document.querySelector("#nombreUsuario");
const email = document.querySelector("#email"); 



/**
 * almacena los usuarios y correos en el localStore
 * @param {string} nombreUsuario guarda el nombre de usuario
 * @param {string} email guarda el correo electronico
 */
function registrarUsuario(nombreUsuario, email,) { 
    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuariosRegistrados.push({ 
       nombre: nombreUsuario.value, 
       correo: email.value 
    });

    localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));

};

document.addEventListener('submit', function (e) {
    e.preventDefault();
    const formRegistro = document.querySelector("#registroForm");

   registrarUsuario(nombreUsuario, email);

    alert("registro exitoso");
    window.location.href = "index.html";
    formRegistro.reset();

});


