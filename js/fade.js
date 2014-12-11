$(document).ready(function () {
    'use strict';

    /* Global variables */
    var divs = $('#intro'), limit = $(window).height() / 2, window_height = $(document).height();

    /* On-load fade-in */
    $('#intro .anim').css({'opacity': '1', 'transform': 'scale(1.0)'}, 750);
    
    /* On-scroll fade-in */
    $(window).on('scroll', function () {
        /* Fade intro */
        var scroll_dist = $(this).scrollTop();

        if (scroll_dist <= limit * 2) {
            divs.css({'opacity': (1 - scroll_dist / limit)});
        }
        
        $('.fadein').each(function (i) {
            var bottom_of_object = $(this).position().top + $(this).parent().position().top + $(this).outerHeight() / 2;
            if (scroll_dist  + $(window).height() > bottom_of_object) {
                $(this).css({'opacity': '1', 'transform': 'scale(1.0)'}, 750);
            }
        });
    });
});