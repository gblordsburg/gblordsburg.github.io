$(document).ready(function() {
    // When scrolled, if collapsible is opened, close it
    $(window).scroll(function() {
        if ( $(window).scrollTop() > 0 ) {
            $('.transition')addClass('transitioned');
        }
        else {
            $('.transition').removeleClass('transitioned');
        }
    });
});+