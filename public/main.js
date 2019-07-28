function crow() {
    var crow = new Audio("crow.mp3");
    crow.volume = 1;
    crow.play();
}

$(document).ready(function() {
    var socket = io();

    $("body").click(function() {
        socket.emit('crow');
    });

    socket.on('crow', function(msg){
        crow();
    });
});