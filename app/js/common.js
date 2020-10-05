$(document).ready(function () {

    $(".carousel1").owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        items: 1,
        dots: true,
        nav: true,
        navText: ['', ''],
        center: true,
        margin: 50,
    });

    $(".carousel2").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        items: 4.1,
        dots: false,
        nav: true,
        navText: ['', ''],
        margin: 25,
    });



    // setTimeout(function () {
    //     $('html, body').scrollTop(0);
    //     $(".preload").fadeOut(100);
    // }, 700);

    setTimeout(function () {
        $("body").addClass("loaded");
    }, 700);


    $(".sandwich").click(function() {
      $(".sandwich").toggleClass("active");
    });


    $(".js-scroll-down").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });

    $(".menu-button-js").click(function(){

        $(this).toggleClass("menu-opened");
        $(".menu_wrapper").toggleClass("transformer");
        $(".wrapper").toggleClass("fade", 300);

        $(".menu").css('opacity', 1);

        if ($(".menu_wrapper").hasClass("transformer")) {
            $('.menu_link').css("opacity", 0);
            setTimeout(function(){
                var items = $('.menu_link');
                // items.css('opacity', 0);
                for (var i = 0; i < items.length; i++) {
                    $(items[i]).delay(i * 400).animate({ opacity: 1 }, 400);
                }
            }, 2000);
        }

        return false;

    });


    $('.services_link').mouseover(function(){
        $(".menu_wrapper").removeClassWild("*_bg").addClass("services_bg", 1000);
    });

    $('.references_link').mouseover(function(){
        $(".menu_wrapper").removeClassWild("*_bg").addClass("references_bg", 1000);
    });

    $('.about_link').mouseover(function(){
        $(".menu_wrapper").removeClassWild("*_bg").addClass("about_bg", 1000);
    });

    $('.contact_link').mouseover(function(){
        $(".menu_wrapper").removeClassWild("*_bg").addClass("contact_bg", 1000);
    });



    /* Service select */

    $(".services_item").click(function() {

        let link = $(this).data("link");

        $(".services_item").removeClass("services_item--active");
        $(this).addClass("services_item--active");

        $(".services_description").removeClass("services_description--active");
        $(".services_desc-wrap").find("."+link).addClass("services_description--active");

        return false;
    });

    $(".services_prev").click(function(){
        if($(".services_item--active").prev().length > 0) {
            $(".services_item--active").prev().click();
        } else {
            $($(".services_item")[$(".services_item").length - 1]).addClass("services_item--active").click();
        }
    });

    $(".services_next").click(function(){
        if($(".services_item--active").next().length > 0) {
            $(".services_item--active").next().click();
        } else {
            $($(".services_item")[0]).addClass("services_item--active").click();
        }
    });



});

(function($) {
    $.fn.removeClassWild = function(mask) {
        return this.removeClass(function(index, cls) {
            var re = mask.replace(/\*/g, '\\S+');
            return (cls.match(new RegExp('\\b' + re + '', 'g')) || []).join(' ');
        });
    };
})(jQuery);