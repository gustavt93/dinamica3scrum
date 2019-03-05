console.log("=======Problema03======");
var numero = parseInt(prompt("Ingrese el Numero"));
if(numero>0){
    console.log(`El ${numero} es positivo`);
}
if(numero<0){
    console.log(`Eo ${numero} es negativo`);
}
console.log("======Problema01 Suma, Resta, Multiplicacion, Divicion==========");
var numero01 = parseInt(prompt("Ingrese el Primer Numero:"));
var numero02 = parseInt(prompt("Ingres el seguno Numero:"));
var suma=0;
var resta=0;
var producto=0;
var divicion=0;
if(numero01>numero02){
    suma=numero01+numero02;
    resta=numero01-numero02;
    console.log(`La suma de los Numeros es: ${suma}`);
    console.log(`La resta de los Numeros es: ${resta}`);
}
if(numero01<numero02){
    producto = numero01*numero02;
    divicion = numero01/numero02;
    console.log(`El producto de los numeros es: ${producto}`);
    console.log(`La divicion de los numeros es: ${divicion}`);

}
console.log("Fin del Progarama");
