$(document).ready(function() {
 var owl = $(".footer_bottom_slider_slider");
     owl.owlCarousel({     
       loop:true, 
       dots: false,
       responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
        0:{
                        items:1
                    },
                    550:{
                        items:2
                    },
                    768:{
                        items:2
                    },
                    993:{
                        items:2
                    },
                    1200:{
                        items:4
                    }
                    
                    
                    
                },
       itemsMobile: true,
       pagination: false
            });
    var countbox = ".section";
    $(window).on("scroll load resize", function(){

       

        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;

        var w_height = $(window).height();
        var d_height = $(document).height();
        var offset_two;
           $(".section").each(function() {
          
            var color;
            var offset_two=$(this).offset().top;

              if (w_top>=(offset_two-40)) {
              
                 color=$(this).attr("alt");
                    $("header").css("border-color",color);
            $("header").find("a").css("color",color);
            $(".menu-opener-inner").removeClass("active");
            if (color=="#fff")
            {
               $(".menu-opener-inner").removeClass("background_color_black").addClass("background_color_white");
               $(".menu-opener-inner").css("background",color);
            }
            if (color=="#000")
            {
               $(".menu-opener-inner").removeClass("background_color_white").addClass("background_color_black");
                $(".menu-opener-inner").css("background",color);
            }
             
                     }
            
          
           });


        
    });



});
$(".popup").magnificPopup();
$(".menu-opener-inner").click(function() {
 $(this).toggleClass("active");
  $(this).removeAttr("style");
 $(".navigation").fadeToggle();
});

$(".top_slider_inside").owlCarousel({     
       loop:true, 
       smartSpeed:1000, //Время движения слайда
       autoplayTimeout:6000, //Время смены слайда
       responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
        0:{
                        items:1
                    },
                    550:{
                        items:1
                    },
                    768:{
                        items:1
                    },
                    993:{
                        items:1
                    },
                    1200:{
                        items:1
                    }
                    
                    
                    
                },
       itemsMobile: true,
       pagination: true
            });

$(document).ready(function() {
  topMenu = $(".navigation"),
 menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 1000);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function() {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .removeClass("active_menu")
      .filter("[href='#" + id + "']").addClass("active_menu");
  }
  });
});

