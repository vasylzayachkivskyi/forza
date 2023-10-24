$(document).ready(function () {


    // services slider --------------- //
    var swiper = new Swiper(".services__slider", {
        slidesPerView: 'auto',
        spaceBetween: 15,
        speed: 600,
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
        }
    });

    // specialists slider --------------- //
    var swiper = new Swiper(".specialists__slider", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        speed: 600,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1400: {
                slidesPerView: 3,
            },
        }
    });

     // specialists slider --------------- //
    var swiper = new Swiper(".testimonials__slider", {
        slidesPerView: 'auto',
        spaceBetween: 15,
        speed: 600,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            991: {
                spaceBetween: 20,
            },
        }
    });

    // popup ------------------------ //
    $('.popup__btn').on('click', function () {
        var indexPopup = $(this).attr('data-popup');
        $('.popup__window').removeClass('active');
        $('.' + indexPopup).addClass('active');
        return false;
    });

    $('.popup__close').on('click', function () {
        $('.popup__window').removeClass('active');
    });

    // close popup ----------------- //
    $(document).on('click', function (event) {
        var target = $(event.target);

        if (!target.closest('.popup__body').length) {
            $('.popup__window').removeClass('active');
        }
    });

    // padding(imitation container) -------------------------- //
    var windowWidth = $(document).width(),
        containerWidth = $('.container').width(),
        paddingContainer = ((windowWidth - containerWidth) / 2);
    $('.margleft').css('margin-left', paddingContainer);
    $('.margright').css('margin-right', paddingContainer);
    $('.padright').css('padding-right', paddingContainer);
    $('.padleft').css('padding-left', paddingContainer);

    $(window).resize(function () {
        var windowWidth = $(document).width(),
            containerWidth = $('.container').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2);
        $('.margleft').css('margin-left', paddingContainer);
        $('.margright').css('margin-right', paddingContainer);
        $('.padright').css('padding-right', paddingContainer);
        $('.padleft').css('padding-left', paddingContainer);
    });

    // study accordeon ------------------------ //

    $('.study__row-head').click(function () {
        $(this).next('.study__row-descr').slideToggle();
    });

});

AOS.init({
    duration: 500,
    easing: 'ease-in'
});