//iteradores en js
const tecnologias=['html','css','js','react'];

//foreach: se ejecuta una vez por cada elemento en el arreglo, solo nos permite listarlo

const arrayForEach= tecnologias.forEach(function(tech){
   return tech
})


//MAP nos permite iterar pero tambien crear un nuevo arreglo 

const arrayMap= tecnologias.map(function(tech){
    return tech
})

console.log(arrayForEach);
console.log(arrayMap);