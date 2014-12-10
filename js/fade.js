$(document).ready(function () {
    'use strict';

    /* Fade intro variables */
    var divs = $('#intro'), limit = $(window).height() / 2;

    /* On-load fade-in */
    $('#intro .anim').css({'opacity': '1', 'transform': 'scale(1.0)'}, 750);
    
    /* On-scroll fade-in */
    $(window).on('scroll', function () {
        /* Fade intro */
        var scrollDist = $(this).scrollTop();

        if (scrollDist <= limit * 2) {
            divs.css({'opacity': (1 - scrollDist / limit)});
        }
        
        /* Fade in elements*/
        $('.fadein').each(function (i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2, bottom_of_window = $(window).scrollTop();
            if (bottom_of_window > bottom_of_object) {
                $(this).css({'opacity': '1', 'transform': 'scale(1.0)'}, 750);
            }
        });
    });
});