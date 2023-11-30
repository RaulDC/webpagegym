// Obtener el botón de reserva
const botonRegistrar = document.getElementById('registrar-btn');

// Agregar un evento click al botón
botonRegistrar.addEventListener('click', () => {
    alert('¡Verifica tu correo electrónico y completa el formulario de pago!');
});

//Modal
$('#loginForm').on('show.bs.modal', function () {
    $('#registerForm').modal('hide');
});

$('#registerForm').on('show.bs.modal', function () {
    $('#loginForm').modal('hide');
});
