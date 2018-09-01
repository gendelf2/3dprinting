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
                     }
            
          
           });


        
    });



});
$(".popup").magnificPopup();
$(".menu-opener-inner").click(function() {
 $(this).toggleClass("active");
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