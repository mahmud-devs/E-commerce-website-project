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
    
    // ------------------handlecounter-------------

    $('#handleCounter').handleCounter({
      
          minimum: 0,
      
          maximize: 50,
      
    });
    $('#handleCounter2').handleCounter({
      
          minimum: 0,
      
          maximize: 50,
      
    });
    $('#handleCounter3').handleCounter({
      
          minimum: 0,
      
          maximize: 50,
      
    });
    $('#handleCounter4').handleCounter({
      
          minimum: 0,
      
          maximize: 50,
      
    });
    $('#handleCounte_single-product').handleCounter({
      
          minimum: 0,
      
          maximize: 50,
      
    });

    // -------------------star rating---------

    function setratingstars(id, rating){
      $('#' + id + ' .ratingstar').removeClass('fas'); 
      $('#' + id + ' .ratingstar').addClass('far');
      for (i = 0; i <= rating; i++) {
          $('#' + id + ' #' + i).removeClass('far');
          $('#' + id + ' #' + i).addClass('fas');
      }
    }
    
    function saveRating(){
        
    }
    
    // Event-Listener for click stars
    $('.ratingstar').click(function() { 
      var rating = $(this).attr('id') 
      var id = $(this).parent().attr('id');
      setratingstars(id, rating);
    });
    
    // Start Rating Function
    $(function(){ 
        $('.ratingbar').each(function(){
            setratingstars($(this).attr('id'),$(this).data('rating-value'));
        });
    });
    
    
    // --------------color switcher---------

// $(document).ready(function () {
//   $('.colorbutton').click(function () {
//       $('.color').toggleClass('activate');
//       $('.colorbutton').toggleClass('activation');
//   });
// });

// $(function(){
//  $('#white').click(white);
//  $('#blue').click(blue);    
//  $('#black').click(black);
//  $('#orange').click(orange);
//  $('#purple').click(purple);


//  function white() {
//  $('body').attr('class', 'white');
//  }
//  function blue() {
//  $('body').attr('class', 'blue');
//  }    
//  function black() {
//  $('body').attr('class', 'black');
//  }
//  function orange() {
//  $('body').attr('class', 'orange');
//  }
//  function purple() {
//  $('body').attr('class', 'purple');
//  }



// });

// // --------------bottom to top--------
// $(function(){
//  // bottom to top
//  $(".bottom_to_top").click(function(){
//      $("body,html").animate({scrollTop:0},1000)
//  });
//  $(window).scroll(function(){
//      let scroll = $(this).scrollTop()
//      console.log(scroll);
//      if(scroll > 800){
//          $(".bottom_to_top").fadeIn(600)
//      }else{
//          $(".bottom_to_top").fadeOut(600)
//      }
//      // if(scroll > 200){
//      //     $(".nav").addClass("fixed")
//      // }else{
//      //     $(".nav").removeClass("fixed")
//      // }
//  })

// });











});


