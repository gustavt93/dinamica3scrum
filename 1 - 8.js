// console.log("=======Problema03======");
// var numero = parseInt(prompt("Ingrese el Numero"));
// if(numero>0){
//     console.log(`El ${numero} es positivo`);
// }
// else if(numero<0){
//     console.log(`El ${numero} es negativo`);
// }
// else
// {
//   console.log("inserte solo numeros validos");
// }

////////////////////

// console.log("======Problema01 Suma, Resta, Multiplicacion, Divicion==========");
// var numero01 = parseInt(prompt("Ingrese el Primer Numero:"));
// var numero02 = parseInt(prompt("Ingres el seguno Numero:"));
// var suma=0;
// var resta=0;
// var producto=0;
// var divicion=0;
// if(numero01>numero02){
//     suma=numero01+numero02;
//     resta=numero01-numero02;
//     console.log(`La suma de los Numeros es: ${suma}`);
//     console.log(`La resta de los Numeros es: ${resta}`);
// }
// else if(numero01<numero02){
//     producto = numero01*numero02;
//     divicion = numero01/numero02;
//     console.log(`El producto de los numeros es: ${producto}`);
//     console.log(`La divicion de los numeros es: ${divicion}`);

// }
// else if(numero01 == 0 || numero02 == 0)
// {
//   console.log("no cumple con la condicion");
// }


// Ejercicio 2
// var numero=0;
// numero=parseInt(prompt('Ingrese un numero del 1 al 99'));
// if(numero>0 && numero<99){
//     if(numero<10 && numero>0){
//       console.log('El numero es de 1 digito');
//   }
//   else{
//       console.log('El numero es de 2 digitos');
//   }    
// }
// else{
//   alert('NO ES UN NUMERO VALIDO');
// }

// Ejercicio 7
// var tiempoLlamada=0;
// var numero=0;
// var costo=0;
// tiempoLlamada=parseInt(prompt('Ingrese cuanto durara su llamada'));
// numero=parseInt(prompt('Ingrese el numero a llamar'));
// if(numero>99999 && numero<999999999){
//     if(numero<99999999 && numero>99999){ //fijo
//         if(numero<999999 && numero>99999){ //fijo local 
//             costo=0.2*tiempoLlamada;
//         }
//         else{
//             costo=0.5*tiempoLlamada;
//         }
//     }
//     if(numero<999999999 && numero>99999999){ //celular
//         costo=2*(0.5*tiempoLlamada);
//     }
// }
// else{
//     if(numero==105 || numero==103 || numero==106 || numero==123){
//         costo=0;
//     }
//     else{
//         console.log('Numero no valido');
//     }
// }
// console.log('El costo de la llamada es de: ',costo,'soles');

// ejercicio_04();

// function ejercicio_04(){
//         var a = [];
//         for(var i=0; i<25; i++){
//         a[i] = String.fromCharCode(i+97);   
//     }
//     for(;;){
//         var num = parseInt(prompt("Ingrese número (1-25):"));
//         if(!(26>num && num>0)){
//             alert("Solo numeros del (1-25)");
//             continue;
//         }
//         if(num==1  || num==5 || num==9 || num==15 || num==22){
//             alert("Vocal -> "+a[num-1]);
//         }else{
//             alert("Letra -> "+a[num-1])
//         }
//     }       
// };

// ejercicio_05();

// function ejercicio_05() {
//     for(;;){
//         var num = parseInt(prompt("Ingrese numero (1-9): "));
//         if(!(10>num && num>0)){
//             alert("Solo numeros del (1-9)");
//             continue;
//         }
//         var tabla="";

//         for(var i=0; i<12; i++){
//             tabla = tabla + "\n"+(i+1)+" x "+num+" = "+(num*(i+1)); 
//         }

//         alert("Tabla de multiplicar del "+num+tabla);
//     }
// }

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
// }else if(numero != Number){
//   console.log(`ingrese numeros no letras`);
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