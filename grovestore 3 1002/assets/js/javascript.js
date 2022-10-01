
//nav
$(function(){   
    $('.gnb__left>ul>li').mouseenter(function(){
        $(this).find('.submenu>li').stop().slideDown()
    });
    $('.gnb__left>ul>li').mouseleave(function(){
        $('.submenu>li').stop().slideUp();
    })
});

//toggleBtn
const toggleBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu__list');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('on');
    menu.classList.toggle('active');
});


//배너 이미지 슬라이드
var swiper01 = new Swiper('.swiper-container',{
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    autoplay: {
        delay: 5000,
    },
});

//tab
var tabBtn=$('.tab__list>li');
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

var swiper02 = new Swiper('.swiper-container2',{
    slidesPerView: 5,
    spaceBetween: 10,
    mousewheel: {
        invert: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    }, 
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 24
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 24
        },
        960: {
            slidesPerView: 4,
            spaceBetween: 24
        }
    }
});

//collection 
var swiper03 = new Swiper('.swiper-container3',{
    slidesPerView: 3,
    spaceBetween: 10,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
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
        480: {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        960: {
            slidesPerView: 2,
            spaceBetween: 10
        }
    }
});
