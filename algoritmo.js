const loginForm = document.querySelector("#login-form");

const errorUsuario = document.querySelector("#mensaje-error")

// Obtener el nombre de usuario almacenado en el localStorage
 


function logearUsuario() {
    const usuario = document.querySelector("#ingresar-usuario").value;
    /* let UsernameLs = localStorage.getItem("#ingresar-usuario"); */
    if (usuario === listaUsuarios) {
        errorUsuario.innerHTML= "bienvenido";
    } else {
        errorUsuario.innerHTML = "Usuario incorrecto";
    }
}
 


//registro y almacenamiento localStore//
const registroUsuario = document.querySelector("#usuario");

const usuarios = "usuarios";
const datosRegistro = "nombre y apellido";

let listaUsuarios = "lista vacia";
listaUsuarios = [];

let listaDatos = "lista vacia";
listaDatos = [];

function registrarUsuario() {

    let registroNombre = document.querySelector("#nombre").value;
    let registroApellido = document.querySelector("#apellido").value;
    let nuevoUsuario = registroUsuario.value;

    listaDatos.push(registroApellido, registroNombre);
    listaUsuarios.push(nuevoUsuario);
    localStorage.setItem(datosRegistro, JSON.stringify(listaDatos));
    localStorage.setItem(usuarios, JSON.stringify(listaUsuarios));

}
