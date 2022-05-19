describe("", function() {
  let mouse = {
    id: 1,
    titulo: "Mouse Genius",
    precio: 150,
    envioIncluido: true
  };
  
  let teclado = {
    id: 2,
    titulo: "teclado Genius",
    precio: 300,
    envioIncluido: false
  };
  
  it("Si agregamos un mouse con envio incluido el total del carrito es el precio del mouse con el IVA incluido", function() {
    let mouse = {
      id: 1,
      titulo: "Mouse Genius",
      precio: 150,
      envioIncluido: true
    };
  
    carrito.productos = [];
    carrito.agregarAlCarrito(mouse);
    assert.equal(carrito.obtenerTotal(), 181.5);
  })

  it("Si agregamos un teclado que no tiene envio incluido el total del carrito es el precio del teclado más $120 con el IVA incluido", function() {
      let teclado = {
      id: 2,
      titulo: "teclado Genius",
      precio: 300,
      envioIncluido: false
    };
    
    carrito.productos = [];
    carrito.agregarAlCarrito(teclado);
    assert.equal(carrito.obtenerTotal(), 508.2);
  })

  it("Si agregamos un mouse de 150 con envío y un teclado de 300 sin envío el total del carrito es el preciode la suma de ambos productos con IVA", function() {
    let mouse = {
      id: 1,
      titulo: "Mouse Genius",
      precio: 150,
      envioIncluido: true
    };
    
    let teclado = {
      id: 2,
      titulo: "teclado Genius",
      precio: 300,
      envioIncluido: false
    };
    
    carrito.productos = [];
    carrito.agregarAlCarrito(mouse);
    carrito.agregarAlCarrito(teclado);
    assert.equal(parseFloat(carrito.obtenerTotal().toFixed(1)), 689.7);
  })
});
