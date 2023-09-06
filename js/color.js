$(document).ready(function () {
    $('.setting').click(function () {
        $('.color').toggleClass('activate');
        $('.setting').toggleClass('activation');
        $('.color__main').toggleClass('group');
        
    });
});


// -------------color--------


$(function(){
   $('#green').click(green);
   $('#blue').click(blue);    
   $('#red').click(red);
   $('#navy').click(navy);
   $('#orange').click(orange);


   function green() {
   $('body').attr('class', 'green');
   }
   function blue() {
   $('body').attr('class', 'blue');
   }    
   function red() {
   $('body').attr('class', 'red');
   }
   function navy() {
   $('body').attr('class', 'navy');
   }
   function orange() {
   $('body').attr('class', 'orange');
   }


   $("#green").click(function(){
        $(".logo__img").attr("src" , "images/logo1.png")
    
    })
    // ----------blue---------
   $("#blue").click(function(){
        $(".logo__img").attr("src" , "images/logo2.png")
    
    })
    // -----------red-----
   $("#red").click(function(){
        $(".logo__img").attr("src" , "images/logo3.png")
    
    })
    // --------------navy-----------
   $("#navy").click(function(){
        $(".logo__img").attr("src" , "images/logo4.png")
    
    })
    // --------------orange-----------
   $("#").click(function(){
        $(".logo__img").attr("src" , "images/logo5.png")
    
    })


    




 
});


// ---------color 1------
$(function(){
    $('#green1').click(green1);
    $('#blue1').click(blue1);    
    $('#red1').click(red1);
    $('#navy1').click(navy1);
    $('#orange1').click(orange1);
 
 
    function green1() {
    $('body').attr('class', 'green');
    }
    function blue1() {
    $('body').attr('class', 'blue');
    }    
    function red1() {
    $('body').attr('class', 'red');
    }
    function navy1() {
    $('body').attr('class', 'navy');
    }
    function orange1() {
    $('body').attr('class', 'orange');
    }
 
 
    $("#green1").click(function(){
         $(".logo__img").attr("src" , "images/logo1.png")
     
     })
     // ----------blue---------
    $("#blue1").click(function(){
         $(".logo__img").attr("src" , "images/logo2.png")
     
     })
     // -----------red-----
    $("#red1").click(function(){
         $(".logo__img").attr("src" , "images/logo3.png")
     
     })
     // --------------navy-----------
    $("#navy1").click(function(){
         $(".logo__img").attr("src" , "images/logo4.png")
     
     })
     // --------------orange-----------
    $("#orange1").click(function(){
         $(".logo__img").attr("src" , "images/logo5.png")
     
     })
 
 
     
 
 
 
 
  
 });
 












$(function(){
   // bottom to top
   $(".bottom_to_top").click(function(){
       $("body,html").animate({scrollTop:0},1000)
   });
   $(window).scroll(function(){
       let scroll = $(this).scrollTop()
       console.log(scroll);
       if(scroll > 800){
           $(".bottom_to_top").fadeIn(600)
       }else{
           $(".bottom_to_top").fadeOut(600)
       }
       // if(scroll > 200){
       //     $(".nav").addClass("fixed")
       // }else{
       //     $(".nav").removeClass("fixed")
       // }
   })

});