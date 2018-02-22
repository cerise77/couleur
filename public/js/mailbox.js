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
        /*document.getElementById("header-top-ls").style.width = "90%";
        document.getElementById("header-top-ls").style.marginLeft = "250px";
        document.getElementById("header-top-ls").style.paddingRight = "120px";*/
        document.getElementById("header-top").style.paddingRight = "25px";
        //document.getElementById("right-m").style.marginRight = "25px";

        document.getElementById("header-top-ls-ml").style.width = "90%";
        document.getElementById("header-top-ls-ml").style.marginLeft = "250px";

    }

    if (window.innerWidth <= '1490') {
        document.getElementById("right-s").style.width = "85%";
        document.getElementById("left-s").style.width = "15%";
        document.getElementById("left-s").style.position = "fixed";
        document.getElementById("left-s").style.zIndex = "130";
        /*document.getElementById("header-top-ls").style.width = "83%";
        document.getElementById("header-top-ls").style.marginLeft = "250px";*/
        document.getElementById("header-top").style.paddingRight = "25px";
        //document.getElementById("right-m").style.marginRight = "25px";

        document.getElementById("header-top-ls-ml").style.width = "83%";
        document.getElementById("header-top-ls-ml").style.marginLeft = "250px";

}
    if (window.innerWidth <= '1200') {
        document.getElementById("right-s").style.width = "100%";
        document.getElementById("left-s").style.width = "15%";
        document.getElementById("left-s").style.position = "fixed";
        document.getElementById("left-s").style.zIndex = "130";
        /*document.getElementById("header-top-ls").style.width = "100%";
        document.getElementById("header-top-ls").style.marginLeft = "0";*/

        document.getElementById("header-top-ls-ml").style.width = "100%";
        document.getElementById("header-top-ls-ml").style.marginLeft = "0";

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

        /*document.getElementById("header-top-ls").style.width = "100%";
        document.getElementById("header-top-ls").style.marginLeft = "0";*/
        /*document.getElementById("header-top-ls").style.paddingRight = "80px";*/

        document.getElementById("header-top-ls-ml").style.width = "100%";
        document.getElementById("header-top-ls-ml").style.marginLeft = "0";
    }


    if (window.innerWidth <= '1490') {
        document.getElementById("right-s").style.width = "100%";
        document.getElementById("left-s").style.width = "0";

        /*document.getElementById("header-top-ls").style.width = "100%";
        document.getElementById("header-top-ls").style.marginLeft = "0";*/

        document.getElementById("header-top-ls-ml").style.width = "100%";
        document.getElementById("header-top-ls-ml").style.marginLeft = "0";
    }
    if (window.innerWidth <= '1200') {
      document.getElementById("contact-right").style.boxShadow = "none";

      document.getElementById("template").style.display = "none";

    }

});


/*var canvas=document.getElementById('cnvs');
var ctx = canvas.getContext('2d');
ctx.lineWidth = 10; // толщина линии
ctx.moveTo(50, 50); //передвигаем перо
ctx.lineTo(200, 100); //рисуем линию
ctx.stroke();*/

/*inputMessage.onclick = function() {
  this.style.width = '100%';
}*/



$(document).ready(function () {

  $('.menu-l1').on('mouseover', function () {
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
  });



/*-----------Mouse-over---------*/
  $('.ms1').on('mouseover', function () {
    $('.mp1').css({'display':'block',});
    $('.ms1').css({'background':'#eeeeee', 'border-radius':'20px'});
  });
  $('.mp1').on('mouseover', function () {
    $('.mp1').css({'display':'block',});
    $('.ms1').css({'background':'#eeeeee', 'border-radius':'20px'});
  });

  $('.ms1').on('mouseout', function () {
    $('.mp1').css({'display':'none',});
    $('.ms1').css({'background':'none', 'border-radius':'0'});
  });
  $('.mp1').on('mouseout', function () {
    $('.mp1').css({'display':'none',});
    $('.ms1').css({'background':'none', 'border-radius':'0'});
  });



  $('.ms2').on('mouseover', function () {
    $('.mp2').css({'display':'block',});
    $('.ms2').css({'background':'#eeeeee', 'border-radius':'20px'});
  });
  $('.mp2').on('mouseover', function () {
    $('.mp2').css({'display':'block',});
    $('.ms2').css({'background':'#eeeeee', 'border-radius':'20px'});
  });

  $('.ms2').on('mouseout', function () {
    $('.mp2').css({'display':'none',});
    $('.ms2').css({'background':'none', 'border-radius':'0'});
  });
  $('.mp2').on('mouseout', function () {
    $('.mp2').css({'display':'none',});
    $('.ms2').css({'background':'none', 'border-radius':'0'});
  });


  $('.ms3').on('mouseover', function () {
    $('.mp3').css({'display':'block',});
    $('.ms3').css({'background':'#eeeeee', 'border-radius':'20px'});
  });
  $('.mp3').on('mouseover', function () {
    $('.mp3').css({'display':'block',});
    $('.ms3').css({'background':'#eeeeee', 'border-radius':'20px'});
  });

  $('.ms3').on('mouseout', function () {
    $('.mp3').css({'display':'none',});
    $('.ms3').css({'background':'none', 'border-radius':'0'});
  });
  $('.mp3').on('mouseout', function () {
    $('.mp3').css({'display':'none',});
    $('.ms3').css({'background':'none', 'border-radius':'0'});
  });


  $('.ms4').on('mouseover', function () {
    $('.mp4').css({'display':'block',});
    $('.ms4').css({'background':'#eeeeee', 'border-radius':'20px'});
  });
  $('.mp4').on('mouseover', function () {
    $('.mp4').css({'display':'block',});
    $('.ms4').css({'background':'#eeeeee', 'border-radius':'20px'});
  });

  $('.ms4').on('mouseout', function () {
    $('.mp4').css({'display':'none',});
    $('.ms4').css({'background':'none', 'border-radius':'0'});
  });
  $('.mp4').on('mouseout', function () {
    $('.mp4').css({'display':'none',});
    $('.ms4').css({'background':'none', 'border-radius':'0'});
  });


  $('.ms5').on('mouseover', function () {
    $('.mp5').css({'display':'block',});
    $('.ms5').css({'background':'#eeeeee', 'border-radius':'20px'});
  });
  $('.mp5').on('mouseover', function () {
    $('.mp5').css({'display':'block',});
    $('.ms5').css({'background':'#eeeeee', 'border-radius':'20px'});
  });

  $('.ms5').on('mouseout', function () {
    $('.mp5').css({'display':'none',});
    $('.ms5').css({'background':'none', 'border-radius':'0'});
  });
  $('.mp5').on('mouseout', function () {
    $('.mp5').css({'display':'none',});
    $('.ms5').css({'background':'none', 'border-radius':'0'});
  });


  $('.ms6').on('mouseover', function () {
    $('.mp6').css({'display':'block',});
    $('.ms6').css({'background':'#eeeeee', 'border-radius':'20px'});
  });
  $('.mp6').on('mouseover', function () {
    $('.mp6').css({'display':'block',});
    $('.ms6').css({'background':'#eeeeee', 'border-radius':'20px'});
  });

  $('.ms6').on('mouseout', function () {
    $('.mp6').css({'display':'none',});
    $('.ms6').css({'background':'none', 'border-radius':'0'});
  });
  $('.mp6').on('mouseout', function () {
    $('.mp6').css({'display':'none',});
    $('.ms6').css({'background':'none', 'border-radius':'0'});
  });


  $('.ms7').on('mouseover', function () {
    $('.mp7').css({'display':'block',});
    $('.ms7').css({'background':'#eeeeee', 'border-radius':'20px'});
  });
  $('.mp7').on('mouseover', function () {
    $('.mp7').css({'display':'block',});
    $('.ms7').css({'background':'#eeeeee', 'border-radius':'20px'});
  });

  $('.ms7').on('mouseout', function () {
    $('.mp7').css({'display':'none',});
    $('.ms7').css({'background':'none', 'border-radius':'0'});
  });
  $('.mp7').on('mouseout', function () {
    $('.mp7').css({'display':'none',});
    $('.ms7').css({'background':'none', 'border-radius':'0'});
  });


  $('.ms8').on('mouseover', function () {
    $('.mp8').css({'display':'block',});
    $('.ms8').css({'background':'#eeeeee', 'border-radius':'20px'});
  });
  $('.mp8').on('mouseover', function () {
    $('.mp8').css({'display':'block',});
    $('.ms8').css({'background':'#eeeeee', 'border-radius':'20px'});
  });

  $('.ms8').on('mouseout', function () {
    $('.mp8').css({'display':'none',});
    $('.ms8').css({'background':'none', 'border-radius':'0'});
  });
  $('.mp8').on('mouseout', function () {
    $('.mp8').css({'display':'none',});
    $('.ms8').css({'background':'none', 'border-radius':'0'});
  });


  $('.ms9').on('mouseover', function () {
    $('.mp9').css({'display':'block',});
    $('.ms9').css({'background':'#eeeeee', 'border-radius':'20px'});
  });
  $('.mp9').on('mouseover', function () {
    $('.mp9').css({'display':'block',});
    $('.ms9').css({'background':'#eeeeee', 'border-radius':'20px'});
  });

  $('.ms9').on('mouseout', function () {
    $('.mp9').css({'display':'none',});
    $('.ms9').css({'background':'none', 'border-radius':'0'});
  });
  $('.mp9').on('mouseout', function () {
    $('.mp9').css({'display':'none',});
    $('.ms9').css({'background':'none', 'border-radius':'0'});
  });


  $('.ms10').on('mouseover', function () {
    $('.mp10').css({'display':'block',});
    $('.ms10').css({'background':'#eeeeee', 'border-radius':'20px'});
  });
  $('.mp10').on('mouseover', function () {
    $('.mp10').css({'display':'block',});
    $('.ms10').css({'background':'#eeeeee', 'border-radius':'20px'});
  });

  $('.ms10').on('mouseout', function () {
    $('.mp10').css({'display':'none',});
    $('.ms10').css({'background':'none', 'border-radius':'0'});
  });
  $('.mp10').on('mouseout', function () {
    $('.mp10').css({'display':'none',});
    $('.ms10').css({'background':'none', 'border-radius':'0'});
  });


  $('.ms11').on('mouseover', function () {
    $('.mp11').css({'display':'block',});
    $('.ms11').css({'background':'#eeeeee', 'border-radius':'20px'});
  });
  $('.mp11').on('mouseover', function () {
    $('.mp11').css({'display':'block',});
    $('.ms11').css({'background':'#eeeeee', 'border-radius':'20px'});
  });

  $('.ms11').on('mouseout', function () {
    $('.mp11').css({'display':'none',});
    $('.ms11').css({'background':'none', 'border-radius':'0'});
  });
  $('.mp11').on('mouseout', function () {
    $('.mp11').css({'display':'none',});
    $('.ms11').css({'background':'none', 'border-radius':'0'});
  });

  /*---------List--------*/
  $('#list-block1').on('click', function () {
    /*if ( $('#list-add1').css('display') == 'none' ) {
      $('#list-add1').animate({height: 'show'}, 400);
      $('#list-block1').css({'box-shadow':'0 -1.4px 2px 0 rgba(0,0,0,0.3)'});
      $('#list-block1').css({'border-bottom':'none'});
    }else {
      $('#list-add1').animate({height: 'hide'}, 10);
      $('#list-block1').css({'box-shadow':'0 2px 4px 0 rgba(0,0,0,0.3)'});
      $('#list-block1').css({'border-bottom':'solid 1px #e8e8e8'});
    }*/

      $('#list-add1').animate({height: 'show'}, 400);
      $('#list-block1').css({'box-shadow':'0 -1.4px 2px 0 rgba(0,0,0,0.3)'});
      $('#list-block1').css({'border-bottom':'none'});

      event.stopPropagation();
    //$('.text-ar').animate({'border-color':'#e8e8e8', 'border-width':'1px'});

    if ($( ".input-message").val().length > 0) {
      $('.label-m').css({'top':'10px',});
    } else if ($( ".input-message").val().length == 0) {
      $('.label-m').css({'top':'20px',});
    }
  });


  $('#list-block2').on('click', function () {
    $('#list-add2').animate({height: 'show'}, 400);
    $('#list-block2').css({'box-shadow':'0 -1.4px 2px 0 rgba(0,0,0,0.3)'});
    $('#list-block2').css({'border-bottom':'none'});
    $('#list-block2').css({'top':'30px'});

    event.stopPropagation();

    if ($( ".input-message").val().length > 0) {
      $('.label-m').css({'top':'10px',});
    } else if ($( ".input-message").val().length == 0) {
      $('.label-m').css({'top':'20px',});
    }
  });


  $('#list-block3').on('click', function () {
    $('#list-add3').animate({height: 'show'}, 400);
    $('#list-block3').css({'box-shadow':'0 -1.4px 2px 0 rgba(0,0,0,0.3)'});
    $('#list-block3').css({'border-bottom':'none'});
    $('#list-block3').css({'top':'30px'});

    event.stopPropagation();

    if ($( ".input-message").val().length > 0) {
      $('.label-m').css({'top':'10px',});
    } else if ($( ".input-message").val().length == 0) {
      $('.label-m').css({'top':'20px',});
    }
  });


  $('#list-block4').on('click', function () {
    $('#list-add4').animate({height: 'show'}, 400);
    $('#list-block4').css({'box-shadow':'0 -1.4px 2px 0 rgba(0,0,0,0.3)'});
    $('#list-block4').css({'border-bottom':'none'});
    $('#list-block4').css({'top':'30px'});

    event.stopPropagation();

    if ($( ".input-message").val().length > 0) {
      $('.label-m').css({'top':'10px',});
    } else if ($( ".input-message").val().length == 0) {
      $('.label-m').css({'top':'20px',});
    }
  });


  $('#list-block5').on('click', function () {
    $('#list-add5').animate({height: 'show'}, 400);
    $('#list-block5').css({'box-shadow':'0 -1.4px 2px 0 rgba(0,0,0,0.3)'});
    $('#list-block5').css({'border-bottom':'none'});

    event.stopPropagation();

    if ($( ".input-message").val().length > 0) {
      $('.label-m').css({'top':'10px',});
    } else if ($( ".input-message").val().length == 0) {
      $('.label-m').css({'top':'20px',});
    }
  });


  $('#list-block6').on('click', function () {
    $('#list-add6').animate({height: 'show'}, 400);
    $('#list-block6').css({'box-shadow':'0 -1.4px 2px 0 rgba(0,0,0,0.3)'});
    $('#list-block6').css({'border-bottom':'none'});
    $('#list-block6').css({'top':'30px'});

    event.stopPropagation();

    if ($( ".input-message").val().length > 0) {
      $('.label-m').css({'top':'10px',});
    } else if ($( ".input-message").val().length == 0) {
      $('.label-m').css({'top':'20px',});
    }
  });


  $('#list-block7').on('click', function () {
    $('#list-add7').animate({height: 'show'}, 400);
    $('#list-block7').css({'box-shadow':'0 -1.4px 2px 0 rgba(0,0,0,0.3)'});
    $('#list-block7').css({'border-bottom':'none'});
    $('#list-block7').css({'top':'30px'});

    event.stopPropagation();

    if ($( ".input-message").val().length > 0) {
      $('.label-m').css({'top':'10px',});
    } else if ($( ".input-message").val().length == 0) {
      $('.label-m').css({'top':'20px',});
    }
  });


  $('#list-block8').on('click', function () {
    $('#list-add8').animate({height: 'show'}, 400);
    $('#list-block8').css({'box-shadow':'0 -1.4px 2px 0 rgba(0,0,0,0.3)'});
    $('#list-block8').css({'border-bottom':'none'});
    $('#list-block8').css({'top':'30px'});

    event.stopPropagation();

    if ($( ".input-message").val().length > 0) {
      $('.label-m').css({'top':'10px',});
    } else if ($( ".input-message").val().length == 0) {
      $('.label-m').css({'top':'20px',});
    }
  });


  $('#list-block9').on('click', function () {
    $('#list-add9').animate({height: 'show'}, 400);
    $('#list-block9').css({'box-shadow':'0 -1.4px 2px 0 rgba(0,0,0,0.3)'});
    $('#list-block9').css({'border-bottom':'none'});
    $('#list-block9').css({'top':'30px'});

    event.stopPropagation();

    if ($( ".input-message").val().length > 0) {
      $('.label-m').css({'top':'10px',});
    } else if ($( ".input-message").val().length == 0) {
      $('.label-m').css({'top':'20px',});
    }
  });


  $('#list-block10').on('click', function () {
    $('#list-add10').animate({height: 'show'}, 400);
    $('#list-block10').css({'box-shadow':'0 -1.4px 2px 0 rgba(0,0,0,0.3)'});
    $('#list-block10').css({'border-bottom':'none'});
    $('#list-block10').css({'top':'30px'});

    event.stopPropagation();

    if ($( ".input-message").val().length > 0) {
      $('.label-m').css({'top':'10px',});
    } else if ($( ".input-message").val().length == 0) {
      $('.label-m').css({'top':'20px',});
    }
  });


  $('#list-block11').on('click', function () {
    $('#list-add11').animate({height: 'show'}, 400);
    $('#list-block11').css({'box-shadow':'0 -1.4px 2px 0 rgba(0,0,0,0.3)'});
    $('#list-block11').css({'border-bottom':'none'});
    $('#list-block11').css({'top':'30px'});

    event.stopPropagation();

    if ($( ".input-message").val().length > 0) {
      $('.label-m').css({'top':'10px',});
    } else if ($( ".input-message").val().length == 0) {
      $('.label-m').css({'top':'20px',});
    }
  });


  $('body').on('click', function () {
    $('#list-add1').animate({height: 'hide'}, 10);
    $('#list-block1').css({'box-shadow':'0 2px 4px 0 rgba(0,0,0,0.3)'});
    $('#list-block1').css({'border-bottom':'solid 1px #e8e8e8'});

    $('#list-add2').animate({height: 'hide'}, 10);
    $('#list-block2').css({'box-shadow':'0 2px 4px 0 rgba(0,0,0,0.3)'});
    $('#list-block2').css({'border-bottom':'solid 1px #e8e8e8'});
    $('#list-block2').css({'top':'0'});

    $('#list-add3').animate({height: 'hide'}, 10);
    $('#list-block3').css({'box-shadow':'0 2px 4px 0 rgba(0,0,0,0.3)'});
    $('#list-block3').css({'border-bottom':'solid 1px #e8e8e8'});
    $('#list-block3').css({'top':'0'});

    $('#list-add4').animate({height: 'hide'}, 10);
    $('#list-block4').css({'box-shadow':'0 2px 4px 0 rgba(0,0,0,0.3)'});
    $('#list-block4').css({'border-bottom':'solid 1px #e8e8e8'});
    $('#list-block4').css({'top':'0'});

    $('#list-add5').animate({height: 'hide'}, 10);
    $('#list-block5').css({'box-shadow':'0 2px 4px 0 rgba(0,0,0,0.3)'});
    $('#list-block5').css({'border-bottom':'solid 1px #e8e8e8'});
    $('#list-block5').css({'top':'0'});

    $('#list-add6').animate({height: 'hide'}, 10);
    $('#list-block6').css({'box-shadow':'0 2px 4px 0 rgba(0,0,0,0.3)'});
    $('#list-block6').css({'border-bottom':'solid 1px #e8e8e8'});
    $('#list-block6').css({'top':'0'});

    $('#list-add7').animate({height: 'hide'}, 10);
    $('#list-block7').css({'box-shadow':'0 2px 4px 0 rgba(0,0,0,0.3)'});
    $('#list-block7').css({'border-bottom':'solid 1px #e8e8e8'});
    $('#list-block7').css({'top':'0'});

    $('#list-add8').animate({height: 'hide'}, 10);
    $('#list-block8').css({'box-shadow':'0 2px 4px 0 rgba(0,0,0,0.3)'});
    $('#list-block8').css({'border-bottom':'solid 1px #e8e8e8'});
    $('#list-block8').css({'top':'0'});

    $('#list-add9').animate({height: 'hide'}, 10);
    $('#list-block9').css({'box-shadow':'0 2px 4px 0 rgba(0,0,0,0.3)'});
    $('#list-block9').css({'border-bottom':'solid 1px #e8e8e8'});
    $('#list-block9').css({'top':'0'});

    $('#list-add10').animate({height: 'hide'}, 10);
    $('#list-block10').css({'box-shadow':'0 2px 4px 0 rgba(0,0,0,0.3)'});
    $('#list-block10').css({'border-bottom':'solid 1px #e8e8e8'});
    $('#list-block10').css({'top':'0'});

    $('#list-add11').animate({height: 'hide'}, 10);
    $('#list-block11').css({'box-shadow':'0 2px 4px 0 rgba(0,0,0,0.3)'});
    $('#list-block11').css({'border-bottom':'solid 1px #e8e8e8'});
    $('#list-block11').css({'top':'0'});
  });


/*-----------------Text-area----------*/
  $('.input-message').on('click', function () {
    $('.text-ar').animate({'border-color':'#217fdd', 'border-width':'2px'});
    //$('.line-span').animate({'width':'100%'});
    //('.line-left').animate({'width':'100%'});

    $('.label-m').css({'top':'10px',});
    event.stopPropagation();
    //$('.input-message').animate({'border-width':'2px',});
  });

  $('.list-add').on('click', function () {
    $('.text-ar').animate({'border-color':'#e8e8e8', 'border-width':'1px'});

    if ($( ".input-message").val().length > 0) {
      $('.label-m').css({'top':'10px',});
    } else if ($( ".input-message").val().length == 0) {
      $('.label-m').css({'top':'20px',});
    }

    event.stopPropagation();

    //$('.input-message').animate({border: 'hide'}, 10);
  });

/*----------------Button-send-----------*/
  $('.button-send-q').on('click', function () {
    $('.send-p').toggleClass('speed-in');
    event.stopPropagation();
    //console.log("dxmdklgnlnfkl");

  });

  $('#close-check').on('click', function () {
      $('.send-p').removeClass('speed-in');
      event.stopPropagation();
  });


  /*-----------------To----------*/
    $('.input-block-send').on('click', function () {
      $('.input-block-send').animate({'border-color':'#217fdd', 'border-width':'2px'});
      event.stopPropagation();

    });

    $('.send-middle').on('click', function () {
      $('.input-block-send').animate({'border-color':'#e8e8e8', 'border-width':'1px'});

    });


    $('.send-text-block').on('click', function () {
      $('.send-text-block').animate({'border-color':'#217fdd', 'border-width':'2px'});
      event.stopPropagation();

    });

    $('.send-middle').on('click', function () {
      $('.send-text-block').animate({'border-color':'#e8e8e8', 'border-width':'1px'});

    });

});
