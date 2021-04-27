$(window).on('load', function() {
    $("#restart").click(function () {
        "use strict";
        window.addEventListener("keydown", jump, false);
        clearCanvas();
        document.getElementById("cover").style.display = "none";
        gameObstacles = [];
        canJump = true;
        $("#restart").hide();
        $("#start").hide();
        start();
    });
    
    $("#start").click(function () {
        $("#title").hide();
        $("#over").hide();
        $("#start").hide();
        $("#restart").hide();
        start();
    });
});