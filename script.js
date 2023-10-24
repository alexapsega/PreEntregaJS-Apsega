//Preguntar al usuario su nombre
const nombre = prompt("Ante de comenzar, por favor ingrese su nombre:")
while (nombre === "",){
    alert("Ingrese su nombre correctamente por favor")
}
//Saludo de bienvenida
alert(`Bienvenido ${nombre}`)


//Preguntar qué producto le interesa al ususario
const producto = Number(prompt("¿Qué producto le interesaría comprar? Para elegir una categoría escriba el número de opción que corresponda: 1.- Remera 2.- Pantalón 3.- Buzo 4.- Ninguno"))
//Obtenermos el precio del prodcuto
const precio = Number(producto * 1500)
calcular(compra){
    switch (compra){
    case 4:
        //Validamos el valor ingresado
        alert(`Usted eleigió no comprar ningún prodcuto. Hasta la próxima. Muchas gracias por su visita`)
        break
    case 1:
        //Validamos el valor ingresado
        const validacion1 = confirm(`Usted eleigió comprar Remera. Su precio es de ${precio}. ¿Desea comprar el prodcuto?`)
        if (validacion1 === false){
            alert(`Muchas gracias por su visita`)
        } else {
            const direccion = prompt (`Ingrese su dirección para realizar el envío:`)
            alert(`Su artículo será enviado a ${direccion}`);
            alert(`Muchas gracias por su compra`);
        }
        break
    case 2:  
        //Validamos el valor ingresado
        const validacion2 = confirm(`Usted eleigió comprar Pantalón. Su precio es de ${precio}. ¿Desea comprar el prodcuto?`)
        if (validacion2 === false){
            alert(`Muchas gracias por su visita`)
        } else {
            const direccion = prompt (`Ingrese su dirección para realizar el envío:`)
            alert(`Su artículo será enviado a ${direccion}`)
            alert(`Muchas gracias por su compra`)
        }
        break
    case 3:
        //Validamos el valor ingresado
        const validacion3 = confirm(`Usted eleigió comprar Buzo. Su precio es de ${precio}. ¿Desea comprar el prodcuto?`);
        if (validacion3 === false){
            alert(`Muchas gracias por su visita`);
        } else {
            const direccion = prompt (`Ingrese su dirección para realizar el envío:`);
            alert(`Su artículo será enviado a ${direccion}`);
            alert(`Muchas gracias por su compra`);
        }
        break
    }
}
calcular (producto);
