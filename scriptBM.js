$('.menu-btn').on('click', function(e) {
    e.preventDefault;
    $(this).toggleClass('menu-btn-active2');
    $('.menu-nav').toggleClass('menu-nav-active');
  });
