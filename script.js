//Preguntar al usuario su nombre
let nombre = ""
while(nombre === ""){
    nombre = prompt("Ante de comenzar, por favor ingrese su nombre:")
    if(nombre === ""){
        alert(`Por favor ingrese su nombre:`)
    }
} 
//Saludo de bienvenida
alert(`Bienvenido ${nombre} a la tienda`)
//Preguntar filtrado de 2 productos
const producto1 = ["Nombre", "Direccion", 4000]
const producto2 = ["Apellido", "Apellido", 5000]
console.log(producto1)
console.log(producto2)
//Se ofrecen las categorías disponibles
alert(`Estas son las categorias de productos disponibles: 1.- "Producto 1" 2.- "Producto 2"`)
//Se solicita elegir una opción
let categoria = 0
while(categoria !==1 && categoria !==2){
    categoria = parseInt(prompt(`Estas son las categorías de productos disponibles: 1.- "Producto 1" 2.- "Producto 2". Seleccione el número de opción elegida:`))
    if(categoria !== 1 && categoria !== 2){
        alert(`Por favor seleccione sólo una de las opciones disponibles.`)
    }
} 
//Selección de producto - creación de carrito de compras
let productoElegido = []
productoElegido.push(producto1[categoria])
console.log(productoElegido)
//Si no se encuentra el producto, hay que preguntar nuevamente

//Se solicita confirme o rechace la elección
const respuesta = parseInt(confirm(`Eligió ${NOMBREPRODUCTO}, ${DESCRIPCION} y cuyo precio es ${PRECIO}. ¿Desea realizar la compra?`))
//Respuesta final
if(respuesta === true){
    //El plazo de envío estàndar es de 5 días
    let fechaDeHoy = new Date()
    let fechaDeEnvio = new Date(parseInt(fechaDeHoy.getDate()) + 5)
    const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
    let mes = meses[(parseInt(fechaDeEnvio.getMonth())-1)]
    alert(`Gracias por su compra. Tiene un envío de 5 (cinco) días a partir de hoy, así que llegará el día ${fechaDeEnvio.getDate()} de ${mes}. Hasta la próxima.`)


}