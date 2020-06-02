/* NAVIGATION
---------------------------------------------------*/

$('.nav-btn').click( () => {
    $('.nav-wrap').slideToggle();
});

$('.nav-close-btn').click( () => {
    $('.nav-wrap').slideToggle();
});

$('.home-btn').click( () => {

    ($('.home-btn svg').hasClass('menu-btn-toggle'))
    ? $('.home-btn svg').removeClass('menu-btn-toggle')
    : $('.home-btn svg').addClass('menu-btn-toggle')
    

    $('.home-submenu').slideToggle();
});

$('.features-btn').click( () => {

    ($('.features-btn svg').hasClass('menu-btn-toggle'))
    ? $('.features-btn svg').removeClass('menu-btn-toggle')
    : $('.features-btn svg').addClass('menu-btn-toggle')

    $('.features-submenu').slideToggle();
});

$('.about-btn').click( () => {

    ($('.about-btn svg').hasClass('menu-btn-toggle'))
    ? $('.about-btn svg').removeClass('menu-btn-toggle')
    : $('.about-btn svg').addClass('menu-btn-toggle')

    $('.about-submenu').slideToggle();
});

$('.news-btn').click( () => {

    ($('.news-btn svg').hasClass('menu-btn-toggle'))
    ? $('.news-btn svg').removeClass('menu-btn-toggle')
    : $('.news-btn svg').addClass('menu-btn-toggle')

    $('.news-submenu').slideToggle();
});


/* SLIDER
---------------------------------------------------*/