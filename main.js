// EJERCICIO NRO 1 //
/* let numeroUno = 5
let numeroDos = 30
let numeroMayor = numeroUno > numeroDos
console.log(numeroMayor)
// EJERCICIO NRO 2 //
let numeroTres = 55
let numeroCuatro = 55
let numeroIgual = numeroTres == numeroCuatro
console.log(numeroIgual)
// EJERCICIO NRO 3 //
console.log(Math.max(20,30))
// EJERCICIO NRO 4 //
console.log(Math.min (2,20,45))
// EJERCICIO NRO 5 //
let personaUno = {
    nombre: "Micaela",
    edad: 22,
    altura: 160
}
let personaDos = {
    nombre: "Analia",
    edad: 46,
    altura: 156
}
console.log("La persona mas alta mide" + " " + Math.max(personaUno.altura, personaDos.altura) + "cm.")
console.log("La persona mas grande tiene" + " " + Math.max(personaUno.edad,personaDos.edad) + " " + "años.") 
// EJERCICIO NRO 6 //
let nombre = prompt("Ingrese su nombre")
let edad = Number(prompt("Ingrese su edad"))
let altura = Number(prompt("Ingrese su altura"))
let vision = Number(prompt("Ingrese su vision del 1 al 10"))
console.log(edad >= 18 && altura > 150 && vision >= 8) 
// EJERCICIO NRO 7 //
let ingresaNombre = prompt("Ingrese su nombre")
if (ingresaNombre == "Micaela") {
    console.log("Bienvenido" + " " + ingresaNombre)
}

let ingresePase = prompt("Ingrese su pase: vip o normal")
let poseeEntrada = prompt("Posee entrada? si o no")
let utilizaEntrada = prompt("Desea utilizar su entrada? si o no")

if (ingresePase == "vip" || poseeEntrada == "si" && utilizaEntrada == "si") {
    console.log("Bienvenido !")
} else if (poseeEntrada == "no") {
    let compraEntrada = prompt("Desea comprar una entrada? si o no")
    if (compraEntrada == "si") {
        let compraEntrada2 = Number(prompt("Ingrese dinero disponible"))
        if (compraEntrada2 >= 1000) {
            console.log("Bienvenido!")
        }else {
            console.log("Su venta ha sido rechazada")
        }
    } else if (compraEntrada == "no") {
        console.log("Hasta la proxima!")
    }
} else {
    console.log("Su venta ha sido rechazada")
}*/




// EJERCICIO NRO 8 //
/* let numeroIncognita = 3
let numeroIngresado = Number(prompt("Adivina el numero incognito"))
console.log(numeroIngresado)

if (numeroIngresado == numeroIncognita) {
    console.log("Ganaste, has adivinado el numero!")
}

if (numeroIngresado > numeroIncognita) {
    numeroIngresado = Number(prompt("El numero ingresado es mayor, vuelve a intentarlo."))
    {
        if (numeroIngresado < numeroIncognita) {
            numeroIngresado = Number(prompt("El numero ingresado es menor, vuelve a intentarlo."))
            {
                numeroIngresado = Number(prompt("El numero ingresado es menor, vuelve a intentarlo."))
            } if (numeroIngresado == numeroIncognita) {
                console.log("Ganaste, has adivinado el numero!")
            } else if (numeroIngresado < numeroIncognita) {
                numeroIngresado = Number(prompt("El numero ingresado es menor, vuelve a intentarlo."))
            } else if (numeroIngresado > numeroIncognita) {
                numeroIngresado = Number(prompt("El numero ingresado es mayor, vuelve a intentarlo."))
            }
        } else if (numeroIngresado > numeroIncognita) {
            numeroIngresado = Number(prompt("El numero ingresado es mayor, vuelve a intentarlo."))
        } if (numeroIngresado == numeroIncognita) {
            console.log("Ganaste, has adivinado el numero!")
        }
    }
}
if (numeroIngresado < numeroIncognita) {
    numeroIngresado = Number(prompt("El numero ingresado es menor, vuelve a intentarlo."))
    {
        if (numeroIngresado > numeroIncognita) {
            numeroIngresado = Number(prompt("El numero ingresado es mayor, vuelve a intentarlo."))
            {
                numeroIngresado = Number(prompt("El numero ingresado es menor, vuelve a intentarlo."))
            } if (numeroIngresado == numeroIncognita) {
                console.log("Ganaste, has adivinado el numero!")
            } else if (numeroIngresado < numeroIncognita) {
                numeroIngresado = Number(prompt("El numero ingresado es menor, vuelve a intentarlo."))
            } else if (numeroIngresado > numeroIncognita) {
                numeroIngresado = Number(prompt("El numero ingresado es mayor, vuelve a intentarlo."))
            }
        } else if (numeroIngresado > numeroIncognita) {
            numeroIngresado = Number(prompt("El numero ingresado es mayor, vuelve a intentarlo."))
        } if (numeroIngresado == numeroIncognita) {
            console.log("Ganaste, has adivinado el numero!")
        }
    }
} */


// EJERCICIO 9 //
/* let ingresaEdad = Number(prompt("Ingrese su edad"))

if (ingresaEdad > 0 && ingresaEdad < 13){
    console.log("Es infante")
}else if (ingresaEdad > 12 && ingresaEdad  < 19){
    console.log("Es adolescente")
}else if (ingresaEdad > 18 && ingresaEdad < 46){
    console.log("Es mayor joven")
}else if (ingresaEdad > 45){
    console.log("Es anciano")
}

if (ingresaEdad >= 100){
    console.log("¿Realmente tiene esa edad?")
} */
// EJERCICIO 10 //
/* let usuarioUno = prompt("Ingrese nombre")
let usuarioDos = prompt("Ingrese nombre")
let opcionUsuarioUno = prompt("Ingrese piedra, papel o tijera")
let opcionUsuarioDos = prompt("Ingrese piedra, papel o tijera")


if (opcionUsuarioUno === "piedra" && opcionUsuarioDos === "papel"){
    console.log("Gana" + " " +  usuarioDos)
}else if(usuarioUno === "papel" && usuarioDos === "papel"){
    console.log("Hay un empate")
}else if(usuarioUno === "tijera" && usuarioDos === "papel"){
    console.log("Gana" + " " + usuarioUno)
}else{
    console.log("Un jugador hizo trampa")
} */
// EJERCICIO 11 //
/* let ingreseColor = prompt("Ingrese un color: blanco, negro, verde, azul, amarillo, rojo o marrón")
switch (ingreseColor) {
    case "blanco":
        console.log("Falta de color")
        break;
    case "negro":
        console.log("Falta de color")
        break;
    case "verde":
        console.log("El color de la naturaleza")
        break;
    case "azul":
        console.log("El color del agua")
        break;
    case "amarillo":
        console.log("El color del sol")
        break;
    case "rojo":
        console.log("El color del fuego")
        break;
    case "marron":
        console.log("El color de la tierra")
        break;
    default:
        console.log("Excelente elección, no lo teníamos pensado.")
        break;
}
 */
// EJERCICIO 12 //
/* let ingreseNumeroUno = Number(prompt("Ingrese el primer numero"))
let ingreseNumeroDos = Number(prompt("Ingrese el segundo numero"))
let elijaOperacion = prompt("Ingrese la operacion: suma, resta, multiplicacion o division")

switch (elijaOperacion) {
    case "suma":
        console.log(ingreseNumeroUno + ingreseNumeroDos)
        break;
    case "resta":
        console.log(ingreseNumeroUno - ingreseNumeroDos)
        break;
    case "multiplicacion":
        console.log(ingreseNumeroUno * ingreseNumeroDos)
        break;
    case "division":
        console.log(ingreseNumeroUno / ingreseNumeroDos)
        break;
    default:
        alert("ERROR")
        break;
} */
// EJERCICIO 13 //
/* let nombreCompleto= prompt("Ingrese su nombre completo")
let fechaNacimiento= parseInt(prompt("Ingrese su fecha de nacimiento (ddmmaa)"))
let numeroDni= parseInt(prompt("Ingrese su numero de DNI"))
let sexo= prompt("Ingrese sexo femenino o masculino")
let dni = {
    nombreCompleto,
    fechaNacimiento,
    numeroDni,
    sexo
}

alert("Los datos ingresados son:" + " " + nombreCompleto + " " + fechaNacimiento + " " + numeroDni + " " + sexo)
let datos = prompt("Los datos estan correctos? si o no")


if(datos == "si"){    
    console.table(`Su registro fue exitoso` + " "+ dni.nombreCompleto + " " + dni.fechaNacimiento + " " + dni.numeroDni + " "+ dni.sexo)
}else if(datos == "no"){
    console.table("Vuelva a intentar en un mes.")
} */


