  //탭 메뉴
  var $tab_list = $('.tab_menu');
  $tab_list.find('ul ul').hide();
  $tab_list.find('li.active>ul').show();

  function tabMenu(e) {
  e.preventDefault();
  var $this = $(this);
  $this
  .next('ul')
  .show()
  .parent('li')
  .addClass('active')
  .siblings('li')
  .removeClass('active')
  .find('>ul')
  .hide();}
  
  $tab_list.find('>ul>li>a').click(tabMenu).focus(tabMenu);

  //라이트 박스
  $(".lightbox").lightGallery({
    thumbnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
  }); 

  //갤러리
  $('.gallery_img').slick({
  dots: true,
  fade: true,
  pauseOnHover: true,
  arrows: false, //옆으로 이동하는 화살표 표시 여부
  infinite: true, //무한반복
  autoplay: true, //자동 스크롤 여부
  autoplaySpeed: 3000, // 자동 스크롤시 다음으로 넘어가는데 걸리는 시간
  speed: 300,
  slidesToShow: 1
  });

  $('.pause').on('click', function(){
  $('.gallery_img').slick('slickPause');
  });

  $('.play').on('click', function(){
  $('.gallery_img').slick('slickPlay');
  });

  $('.prev').on('click', function(){
  $('.gallery_img').slick('slickPrev');
  });

  $('.next').on('click', function(){
  $('.gallery_img').slick('slickNext');
  });


  //sns 공유하기
  $(".facebook").click(function(e){
    e.preventDefault();
    window.open('https://www.facebook.com/sharer/sharer.php?u=' +encodeURIComponent(document.URL)+'&t='+encodeURIComponent(document.title), 'facebooksharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600'); 
  });
  $(".twitter").click(function(e){
    e.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20' +encodeURIComponent(document.URL)+'%20-%20'+encodeURIComponent(document.title), 'twittersharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600');
  });
