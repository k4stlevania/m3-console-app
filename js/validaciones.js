// funcion para validar los datos del libro
function validateBook(title, author, pages, year, isbn){
    // validaciones de informacion basicas
    if(!titulo || titulo.trim() === ""){
        return "El titulo es obligatorio";
    }
    if(!author || author.trim() === ""){
        return "El autor es obligatorio";
    }
    if(!pages || isNaN(pages)){
        return "El numero de pagina es obligatorio";
    }
    if(!year || isNaN(year)){
        return "El año debe ser un numero valido";
    }

    const yearNum = Number(year);
    const currentYear = new Date().getFullYear();
    if(yearNum < 0 || yearNum > currentYear){
        return "El año debe ser mayor a 0 y menor "
    }
    if(!isbn || isbn.trim() === ""){
        return "El codigo isbn es obligatorio"
    }
    if(isbnExist(isbn.trim())){
        return `Libro con ISBN ${isbn} ya existe`;
    }
    // retorna null si no hay errores
    return null;
}