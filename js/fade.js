$(document).ready(function () {
    'use strict';

    /* Fade intro variables */
    var divs = $('#intro'), limit = $(window).height() / 2;

    /* Fade in variables */


    $(window).on('scroll', function () {
        /* Fade intro */
        var scrollDist = $(this).scrollTop();

        if (scrollDist <= limit * 2) {
            divs.css({'opacity': (1 - scrollDist / limit)});
            divs.css({'-webkit-transform': 'translate3d(0,' + (1 - scrollDist / limit)} + ',0)');
        }
        
        /* Check the location of each desired element */
        $('.fadein').each(function (i) {
            var bottom_of_object = $(this).position().top + $(this).outerHeight() / 2, bottom_of_window = $(window).scrollTop();
            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({'opacity': '1'}, 750);
            }
        });
    });
});