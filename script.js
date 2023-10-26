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
//Filtrado de 2 productos
const producto1 = products.find(product => product.category === "jewelery")
const producto2 = products.find(product => product.category === "men's clothing")
//Se ofrecen las categorías disponibles
alert(`Estas son las categorias de productos disponibles: 1.- "${producto1.title}" 2.- "${producto2.title}"`)
//Se solicita elegir una opción
let categoria = 0
while(categoria !==1 && categoria !==2){
    categoria = parseInt(prompt(`Estas son las categorías de productos disponibles: 1.- "${producto1.title}" 2.- "${producto2.title}". Seleccione el número de opción elegida:`))
    if(categoria !== 1 && categoria !== 2){
        alert(`Por favor seleccione sólo una de las opciones disponibles.`)
    }
} 
//Selección de producto - creación de carrito de compras
let productoElegido = []
if(categoria === 1){
    productoElegido = producto1
} else{
    productoElegido = producto2
}
//Se solicita confirme o rechace la elección
const respuesta = confirm(`Eligió ${productoElegido.title}, ${productoElegido.description} y cuyo precio es $${productoElegido.price}. ¿Desea realizar la compra?`)
//Respuesta final
if(respuesta === true){
    //El plazo de envío estàndar es de 5 días
    let fechaDeHoy = new Date()
    let fechaDeEnvio = new Date(parseInt(fechaDeHoy.getDate()) + 5)
    const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
    let mes = meses[(parseInt(fechaDeEnvio.getMonth())-1)]
    alert(`Gracias por su compra. Tiene un envío de 5 (cinco) días a partir de hoy, así que llegará el día ${fechaDeEnvio.getDate()} de ${mes}. Hasta la próxima.`)

}else{
    alert(`Gracias por su visita. Hasta la próxima.`)
}