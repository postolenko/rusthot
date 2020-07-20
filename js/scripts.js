var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {



});

$(window).resize(function() {

  $(".wrapper").css({
    "padding-top" : $(".header_site").height() + "px"
  });

});

$(document).scroll(function() {



});

$(document).ready(function() {

  $(".wrapper").css({
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

});