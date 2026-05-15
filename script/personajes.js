
// Lógica del menú hamburguesa
const hamburguesa = document.getElementById('hamburguesa');
const navLinks = document.getElementById('nav-links');

hamburguesa.addEventListener('click', () => {
    hamburguesa.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Lógica del Botón Top
const topBtn = document.getElementById("topBtn");

// Mostrar u ocultar el botón según el scroll
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
};

// Scroll suave hacia arriba al hacer click
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});