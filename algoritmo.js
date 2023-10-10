
const loginForm = document.querySelector("#login-form");
const registroUsuario = document.querySelector("#usuario");
const errorUsuario = document.querySelector("#mensaje-error")

//registro y almacenamiento localStore//

const usuarios = "usuarios";
const datosRegistro = "nombre y apellido";

let listaUsuarios = "lista vacia";
listaUsuarios = [];

let listaDatos = "lista vacia";
listaDatos = [];

function registrarUsuario() {

    let registroNombre = document.querySelector("#nombre").value;
    let registroApellido = document.querySelector("#apellido").value;
    let usuarioRegistrado = registroUsuario.value;

    listaDatos.push(registroApellido, registroNombre);
    listaUsuarios.push(usuarioRegistrado);
    localStorage.setItem(datosRegistro, JSON.stringify(listaDatos));
    localStorage.setItem(usuarios, JSON.stringify(listaUsuarios));

}



// Obtener el nombre de usuario almacenado en el localStorage
 function logearUsuario() {
    
    const usuarioLogin = document.querySelector("#ingresar-usuario").value;
     let localStoreName = localStorage.getItem("usuarios"); 

    if ((localStoreName === usuarioLogin)) {
        errorUsuario.innerHTML= "bienvenido";
    } else {
        /* errorUsuario.innerHTML = "Usuario incorrecto"; */
        alert("incorrecto");
    }
}
 


