

jQuery(document).ready(function () {

     $('.slider-single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        adaptiveHeight: true,
        infinite: false,
        useTransform: true,
        speed: 500,
        cssEase: 'linear',
        // lazyLoad:'progressive'
     });

     $('.slider-nav')
        .on('init', function(event, slick) {
            $('.slider-nav .slick-slide.slick-current').addClass('is-active');
        })
        .slick({
            slidesToShow: 7,
            slidesToScroll: 7,
            dots: false,
            focusOnSelect: false,
            infinite: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            }, {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }, {
                breakpoint: 420,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
            }
            }]
        });

     $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
        $('.slider-nav').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.slider-nav .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
     });

     $('.slider-nav').on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');

        $('.slider-single').slick('slickGoTo', goToSingleSlide);
     });

     $('.table-option').on('click', function(event) {
        jQuery(this).closest('ul').find('.table-option').removeClass('active');
        jQuery(this).addClass('active');
        var size = jQuery('.dimantion.active').attr('data-type'),
            wood = jQuery('.wood_type.active').attr('data-type'),
            fabric = jQuery('.fabric_type.active').attr('data-type'),
            topper = jQuery('.topper_type.active').attr('data-type');

        if (!(jQuery(this).hasClass('fabric_type') || jQuery(this).hasClass('topper_type'))) {
            $('.table_image').each(function(e) {
                $(this).attr("src", "images/" + size + "_" + wood + "_" + fabric + "_" + topper + "_" + (e + 1) + ".jpg");
                console.log("images/" + size + "_" + wood + "_" + fabric + "_" + topper + "_" + (e + 1) + ".jpg");
            });
            $('.table_l_image').each(function(e) {
                $(this).attr("src", "images/" + size + "_" + wood + "_" + fabric + "_" + topper + "_" + (e + 1) + ".jpg");
            });
        }

        // if (jQuery(this).hasClass('fabric_type')) {
        //     var hex_code = jQuery(this).attr('data-hex');
        //     $('.product-svg').each(function(e) {
        //         jQuery(this).find('path').css("fill", hex_code);
        //     });
        //     $('.png-image').addClass('active');
        // }

     });

    //Prevent Page Reload on all # links
    $("a[href='#']").click(function(e) {
        e.preventDefault();
    });

});

jQuery(window).resize(function () {
    
});

jQuery(window).on('scroll', function () {

});
