document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Aquí puedes realizar la lógica de autenticación y redireccionar al usuario si los datos son válidos.
    // Por ahora, simplemente mostraremos una alerta con los datos ingresados.
    alert('Nombre de usuario: ' + username + '\nContraseña: ' + password);
  });
  