function crow() {
    var crow = new Audio("crow/crow.mp3");
    crow.volume = 1;
    crow.play();
}

$(document).ready(function() {
    var socket = io();

    $("body").on('click touchstart', function() {
        socket.emit('crow');
    });

    socket.on('crow', function(msg){
        crow();
    });
});