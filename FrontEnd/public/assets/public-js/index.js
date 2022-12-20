jQuery(window).on('scroll', function() {
    if (jQuery(window).scrollTop() > 0) {
        jQuery('#header_frame').css('background-color', '#FFFFFF',);
        jQuery('#header_frame').addClass("boxshadow");
    } else {
        jQuery('#header_frame').css('background-color', 'transparent');
        jQuery('#header_frame').removeClass("boxshadow");
    }
});









// Get the modal
var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

