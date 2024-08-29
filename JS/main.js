//sidebar
    fetch('sidebar.html')  // 1. solicitud HTTP GET para obtener el archivo sidebar.html 
    .then(response => response.text())  // 2. Cuando la solicitud es exitosa, convierte la respuesta en texto plano.
    .then(data => {
        document.getElementById('sidebar').innerHTML = data;  // 3. Inserta el contenido del archivo sidebar.html dentro del elemento con el id 'sidebar'.
    })
   .catch(error => console.log('Error cargando el sidebar:', error));  // 4. Si ocurre un error (por ejemplo, si el archivo no se encuentra), se captura y se muestra en la consola.


