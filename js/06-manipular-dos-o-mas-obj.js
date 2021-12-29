
const producto = {
    nombre: 'Tablet',
    precio: 500,
    descripcion:'tablet samsung con dibujos de alpaca'
}


const cliente={
    nombre:'alejandra',
    premium:true,
}


const {nombre , precio, descripcion} = producto;

//ponerle un alias a una variable que llame igual a otra variable ya instanciada ( cuando consumimos apis )
const {nombre: nombreCliente, premium} = cliente;

console.log(nombre, precio, descripcion);
console.log(nombreCliente);