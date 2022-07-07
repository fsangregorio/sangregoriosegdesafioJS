let cantidad = " ";
let cant = 0;
let producto = " ";
let precio = 0;
let precioTotal = 0;
let cantidadTotal = 0;
let seguirComprando = false;
let eMailIngresado = "";
let confirmarEmail = "";

class Producto {
    constructor (nombre, precio, cantidad){
        this.nombre= nombre;
        this.precio= parseInt(precio);
        this.cantidad= cantidad;
    }
}

const arrayProductos = [];
arrayProductos.push(new Producto ("PICADA PARA 2", 1000, 0));
arrayProductos.push(new Producto ("PICADA PARA 4", 2000, 0));
arrayProductos.push(new Producto ("PICADA PARA 6", 3000, 0));
arrayProductos.push(new Producto ("CERVEZA ARTESANAL", 300, 0));

console.log(arrayProductos);

const sinIva = arrayProductos.map( elemento => elemento.precio / 1.21 )
console.log(sinIva)


function elegirCantidad() {
    cantidad = prompt(`
        Ingrese la cantidad deseada.
    `);

    if (cantidad === null) {
        return;
    }

    switch (Number(cantidad)) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:        
        case 20:
            cant = (Number(cantidad));
            precioTotal += precio * cant;
            cantidadTotal += cant;
            seguirComprando = confirm("¿Quiere seguir comprando?")    
            break;
        default:
            alert(`
                Algún dato es incorrecto.
                (Recuerde que la cantidad máxima que puede agregar por
                vez es de 20 unidades)
            `);
            cantidad = "";
            elegirCantidad();
            break;
    };
};


function elegirProducto() {
    producto = prompt(`
        ¿Que producto desea comprar?

        Picada para 2 ($1000)
        Picada para 4 ($2000)
        Picada para 6 ($3000)
        Cerveza Artesanal ($300)

        Ingrese el nombre del producto y presione "Aceptar".
        Presione "Cancelar" para abandonar la compra.
    `);

    if (cantidad === null) {
        return;
    }

    switch (producto.toUpperCase()) {
        case arrayProductos[0].nombre:
            precio= arrayProductos[0].precio;
            elegirCantidad();          
            break;
        case arrayProductos[1].nombre:
            precio= arrayProductos[1].precio;
            elegirCantidad();          
            break;
        case arrayProductos[2].nombre:
            precio= arrayProductos[2].precio;
            elegirCantidad();          
            break;
        case arrayProductos[3].nombre:
            precio= arrayProductos[3].precio;
            elegirCantidad();          
            break;
        default:
            alert(`
                Los datos ingresados son incorrectos.
            `);
            producto = "";
            elegirProducto()
            break;
    };
};

function comprar() {
    alert("Bienvenido/a a Tienda de Picadas"     
    );

    do {
        elegirProducto();
    } while (seguirComprando);
};



function ingresarEmail() {
    eMailIngresado = prompt("Ingrese su dirección de E-Mail:")
    confirmarEmail = prompt("Confirme su dirección de E-Mail:")

    if (eMailIngresado != confirmarEmail){
        alert("Los e-mails ingresados no coinciden. Inténtelo nuevamente por favor.")
        ingresarEmail()
    }
};

function finalizar() {
    alert("Ha comprado:" + "\n\n" +cantidadTotal+ " unidad(es)" + "\n\n" +"El precio total de la compra es: $" + precioTotal);
    
    let finalizarCompra = confirm ("¿Quiere finalizar la compra?");
        
    if (finalizarCompra) {
        alert(`
            Su compra ha sido procesada con éxito!
            A continuación ingrese su dirección de e-mail a la cual le
            enviaremos el resumen de compra, el link de pago y la factura.
        `);  

        ingresarEmail()

        alert(`
            Muchas gracias por comprar en Tienda de Picadas.
        `);
    } else {
        cancelarCompra()    
    };
}

function cancelarCompra() {
    alert (`
    Gracias por visitar Tienda de Picadas 
    `);
};

comprar ();

if (cantidad >= 1) {

    finalizar();

} else {
    cancelarCompra();
}