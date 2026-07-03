/* 
    Aqui se va a recorrer el arreglo de los libros
    para mostrarlos en el lado del cliente
*/

function renderBooks(booklist = books) {
    const tableBody = document.querySelector('#tabla-libros');
    const bookCounter = document.querySelector("#contador-libros");

    tableBody.innerHTML = "";

    for (const book of booklist) {
        const row = document.createElement("tr");
        if (!book.available) {
            row.classList.add("row-not-available");
        }

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td>${book.isbn}</td>
        

        <td>
            <span class="badge ${book.available ? "bg-success" : "bg-danger"}">
            ${book.available ? "Sí" : "No"}
            </span>
        </td>
        <td>
        <button class="btn btn-sm btn-outline-warning btn-toggle" data-isbn="${book.isbn}">
          Cambiar estado
        </button>
        <button class="btn btn-sm btn-outline-danger btn-eliminar" data-isbn="${book.isbn}">
          Eliminar
        </button>
      </td>
        `;
        tableBody.appendChild(row);
    }
    bookCounter.textContent = booklist.length;
}
// muestra alertas dependiendo del contexto que queramos
function showAlert(mensaje, tipo = "success") {
    const contenedor = document.getElementById("alertas");
    const alerta = document.createElement("div");
    alerta.className = `alert alert-${tipo} alert-dismissible fade show`;
    alerta.role = "alert";
    alerta.innerHTML = `
    ${mensaje}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;
    contenedor.appendChild(alerta);

    // Se auto-elimina después de unos segundos
    setTimeout(() => alerta.remove(), 4000);
}
function cleanFormulary() {
  document.getElementById("form-libro").reset();
}
 