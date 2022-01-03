//operaciones en los arreglos

const tecnologias=['html','css','js','react'];



console.table(tecnologias);



//añadir elementos al array : NO UTILIZARLOS SI USAS REACT

tecnologias.push('Graphql') //-->agrega al final del array
tecnologias.unshift('MongoDb') //-->agrega al principio del array


//FORMA BIEN DE AGREGAR COSAS AL ARRAY 
const nuevoArreglo=[...tecnologias,'Graphql'] //--> agregar al final del array
const nuevoArregloDos=['Apollo',...tecnologias,] //--> agregar al principio del array

console.log(nuevoArreglo);
console.log(nuevoArregloDos);





//eliminar elementos del array :NO UTILIZARLOS SI USAS REACT

tecnologias.pop(); //-->elimina en el final 
tecnologias.shift(); //-->elimina del inicio del array 
tecnologias.splice(2,3) //--> elimina de una posicion especifica
console.log(tecnologias)

//FORMA BIEN DE ELIMINAR ELEMENTOS DEL ARRAY

const nuevoArrayFilter= tecnologias.filter( function (tech){
   return tech !=='css'
})

console.log(nuevoArrayFilter)


//remplazar elementos del array


tecnologias[0]="Grapql"; //-->NOOO  porque modificamos la informacion del array original

const nuevoArrayMap= tecnologias.map(function(tech){
    if(tech === 'html'){
        return 'Grapql'
    }else{
        return tech
    }
})

console.log(nuevoArrayMap)