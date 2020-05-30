$(document).ready(function() {

    $(window).scroll(function(){

        $('nav').toggleClass('scrolled', $(this).scrollTop() > 0);
    });

    var $root = $('html, body');

    $('a[href^="#"]').click(function () {
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 80
        }, 500);

        return false;
    });

    if($('.event-carousel').length > 0 ) {
        $('.event-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:true,
            navText: ["<i class=\"fas fa-angle-left\"></i>","<i class=\"fas fa-angle-right\"></i>"],
            items:1,
            autoplay:true,
            autoplayHoverPause:true,
            autoplayTimeout:5000,
            responsive: {
                601 : {
                    nav:true,
                    dots:false
                }
            }
        });
    }

});