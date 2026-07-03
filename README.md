# ABP modulo 3
## Sistema de Gestión de Biblioteca

Aplicación web simple para gestionar un catálogo de libros: agregar, eliminar,
buscar por autor y controlar disponibilidad. Desarrollada con HTML,
JavaScript (ES6) y Bootstrap 5.

## Cómo ejecutarlo


Descarga o clona la carpeta del proyecto.
Abre el archivo index.html directamente en tu navegador
(doble clic, o clic derecho → "Abrir con" tu navegador favorito).
No requiere instalación ni servidor: todo funciona del lado del cliente.


## Estructura del proyecto

```
gestion-biblioteca/
│
├── index.html          # Interfaz (formulario, tabla, alertas) con Bootstrap
├── css/
│   └── styles.css      # Ajustes visuales adicionales
├── js/
│   ├── libro.js         # Estructura de datos y funciones CRUD
│   ├── validaciones.js  # Validación de datos ingresados
│   ├── ui.js             # Renderizado dinámico en el DOM
│   └── main.js           # Conexión de eventos del formulario y tabla
└── README.md
```
## Funcionalidades


- Agregar libro: formulario con título, autor, año, ISBN y disponibilidad.
- Eliminar libro: botón por fila en la tabla.
- Cambiar disponibilidad: alterna entre "Sí" / "No" con un clic.
- Buscar por autor: filtro en tiempo real sobre el catálogo.
- Validaciones: evita campos vacíos, años inválidos e ISBN duplicados.
- Feedback visual: alertas de éxito/error con Bootstrap.


## Decisiones de diseño


Se usó un arreglo de objetos (books) como única fuente de verdad
del estado de la aplicación.
Todas las variables se declaran con let o const ,
respetando el alcance de bloque de ES6.
La lógica se separó en 4 archivos según responsabilidad (datos,
validación, interfaz, eventos) para mantener el código organizado y
legible.
Se usó delegación de eventos en la tabla para manejar los botones
de "Eliminar" y "Cambiar estado" generados dinámicamente.


### Tecnologías


- HTML5
- CSS3 + Bootstrap 5.3
- JavaScript (ES6)


### Capturas
(img/Screenshot_20260702_211849.png)
(img/Screenshot_20260702_211923.png)
(img/Screenshot_20260702_212031.png)

### Posibles mejoras futuras


- Persistencia de datos con localStorage.
- Edición de un libro existente (no solo eliminar/agregar).
- Ordenar la tabla por columna (título, autor, año).
- Paginación si el catálogo crece mucho.


### Link a repositorio
[https://github.com/k4stlevania/m3-console-app]