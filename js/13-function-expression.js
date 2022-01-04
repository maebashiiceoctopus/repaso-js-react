//FUNCIONES -function expression

//sumar(); <-- no se puede llamar si la funcion no esta inicializada.
//las variables no se registran en el primer paso del hoisting


const sumar= function(num1,num2){
    return num1+num2;
}

const resultado= sumar(30+10)
console.log(resultado);