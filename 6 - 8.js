// 6) Con solo IFS ingresar por teclado un numero y me indique el día de la semana.
// Validar si hay errores de dias.

// var numero=parseInt(prompt("ingrese numero"));

// if (numero == 1) {
//   console.log(`Dia ${numero} es lunes`);
// } else if(numero == 2){
//   console.log(`Dia ${numero} es martes`);
// }else if(numero == 3){
//   console.log(`Dia ${numero} es miercoles`);
// }else if(numero == 4){
//   console.log(`Dia ${numero} es jueves`);
// }else if(numero == 5){
//   console.log(`Dia ${numero} es viernes`);
// }else if(numero == 6){
//   console.log(`Dia ${numero} es sabado`);
// }else if(numero == 7){
//   console.log(`Dia ${numero} es domingo`);
// }else if(numero >= 8 || numero<=0){
//   console.log(`Dia ${numero} no existe`);
// }

// Sistema de SMS: El sistema deberá tener un MENU solicite el numero de contacto
// y luego el mensaje de texto, si la validacion de cantidad de digitos del numero (9)
// es correcta. Mostrara un mensaje indicando “Mensaje Enviado a #NUMERO_TAL”

var numeroTelefono = parseInt(prompt("ingresa el nuermo de destino"));
var mensaje = "";

if(numeroTelefono>0 && numeroTelefono>9 && numeroTelefono>99 && numeroTelefono>999
  && numeroTelefono>9999 && numeroTelefono>99999 && numeroTelefono>999999 && numeroTelefono>9999999
  && numeroTelefono>99999999 && numeroTelefono<=999999999){
    mensaje =prompt("ingrese mensaje aqui ↓");
    console.log(`Mensaje enviado a ${numeroTelefono}`);
  }else console.log("ingrese un numero correcto");