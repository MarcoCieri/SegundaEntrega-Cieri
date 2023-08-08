let nombre = prompt("Ingrese su nombre:");
let edad = parseInt(prompt("Ingrese su edad:"));
let prestamo = parseInt(prompt("Ingrese el monto a solicitar:"));

if (nombre != "" && edad >= 18 && prestamo >= 10000){
    alert ("Hola " + nombre);
    alert ("El prestamo que solicitaste por " + "$"+prestamo + " fue aprobado.");
    alert ("Cantidad de cuotas: 12");
    alert ("Monto de la cuota: " + "$"+(prestamo*1.5)/12);
    alert ("Monto total a devolver: " + "$"+(prestamo*1.5));
} else {
    alert ("No podemos ortorgarte un prestamo.");
}


const productos = ["10000", "15000", "20000"];

let producto = prompt("Ingrese el monto a solicitar");

while(producto != ""){
  if (productos.includes(producto)) {
    alert("Su prestamo se encuentra disponible");
  } else {
    alert("Su prestamo no se encuentra disponible");
  }

  producto = prompt("Ingrese el monto del prestamo a solicitar");
}