document.addEventListener("DOMContentLoaded", () => {
    renderBooks();

    const form = document.getElementById("form-libro");
    const tabla = document.getElementById("tabla-libros");
    const btnSearch = document.getElementById("btn-buscar");
    const btnWipe = document.getElementById("btn-limpiar");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("titulo").value.trim();
        const author = document.getElementById("autor").value.trim();
        const year = document.getElementById("anio").value;
        const isbn = document.getElementById("isbn").value.trim();
        const available = document.getElementById("disponible").checked;

        const errorExist = validateBook(title, author, year, isbn)

        if (errorExist) {
            showAlert(errorExist, "danger")
            return;
        }
        const nuevoLibro = createBook(title, author, year, isbn, available);
        addBook(nuevoLibro);
        renderBooks();
        cleanFormulary();
        showAlert("Libro agregado correctamente.", "success");
    }
    )

    tabla.addEventListener("click",(e)=>{
        const isbn = e.target.dataset.isbn;
        if(!isbn) return;

        if(e.target.classList.contains("btn-eliminar")){
            deleteBook(isbn);
            renderBooks();
            showAlert("libro eliminado", "warning");
        }
        if(e.target.classList.contains("btn-toggle")){
            changeAvailability(isbn);
            renderBooks();
        }
    })
    btnSearch.addEventListener("click", ()=>{
        const termino = document.getElementById("filtro-autor").value;
        if(termino.trim() === ""){
            renderBooks();
            return;
        }
        const result = searchByAuthor(termino);
        renderBooks(result);
    });

    btnWipe.addEventListener("click", ()=>{
        document.getElementById("filtro-autor").value = "";
        renderBooks();
    })
})