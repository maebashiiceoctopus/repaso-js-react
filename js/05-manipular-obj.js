//manipulacion de objetos   

const producto = {
    nombre: 'Tablet',
    precio: 500,
    descripcion:'tablet samsung con dibujos de alpaca'
}

//object methods 
 
//Object.freeze(producto) - bloquea el objeto, no permite reescribirlo 
//Object.seal(producto) - Modificar propiedades existentes, no permite añadir, ni eliminar


//reescribir un valor 
producto.nombre = "monitor curvo";


//agregar una propiedad nueva al objeto, si no existe lo va a añadir
producto.imagen="imagen.jpg"


//eliminar propiedad 
delete producto.imagen;



console.table(producto);