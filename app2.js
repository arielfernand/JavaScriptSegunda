let Libros = []

Libros.push(new Libro('rayuela', 'Cortazar', 'Litinoamericana', 'Planeta', 5700, 30))
Libros.push(new Libro('El hobitt', 'JRR tolkien', 'aventura', 'Minotauro', 5300, 21))
Libros.push(new Libro('La Paranoia', 'Spregelburg', 'terror', 'Patron Sanchez', 3700, 20))
Libros.push(new Libro('It', "Stepen King", 'terror', 'Planeta', 7800, 12))



const inputLibro = document.getElementById('libro')
const inputAutor = document.getElementById('autor')
const inputGenero = document.getElementById('genero')
const inputEditorial = document.getElementById('editorial')
const inputPrecio = document.getElementById('precio')
const inputStock = document.getElementById('stock')
const botonAgregar = document.getElementById('agregar')
const formRegistro = document.getElementById('form-registrar')
const botonBuscar = document.getElementById('buscar')
const selectorLibros = document.querySelector('#libros')


document.addEventListener('DOMContentLoaded', ()=> {
    Libros = JSON.parse (localStorage.getItem ('Libreria'))
    popularDropDown();

})

function popularDropDown (){
    Libros.forEach((libro) => {
        const option = document.createElement('option')
        option.textContent = `${libro.nombre} : ${libro.precio}`;
        option.value = Libros.indexOf(Libros)
        selectorLibros.appendChild(option)
    })
}

botonAgregar.addEventListener('click', (evento) => {
    evento.preventDefault();
    if (validarCamposVacios()) {
        agregarLibro();
        alert('El libro ' + inputLibro.value + ' fue agregado correctamente');
        limpiarFormulario(formRegistro);
        localStorage.setItem ('Libreria', JSON.stringify(Libros))
    } else {
        alert('No se pudo cargar el libro, alguno de los valores son incorrectos')
    }
})

botonBuscar.addEventListener('click', (evento) => {
    evento.preventDefault();
    BuscarLibro()
})

function agregarLibro() {
    const nuevoLibro = new Libro(inputLibro.value, inputAutor.value, inputGenero.value, inputEditorial.value, +inputPrecio.value, +inputStock.value)
    Libros.push(nuevoLibro);

}

function limpiarFormulario(form) {
    form.reset()
}

function validarCamposVacios() {
    return inputLibro.value !== '' && inputAutor.value !== '' && inputGenero.value !== '' && inputEditorial.value !== '' && inputPrecio.value !== '' && inputPrecio.value !== ''
}

function BuscarLibro() {
    const busqueda = inputLibro.value.toLowerCase () || inputAutor.value.toLowerCase() || inputGenero.value.toLowerCase() || inputEditorial.value.toLowerCase();
    const busquedaAutor = inputAutor.value.toLowerCase();
    const busquedaGenero = inputGenero.value.toLowerCase()
    const busquedaEditorial = inputEditorial.value.toLowerCase()
    const nuevosLibros = JSON.parse(localStorage.getItem ('Libreria'))

    const libroEncontrado = nuevosLibros.find(libro => libro.nombre.toLowerCase() === busqueda || libro.autor.toLowerCase() === busquedaAutor || libro.genero.toLowerCase()=== busquedaGenero || libro.editorial.toLowerCase()=== busquedaEditorial);
    if (libroEncontrado) {
        alert('Libo encontrado: ' + `${libroEncontrado.nombre}` + ` del autor ${libroEncontrado.autor}.` + ` Tenes en Stock ${libroEncontrado.stock} unidades` + ` y el precio unitario es de $ ${libroEncontrado.precio}`);
        limpiarFormulario(formRegistro);
    } else {
        alert('No se encontro el libro que buscas')
        limpiarFormulario(formRegistro);
    }
}




//// abajo una prueba de buscar libros 

// function BuscarLibro() {
//     const busqueda = inputLibro.value.toLowerCase();
//     const busquedaAutor = inputAutor.value.toLowerCase();
//     const busquedaGenero = inputGenero.value.toLowerCase();
//     const busquedaEditorial = inputEditorial.value.toLowerCase();
  
//     const librosEncontrados = Libros.filter(libro => {
//       return (
//         libro.nombre.toLowerCase().includes(busqueda) ||
//         libro.autor.toLowerCase().includes(busquedaAutor) ||
//         libro.genero.toLowerCase().includes(busquedaGenero) ||
//         libro.editorial.toLowerCase().includes(busquedaEditorial)
//       );
//     });
  
//     if (librosEncontrados.length > 0) {
//       let mensaje = 'Libros encontrados:\n\n';
//       librosEncontrados.forEach(libro => {
//         mensaje += `Nombre: ${libro.nombre}\nAutor: ${libro.autor}\nStock: ${libro.stock}\nPrecio: $${libro.precio}\n\n`;
//       });
//       alert(mensaje);
//       limpiarFormulario(formRegistro);
//     } else {
//       alert('No se encontraron libros que coincidan con la búsqueda');
//       limpiarFormulario(formRegistro);
//     }
//   }
  

