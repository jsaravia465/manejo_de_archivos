const Archivo = require('./archivo.js');

/*Ingresar como argumento de ejecucion algun numero de los mencionados abajo:
  1. guardar producto y leer
  2. guardar nuevo producto y leer
  3. borrar archivo y leer
*/



let producto = {
    title: 'aceite',
    price: 40,
    thumbnail: 'foto1'
}


let archivo = new Archivo('productos.txt');

if (process.argv[2] == 1) {
    archivo.guardar(producto);
    archivo.leer().then(a => console.log(a));
} else if (process.argv[2] == 2) {
    archivo.guardar({ title: 'fernet', price: 1000, thmbnail: 'asdfasdfasdfasdf.jpeg' });


} else if (process.argv[2] == 3) {
    archivo.borrar();
    archivo.leer().then(a => console.log(a))

} else {
    console.log(" Solo es posible ingresar un valor entre el 1 y el 3");
}