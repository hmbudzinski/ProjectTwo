$(document).ready(function() {
    $.get('/api', function(data) {
        for (var i = 0; i < data.length; i++) {
            var profiles = [{
                Name: data.firstName,
                Info: data.fandoms,
                Image: ' ',
                contact: data.email,
                Page: data.id
            }];
            console.log(profiles);
        }
    });

    $('.cards').slick({
        dots: true,
        centerMode: true
    });
});
// $('.dropdown-trigger').dropdown();

$('.cards').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '60px',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                centerPadding: '40px'
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                fade: true,
                cssEase: 'linear'
            }
        }
    ]
});
var currentSlide = $('.cards').slick('slickCurrentSlide');
//var nextSlide = $('.cards').slick('slickCurrentSlide');

$('.cards').on('swipe', function(event, slick, direction) {
    console.log(direction);
    // left
});

// On edge hit
$('.cards').on('edge', function(event, slick, direction) {
    console.log('edge was hit');
});

// On before slide change
$('.cards').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    console.log(nextSlide);
});

$(window).resize(function() {
    $('.js-slider')
        .not('.slick-initialized')
        .slick('resize');
});

$(window).on('orientationchange', function() {
    $('.js-slider')
        .not('.slick-initialized')
        .slick('resize');
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
});