//operaciones en los arreglos

const tecnologias=['html','css','js','react'];
const numeros= [10,20,30]
let nuevoArray;

//forma corta
nuevoArray= tecnologias.filter( tech => tech !=='html')


//saber si existe un elemento en el array :TRUE/FALSE
const resultado= tecnologias.includes('react')
console.log(resultado);
//si al menos 1 elemento de un arreglo cumple una condicion :TRUE /FALSE

const numerosArray= numeros.some(numero=> numero>15)
console.log(numerosArray)


//devuelve el primer elemento que cumple con la condicion

const numerosArrays= numeros.find(numero=> numero>15)
console.log(numerosArrays)


//every retorna true o false si todos los elementos cumplen la condicion
const numerosEvery= numeros.every(numero=> numero>15)
console.log(numerosEvery)


//reduce  - util en carros de compra , va acumulando en el total
const numerosReduce= numeros.reduce((total,numero)=> numero+total, 0)
console.log(numerosReduce)

//filter  - crea un nuevo array en base a una condicion
const techFilter= tecnologias.filter(tech=> tech==='react')
console.log(techFilter)

const numberFilter= numeros.filter(numero=> numero>15)
console.log(numberFilter)