const hamburguesa = document.querySelector('.hamburguesa');
const navLinks = document.querySelector('.nav-links');

hamburguesa.addEventListener('click', () => {
    hamburguesa.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburguesa.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

const blocks = document.querySelectorAll(".block");

if (blocks.length > 0) {
    blocks.forEach((block, index) => {
        block.classList.remove("left", "right");
        if (index % 2 === 0) {
            block.classList.add("left");
        } else {
            block.classList.add("right");
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, {
        threshold: 0.2
    });

    blocks.forEach(block => observer.observe(block));
}

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