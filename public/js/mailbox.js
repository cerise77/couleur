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



$(document).ready(function () {



});
