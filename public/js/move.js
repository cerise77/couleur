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
        document.getElementById("search-np").style.width = "90%";

    }

    if (window.innerWidth <= '1490') {
        document.getElementById("right-s").style.width = "85%";
        document.getElementById("left-s").style.width = "15%";
        document.getElementById("left-s").style.position = "fixed";
        document.getElementById("left-s").style.zIndex = "130";
        document.getElementById("header-top-ls").style.width = "83%";
        document.getElementById("header-top-ls").style.marginLeft = "250px";
        document.getElementById("search-np").style.width = "85%";

}
    if (window.innerWidth <= '1200') {
        document.getElementById("right-s").style.width = "100%";
        document.getElementById("left-s").style.width = "15%";
        document.getElementById("left-s").style.position = "fixed";
        document.getElementById("left-s").style.zIndex = "130";
        document.getElementById("header-top-ls").style.width = "100%";
        document.getElementById("header-top-ls").style.marginLeft = "0";

        document.getElementById("template").style.display = "block";
        document.getElementById("template").style.position = "fixed";
        document.getElementById("template").style.width = "100%";
        document.getElementById("template").style.height = "100%";
        document.getElementById("template").style.background = "#000";
        document.getElementById("template").style.zIndex = "50";
        document.getElementById("template").style.opacity = "0.2";

        document.getElementById("search-np").style.width = "100%";
        //document.getElementById("contact-right").style.boxShadow = "0 0 0 60em rgba(0,0,0,0.2)";
        //document.getElementById("text-col").style.boxShadow = "0 0 0 60em rgba(0,0,0,0.2)";
        //document.getElementById("text-col1").style.boxShadow = "0 0 0 60em rgba(0,0,0,0.2)";
        //document.getElementById("text-col2").style.boxShadow = "0 0 0 60em rgba(0,0,0,0.2)";
        //document.getElementById("header-top-ls").style.boxShadow = "0 0 0 60em rgba(0,0,0,0.2)";
        //document.getElementById("main-center").style.boxShadow = "0 0 0 60em rgba(0,0,0,0.2)";
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
        document.getElementById("header-top-ls").style.paddingRight = "80px";
        document.getElementById("search-np").style.width = "100%";
    }


    if (window.innerWidth <= '1490') {
        document.getElementById("right-s").style.width = "100%";
        document.getElementById("left-s").style.width = "0";

        document.getElementById("header-top-ls").style.width = "100%";
        document.getElementById("header-top-ls").style.marginLeft = "0";
        document.getElementById("search-np").style.width = "100%";
    }
    if (window.innerWidth <= '1200') {
      document.getElementById("contact-right").style.boxShadow = "none";
      document.getElementById("text-col").style.boxShadow = "none";
      document.getElementById("text-col1").style.boxShadow = "none";
      document.getElementById("text-col2").style.boxShadow = "none";

      document.getElementById("template").style.display = "none";
      document.getElementById("search-np").style.width = "100%";

    }

    //if (window.innerWidth >= '1200') {
        //document.getElementById("right-s").style.width = "100%";
        //document.getElementById("left-s").style.width = "0";
    //}
    //if (window.innerWidth >= '1200') {
        //document.getElementById("text-col").style.width = "30%";
    //}

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



  $('.ml1').on('mouseover', function () {
    $('.md1').css({'display':'block',});
  });
  $('.md1').on('mouseover', function () {
    $('.md1').css({'display':'block',});
  });

  $('.md1').on('mouseout', function () {
    $('.md1').css({'display':'none',});
  });
  $('.ml1').on('mouseout', function () {
    $('.md1').css({'display':'none',});
  });


  $('.ml2').on('mouseover', function () {
    $('.md2').css({'display':'block',});
  });
  $('.md2').on('mouseover', function () {
    $('.md2').css({'display':'block',});
  });

  $('.md2').on('mouseout', function () {
    $('.md2').css({'display':'none',});
  });
  $('.ml2').on('mouseout', function () {
    $('.md2').css({'display':'none',});
  });


  $('.ml3').on('mouseover', function () {
    $('.md3').css({'display':'block',});
  });
  $('.md3').on('mouseover', function () {
    $('.md3').css({'display':'block',});
  });

  $('.md3').on('mouseout', function () {
    $('.md3').css({'display':'none',});
  });
  $('.ml3').on('mouseout', function () {
    $('.md3').css({'display':'none',});
  });


  $('.ml4').on('mouseover', function () {
    $('.md4').css({'display':'block',});
  });
  $('.md4').on('mouseover', function () {
    $('.md4').css({'display':'block',});
  });

  $('.md4').on('mouseout', function () {
    $('.md4').css({'display':'none',});
  });
  $('.ml4').on('mouseout', function () {
    $('.md4').css({'display':'none',});
  });


  $('.ml5').on('mouseover', function () {
    $('.md5').css({'display':'block',});
  });
  $('.md5').on('mouseover', function () {
    $('.md5').css({'display':'block',});
  });

  $('.md5').on('mouseout', function () {
    $('.md5').css({'display':'none',});
  });
  $('.ml5').on('mouseout', function () {
    $('.md5').css({'display':'none',});
  });


  $('.ml6').on('mouseover', function () {
    $('.md6').css({'display':'block',});
  });
  $('.md6').on('mouseover', function () {
    $('.md6').css({'display':'block',});
  });

  $('.md6').on('mouseout', function () {
    $('.md6').css({'display':'none',});
  });
  $('.ml6').on('mouseout', function () {
    $('.md6').css({'display':'none',});
  });


  $('.ml7').on('mouseover', function () {
    $('.md7').css({'display':'block',});
  });
  $('.md7').on('mouseover', function () {
    $('.md7').css({'display':'block',});
  });

  $('.md7').on('mouseout', function () {
    $('.md7').css({'display':'none',});
  });
  $('.ml7').on('mouseout', function () {
    $('.md7').css({'display':'none',});
  });


  $('.ml8').on('mouseover', function () {
    $('.md8').css({'display':'block',});
  });
  $('.md8').on('mouseover', function () {
    $('.md8').css({'display':'block',});
  });

  $('.md8').on('mouseout', function () {
    $('.md8').css({'display':'none',});
  });
  $('.ml8').on('mouseout', function () {
    $('.md8').css({'display':'none',});
  });



});
