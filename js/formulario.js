const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const eMail = document.getElementById("eMail");
const consulta = document.getElementById("consulta");


formulario.addEventListener("submit", validarFormulario);

function validarFormulario(event){
    event.preventDefault();
    
    const usuario = {
        nombre: nombre.value,
        apellido: apellido.value,
        edad: edad.value,
        eMail: eMail.value,
        consulta: consulta.value,
    }

    console.log(usuario)
}
