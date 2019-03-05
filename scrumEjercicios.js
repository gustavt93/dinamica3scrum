// Ejercicio 2
// var numero=0;
// numero=parseInt(prompt('Ingrese un numero del 1 al 99'));
// if(numero<0 || numero>99){
//     alert('NO ES UN NUMERO VALIDO');
// }
// else{
//     if(numero<10 && numero>0){
//         console.log('El numero es de 1 digito');
//     }
//     else{
//         console.log('El numero es de 2 digitos');
//     }
// }

// Ejercicio 7
var tiempoLlamada=0;
var numero=0;
var costo=0;
tiempoLlamada=parseInt(prompt('Ingrese cuanto durara su llamada'));
numero=parseInt(prompt('Ingrese el numero a llamar'));
if(numero>99999 && numero<999999999){
    if(numero<99999999 && numero>99999){ //fijo
        if(numero<999999 && numero>99999){ //fijo local 
            costo=0.2*tiempoLlamada;
        }
        else{
            costo=0.5*tiempoLlamada;
        }
    }
    if(numero<999999999 && numero>99999999){ //celular
        costo=2*(0.5*tiempoLlamada);
    }
}
else{
    if(numero==105 || numero==103 || numero==106 || numero==123){
        costo=0;
    }
    else{
        console.log('Numero no valido');
    }
}
console.log('El costo de la llamada es de: ',costo,'soles');