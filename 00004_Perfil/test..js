describe("", function() {
  it("Si tenemos un perfil que tiene nombre Hedy y apellido Lamarr, al hacer perfil.obtenerNombreCompleto() retorna Hedy Lamarr", function() {
      perfil.nombre = "Hedy",
      perfil.apellido = "Lamarr",
      assert.equal(perfil.obtenerNombreCompleto(),'Hedy Lamarr');
  })
});

describe("", function() {
  it("Si tenemos un perfil que tiene nombre Marilina y apellido Bertoldi, al hacer perfil.obtenerNombreCompleto() retorna Marilina Bertoldi", function() {
      perfil.nombre = "Marilina",
      perfil.apellido = "Bertoldi",
      assert.equal(perfil.obtenerNombreCompleto(),'Marilina Bertoldi');
  })
});