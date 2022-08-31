
  //스크롤플러그인
  var s = skrollr.init({
      smoothScrolling: true
  });

  function scroll(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      document.querySelector(".scroll").innerHTML = scrollTop;

      requestAnimationFrame(scroll);
  }
  scroll();


  function scrollIntoView(selector) {
     const scrollTo = document.querySelector(selector);
     scrollTo.scrollIntoView({ behavior: 'smooth' });
  }
  //header 영역 메뉴
  const headerMenu = document.querySelector('.header__nav');
  headerMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
  });


 //toggleButton
  const toggleBtn = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__nav');

  toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
  });




 //header eyes move
  var balls = document.getElementsByClassName('ball');
  document.onmousemove = function(){
 var x = event.clientX * 100 / window.innerWidth + "%";
 var y = event.clientY * 100 / window.innerHeight + '%';
 //event.clientX = get the horizontal coordinate of the mouse
 //event.clientY = get the vertical coordinate of the mouse
 //window.innerWidth => get the browser width
 //window.innerheight => get the browser height
 
 for(var i=0; i<2;i++){
     balls[i].style.left = x;
     balls[i].style.top= y;
     balls[i].style.transform = "translate(-"+x+",-"+y+")";
     }
 }
  
 //slide배너
  var swiper = new Swiper('.swiper-container',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });


