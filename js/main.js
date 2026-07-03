document.addEventListener("DOMContentLoaded", () => {
    renderBooks();

    const form = document.getElementById("form-libro");
    const tabla = document.getElementById("tabla-libros");
    const btnBuscar = document.getElementById("btn-buscar");
    const btnLimpiar = document.getElementById("btn-limpiar");

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
        const nuevoLibro = crearLibro(title, author, year, isbn, available);
        addBook(nuevoLibro);
        renderBooks();
        limpiarFormulario();
        showAlert("Libro agregado correctamente.", "success");
    }
    )
})