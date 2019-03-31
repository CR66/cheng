$(function(){

    // 动态计算新闻列表文字样式
    auto_resize();
    $(window).resize(function() {
        auto_resize();
    });
    $('.am-list-thumb img').load(function(){
        auto_resize();
    });

    $('.am-list > li:last-child').css('border','none');
    function auto_resize(){
        $('.pet_list_one_nr').height($('.pet_list_one_img').height());

    }
        $('.pet_nav_gengduo').on('click',function(){
            $('.pet_more_list').addClass('pet_more_list_show');
       });
        $('.pet_more_close').on('click',function(){
            $('.pet_more_list').removeClass('pet_more_list_show');
        });
});