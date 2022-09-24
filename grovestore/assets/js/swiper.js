
//배너 이미지 슬라이드
var swiper = new Swiper('.swiper-container',{
  pagination: {
      el: '.swiper-pagination-bar',
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  autoplay: {
      delay: 5000,
  },
  });



//tab
var tabBtn=$('.best__tab>li');
var tabCont=$('.best__content>div');

tabCont.hide().eq(0).show();

tabBtn.click(function(e){
    e.preventDefault();
    var target=$(this);
    var index=target.index();
    tabBtn.removeClass('active');
    target.addClass('active');
    tabCont.css('display','none');
    tabCont.eq(index).css('display','block');
});




//collection 
var swiper = new Swiper('.swiper-container2',{
    slidesPerView: 2,
    spaceBetween: 10,
    mousewheel: {
        invert: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    autoplay: {
        delay: 4000,
    },
    breakpoints: {
        600: {
            slidesPerView: 1.4,
            spaceBetween: 24
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 24
        },
        960: {
            slidesPerView: 2,
            spaceBetween: 24
        }
    }
    });
