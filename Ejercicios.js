ejercicio_04();

function ejercicio_04(){
        var a = [];
        for(var i=0; i<25; i++){
        a[i] = String.fromCharCode(i+97);
        console.log(a[i]+i);    
    }
    for(;;){
        var num = parseInt(prompt("Ingrese número (1-25):"));
        if(!(26>num && num>0)){
            alert("Solo numeros del (1-25)");
            continue;
        }
        if(num==1  || num==5 || num==9 || num==15 || num==22){
            alert("Vocal -> "+a[num-1]);
        }else{
            alert("Letra -> "+a[num-1])
        }
    }   
        
};

function ejercicio_05() {
    for(;;){
        var num = parseInt(prompt("Ingrese numero (1-9): "));
        if(!(10>num && num>0)){
            alert("Solo numeros del (1-9)");
            continue;
        }
        var tabla="";

        for(var i=0; i<12; i++){
            tabla = tabla + "\n"+(i+1)+" x "+num+" = "+(num*(i+1)); 
        }

        alert("Tabla de multiplicar del "+num+tabla);
    }
}