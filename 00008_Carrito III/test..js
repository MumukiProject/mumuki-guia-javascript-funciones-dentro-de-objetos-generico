describe("Si agregamos un monitor", function() {

  let monitor = {
    id: 3,
    titulo: "Monitor Genius",
    precio: 2500,
    envioIncluido: false,
  };
  it("y hacemos carrito.detalle() nos retorna el monitor con el detalle de la compra", function() {
    carrito.productos = [];
    carrito.agregarAlCarrito(monitor);
    assert.equal(carrito.detalle(), 'Listado de productos:\nMonitor Genius - $2620\nTotal con IVA: $3170.2');
  })
  
});
describe("Si agregamos un mouse, unos auriculares y un teclado", function() {
  let mouse = {
    id: 1,
    titulo: "Mouse Genius",
    precio: 150,
    envioIncluido: false,
  };
  let teclado = {
    id: 2,
    titulo: "Teclado Genius",
    precio: 300,
    envioIncluido: false,
  };
  let auriculares = {
    id: 4,
    titulo: "Auriculares Genius",
    precio: 500,
    envioIncluido: false,
  };
  it("y hacemos carrito.detalle() nos retorna el listado con el formato correcto de los tres productos", function() {
    carrito.productos = [];
    carrito.agregarAlCarrito(mouse);
    carrito.agregarAlCarrito(auriculares);
    carrito.agregarAlCarrito(teclado);
    assert.equal(carrito.detalle(), 'Listado de productos:\nMouse Genius - $270\nAuriculares Genius - $620\nTeclado Genius - $420\nTotal con IVA: $1585.1');
  })
  
});