describe("", function() {
  it("Si hacemos playlist.agregarCancion('Blackbird'), la canción se agrega al array de canciones", function() {
    playlist.agregarCancion('Blackbird')
    assert.deepEqual(playlist.canciones,['Blackbird']);
  })
})

describe("", function() {
  it("Si hacemos playlist.agregarCancion('Blackbird') y luego playlist.agregarCancion('Lotus Flower'), el array de canciones contendrá las dos canciones", function() {
    playlist.agregarCancion('Lotus Flower');
    assert.deepEqual(playlist.canciones,['Blackbird', 'Lotus Flower']);
  })
})