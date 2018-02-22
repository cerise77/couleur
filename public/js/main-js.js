
$(document).ready(function () {

  $("#over-block").mouseover(function(){
      //$("#over-block").css("background-color", "yellow");
      //$('.but-over').toggleClass('speed-in');
      $(".but-over").css("background-color", "#1d7cd6");
      $(".color-over").css("color", "#fff");
      $(".color-over-span").css("color", "#fff");
      //$(".text").css("background-color", "#1d7cd6");
      $(".text").css("background-image", 'url("img/text-5.jpg")');
      $(".text").css("background-repeat", 'no-repeat');
      $(".text").css("opacity", '0.8');
      $(".text").css("border-bottom-left-radius", "10px");
      $(".text").css("border-bottom-right-radius", "10px");
      $(".bords-1").css("border-bottom", "none");
  });

  $("#over-block").mouseout(function(){
      $(".but-over").css("background-color", "#4f5362");
      $(".color-over").css("color", "#4f5362");
      $(".color-over-span").css("color", "#26282e");
      $(".text").css("background-color", "#fff");
      $(".bords-1").css("border-bottom", "solid 1px #eeeff4");
      $(".text").css("background-image", 'none');
  });


  $("#over-block-s").mouseover(function(){
      //$("#over-block").css("background-color", "yellow");
      //$('.but-over').toggleClass('speed-in');
      $(".but-over-s").css("background-color", "#1d7cd6");
      $(".color-over-s").css("color", "#fff");
      $(".color-over-span-s").css("color", "#fff");
      //$(".text-s").css("background-color", "#1d7cd6");
      $(".text-s").css("background-image", 'url("img/text-5.jpg")');
      $(".text-s").css("background-repeat", 'no-repeat');
      $(".text-s").css("opacity", '0.8');
      $(".text-s").css("border-bottom-left-radius", "10px");
      $(".text-s").css("border-bottom-right-radius", "10px");
      $(".text-s").css("border-bottom-right-radius", "10px");
      $(".bords-2").css("border-bottom", "none");
  });

  $("#over-block-s").mouseout(function(){
      $(".but-over-s").css("background-color", "#4f5362");
      $(".color-over-s").css("color", "#4f5362");
      $(".color-over-span-s").css("color", "#26282e");
      $(".text-s").css("background-color", "#fff");
      $(".bords-2").css("border-bottom", "solid 1px #eeeff4");
      $(".text-s").css("background-image", 'none');
  });

  $("#over-block-p").mouseover(function(){
      //$("#over-block").css("background-color", "yellow");
      //$('.but-over').toggleClass('speed-in');
      $(".but-over-p").css("background-color", "#1d7cd6");
      $(".color-over-p").css("color", "#fff");
      $(".color-over-span-p").css("color", "#fff");
      //$(".text-p").css("background-color", "#1d7cd6");
      $(".text-p").css("background-image", 'url("img/text-5.jpg")');
      $(".text-p").css("background-repeat", 'no-repeat');
      $(".text-p").css("opacity", '0.8');
      $(".text-p").css("border-bottom-left-radius", "10px");
      $(".text-p").css("border-bottom-right-radius", "10px");
      $(".bords-3").css("border-bottom", "none");
  });

  $("#over-block-p").mouseout(function(){
      $(".but-over-p").css("background-color", "#4f5362");
      $(".color-over-p").css("color", "#4f5362");
      $(".color-over-span-p").css("color", "#26282e");
      $(".text-p").css("background-color", "#fff");
      $(".bords-3").css("border-bottom", "solid 1px #eeeff4");
      $(".text-p").css("background-image", 'none');
  });

  /*$('.contein-p').css('background', '#fff');*/

  $(window).scroll(function () {

      if ($(this).scrollTop() >= 100) {
        //$(".font-sp").attr("fill","#fff");*/
        $('.contein-p').css('background', '#222328');
        $(".menu-st").fadeOut("100");
        //console.log('xvdfgfd');
      } else {
        $('.contein-p').css('background', 'none');
        $(".menu-st").fadeIn("100");
      }

  });


  $('#contact').on('click', function () {
    $('#main-right').toggleClass('speed-in');
    $(".logos").fadeOut("100");

    $('.load-text').addClass('animated bounceInRight');
    //console.log('dvdfgdfg');
  });

  $('#button-close1').on('click', function () {
    $('#main-right').removeClass('speed-in');
    $(".logos").fadeIn("100");

  });


  /*if (window.innerWidth >= '1115') {
      $(".main-right").css("display", "none");
  }*/



  /*$('.logos').click(function () {
      $(".logos").css("background-color", "#fff");
      console.log('dvdfgf');
  });*/

  /*$('.Top').click(function () {
      $('html,body').stop().animate({ scrollTop: 0 });
  });*/

});
