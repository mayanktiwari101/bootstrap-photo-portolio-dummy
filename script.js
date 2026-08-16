$(document).ready(function () {

    $('.navbar-button').click(function () {
        $('.navbar-button').toggleClass("change");
    });

    $('.gallery-list-item').click(function () {
        let value = $(this).attr('data-filter');
        if (value === 'all') {
            $('.filter').show(300);
        }
        else {
            $('.filter').not('.' + value).hide(300);
            $('.filter').filter('.' + value).show(300);
        }
    });

    $('.gallery-list-item').click(function () {
        $(this).addClass('active-item').siblings().removeClass('active-item');
    });

    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 650) {
            $('.camera-img').addClass('fromLeft');
            $('.mission-text').addClass('fromRight');
        } else {
            $('.camera-img').removeClass('fromLeft');
            $('.mission-text').removeClass('fromRight');
        }
    });

    $(window).scroll(function() {
        let scrollPosition = $(window).scrollTop();
        console.log('scrollPosition: '+scrollPosition);
        $('.menu-item').each(function() {
            let section = $(this).attr("href");
            console.log('section: '+section);
            let target = $(section).offset();
            if(!target){
                console.log('target is null/underfined: ', target);
                return;
            }
            console.log('target:', target);
            let sectionTop = target.top;
            console.log('sectionTop: '+sectionTop);
            let sectionHeight = $(section).outerHeight();
            console.log('sectionHeight: '+sectionHeight);
            if(
                scrollPosition >= sectionTop - 100 &&
                scrollPosition < sectionTop + sectionHeight - 100
            ) {
                $('menu-item').removeClass('nav-active');
                $(this).addClass('nav-active');
            }
        });
    });
});