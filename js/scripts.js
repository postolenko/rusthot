function getSidebarHeight() {
  $(".sidebar").css({
    "padding-bottom" : $(".footer_section").height() + "px"
  });
  $("#chatUsers").css({
    "top" : $(".sidebar_header").outerHeight() + "px",
    "max-height" : $(".sidebar").height() - $(".sidebar_header").height() + "px"
  });
  console.log($(".footer_section").height());
}

function getCount() {
  symbols = $("#form_input").val();
  contSymbols = $("#form_input").val().length;
  maxSymbols = parseInt( $(".count_symbols").attr("data-maxsimbols") );
  if(maxSymbols < contSymbols) {
    obrezannayaStroka = symbols.slice(0,-1);
    $("#form_input").val(obrezannayaStroka);
  }
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {

  getSidebarHeight();
  $(".scrollbar").mCustomScrollbar();

});

$(window).resize(function() {

  bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

  $(".content").css({
    "padding-top" : $(".header_site").height() + "px"
  });

  getSidebarHeight();

});

$(document).scroll(function() {



});

$(document).ready(function() {

  $(".content").css({
    "padding-top" : $(".header_site").height() + "px"
  });

  if( $(".portfolio_slider").length > 0 ) {
      $(".portfolio_slider").not(".slick-initialized").slick({
          dots: true,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 4,
          slidesToScroll: 1,
          // fade: true,
          responsive: [
              {
                breakpoint: 900,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 540,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
      });
  }

  if( $(".users_slider").length > 0 ) {
    $(".users_slider").not(".slick-initialized").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1200,
        // slidesToShow: 1,
        // slidesToScroll: 5,
        variableWidth: true,
        // centerMode: true
    });
  }


  $(".lang_current").click(function(e) {
    e.preventDefault();
    var parentBlock = $(this).closest(".lang_drop_menu");
    parentBlock.toggleClass("active");
  });
  $(this).keydown(function(eventObject){
      if (eventObject.which == 27) {
        $(".lang_drop_menu").removeClass("active");
      }
  });
  $(document).on("mouseup", function(e) {
    if($(".lang_drop_menu").is(":visible")) {
    hide_element = $(".lang_drop_menu");
     if (!hide_element.is(e.target)
              && hide_element.has(e.target).length === 0) {
      $(".lang_drop_menu").removeClass("active");
     }
   }
  });

  // -------------

  // Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = minutes + "." + seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

// ----------

  // $(".respmenubtn").click(function(e) {
  //     e.preventDefault();
  //     if( $("#resp_nav").is(":hidden") ) {
  //         $("#resp_nav").fadeIn(300);
  //         $(this).addClass("active");
  //     } else {
  //         $("#resp_nav").fadeOut(300);
  //         $(this).removeClass("active");
  //     }
  // });
  // $("#resp_nav .close_nav").on("click", function(e) {
  //     e.preventDefault();
  //     $("#resp_nav").fadeOut(300);
  //     $(".respmenubtn").removeClass("active");
  // });
  // $(this).keydown(function(eventObject){
  //     if (eventObject.which == 27 &&
  //         $("#resp_nav").is(":visible") &&
  //         bodyWidth <= 1124) {
  //             $("#resp_nav").fadeOut(300);
  //             $(".respmenubtn").removeClass("active");
  //     }
  // });

  // -----------

});