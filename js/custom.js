$(document).ready(function () {

    "use strict";

    //smooth scroll and active menu button code
    var html_body = $('html, body');
    $('.navbar .navbar-nav .nav-item .nav-link').on('click', function () {
        //for active menu button
        $('.navbar .navbar-nav .nav-item .nav-link').removeClass("active");
        $(this).addClass("active");
        //smooth scroll on menu click
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });

    //smooth scroll for about section 
    var html_body = $('html, body');
    $('.scroll-down').on('click', function () {
        //smooth scroll on menu click
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });

    //    preloder

    $(window).load(function () {

        $(".preloder").fadeOut(1000)

    });



    //    active navbar

    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();

        if (scrolling > 400) {

            $(".navbar").addClass("active-nav")
        } else {

            $(".navbar").removeClass("active-nav")
        }

        //        scroll-btn

        if (scrolling > 500) {

            $(".scroll-btn").fadeIn(1000);
        } else {

            $(".scroll-btn").fadeOut(900);
        }

    });

    //    scroll-btn

    $(".scroll-btn").on("click", function () {

        $("body,html").animate({

            scrollTop: "0px",
        }, 1500);

    });


    //    banner heading typed

    var typed = new Typed('.typed', {

        strings: ['', 'tanvir hossan.', 'a web designer.', 'a frontend developer.'],
        typeSpeed: 400,
        smartBackspace: true,
        backSpeed: 300,
        loop: true,

    });

    //    wow js

    new WOW().init();

    //    menu icon toggler

    $(".navbar .navbar-toggler").on("click", function () {

        $(".navbar .navbar-toggler span").toggleClass("fas fa-times");

    });




    //    clints slick
    $(".clints-slider").slick({

        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0px',
        infinite: true,
        cssEase: 'ease-in-out',
        touchThreshold: 100,
        responsive: [

            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: false,
                }
    }, {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: false,
                }
    },
        ]

    });


    //    portfolio venobox

    $('.venobox').venobox({

        framewidth: '600px',
        frameheight: '600px',
        spinner: 'three-bounce',
        spinColor: '#e65f78',
    });


    //        form validation

    //        variable decler

    var fName = $("#name");
    var fNameErr = $("#Errname");
    var Email = $("#email");
    var EmailErr = $("#emailErr");
    var message = $("#massage");
    var massageErr = $("#massageErr");
    var submit = $("#submit");


    submit.on("click", function () {

        if (fName.val() == "") {

            fName.css("border", "1px dashed red");
            fNameErr.html("Write your Name");
            fName.focus();
            return false;
        }

        if (Email.val() == "") {

            Email.css("border", "1px dashed red");
            EmailErr.html("Write your Email");
            Email.focus();
            return false;
        }

        if (message.val() == "") {

            message.css("border", "1px dashed red");
            massageErr.html("Write your massage");
            message.focus();
            return false;
        }

    });


    function errValid() {


        if (fName.val() !== "") {

            fName.css("border", "1px solid gray");
            fNameErr.html("");

        }

        if (Email.val() !== "") {

            Email.css("border", "1px solid gray");
            EmailErr.html("");

        }

        if (message.val() !== "") {

            message.css("border", "1px solid gray");
            massageErr.html("");

        }
    }

    fName.on("blur", errValid);
    Email.on("blur", errValid);
    message.on("blur", errValid);




});
