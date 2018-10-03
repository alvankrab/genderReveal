$(document).ready(function() {

    $(".reveal").click(function () {
        $("#gender").addClass('show');
        setTimeout(function () {
            $("#gender").removeClass('show');
            $("#name").css('height', '100%');
        }, 3000);
    });
})
function closeNav() {
    $("#name").css('height', '0%');
}

window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    $("#prog-bar").css("width",  scrolled + "%");
}