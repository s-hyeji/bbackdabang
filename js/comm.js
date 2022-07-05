$(function (){
    //메인메뉴 호버
    $('.main>li').hover(
        function(){
        $(this).find(".sub").show();
        $(".bg").stop().slideDown(300);
        if ($(this).hasClass("nosub")){
            $(".bg").hide();
        }
    },
    function(){
        $(this).find(".sub").hide();
        $(".bg").stop().slideUp(300);
    }
    );

    //푸터 패밀리 사이트
    $('.famliyste > span').click(function(){
        $('.famliyste .fmenu').slideToggle(300);
    });
    //.toTop a
    $('.toTop a').click(function(){
        $('html,body').animate({scrollTop : 0});
        return false
    })
});
