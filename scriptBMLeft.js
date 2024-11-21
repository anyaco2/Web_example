$('.menu-btn').on('click', function(e){
    e.preventDefault();
    $('.menu').toggleClass('menu_act');
    $('.content').toggleClass('content-act');
})