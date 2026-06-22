const imagenes = [
    "Multimedia/img2.jpg",
    "Multimedia/img3.jpg",
    "Multimedia/img9.jpg"
]

let i = 0
const imagen = document.getElementById("slider-imagenes")

function cambiarImagen() {
    i++
    
    if (i >= imagenes.length) {
        i = 0
    }

    imagen.src = imagenes[i]
}

setInterval(cambiarImagen, 5000)