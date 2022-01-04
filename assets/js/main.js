$( function () {

  // табы

  $('.jsTabBtn').click(function () {
    
    const tabBtn = $(this).attr('data-tab');
    const tabContent = $('.jsTabContent[data-tab="'+ tabBtn +'"]')
    
    $('.jsTabBtn').removeClass('active');
    $(this).addClass('active');

    $('.jsTabContent').removeClass('active');
    tabContent.addClass('active');
  })

  // Адаптив блока services

  $('.openTabBtn ').click(function () {
    $('.services__btns').addClass('respons');
  })
   
  $('.services__btn').click(function () {
    $('.services__btns').removeClass('respons');
  })

  // слайдеры

  $('.slider').slick({
    prevArrow: '<button class="slider__btn-prev"><img src="assets/img/icon/bullit-down.png" alt="arrow"></button>',
    nextArrow:'<button class="slider__btn-next"><img src="assets/img/icon/bullit-up.png" alt="arrow"></button>' ,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
  
  $('.review').slick({
    prevArrow: '<button class="slider__btn-prev"><img src="assets/img/icon/bullit-down.png" alt="arrow"></button>',
    nextArrow:'<button class="slider__btn-next"><img src="assets/img/icon/bullit-up.png" alt="arrow"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      },
    ]
  });

  $('.header__slider').slick({
    slidesToShow: 1,
    vertical: true,
    verticalSwiping: true,
    delay: 60,
    autoplay: true,
    infinite: true,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          vertical: false,
          verticalSwiping: false,
          arrows: false,
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          vertical: false,
          verticalSwiping: false,
          arrows: false,
          autoplay: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
  

  // счетчик у слайдера. Нумерация

  $(".header__slider").on('afterChange', function(event, slick, currentSlide){
    $(".slider__count").text(currentSlide + 1);
 });


  // Кнопка наверх и липкой меню

  $(window).scroll(function () {
    const scrolling = $(this).scrollTop();

    if ( scrolling > 950 ) {
      $('.clickUp').fadeIn(400);
      $('.jsMenu').addClass('active');
    } else if ( scrolling < 600 ) {
      $('.clickUp').fadeOut(400);
      $('.jsMenu').removeClass('active');
    }
  });

  $('.clickUp a').on("click", function () {
    $('body,html').animate({scrollTop: 0}, 800);
    return false;
  });
  
  // якори для ссылок прокрутка

  $("a.scrollTo").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
  });


  // Галлерея

  // $('.gallery').lightGallery({});

  // Burger

  $('.burger').click(function () {
    $('.burger span').toggleClass('active');
    $('.menu').toggleClass('active');
    $('body').toggleClass('oveflow');
  })

  $('.menu__item').click(function () {
    $('.burger span').removeClass('active');
    $('.menu').removeClass('active');
    $('body').removeClass('oveflow');
  })












































  AOS.init();
}) // JQuery
