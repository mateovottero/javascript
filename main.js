const comprarComponente = () => {
    let componente = ''
    let cantidad = 0
    let precio = 0
    let subtotal = 0
    let seguirComprando = false

    do {
        componente = prompt('¿Que componente necesitas? procesador, placa de video, cooler, ram o perifericos?')
        cantidad = parseInt(prompt('¿Cuántos queres comprar?'))

        let cantidadValidada = validarCantidad(cantidad)

        switch (componente) {
            case 'procesador':
                precio = 700
                break
            case 'placa de video':
                precio = 1100
                break
            case 'cooler':
                precio = 300
                break
            case 'ram':
                precio = 500
                break
            case 'perifericos':
                precio = 200
                break
            default:
                alert('Alguno de los datos ingresados no es correcto!')
                precio = 0
                cantidadValidada = 0
                break
        }

        subtotal += precio * cantidadValidada

        seguirComprando = confirm('¿Desea seguir comprando?')
    } while (seguirComprando)

    return subtotal
}

const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        alert('Debe de agregar una cantidad válida!')
        cantidad = parseInt(prompt('¿Cuántos queres comprar?'))
    }

    return cantidad
};

const aplicarDescuento = (subtotal) => {
    const descuento = 0.80

    if (subtotal >= 6000) {
        return subtotal * descuento
    } else {
        return subtotal
    }
};

const calcularEnvio = (subtotal) => {
    const quiereEnvio = confirm('¿Querés envío a domicilio?')

    if (quiereEnvio && subtotal >= 4000) {
        alert('Tenés envio gratis. El total de la compra es: $'+subtotal)
    } else if (quiereEnvio && subtotal < 4000) {
        subtotal += 1000
        alert('El envío cuesta $1000. El total mas envío es: $'+subtotal)
    } else {
        alert('El total de tu compra es: $'+subtotal)
    }

    return subtotal
};

const mostrarDetalleDeCompra = (precioFinal) => {
    alert('El total a pagar es de  $'+precioFinal+'. Gracias por su compra!')
};

const subtotal = comprarComponente()

const subtotalConDescuento = aplicarDescuento(subtotal)

const precioFinal = calcularEnvio(subtotalConDescuento)


mostrarDetalleDeCompra(precioFinal)

