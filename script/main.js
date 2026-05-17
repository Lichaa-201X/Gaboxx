
    /* ==========================================
       1. MENÚ HAMBURGUESA
    ========================================== */
    // Nota: Puse un "||" por si en el HTML le pusiste id="btn" o id="hamburguesa"
    const btn = document.getElementById("btn") || document.getElementById("hamburguesa");
    const menu = document.querySelector(".nav-links");

    if (btn && menu) {
        btn.addEventListener("click", () => {
            menu.classList.toggle("active");
            btn.classList.toggle("active");
        });
    }

    /* ==========================================
       2. ANIMACIÓN DE BLOQUES AL HACER SCROLL
    ========================================== */
    const blocks = document.querySelectorAll(".block");

    if (blocks.length > 0) {
        // Alternar izquierda/derecha automáticamente
        blocks.forEach((block, index) => {
            block.classList.remove("left", "right");
            if (index % 2 === 0) {
                block.classList.add("left");
            } else {
                block.classList.add("right");
            }
        });

        // Configuración del Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show"); // Lo saca para que se repita la animación
                }
            });
        }, {
            threshold: 0.3 // Se activa cuando el 30% del bloque es visible
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

    /* ==========================================
       4. NAVEGACIÓN ESPECÍFICA (Botón Historia)
    ========================================== */
    const btnHistoria = document.getElementById("btnHistoria");
    const inicioHistoria = document.getElementById("inicioHistoria");

    if (btnHistoria && inicioHistoria) {
        btnHistoria.addEventListener("click", () => {
            inicioHistoria.scrollIntoView({
                behavior: "smooth"
            });
        });
    }


/* ==========================================
   5. FUNCIÓN GLOBAL (Se deja afuera del DOMContentLoaded)
========================================== */
// Esta función se suele llamar directo desde el HTML con un onclick="irA('id')"
function irA(id) {
    const seccion = document.getElementById(id);

    if (seccion) {
        seccion.scrollIntoView({
            behavior: "smooth"
        });
    }
}