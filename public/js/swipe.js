$(document).ready(function() {
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
        centerPadding: '40px',
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        fade: true,
        cssEase: 'linear',
        arrows: false
      }
    }
    ]
  });

});