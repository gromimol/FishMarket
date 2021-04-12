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

    // аккордеон категории на мобильном
    $('.category-item__title').on('click', function() {
        $(this).toggleClass('active').next('.category-item__content').toggleClass('active')
    }) 


    // Product-cart slider
    $('.product-review-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.product-review-nav'
    });
    $('.product-review-nav').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.product-review-slider',
      arrows:true,
      focusOnSelect: true,
      vertical:true,
      responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 6,
                    vertical:false,
                    arrows:false
                }
            }
        ]
    });


    // tabs
    $("ul.tabs li").click(function () {
        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab_accordion").removeClass("d_active");
        $(".tab_accordion[rel^='" + activeTab + "']").addClass("d_active");
    });


    // Селектор +/-
    $(document).ready(function() {
        $('.min').click(function () {
          var $input = $(this).parent().find('input');
          var count = parseInt($input.val()) - 1;
          count = count < 1 ? 1 : count;
          $input.val(count);
          $input.change();
          return false;
        });
        $('.max').click(function () {
          var $input = $(this).parent().find('input');
          $input.val(parseInt($input.val()) + 1);
          $input.change();
          return false;
        });
    });


    // remove block
    $(function(){
        $ ('.corf-item').each(function(){
          var closeTrigger = $(this).find('.close-block').length;
          $('.del-block').on('click', function(){
            $(this).closest('.corf-item').fadeOut(100);
          });
        });
    });


    // Like
    $('.like-btn').click(function (e) {  
        e.preventDefault();
        $(this).toggleClass('active');
        $('.like-btn').not(this).removeClass('active');
    });


    // Autorize window
    $('.autorize-link').on('click', function (e) {
        e.preventDefault();
        $('.autorize-window').addClass('active');
    });
    // -- Закрываем при клике вне элемента
    $(document).mouseup(function (e){  
        var div = $(".autorize-window");  //класс элемента вне которого клик
        if (!div.is(e.target) && div.has(e.target).length === 0) {  
          div.removeClass('active');  
        }
    });

     // Callback window
    $('.callback-link').on('click', function (e) {
        e.preventDefault();
        $('.callback-window').addClass('active');
    });
    // -- Закрываем при клике вне элемента
    $(document).mouseup(function (e){  
        var div = $(".callback-window");  //класс элемента вне которого клик
        if (!div.is(e.target) && div.has(e.target).length === 0) {  
          div.removeClass('active');  
        }
    });

    // Popup
      $('.js--popup').on('click', function (e) {
        e.preventDefault();
        let btn = $(this).data('modal');
        $('#' + btn).addClass('active');
        $('.popup-overlay').show();
        $('body').toggleClass('noscroll');
      })

      $('.close-popup, .popup-overlay').on('click', function (e) {
        e.preventDefault();
        $('.popup-overlay').hide();
        $('.popup-window').removeClass('active');
        $('body').removeClass('noscroll');
      })
    
})