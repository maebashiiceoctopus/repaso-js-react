//objetos 

const producto = {
    nombre: 'Tablet',
    precio: 500,
    descripcion:'tablet samsung con dibujos de alpaca'
}

console.log(producto);
console.table(producto);

//acceder a una sola propiedad del objeto 
console.log(producto.nombre);


//desestructuring : sacar de una estructura

const {nombre, precio, descripcion} = producto;

console.log(nombre)


//object literal enhancement: variables que estan fuera de un objeto colocarlas ddentro e un objeto

const autenticado= true;
const usuario= "Aleja"

const nuevoObjeto = {
    autenticado:autenticado,
    usuario:usuario,
}

console.table(nuevoObjeto)