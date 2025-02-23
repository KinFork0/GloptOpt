$(document).ready(function () {
    $('.carousel__wrapper').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/reviews/arrow__leftsvg.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/reviews/arrow__right.svg" alt="arrow"></button>',
        centerMode: true,
        centerPadding: '60',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40',
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40',
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40',
                    slidesToShow: 1,
                },
            },
        ],
    });

    function valideForms(form) {
        $(form).validate({
            rules: {
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true,
                },
            },
            messages: {
                name: "Поажлуйста, введите Ваше имя.",
                phone: "Пожалуйста, введите свой номер.",
                email: {
                    required: "Пожалуйста, введите свою почту.",
                    email: "Неправильно написана почта.",
                },
            },
        });
    };


    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thank').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        close = document.querySelector('.menu__close');
    hamburger.addEventListener('click', function () {
        menu.classList.add('active');
    });
    close.addEventListener('click', function () {
        menu.classList.remove('active');
    });
});