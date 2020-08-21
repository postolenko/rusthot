function getSidebarHeight() {
  $(".wrapper").css({
    "padding-bottom" : $(".footer_section").height() + "px"
  });
  if(bodyWidth >= 1300) {
    $("#chatUsers").css({
      "top" : $(".sidebar_header").outerHeight() + "px",
      "max-height" : $(window).height() - $(".sidebar_header").outerHeight() - $("#footerForm").outerHeight() - $(".header_site").outerHeight() + "px"
    });
  } else {
    $("#chatUsers").css({
      "top" : "auto",
      "max-height" : "auto"
    });
  }

  $("#chatMenu").css({
    "top" : $(".header_site").height() + "px"
  });
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
        slidesToScroll: 5,
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

  if($("#countdown").length > 0) {

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

  }

// ----------

  $(".more_link").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
      }
  });
  $(".close_nav").on("click", function(e) {
      e.preventDefault();
      $("#resp_nav").fadeOut(300);
  });
  $(this).keydown(function(eventObject){
      if (eventObject.which == 27 &&
          $("#resp_nav").is(":visible") &&
          bodyWidth <= 1300) {
              $("#resp_nav").fadeOut(300);
      }
  });

  // ----------

  $(".chat_link").click(function(e) {
      e.preventDefault();
      if( $("#chatMenu").is(":hidden") ) {
          $("#chatMenu").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#chatMenu").fadeOut(300);
          $(this).removeClass("active");
      }
  });
  $(".close_chat").on("click", function(e) {
      e.preventDefault();
      $("#chatMenu").fadeOut(300);
  });
  $(this).keydown(function(eventObject){
      if (eventObject.which == 27 &&
          $("#chatMenu").is(":visible") &&
          bodyWidth <= 1300) {
              $("#chatMenu").fadeOut(300);
      }
  });

  // -------------

    $("[data-popup-link]").on("click", function(e) {
        e.preventDefault();
        popupName = $(this).attr("data-popup-link");
        div = document.createElement('div');
        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
        scrollWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);
        $("body").addClass("fixed");
        $("body").css({
            "position" : "fixed",
            "top" :  -$(document).scrollTop() + "px",
            "overflow" : "hidden",
            "right" : 0,
            "left" : 0,
            "bottom" : 0,
            "padding-right" : scrollWidth + "px"
        });
        $(".popup_bg").fadeIn(300);
        $("[data-popup = '"+ popupName +"']").fadeIn(300);
    });
    $(".close_popup, .popup_bg").on("click", function(e) {
        e.preventDefault();
        curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").attr("style", "");
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $("body").removeClass("fixed");
        $(".popup_bg").fadeOut(300);
        $("[data-popup]").fadeOut(300);
    });
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 ) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $(".popup_bg").fadeOut(300);
            $("[data-popup]").fadeOut(300);
        }
    });
    $(document).on("mouseup", function(e) {
      if($(".popup").is(":visible")) {
        e.preventDefault();
        hide_element = $(".popup_content");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $(".popup_bg").fadeOut(300);
            $("[data-popup]").fadeOut(300);
        }
      }
    });

    // -------------------

    $(".formInput").on("keydown", function() {
      parentBlock = $(this).closest("form");
      symbols = $(this).val();
      countSymbols = symbols.length;
      maxSymbols = parseInt( parentBlock.find(".count_symbols").attr("data-maxsimbols") );
      parentBlock.find(".count_symbols").text(maxSymbols - countSymbols);
      if(maxSymbols <= countSymbols) {
        obrezannayaStroka = symbols.slice(0,-1);
        $(this).val(obrezannayaStroka);
      }
    });

    $(".show_field").on("click", function() {
      parentBlock = $(this).closest(".form_input");
      formInput = parentBlock.find(".formInput");
      formInput.toggleClass("height");
    });

    // ------------

    $(".close_tickets").on("click", function(e) {
      e.preventDefault();
      if($("#ticketsSidebar").is(":visible")) {
        $("#ticketsSidebar").fadeOut(300);
      } else {
        $("#ticketsSidebar").fadeIn(300);
      }
    });

    $(this).keydown(function(eventObject){
      if (eventObject.which == 27 ) {
        $("#ticketsSidebar").fadeOut(300);
      }
    });

    $(".show_tickets").on("click", function(e) {
      e.preventDefault();
      $("#ticketsSidebar").fadeIn(300);
    });

});