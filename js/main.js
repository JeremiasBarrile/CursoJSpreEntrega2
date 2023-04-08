const carritoAbonos = [ { nombre: "Abono Platea Alta", codigo: 1, importe: 45000 },
{ nombre: "Abono tribuna oficial", codigo: 2, importe: 20000 }]
const abonos = [
  { nombre: "Abono Platea Alta", codigo: 1, importe: 45000 },
  { nombre: "Abono tribuna oficial", codigo: 2, importe: 20000 },
  { nombre: "Abono visera", codigo: 3, importe: 70000 },
  { nombre: "Abono vieja amelia", codigo: 4, importe: 40000 },
  { nombre: "Abono platea este", codigo: 5, importe: 60000 },
  { nombre: "Abono palomar", codigo: 6, importe: 20000 },
];

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




function encontrarAbono(codigo) {
  return abonos.find(abono => abono.codigo === parseInt(codigo));
}

function finalizarCompra() {
  if (carritoAbonos.length === 0) {
    console.warn("carrito vacio" + "👎🏻");
    return;
  }

  const buyA = new CompraAbono(carritoAbonos);
  alert('💰 El costo total es de: $ ' + buyA.obtenerSubtotal());

  const descuento = 0.90;
  let respuesta = confirm("¿Deseas confirmar tu pago?");
  if (respuesta === true) {
    alert('✅ Confirmamos tu pago de: $ ' + (buyA.obtenerSubtotal() * descuento) + "\n Ahora a alentar a la lepra");
    carritoAbonos.length = 0;
  }
}

function verCarritoAbonos() {
  console.table(carritoAbonos);
}

function comprar() {
  let codigo = prompt("selecciona el abono deseado con su codigo numerico: ");
  if (!parseInt(codigo)) {
    alert("⛔️ Error en el código ingresado.");
    let respuesta = confirm("¿Deseas intentar de nuevo?");
    if (respuesta === true) {
      comprar();
    }
    return;
  }

  let abonoseleccionado = encontrarAbono(codigo);
  if (abonoseleccionado === undefined) {
    alert("⛔️ Error en el código ingresado.");
    return;
  }

  alert(abonoseleccionado.nombre + " - ha sido agregada al carrito.");
  carritoAbonos.push(abonoseleccionado);

  let respuesta = confirm("¿Deseas comprar otro abono?");
  if (respuesta === true) {
    comprar();
  } else {
    finalizarCompra();
    
  }
}