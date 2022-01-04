//operaciones en los arreglos

const tecnologias=['html','css','js','react'];



//map arrow function

const nuevoArrayMap= tecnologias.map(tech=>{
    if(tech === 'html'){
        return 'Grapql'
    }else{
        return tech
    }
})

console.log(nuevoArrayMap)

const nuevoArrayFilter= tecnologias.filter( tech =>{
   return tech !=='css'
})

//forma corta
const nuevoArrayFilters= tecnologias.filter( tech => tech !=='html')
 

console.log(nuevoArrayFilter)
console.log(nuevoArrayFilters)
