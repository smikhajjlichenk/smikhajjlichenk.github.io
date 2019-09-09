$(function(){
  $('.slider__wrapper').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    responsive: [
    {
      breakpoint: 481,
      settings: {
        arrows: false,
        dots: true,
      }
    }
    ]   
  });
  $('.slider__wrapper-news').slick({
    prevArrow: '<button type="button" class="slick__btn-news slick-news-prev"></button>',
    nextArrow: '<button type="button" class="slick__btn-news slick-news-next"></button>',
    responsive: [
    {
      breakpoint: 481,
      settings: {
        arrows: false,
        dots: true,
      }
    }
    ]   
  });
  $('.menu__btn').click(function(){
    $('.menu ul').slideToggle();
  });
  $(".menu, .up").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
      });
});

