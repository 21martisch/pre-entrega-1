function agregarProducto(carrito) {
    let nombre = prompt("Ingresa el nombre del producto:");
    let precio = parseFloat(prompt("Ingresa el precio del producto:"));

    carrito.push({ nombre: nombre, precio: precio });
    alert(`Producto "${nombre}" agregado con éxito.\nPrecio: $${precio}`);
}

function calcularTotal(carrito) {
    let total = 0;
    for (let producto of carrito) {
        total += producto.precio;
    }
    return total;
}

function calcularDescuento(total) {
    if (total > 5000) {
        total *= 0.9;
        alert("Se ha aplicado un descuento del 10% por superar los $5000.");
    }
    return total;
}

function mostrarCarrito(carrito) {
    let totalSinDescuento = calcularTotal(carrito);
    let totalConDescuento = calcularDescuento(totalSinDescuento);

    let mensaje = "Productos en el carrito:\n";
    for (let producto of carrito) {
        mensaje += `- ${producto.nombre}: $${producto.precio}\n`;
    }
    mensaje += `\nTotal sin descuento: $${totalSinDescuento}`;
    mensaje += `\nTotal con descuento: $${totalConDescuento}`;
    
    alert(mensaje);
}

function eliminarProducto(carrito) {
    let nombre = prompt("Ingresa el nombre del producto que deseas eliminar:");
    let carritoFiltrado = carrito.filter(producto => producto.nombre.toLowerCase() !== nombre.toLowerCase());

    if (carrito.length === carritoFiltrado.length) {
        alert(`Producto "${nombre}" no encontrado en el carrito.`);
    } else {
        carrito.length = 0;
        carrito.push(...carritoFiltrado);
        alert(`Producto "${nombre}" eliminado del carrito.`);
    }
}

function iniciarSimulador() {
    let carrito = [];
    let continuar = true;

    while (continuar) {
        let opcion = prompt("¿Qué deseas hacer?\n1. Agregar producto\n2. Eliminar producto\n3. Mostrar carrito\n4. Salir");

        switch (opcion) {
            case "1":
                agregarProducto(carrito);
                break;
            case "2":
                eliminarProducto(carrito);
                break;
            case "3":
                mostrarCarrito(carrito);
                break;
            case "4":
                continuar = false;
                break;
            default:
                alert("Opción no válida. Inténtalo de nuevo.");
        }
    }

    mostrarCarrito(carrito);
    console.log("Contenido del carrito:", carrito);
    console.log("Total sin descuento:", calcularTotal(carrito));
    console.log("Total con descuento:", calcularDescuento(calcularTotal(carrito)));
}

iniciarSimulador();
