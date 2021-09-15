$(document).ready(function(){
    /*slide*/
    var i = 0;

    function mainSlide(){
        i++;
        if(i > $(".slider_show > li:last").index()){
            i = 0;
        }

        $(".slider_show > li").eq(i).stop().fadeIn();
        $(".slider_show > li").eq(i-1).stop().fadeOut(800);

    }

    setInterval(mainSlide, 3000)

     /*menu_Toggle*/
     $(".ham_toggle").click(function(){
         $("nav").slideToggle();
     });			
    $(window).resize(function(){
         if(window.innerWidth >=599){
             $("nav").show();
         }
     });
    $(window).resize(function(){
         if(window.innerWidth <=1000){
             $("nav").hide();
         }
     });


    $(".main_nav > li").mouseover(function(){
         $(this).children(".sub_nav").stop().slideDown();
     }).mouseout(function(){
         $(this).children(".sub_nav").stop().slideUp();
     });


    /*listMenu*/
    function listMenu(){
        var overListStyle = {"border-right":"3px solid black","background-color":"#eee","cursor":"pointer"};
        var outListStyle = {"border-right":"3px solid #eee","background-color":"#fff"};

        $("#today_listbox > li:first-child").css(overListStyle);

        $("#today_listbox > li").mouseover(function(){
            $(this).css(overListStyle);
            $("#today_listbox > li").not(this).css(outListStyle);

            var listMenuIndex = ($(this).index())+1;
            $(".today_detailbox").hide();
            $(".today_detailbox:nth-of-type" + "(" + listMenuIndex +")").show()
            
        });

    };

    /*slidemenu_thumbnail*/
    function thumbList(){
        var boxWidth = $(".slidemenu > li").css('width');

        $(".next").click(function(){
            $(".slidemenu").stop().animate({"margin-left":"-"+boxWidth},function(){
                $(".slidemenu > li:first").appendTo(".slidemenu");
                $(".slidemenu").css({marginLeft:0})
            });
        });

        $(".prev").click(function(){
            $(".slidemenu > li:last").prependTo(".slidemenu");
            $(".slidemenu").css({marginLeft:"-"+boxWidth});
            $(".slidemenu").stop().animate({"margin-left":0});
            
        });

        $(".slidemenu").stop().animate({"margin-left":"-"+boxWidth},function(){
            $(".slidemenu > li:first").appendTo(".slidemenu");
            $(".slidemenu").css({marginLeft:0})
        });

    };

    


    function reviewList(){
        var reviewboxWidth = $(".bx2_review > li").css('width');

        $(".bx2_review").stop().animate({"margin-left":"-"+reviewboxWidth},function(){
            $(".bx2_review > li:first").appendTo(".bx2_review");
            $(".bx2_review").css({marginLeft:0});
        });

    };


   
 

   

    listMenu();
    setInterval(thumbList,3000);
    setInterval(reviewList,3500);

});