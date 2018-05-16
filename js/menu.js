$(function(){
    $('.serv_list li').click(
        function(){
            if ($(this).attr("class") == 'active'){
                $('.active').removeClass("active");
                $('.btn_request').css( "margin", "25px 0 57px 0");
            } else {
                $('.active').removeClass("active");
                $(this).addClass("active");
                $('.btn_request').css( "margin", "115px 0 57px 0");
            }
        }
    );
});