document.addEventListener("DOMContentLoaded", function() {
    // Función para cargar e insertar un archivo HTML en un elemento por su ID
    function loadHTML(elementId, filePath) {
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => console.error(`Error al cargar ${filePath}:`, error));
    };

    // Header
    //loadHTML("header-include", "includes/header.html");

    // Sidebar
    //loadHTML("sidebar-include", "includes/sidebar.html");

    // Footer
    // loadHTML("footer-include", "includes/footer.html");
    //loadHTML("footer-include", "includes\footer.html" ); yo
   
yo+
    // Control de navegación del menú lateral
    // setTimeout asegura que los elementos están cargados antes de agregar eventos
    setTimeout(() => {
        const links = document.querySelectorAll('.menu a');
        const sections = document.querySelectorAll('.section');

        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                // Quita clase 'active' de todas las secciones
                sections.forEach(section => {
                    section.classList.remove('active');
                });

                // Añade clase 'active' a la sección seleccionada
                const sectionId = this.getAttribute('data-section');
                document.getElementById(sectionId).classList.add('active');
            });
        });
    }, 100); // El tiempo puede ajustarse según la velocidad de carga de los includes
});
