/* 
    Aqui se va a recorrer el arreglo de los libros
    para mostrarlos en el lado del cliente
*/

function renderBooks(booklist = libros) {
    const tableBody = document.querySelector('#tabla-libros');
    const bookCounter = document.querySelector("#contador-libros");

    tableBody.innerHTML = "";

    for (const book of booklist) {
        const row = document.createElement("tr");
        if (!book.available) {
            row.classList.add("row-not-available");
        }

        row.innerHTML = `
        <td>book.title</td>
        <td>book.author</td>
        <td>book.title</td>
        <td>book.title</td>
        <td>book.isbn</td>

        <td>
            <span class="badge ${libro.disponible ? "bg-success" : "bg-danger"}">
            ${libro.disponible ? "Sí" : "No"}
            </span>
        </td>
        td>
        <button class="btn btn-sm btn-outline-warning btn-toggle" data-isbn="${libro.isbn}">
          Cambiar estado
        </button>
        <button class="btn btn-sm btn-outline-danger btn-eliminar" data-isbn="${libro.isbn}">
          Eliminar
        </button>
      </td>
        `;
        tableBody.appendChild(row);
    }
    bookCounter.textContent = booklist.length;
}