const libro = require('./Libro');

const libro1 = new libro('El Quijote', '978-3-16-148410-0', 'Miguel de Cervantes', 1605, 863, true);
const libro2 = new libro('Cien Años de Soledad', '978-0-06-088328-7', 'Gabriel García Márquez', 1967, 417, true);
libro1.loan();
console.log(`El titulo del libro es: "${libro1.titlle}" : ${libro1.isbn}, el Autor del libro: ${libro1.autor}, Año de Publicación: ${libro1.publicationYear}, Número de Páginas: ${libro1.totalNunmberPages}, Disponible: ${libro1.isAvailable}`);
console.log(`El titulo del libro es: "${libro2.titlle}" : ${libro2.isbn}, el Autor del libro: ${libro2.autor}, Año de Publicación: ${libro2.publicationYear}, Número de Páginas: ${libro2.totalNunmberPages}, Disponible: ${libro2.isAvailable}`);

libro1.returnBook();
console.log(`El titulo del libro es: "${libro1.titlle}" : ${libro1.isbn}, el Autor del libro: ${libro1.autor}, Año de Publicación: ${libro1.publicationYear}, Número de Páginas: ${libro1.totalNunmberPages}, Disponible: ${libro1.isAvailable}`);