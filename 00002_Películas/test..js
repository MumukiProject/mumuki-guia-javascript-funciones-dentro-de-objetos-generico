describe("", function() {
  it("Si tenemos una pelicula de nombre The Dark Knight y año 2008 al hacer pelicula.mostrarInfo() retorna Película: The Dark Knight - Año: 2008", function() {
    pelicula.titulo = "The Dark Knight",
    pelicula.anio = 2008,
    assert.equal(pelicula.mostrarInfo(),'Película: The Dark Knight - Año: 2008');
  })
});

describe("", function() {
  it("Si tenemos una pelicula de nombre El laberinto del fauno y año 2006 al hacer pelicula.mostrarInfo() retorna Película: El laberinto del fauno - Año: 2006", function() {
    pelicula.titulo = "El laberinto del fauno",
    pelicula.anio = 2006,
    assert.equal(pelicula.mostrarInfo(),'Película: El laberinto del fauno - Año: 2006');
  })
});