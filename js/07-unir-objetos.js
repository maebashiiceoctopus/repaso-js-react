const producto = {
    nombre: 'Tablet',
    precio: 500,
    descripcion:'tablet samsung con dibujos de alpaca'
}


const cliente={
    nombre:'alejandra',
    premium:true,
}
//unir objetos 

//const nuevoObjeto = Object.assign(producto,cliente);NO

const nuevoObjetoDos={producto: {...producto},cliente:{...cliente}}

console.log(nuevoObjetoDos);
console.log(cliente);
console.log(producto);


//evitar modificar los objetos  originales