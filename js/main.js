const carritoAbonos =[]
const abonos=[
  {nombre:"Abono Platea Alta",codigo: 1,importe: 45000},
  {nombre:"Abono tribuna oficial",codigo: 2, importe: 20000},
  {nombre:"Abono visera:", codigo: 3, importe: 70000},
  {nombre:"Abono vieja amelia",codigo:4, importe: 40000},
  {nombre:"Abono platea este:",codigo:5, importe: 60000},
  {nombre:"Abono palomar:",codigo:6, importe: 20000},
]


function encontrarAbono(codigo){
abonos.find((abono)=> abonos.codigo === parseInt(codigo))
return
}
function compraRealizada(){
  if(carritoAbonos.length > 0){
    console.warn("carrito vacio" + "👎🏻")
  }
  const buyA = new compraAbono(carrito)
    alert('💰 El costo total es de: $ ' + buyA.obtenerSubtotal())

    let descuento = 0.90
    let respuesta = confirm("¿Deseas confirmar tu pago?")
        if (respuesta === true) {
            alert('✅ Confirmamos tu pago de: $ ' + (buyA.obtenerSubtotal() * descuento) + "\n Muchas gracias por la compra :)")
            carrito.length = 0
        }
}


