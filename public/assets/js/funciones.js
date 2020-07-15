function login(data) {
    //Enviamos los datos hacia la API '/login'
    $.ajax({
        url: '/login',
        type: 'POST',
        data: data,
        success: function(result) {
            if (result.ok) {
                guardarToken(result.token);
            } else {
                let audio = new Audio('audio/datos-incorrectos.mp3');
                audio.play();
            }
        },
        error: function(e) {
            // log error in browser
            console.log(e.message);
        }
    });
};


function guardarToken(token) {
    localStorage.setItem("Authorization", token);
    $(location).attr('href', '/chat');
};