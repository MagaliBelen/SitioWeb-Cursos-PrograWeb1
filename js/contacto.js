let regexCorreo = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
let regexTelefono = /^[0-9]{4}[.-]{1}[0-9]{4}$/;


// CONTADOR DEL TEXTAREA

let textarea = document.getElementById('consulta');
let contador = document.getElementById('contador-de-palabras');

textarea.addEventListener('input', function(e) {
    let target = e.target;
    let longitudMax = target.getAttribute('maxlength');
    let longitudAct = target.value.length;
    contador.innerHTML = `${longitudAct}/${longitudMax}`;
});

//ESCUCHADOR DE EVENTO SUBMIT

let form = document.querySelector(".formulario-de-contacto"); 
form.addEventListener("submit", (e) => { 
    e.preventDefault(); 
    validar(); 
    
});

// FUNCION PARA VALIDAR DATOS INGRESADOS

function validar() { 
    let error = false;
    let mensajesError = "";
    let nombre = document.getElementById("nombre").value; 
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;
    let popup = document.querySelector(".popup");
    let enviar = document.querySelector("#submit");

    
    if (nombre == "") { //nombre.length==0
        error = true;
        mensajesError += "<p>⚠️ El campo nombre y apellido es obligatorio</p>";
    }

    if (!regexCorreo.test(correo)) {
        error = true;
        mensajesError += "<p>⚠️ El correo ingresado no es correcto</p>";
        document.getElementById("correo").classList.add("error");
    }

    if (!regexTelefono.test(telefono)) {
        error = true;
        mensajesError += "<p>⚠️ Debe ingresar un telefono de 8 digitos con guion medio</p>";
        document.getElementById("telefono").classList.add("error");
    }

    if (error) {
        //mostrar los mensajes de error
        document.getElementById("mensaje-de-error").innerHTML = mensajesError;
    } else {
       
        mostrarPopUp();
    }

     //Funcion para mostrar popup
    function mostrarPopUp(){
        popup.classList.remove("d-none"); 
    }
}

