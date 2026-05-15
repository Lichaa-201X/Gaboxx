const btn = document.getElementById("btn")

function esEmailValido(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function mensaje() {

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let msj = document.getElementById("mensaje").value;

    if (nombre !== "" && email !== "" && msj !== "") {
        if (esEmailValido(email)) {
            alert("Mensaje enviado");
            window.location.href = "../index/index.html";
        }
        else {
            alert("Correo no valido");
        }
    }
    else {
        alert("Completa todos los campos");
    }


}