// Obtener elemento de la barra de navegación
const navEl = document.querySelector('.nav-menu')

/* 

    Como el evento onscroll se lanza con mucha frecuencia,
    y esto podría sobrecargar el sistema, es onveniente
    limitar el número de veces que se ejecuta el código 
    que comprueba el valor del scroll y modifica
    la clase del elemento.

*/

// Variables
let didScroll = false
const timeout = 500; 

window.onscroll = () => didScroll = true

// Cada 500ms se lanza la comprobación y se ejecuta el código para añadir o eliminar la clase
setInterval(() => {
    
    if (didScroll) {

        didScroll = false

        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            navEl.classList.add('scrolled')
        } else {
            navEl.classList.remove('scrolled')
        }    

    }
    
}, timeout);
