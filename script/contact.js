const btn = document.getElementById("btn");
const btn_hamb = document.querySelector(".hamburguesa");
const menu = document.querySelector(".nav-links");

function esEmailValido(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function mostrarModal(texto, exito) {
    const overlay = document.createElement("div");
    overlay.classList.add("modal-overlay");

    const caja = document.createElement("div");
    caja.classList.add("modal-box");

    const mensajeTxt = document.createElement("p");
    mensajeTxt.classList.add("modal-texto");
    mensajeTxt.innerText = texto;
    
    if (exito) {
        mensajeTxt.classList.add("modal-exito");
    } else {
        mensajeTxt.classList.add("modal-error");
    }

    const btnCerrar = document.createElement("button");
    btnCerrar.classList.add("modal-btn");
    btnCerrar.innerText = "Aceptar";

    btnCerrar.addEventListener("click", () => {
        overlay.classList.remove("show");
        setTimeout(() => {
            document.body.removeChild(overlay);
            if (exito) {
                window.location.href = "../index.html";
            }
        }, 400);
    });

    caja.appendChild(mensajeTxt);
    caja.appendChild(btnCerrar);
    overlay.appendChild(caja);
    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            overlay.classList.add("show");
        });
    });
}

function mensaje(e) {
    if (e) e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let msj = document.getElementById("mensaje").value;

    if (nombre !== "" && email !== "" && msj !== "") {
        if (esEmailValido(email)) {
            mostrarModal("Mensaje enviado con éxito", true);
        } else {
            mostrarModal("Correo no válido", false);
        }
    } else {
        mostrarModal("Completa todos los campos", false);
    }
}

if (btn) {
    btn.addEventListener("click", mensaje);
}

if (btn_hamb && menu) {
    btn_hamb.addEventListener("click", () => {
        menu.classList.toggle("active");
        btn_hamb.classList.toggle("active");
    });
}