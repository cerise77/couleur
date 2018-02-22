var body = document.body;
var hamburger = document.querySelector('.mobile-hamburger');
var bar = hamburger.children[0];
var nav = document.querySelector('.nav-primary');
//var opacityBody = document.querySelector('.template');
hamburger.addEventListener('click', function () {
  document.getElementById("hamburger-sd").style.width = "1px";
    nav.classList.toggle('is-open');
    body.classList.toggle('overlay');
    bar.classList.toggle('animate');


    if (window.innerWidth >= '1490') {
        document.getElementById("right-s").style.width = "85%";
        document.getElementById("left-s").style.width = "15%";
        document.getElementById("left-s").style.position = "fixed";
        document.getElementById("left-s").style.zIndex = "130";
        document.getElementById("header-top-ls").style.width = "90%";
        document.getElementById("header-top-ls").style.marginLeft = "250px";
        document.getElementById("header-top-ls").style.paddingRight = "120px";
        //document.getElementById("header-top").style.paddingRight = "25px";
        //document.getElementById("right-m").style.marginRight = "25px";

        /*document.getElementById("header-top-ls-ml").style.width = "90%";
        document.getElementById("header-top-ls-ml").style.marginLeft = "250px";*/

    }

    if (window.innerWidth <= '1490') {
        document.getElementById("right-s").style.width = "85%";
        document.getElementById("left-s").style.width = "15%";
        document.getElementById("left-s").style.position = "fixed";
        document.getElementById("left-s").style.zIndex = "130";
        document.getElementById("header-top-ls").style.width = "83%";
        document.getElementById("header-top-ls").style.marginLeft = "250px";
        /*document.getElementById("header-top").style.paddingRight = "25px";*/
        //document.getElementById("right-m").style.marginRight = "25px";

        /*document.getElementById("header-top-ls-ml").style.width = "83%";
        document.getElementById("header-top-ls-ml").style.marginLeft = "250px";*/

}
    if (window.innerWidth <= '1200') {
        document.getElementById("right-s").style.width = "100%";
        document.getElementById("left-s").style.width = "15%";
        document.getElementById("left-s").style.position = "fixed";
        document.getElementById("left-s").style.zIndex = "130";
        document.getElementById("header-top-ls").style.width = "100%";
        document.getElementById("header-top-ls").style.marginLeft = "0";

        /*document.getElementById("header-top-ls-ml").style.width = "100%";
        document.getElementById("header-top-ls-ml").style.marginLeft = "0";*/

        document.getElementById("template").style.display = "block";
        document.getElementById("template").style.position = "fixed";
        document.getElementById("template").style.width = "100%";
        document.getElementById("template").style.height = "100%";
        document.getElementById("template").style.background = "#000";
        document.getElementById("template").style.zIndex = "50";
        document.getElementById("template").style.opacity = "0.2";

    }
    //document.getElementById("contact-right").style.width = "70%";
    //document.getElementById("contact-right").style.textAlign = "right";
});

body.addEventListener('click', function (e) {

    if (e.target.classList.contains('mobile-hamburger')) {
        return;
    }
    if (nav.classList.contains('is-open') && body.classList.contains('overlay')) {
        nav.classList.remove('is-open');
        body.classList.remove('overlay');
        bar.classList.remove('animate');

    }

        document.getElementById("hamburger-sd").style.width = "40px";

    if (window.innerWidth >= '1490') {
        document.getElementById("right-s").style.width = "100%";
        document.getElementById("left-s").style.width = "0";

        document.getElementById("header-top-ls").style.width = "100%";
        document.getElementById("header-top-ls").style.marginLeft = "0";
        /*document.getElementById("header-top-ls").style.paddingRight = "80px";*/

        /*document.getElementById("header-top-ls-ml").style.width = "100%";
        document.getElementById("header-top-ls-ml").style.marginLeft = "0";*/
    }


    if (window.innerWidth <= '1490') {
        document.getElementById("right-s").style.width = "100%";
        document.getElementById("left-s").style.width = "0";

        document.getElementById("header-top-ls").style.width = "100%";
        document.getElementById("header-top-ls").style.marginLeft = "0";

        /*document.getElementById("header-top-ls-ml").style.width = "100%";
        document.getElementById("header-top-ls-ml").style.marginLeft = "0";*/
    }
    if (window.innerWidth <= '1200') {
      document.getElementById("contact-right").style.boxShadow = "none";

      document.getElementById("template").style.display = "none";

    }

});



/*(function() {

  "use strict";

  var toggles = document.querySelectorAll(".toggle-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();*/





$(document).ready(function () {


  $('.ml').on('mouseover', function () {
    $('.md').css({'display':'block',});
  });
  $('.md').on('mouseover', function () {
    $('.md').css({'display':'block',});
  });

  $('.md').on('mouseout', function () {
    $('.md').css({'display':'none',});
  });
  $('.ml').on('mouseout', function () {
    $('.md').css({'display':'none',});
  });



  $('.ml-s').on('mouseover', function () {
    $('.md-s').css({'display':'block',});
  });
  $('.md-s').on('mouseover', function () {
    $('.md-s').css({'display':'block',});
  });

  $('.md-s').on('mouseout', function () {
    $('.md-s').css({'display':'none',});
  });
  $('.ml-s').on('mouseout', function () {
    $('.md-s').css({'display':'none',});
  });


  $('#block-head1').on('click', function () {
    //$('.md').css({'display':'block',});
    if ( $('#block-add1').css('display') == 'none' ) {
      $('#block-add1').animate({height: 'show'}, 400);
      $("#block-head1").css("background-color", "#1d7cd6");
      $("#block-head1").css("background-image", "none");
    } else {
      $('#block-add1').animate({height: 'hide'}, 10);
      //$("#block-head").css("background-image", "block");
      $("#block-head1").css("background-image", 'url(img/christopher-skor-1894.jpg)');
      $("#block-head1").css("background-color", "transparent");
    }
  });

  $('#block-head').on('click', function () {
    //$('.md').css({'display':'block',});
    if ( $('#block-add').css('display') == 'none' ) {
      $('#block-add').animate({height: 'show'}, 400);
      $("#block-head").css("background-color", "#1d7cd6");
      $("#block-head").css("background-image", "none");
    } else {
      $('#block-add').animate({height: 'hide'}, 10);
      //$("#block-head").css("background-image", "block");
      $("#block-head").css("background-image", 'url(img/christopher-skor-1894.jpg)');
      $("#block-head").css("background-color", "transparent");
    }
  });


  $('#mechanic1').on('click', function () {
    $('#id-menu-middle1').css("display", "none");
    $('.table-pr1').css("display", "block");
  });

  $('#about1').on('click', function () {
    $('#id-menu-middle1').css("display", "block");
    $('.table-pr1').css("display", "none");
  });


  $('#mechanics').on('click', function () {
    $('#id-menu-middle').css("display", "none");
    $('.table-pr').css("display", "block");
  });

  $('#about').on('click', function () {
    $('#id-menu-middle').css("display", "block");
    $('.table-pr').css("display", "none");
  });


  $('#basket1').on('mouseover', function () {
    $('#basket1').css("background", "#dfdede");
    $('#basket1').css("padding", "7px");
    $('#basket1').css("border-radius", "25px");
    $('#basket1').css("fill", "#202020");
    $('#basket1').css("width", "34px");
    $('#basket1').css("height", "34px");
  });

  $('#basket1').on('mouseout', function () {
    $('#basket1').css("background", "none");
    $('#basket1').css("padding", "none");
    $('#basket1').css("border-radius", "none");
    $('#basket1').css("fill", "#999999");
    $('#basket1').css("width", "34px");
    $('#basket1').css("height", "34px");
  });


  $('#basket2').on('mouseover', function () {
    $('#basket2').css("background", "#dfdede");
    $('#basket2').css("padding", "7px");
    $('#basket2').css("border-radius", "25px");
    $('#basket2').css("fill", "#202020");
    $('#basket2').css("width", "34px");
    $('#basket2').css("height", "34px");
  });

  $('#basket2').on('mouseout', function () {
    $('#basket2').css("background", "none");
    $('#basket2').css("padding", "none");
    $('#basket2').css("border-radius", "none");
    $('#basket2').css("fill", "#999999");
    $('#basket2').css("width", "34px");
    $('#basket2').css("height", "34px");
  });


  $('#basket3').on('mouseover', function () {
    $('#basket3').css("background", "#dfdede");
    $('#basket3').css("padding", "7px");
    $('#basket3').css("border-radius", "25px");
    $('#basket3').css("fill", "#202020");
    $('#basket3').css("width", "34px");
    $('#basket3').css("height", "34px");
  });

  $('#basket3').on('mouseout', function () {
    $('#basket3').css("background", "none");
    $('#basket3').css("padding", "none");
    $('#basket3').css("border-radius", "none");
    $('#basket3').css("fill", "#999999");
    $('#basket3').css("width", "34px");
    $('#basket3').css("height", "34px");
  });


  $('#basket4').on('mouseover', function () {
    $('#basket4').css("background", "#dfdede");
    $('#basket4').css("padding", "7px");
    $('#basket4').css("border-radius", "25px");
    $('#basket4').css("fill", "#202020");
    $('#basket4').css("width", "34px");
    $('#basket4').css("height", "34px");
  });

  $('#basket4').on('mouseout', function () {
    $('#basket4').css("background", "none");
    $('#basket4').css("padding", "none");
    $('#basket4').css("border-radius", "none");
    $('#basket4').css("fill", "#999999");
    $('#basket4').css("width", "34px");
    $('#basket4').css("height", "34px");
  });


  $('#basket5').on('mouseover', function () {
    $('#basket5').css("background", "#dfdede");
    $('#basket5').css("padding", "7px");
    $('#basket5').css("border-radius", "25px");
    $('#basket5').css("fill", "#202020");
    $('#basket5').css("width", "34px");
    $('#basket5').css("height", "34px");
  });

  $('#basket5').on('mouseout', function () {
    $('#basket5').css("background", "none");
    $('#basket5').css("padding", "none");
    $('#basket5').css("border-radius", "none");
    $('#basket5').css("fill", "#999999");
    $('#basket5').css("width", "34px");
    $('#basket5').css("height", "34px");
  });


  $('#basket6').on('mouseover', function () {
    $('#basket6').css("background", "#dfdede");
    $('#basket6').css("padding", "7px");
    $('#basket6').css("border-radius", "25px");
    $('#basket6').css("fill", "#202020");
    $('#basket6').css("width", "34px");
    $('#basket6').css("height", "34px");
  });

  $('#basket6').on('mouseout', function () {
    $('#basket6').css("background", "none");
    $('#basket6').css("padding", "none");
    $('#basket6').css("border-radius", "none");
    $('#basket6').css("fill", "#999999");
    $('#basket6').css("width", "34px");
    $('#basket6').css("height", "34px");
  });



  $('#basket11').on('mouseover', function () {
    $('#basket11').css("background", "#dfdede");
    $('#basket11').css("padding", "7px");
    $('#basket11').css("border-radius", "25px");
    $('#basket11').css("fill", "#202020");
    $('#basket11').css("width", "34px");
    $('#basket11').css("height", "34px");
  });

  $('#basket11').on('mouseout', function () {
    $('#basket11').css("background", "none");
    $('#basket11').css("padding", "none");
    $('#basket11').css("border-radius", "none");
    $('#basket11').css("fill", "#999999");
    $('#basket11').css("width", "34px");
    $('#basket11').css("height", "34px");
  });


  $('#basket22').on('mouseover', function () {
    $('#basket22').css("background", "#dfdede");
    $('#basket22').css("padding", "7px");
    $('#basket22').css("border-radius", "25px");
    $('#basket22').css("fill", "#202020");
    $('#basket22').css("width", "34px");
    $('#basket22').css("height", "34px");
  });

  $('#basket22').on('mouseout', function () {
    $('#basket22').css("background", "none");
    $('#basket22').css("padding", "none");
    $('#basket22').css("border-radius", "none");
    $('#basket22').css("fill", "#999999");
    $('#basket22').css("width", "34px");
    $('#basket22').css("height", "34px");
  });


  $('#basket33').on('mouseover', function () {
    $('#basket33').css("background", "#dfdede");
    $('#basket33').css("padding", "7px");
    $('#basket33').css("border-radius", "25px");
    $('#basket33').css("fill", "#202020");
    $('#basket33').css("width", "34px");
    $('#basket33').css("height", "34px");
  });

  $('#basket33').on('mouseout', function () {
    $('#basket33').css("background", "none");
    $('#basket33').css("padding", "none");
    $('#basket33').css("border-radius", "none");
    $('#basket33').css("fill", "#999999");
    $('#basket33').css("width", "34px");
    $('#basket33').css("height", "34px");
  });


  $('#basket44').on('mouseover', function () {
    $('#basket44').css("background", "#dfdede");
    $('#basket44').css("padding", "7px");
    $('#basket44').css("border-radius", "25px");
    $('#basket44').css("fill", "#202020");
    $('#basket44').css("width", "34px");
    $('#basket44').css("height", "34px");
  });

  $('#basket44').on('mouseout', function () {
    $('#basket44').css("background", "none");
    $('#basket44').css("padding", "none");
    $('#basket44').css("border-radius", "none");
    $('#basket44').css("fill", "#999999");
    $('#basket44').css("width", "34px");
    $('#basket44').css("height", "34px");
  });


  $('#basket55').on('mouseover', function () {
    $('#basket55').css("background", "#dfdede");
    $('#basket55').css("padding", "7px");
    $('#basket55').css("border-radius", "25px");
    $('#basket55').css("fill", "#202020");
    $('#basket55').css("width", "34px");
    $('#basket55').css("height", "34px");
  });

  $('#basket55').on('mouseout', function () {
    $('#basket55').css("background", "none");
    $('#basket55').css("padding", "none");
    $('#basket55').css("border-radius", "none");
    $('#basket55').css("fill", "#999999");
    $('#basket55').css("width", "34px");
    $('#basket55').css("height", "34px");
  });


  $('#basket66').on('mouseover', function () {
    $('#basket66').css("background", "#dfdede");
    $('#basket66').css("padding", "7px");
    $('#basket66').css("border-radius", "25px");
    $('#basket66').css("fill", "#202020");
    $('#basket66').css("width", "34px");
    $('#basket66').css("height", "34px");
  });

  $('#basket66').on('mouseout', function () {
    $('#basket66').css("background", "none");
    $('#basket66').css("padding", "none");
    $('#basket66').css("border-radius", "none");
    $('#basket66').css("fill", "#999999");
    $('#basket66').css("width", "34px");
    $('#basket66').css("height", "34px");
  });


  ////-----------------filling
  $(".drop-down").hide();
  /*$("ul li:odd").css("background-color", "#efefef");*/
  $("h3 span").click(function(){
    $(this).parent().next().slideToggle();
  });


  $(".drop-down-c").hide();
  /*$("ul li:odd").css("background-color", "#efefef");*/
  $("h4 span").click(function(){
    $(this).parent().next().slideToggle();
  });


  var searchBtn = '.circle', searchSlide = '.search-slide', searchClose = '.search-close', searchSpeed = 300; searchSpeedclose = 10;
  $(searchBtn).click(function () {
      $(searchSlide).animate({ 'width': '9.5em', 'height': '2.2em' }, searchSpeed);
      $('.circle').css("width", "160px");
      $('.circle').css("border-radius", "10px");

      event.stopPropagation();

      $("#face").removeAttr("style").hide();
      $("#face1").removeAttr("style").hide();
      $("#face2").removeAttr("style").hide();
      $("#face3").removeAttr("style").hide();
  });

  $('body').on('click', function () {
      $(searchSlide).animate({ 'width': 0 }, searchSpeedclose);
      $("#face").fadeIn(200);
      $("#face1").fadeIn(200);
      $("#face2").fadeIn(200);
      $("#face3").fadeIn(200);
      $('.circle').css("width", "50px");
      $('.circle').css("height", "50px");
      $('.circle').css("border-radius", "25px");
      $('#face3').css("margin-top", "13px");
      //console.log("dfvgdf");
  });



  /*------------Mailbox----------*/
  /*$('.menu-l1').on('mouseover', function () {
    $('.menu-b1').css({'display':'block',});
  });
  $('.menu-b1').on('mouseover', function () {
    $('.menu-b1').css({'display':'block',});
  });

  $('.menu-l1').on('mouseout', function () {
    $('.menu-b1').css({'display':'none',});
  });
  $('.menu-b1').on('mouseout', function () {
    $('.menu-b1').css({'display':'none',});
  });


  $('.menu-l2').on('mouseover', function () {
    $('.menu-b2').css({'display':'block',});
  });
  $('.menu-b2').on('mouseover', function () {
    $('.menu-b2').css({'display':'block',});
  });

  $('.menu-l2').on('mouseout', function () {
    $('.menu-b2').css({'display':'none',});
  });
  $('.menu-b2').on('mouseout', function () {
    $('.menu-b2').css({'display':'none',});
  });


  $('.menu-l3').on('mouseover', function () {
    $('.menu-b3').css({'display':'block',});
  });
  $('.menu-b3').on('mouseover', function () {
    $('.menu-b3').css({'display':'block',});
  });

  $('.menu-l3').on('mouseout', function () {
    $('.menu-b3').css({'display':'none',});
  });
  $('.menu-b3').on('mouseout', function () {
    $('.menu-b3').css({'display':'none',});
  });


  $('.menu-l4').on('click', function () {
    $('.menu-top').css({'display':'block',});
    event.stopPropagation();
  });


  $('body').on('click', function () {
    $('.menu-top').css({'display':'none',});
  });*/



});
