const imagenes = [
    "Multimedia/img2.jpg",
    "Multimedia/img3.jpg",
    "Multimedia/img9.jpg"
];

let i = 0;
const imagen = document.getElementById("slider-imagenes");

function cambiarImagen() {
    if (!imagen) return;

    imagen.style.opacity = 0;

    setTimeout(() => {
        i = (i + 1) % imagenes.length;
        imagen.src = imagenes[i];
        imagen.style.opacity = 1;
    }, 350);
}

if (imagen) {
    setInterval(cambiarImagen, 5000);
}


(function () {
    const menu = document.getElementById("arriba");
    const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const barra = document.createElement("div");
    barra.className = "barra-progreso";
    document.body.appendChild(barra);

    let esperando = false;
    function alScrollear() {
        if (esperando) return;
        esperando = true;
        requestAnimationFrame(() => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const avance = max > 0 ? window.scrollY / max : 0;
            barra.style.transform = "scaleX(" + Math.min(Math.max(avance, 0), 1) + ")";
            if (menu) menu.classList.toggle("con-sombra", window.scrollY > 10);
            esperando = false;
        });
    }
    window.addEventListener("scroll", alScrollear, { passive: true });
    window.addEventListener("resize", alScrollear);
    alScrollear();

    const grupos = [
        ".hero-strip",
        ".programa > h2",
        ".programa-item",
        ".linea-tiempo > h2",
        ".linea-tiempo > .lead",
        ".timeline-item",
        ".salida-laboral > h2",
        ".faq-item",
        ".receta-card",
        "menu#abajo"
    ];

    const elementos = [];
    grupos.forEach((selector) => {
        document.querySelectorAll(selector).forEach((el, indice) => {
            el.classList.add("reveal");
            if (selector === ".timeline-item") el.classList.add("reveal-left");
            const retraso = selector === ".faq-item" ? Math.min(indice, 5) * 0.06 : (indice % 3) * 0.12;
            el.style.setProperty("--delay", retraso + "s");
            elementos.push(el);
        });
    });

    if (reducido || !("IntersectionObserver" in window)) {
        elementos.forEach((el) => el.classList.add("visible"));
        return;
    }

    const observador = new IntersectionObserver(
        (entradas) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("visible");
                    observador.unobserve(entrada.target);
                }
            });
        },
        { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );

    elementos.forEach((el) => observador.observe(el));
})();



(function () {
    const menu = document.getElementById("arriba");
    const boton = menu ? menu.querySelector(".menu-toggle") : null;
    if (!menu || !boton) return;

    function abrir(abierto) {
        menu.classList.toggle("abierto", abierto);
        boton.setAttribute("aria-expanded", String(abierto));
        boton.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    }

    boton.addEventListener("click", () => {
        abrir(!menu.classList.contains("abierto"));
    });

    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => abrir(false)));

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") abrir(false);
    });

    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target)) abrir(false);
    });

    window.matchMedia("(min-width: 769px)").addEventListener("change", (e) => {
        if (e.matches) abrir(false);
    });
})();
