$(document).ready(function() {
    //Enviar Formulario y recibir Token.
    $("input[type='submit']").on('click', function(e) {
        e.preventDefault();
        let correo = $('input#correo').val().toLowerCase();
        let contrasena = $('input#contrasena').val();
        let data = {
            correo,
            contrasena
        };
        login(data);
    });
});