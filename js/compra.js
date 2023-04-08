class CompraAbono {
    constructor(carrito) {
      this.carritoAbonos = carrito;
    }
  
    obtenerSubtotal() {
      if (this.carritoAbonos.length > 0) {
        return this.carritoAbonos.reduce((acc, abono) => acc + abono.importe, 0);
      }
    }
  }