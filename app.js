const Libros = []

Libros.push (new Libro ('rayuela', 'Cortazar', 'Litinoamericana', 'Planeta', 5700, 30))
Libros.push (new Libro ('El hobitt', 'JRR tolkien', 'aventura', 'Minotauro', 5300, 21))
Libros.push (new Libro ('La Paranoia', 'Spregelburg', 'Terror', 'Patron Sanchez', 3700, 20))
Libros.push (new Libro ('It', "Stepen King", 'terror', 'Planeta', 7800, 12))



function mostrarOpciones() {
    console.log("¿Qué deseas hacer?");
    console.log("1. Buscar un libro");
    console.log("2. Agregar un libro");
    console.log("3. Eliminar un libro");
    console.log("4. Salir")
  }
  

  mostrarOpciones();
  
 
  const opcion = prompt("Elige una opción: 1- Buscar un libro  2- Agregar un libro  3- Eliminar un libro 4- Salir ");
  
  
  switch (opcion) {
    case "1":
    
      buscarLibro ()
      
      break;
    case "2":
      agregarLibro ()
      break;
    case "3":
      eliminarLibro()
      break;
    case "4":
        break
    default:
      console.log("Opción no válida");
  }
  

  // BUSCANDO UN LIBRO


  
  function buscarLibro(){
  
    const busqueda = prompt("Ingresa el título del libro que buscas:");
  
  const libroEncontrado = Libros.find(libro => libro.nombre === busqueda);
  
  
  if (libroEncontrado) {
    console.log("Libro encontrado:", libroEncontrado);
    alert ('libro encontrado')
  } else {
    console.log("No se encontró el libro que buscas");
  }
}
  

// //mostrar todos los libros de algun genero

// function mostrarLibros (){
// const inputUsuario = prompt ('ingrese el genero que le interesa')

// Libros.forEach ( (Libro)=>{
//     if (Libro.genero === inputUsuario.toLocaleLowerCase()){
//         console.log (Libro.genero)
//     }
// })
// }



//// AGREGANDO UN LIBRO

function agregarLibro() {
    const nuevoNombre = prompt('Ingrese el título del libro:');
    const nuevoAutor = prompt('Ingrese el autor del libro:');
    const nuevoGenero = prompt('Ingrese el género del libro:');
    const nuevoEditorial = prompt ('Ingrese la nueva editorial');
    const nuevoPrecio = Number (prompt ('Ingrese el nuevo precio'));
    const nuevoStock = Number (prompt ('Ingrese lel nuevo stock'));
  
    Libros.push({ nombre: nuevoNombre, autor: nuevoAutor, genero: nuevoGenero, editorial: nuevoEditorial, precio: nuevoPrecio, stock: nuevoStock });
  
    console.log('El libro se agregó correctamente.');
    alert (' El libro se agrego correctamente')
    console.log (Libros)
  }
  

////ELIMINAR LIBRO





