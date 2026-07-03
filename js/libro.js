// Un array para guardar los libros
let books = [];

// Crea un objeto de libro
function crearLibro(title, author, year, isbn, available = true){
    return {
        title,
        author,
        year : Number(year),
        isbn,
        available
    };
}

// anade un libro al array
function addBook(book){
    books.push(book);
}
// borra un libro del array
function deleteBook(isbn){
    books = books.filter((book) => book.isbn !== isbn);
}
// cambia la disponibilidad de un libro
function changeAvailability(isbn){
    const book = books.find((book) => book.isbn === isbn);
    if(book){
        book.available = !book.available;
    }
}
//Busca todos los libros que pertenezcan a un autor
function searchByAuthor(authorName){
   let authorBooks = books.filter((book) => book.author == authorName)
   return authorBooks;
}
// checkea si un libro ya existe por su codigo isbn
function isbnExist(isbn){
    const bookExist = books.some((book) => String(isbn) === String(book.isbn));
}