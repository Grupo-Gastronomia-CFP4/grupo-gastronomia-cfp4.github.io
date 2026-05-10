const imagenes = [
    "Multimedia/churrosconazucar.jpeg",
    "Multimedia/brownie3.jpeg",
    "Multimedia/tubo.jpeg"
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