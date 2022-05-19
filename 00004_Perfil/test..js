describe("", function() {
  it("Si tenemos un perfil que tiene nombre Hedy y apellido Lamarr, al hacer perfil.obtenerNombreCompleto() retorna Hedy Lamarr", function() {
      perfil.nombre = "Hedy",
      perfil.apellido = "Lamarr",
      assert.equal(perfil.obtenerNombreCompleto(),'Hedy Lamarr');
  })
});

describe("", function() {
  it("Si tenemos un perfil que tiene nombre Marie y apellido Curie, al hacer perfil.obtenerNombreCompleto() retorna Marie Curie", function() {
      perfil.nombre = "Marie",
      perfil.apellido = "Curie",
      assert.equal(perfil.obtenerNombreCompleto(),'Marie Curie');
  })
});