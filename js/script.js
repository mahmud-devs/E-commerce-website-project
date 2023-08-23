$(function(){

    // --------slick slider---------
    $('.slick__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        // centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              autoplay: true,
              autoplaySpeed: 2500,
            }
          }
        ]
    });
    


});