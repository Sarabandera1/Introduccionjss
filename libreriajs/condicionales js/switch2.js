const dia = new Date().getDay()

//Segun el dia de la semana, mostramos un mensaje diferente
switch (dia) {
    case 0:
        console.log("¡Hoy es domingo!")
        break
    case 1:
        console.log("¡Nooo, es lunes!")
        break
    case 2:
        console.log("¡Hoy es martes!")
        break
    case 3:
        console.log("¡Hoy es miercoles!")
        break
    default:
        console.log("Se acerca el fin de semana")

}