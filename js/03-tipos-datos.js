//undefined, number, string, booleaan, symbol, bigint,null


//undefined: tipo de dato que se genera cuando creamos una variable y no le asignamos un valor

let cliente;

//typeof : funcion que nos permite saber el tipo de dato
console.log(typeof cliente)


//boolean : true o false 

const descuento= true;

console.log(typeof descuento);


//number : tipo de dato numerico , las fracciones, floats, negativos etc entran en la misma categoria

const edad= 27;

console.log(typeof edad);


//strings o cadenas de texto 

const alumno="alejandra"

console.log(typeof alumno);


//bigint es un constructor para representar numeros muy grandes, no se pueden mezclar con otros datos   

const numeroGrande=BigInt(8979797974957987593784985789);
console.log(typeof numeroGrande)


//symbol: siempre es unico

const primerSymbol = Symbol(30);
const segundoSymbol= Symbol(30);

console.log(primerSymbol=== segundoSymbol);


//acceder a un symbol
console.log(primerSymbol.valueOf());

console.log(typeof primerSymbol);


// valores NULOS : ES UN VALOR PRIMITIVO DE TIPO OBJETO

const descuentos=null;
console.log( typeof descuentos);
