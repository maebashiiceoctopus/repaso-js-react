//FUNCIONES

//function declaration 

function sumarNumeros(){
    console.log("Funcion declarativa",2+2)
}
//llamar la funcion
sumarNumeros();



//funciones con parametros
function sumar(numero1,numero2){ // <- parametros de la funcion
    console.log("Funcion con parametros`",numero1+ numero2);
  
}

sumar(10,20);  //<- argumentos
sumar(100,200);
sumar(11,1);

//funciones que retornan valores 

function sumarTres(num1,num2){ // <- parametros de la funcion
    return num1 +num2
  
}
const resultado= sumarTres(20,10);

console.log("Funcion con return",resultado);

