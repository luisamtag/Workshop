function verificarDescuentoCompra(valorCompra) {
    const valorMinimoDescuento = 100000; // Valor mínimo para aplicar el descuento

    const recibeDescuento = valorCompra >= valorMinimoDescuento;

    console.log("¿La compra recibe el descuento del 50%?");
    console.log(recibeDescuento);
}

// Ejemplo de uso
const valorCompra = 120000; // Ejemplo de valor de compra

verificarDescuentoCompra(valorCompra);
