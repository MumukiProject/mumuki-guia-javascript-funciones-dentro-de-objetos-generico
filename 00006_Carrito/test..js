describe("Si agregamos un mouse de 150 y un teclado de 300", function() {
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
  
  it("el carrito tiene estos dos productos", function() {
    carrito.productos = [];
    carrito.agregarAlCarrito(mouse);
    carrito.agregarAlCarrito(teclado);
    assert.deepEqual(carrito.productos,[mouse, teclado]);
  })

  it("al hacer carrito.obtenerTotal retorna 450", function() {
    carrito.productos = [];
    carrito.agregarAlCarrito(mouse);
    carrito.agregarAlCarrito(teclado);
    assert.equal(carrito.obtenerTotal(), 450);
  })
});

describe("Si agregamos un monitor de 2500 y unos auriculares de 500", function() {
  let monitor = {
    id: 3,
    titulo: "Monitor Genius",
    precio: 2500,
    envioIncluido: false,
  };
  let auriculares = {
    id: 4,
    titulo: "Auriculares Genius",
    precio: 500,
    envioIncluido: false,
  };
  
  it("el carrito tiene estos dos productos", function() {
    carrito.productos = [];
    carrito.agregarAlCarrito(monitor);
    carrito.agregarAlCarrito(auriculares);
    assert.deepEqual(carrito.productos, [monitor, auriculares]);
  })

  it("al hacer carrito.obtenerTotal retorna 3000", function() {
    carrito.productos = [];
    carrito.agregarAlCarrito(monitor);
    carrito.agregarAlCarrito(auriculares);
    assert.equal(carrito.obtenerTotal(), 3000);
  })
});