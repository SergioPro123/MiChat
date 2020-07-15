$(document).ready(function() {
    //Enviar Formulario y recibir Token.
    $("input[type='submit']").on('click', function(e) {
        e.preventDefault();
        let nombre = $('input#nombre').val().toLowerCase();
        let correo = $('input#correo').val().toLowerCase();
        let contrasena = $('input#contrasena').val();
        let data = {
            nombre,
            correo,
            contrasena
        };
        //Enviamos los datos hacia la API '/login'
        $.ajax({
            url: '/usuario',
            type: 'POST',
            data: data,
            success: function(result) {
                //Si resulto.ok = true, el usuario queda registrado correctamente.
                if (result.ok) {
                    //Ahora procedemos a logearnos
                    login(data);
                }
            },
            error: function(e) {
                // log error in browser
                console.log(e.message);
            }
        });
    });
});