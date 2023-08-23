$(function(){

    // --------slick slider---------
    $('.slick__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        // centerMode: true,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              autoplay: false,
              autoplaySpeed: 2500,
            }
          }
        ]
    });
    


});