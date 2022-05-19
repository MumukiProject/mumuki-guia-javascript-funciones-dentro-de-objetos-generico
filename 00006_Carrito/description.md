Tenemos un objeto `carrito` :shopping_cart:, que guarda datos de un carrito de compras en una tienda virtual, tiene dos propiedades: `cuenta` (un objeto con los datos de la persona que está haciendo la compra) y `productos` (un **array de objetos**, con todos los productos que está por comprar).
Los productos tienen 4 propiedades: `id` (un número), `titulo` (un string con el nombre del producto), `precio` (un número con el precio del producto) y `envioIncluido` (un booleano que indica si el producto tiene o no cargos por envio). Por ejemplo:

``` js
ム let mouse = {
  id: 0,
  titulo: "Mouse Genius",
  precio: 150,
  envioIncluido: false
};

ム carrito.agregarAlCarrito(mouse)

ム carrito.obtenerTotal()
150
```
> Definí el método `agregarAlCarrito` que tome por parámetro un producto y lo agregue al array de productos del carrito, y el método `obtenerTotal` que retorne la suma de todos los precios de los productos que están en el carrito.