describe("", function() {
  it("Si hacemos holaMundo.mostrarMensaje() retorna ¡Hola mundo!", function() {
    let resultado = holaMundo.mostrarMensaje();
    assert.equal(resultado,'¡Hola mundo!');
  })
});

describe("", function() {
  it("Si hacemos holaMundo.obtenerMensaje() retorna ¡Alo mundo!", function() {
    let resultado = holaMundo.obtenerMensaje();
    assert.equal(resultado,'¡Alo mundo!');
  })
});