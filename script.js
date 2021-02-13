const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500/*Cantidad de pantallas (cuadros) que se tiene */

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    /*crea un elemento div en el documento */
    square.classList.add('square')
    /*a la constante square que acabamos de crear se le
    s una forma práctica de acceder a la lista de clases de un elemento 
    y a esta lista se le agrega la clase .square */

    square.addEventListener('mouseover', () => setColor(square))
    /*mouseover dispara a un elemento cuando se usa un dispositivo 
    señalador (como un mouse o trackpad) */
    /*cuando el mouse pase por encima de alguno de los elementos de la
    constante square se inicializa la funcion setcolor */

    square.addEventListener('mouseout', () => removeColor(square))
    /*mouseout para mover el cursor de modo que ya no esté contenido dentro del
     elemento o uno de sus hijos. */
     /*en esta parte se ejecuta la función que nos regresa el cuadro a su 
     estado original */

    container.appendChild(square)
    /*esto le indica que la contante square va a ser un elemento 
    hijo del div container */
}

function setColor(e) {
   const color = getRandomColor()
   /*llama a la funcion que nos genera un colo random del array */
   e.style.background = color
   e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
   /* dentro del boxshadow lo primeor que se indica es el resplandor de 
   las cajas [0 0 2px ${color} ] y lo segundo es el tamaño del resplandor */
}

function removeColor(element) {
   element.style.background = '#242424'
   /*este regresa el color base de  los cuadros*/
   element.style.boxShadow = '0 0 2px #000'
   /*en este se eliminan las sombras de color  dejandolas con un color negro 
   que se pierde en el fondo*/
   
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
    /*se le llama la contante color que contiene un array de scripts
    y se ejecuta el metodo math.floor() y math.random()multiplicado 
    por el largo del array y el numero que da inplica la poscision
    del color a mostrar */
}

