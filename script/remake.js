document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       1. MENÚ HAMBURGUESA
    ========================================== */
    const hamburguesa = document.querySelector('.hamburguesa');
    const navLinks = document.querySelector('.nav-links');

    hamburguesa.addEventListener('click', () => {
        // Alterna la clase 'active' en ambos elementos
        hamburguesa.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Opcional: Cerrar el menú si hacés clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburguesa.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    /* ==========================================
       2. ANIMACIÓN DE BLOQUES AL HACER SCROLL
    ========================================== */
    const blocks = document.querySelectorAll(".block");

    if (blocks.length > 0) {
        // Asignar izquierda/derecha dinámicamente
        blocks.forEach((block, index) => {
            block.classList.remove("left", "right");
            if (index % 2 === 0) {
                block.classList.add("left");
            } else {
                block.classList.add("right");
            }
        });

        // Configuración del Intersection Observer para la entrada
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show"); // Repite la animación si subís
                }
            });
        }, {
            threshold: 0.2 // Se activa cuando asoma el 20% del bloque
        });

        blocks.forEach(block => observer.observe(block));
    }

    /* ==========================================
       3. BOTÓN "VOLVER ARRIBA" (topBtn)
    ========================================== */
    const topBtn = document.getElementById("topBtn");

    if (topBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                topBtn.classList.add("show");
            } else {
                topBtn.classList.remove("show");
            }
        });

        topBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.classList.add("show");
    } 
    
    else{
        topBtn.classList.remove("show");
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

