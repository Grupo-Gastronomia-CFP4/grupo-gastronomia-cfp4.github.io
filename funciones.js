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
