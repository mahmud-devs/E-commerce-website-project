$(function(){

    // --------banner slick slider---------
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
    
    // --------big content slick slider---------
    $('.big__slider').slick({
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

    // =======recent content slider--------

    $('.recent__content_slider').slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
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


    // =======brand slider--------

    $('.brand__slider').slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        // centerMode: true,
        autoplay: false,
        autoplaySpeed: 500,
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