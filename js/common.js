$(document).ready(function() {
    // Стрелки для пунктов меню. Чтобы было понятно, что есть подменю
    $('.aside__menu li').each(function() {
        if($(this).find('.submenu')) {
            $('.submenu').parent().addClass('submenu-container');
        }
    })

    $('.submenu-container > a').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).next('.submenu').toggleClass('active');
    })
    $('.submenu__title').on('click', function() {
        $(this).parent('ul').removeClass('active')
    })
    // slider
    $('.main-slider').slick({
        prevArrow: '<span class="prev-arrow"></span>',
        nextArrow: '<span class="next-arrow"></span>',
    })

    $('.slider--three-items').slick({
        slidesToShow: 3,
        prevArrow: '<span class="prev-arrow"></span>',
        nextArrow: '<span class="next-arrow"></span>',
        responsive: [
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    arrows: false
                }
            }
        ]
    })

    $('.slider--four-items').slick({
        slidesToShow: 4,
        prevArrow: '<span class="prev-arrow"></span>',
        nextArrow: '<span class="next-arrow"></span>',
        responsive: [
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                    arrows: false
                }
            }
        ]
    })

    // Добавление класса для цены в продукте
    $('.product-price__item').each(function() {
        if($(this).children().length > 1) {
            $(this).find('span:first-child').addClass('line-through');
            $(this).find('span:last-child').addClass('red');
        }
    })

    // mobile menu
    $('.mobile-catalog-btn, .menu-btn').on('click', function() {
        $('body').addClass('open-menu')
    })
    $('#overlay, .close-aside').on('click', function() {
        $('body').removeClass('open-menu');
        $('.submenu').removeClass('active');
    })

    // accordeon in footer on mobile
    $('.footer__item .h4').on('click', function() {
        $(this).toggleClass('active');
        $(this).parent().find('.footer__item__line').toggleClass('active');
    })

    // fake select
    $('.select').on('click','.placeholder',function(){
        var parent = $(this).closest('.select');
        if ( ! parent.hasClass('is-open')){
          parent.addClass('is-open');
          $('.select.is-open').not(parent).removeClass('is-open');
        }else{
          parent.removeClass('is-open');
        }
      }).on('click','ul>li',function(){
        var parent = $(this).closest('.select');
        parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
        parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
      });
})