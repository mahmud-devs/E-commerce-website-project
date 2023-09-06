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
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 2,
              autoplay: false,
              autoplaySpeed: 2500,
            }
          },
          {
            breakpoint: 765,
            settings: {
              slidesToShow: 2,
              autoplay: false,
              autoplaySpeed: 2500,
            }
          },
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 3,
              autoplay: false,
              autoplaySpeed: 2500,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 4,
              autoplay: false,
              autoplaySpeed: 2500,
            }
          },
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 5,
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
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 2,
              autoplay: false,
              autoplaySpeed: 2500,
            }
          },
          {
            breakpoint: 765,
            settings: {
              slidesToShow: 2,
              autoplay: false,
              autoplaySpeed: 2500,
            }
          },
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 3,
              autoplay: false,
              autoplaySpeed: 2500,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 4,
              autoplay: false,
              autoplaySpeed: 2500,
            }
          },
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 5,
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
    
    
    











});



