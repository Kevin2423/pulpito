const imagenInput = document.getElementById('imagenInput')
const CambiarIcono = document.getElementById('CambiarIcono')
const Dia_Noche = document.getElementById('Dia_Noche')

const ModoOscuro = () => {
        if (imagenInput.checked) {
            CambiarIcono.innerHTML="<img src=\"https://www.megaidea.net/wp-content/uploads/2022/01/pulpito-amarillo-2.png\">"
            document.body.style.background="gray"
            Dia_Noche.innerHTML="<img src=\"https://www.megaidea.net/wp-content/uploads/2022/01/pulpito-amarillo-2.png\" span>"
        } else {
            CambiarIcono.innerHTML="<img src=\"https://www.megaidea.net/wp-content/uploads/2022/01/pulpito-naranja.png\">"
            document.body.style.background="gray"
            Dia_Noche.innerHTML="<img src=\"https://www.megaidea.net/wp-content/uploads/2022/01/pulpito-naranja.png\">"
        }
}
CambiarIcono.addEventListener('click',ModoOscuro)