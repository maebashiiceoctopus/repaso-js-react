//fetches 


const URL='https://jsonplaceholder.typicode.com/comments';

fetch(URL).then( (res)=>{
    return res.json()
}).then((res)=>{
    res.forEach( comentarios =>{
        console.log(comentarios)
    })
})



//pokemon api 
const URLPOKEMON="https://pokeapi.co/api/v2/pokemon";

fetch(URLPOKEMON).then( (res)=>{
    return res.json()
}).then((res)=>{
    console.log(res.results)
    res.results.forEach(pokemon=>{
        console.log(pokemon)
    } )
})


//rick y morty api

const URLMORTY="https://rickandmortyapi.com/api/character"

fetch(URLMORTY).then(res=> {
    return res.json();
}).then((res)=>{
   res.results.forEach(character=>{
       console.log(character)
   })
})