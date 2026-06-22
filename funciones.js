const imagenes = [
    "nuevo multimedia/img2.jpg",
    "nuevo multimedia/img3.jpg",
    "nuevo multimedia/img9.jpg"
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