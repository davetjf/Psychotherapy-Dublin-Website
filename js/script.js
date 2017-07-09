$(document).ready(function() {

  $(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > 25
     );
  });
});


$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 0) {
    $('.top-banner').slideUp();
  } else {
    $('.top-banner').slideDown();
  }
});

/*Section C Toggles*/
    $("#show-three").hide();
    $("#col-three").on("mouseenter", function(){
        $("#show-three").toggle();
    });
    
    $("#show-three").hide();
    $("#col-three").on("mouseleave", function(){
        $("#show-three").toggle();
    });

        $("#show-one").hide();
    $("#col-one").on("mouseenter", function(){
        $("#show-one").toggle();
    });
    
    $("#show-one").hide();
    $("#col-one").on("mouseleave", function(){
        $("#show-one").toggle();
    });


        $("#show-two").hide();
    $("#col-two").on("mouseenter", function(){
        $("#show-two").toggle();
    });
    
    $("#show-two").hide();
    $("#col-two").on("mouseleave", function(){
        $("#show-two").toggle();
    });


   /*Associated friends and partners*/
   
    $(".grayscale").mouseenter(function(){
    $(this).removeClass("grayscale");
  })

  $(".grayscale").mouseout(function(){
    $(this).addClass("grayscale");
  })



 

});


