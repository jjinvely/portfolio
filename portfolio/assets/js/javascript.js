/*about 3d card*/
const frame = document.getElementById('frame')
const card = document.getElementById('card')
const light = document.getElementById('light')

let { x, y, width, height } = frame.getBoundingClientRect()

function mouseMove(e) {
  const left = e.clientX - x
  const top = e.clientY - y
  const centerX = left - width / 2
  const centerY = top - height / 2
  const d = Math.sqrt(centerX**2 + centerY**2)

  card.style.boxShadow = `
    ${-centerX / 5}px ${-centerY / 10}px 10px rgba(0, 0, 0, 0.2)
  `

  card.style.transform = `
    rotate3d(${-centerY / 100}, ${centerX / 100}, 0, ${d / 8}deg)
  `

  light.style.backgroundImage = `
    radial-gradient(circle at ${left}px ${top}px, #00000040, #ffffff00, #ffffff99)
    `
}

frame.addEventListener('mouseenter', () => {
  frame.addEventListener('mousemove', mouseMove)
})

frame.addEventListener('mouseleave', () => {
  frame.removeEventListener('mousemove', mouseMove)
  card.style.boxShadow = ''
  card.style.transform = ''
  light.style.backgroundImage = ''
})

window.addEventListener('resize', () => {
  rect = frame.getBoundingClientRect()
  x = rect.x
  y = rect.y
  width = rect.width
  height = rect.height
})

/*text marquee effect*/
const pTag1 = document.querySelector('.first-parallel')
const textArr1 = 'I am a person who grows more today than yesterday'.split(' ')
let count1 = 0

initTexts(pTag1, textArr1)

function initTexts(element, textArray) {
textArray.push(...textArray)
for (let i = 0; i < textArray.length; i++) {
element.innerText += `${textArray[i]}\u00A0`
}
}

function marqueeText(count, element, direction) {
if (count > element.scrollWidth / 2) {
element.style.transform = `translateX(0)`
count = 0
}
element.style.transform = `translateX(${count*direction}px)`
return count
}
/*animate재귀함수*/
function animate() {
count1++  
count1 = marqueeText(count1, pTag1, -1)
window.requestAnimationFrame(animate) //무한반복
}

/*scroll함수*/
function scrollHandler() {
count1 += 15
} 

window.addEventListener('scroll', scrollHandler)
animate()

/*horizontal*/
const spaceHolder = document.querySelector('.space-holder');
const horizontal = document.querySelector('.horizontal');
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh + 200; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
}

window.addEventListener('scroll', () => {
  const siteSticky = document.querySelector('.site__sticky');
  horizontal.style.transform = `translateX(-${siteSticky.offsetTop}px)`;
});

window.addEventListener('resize', () => {
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});



/*card flip scroll*/
class CardFlipOnScroll {
  constructor(wrapper, sticky) {
    this.wrapper = wrapper
    this.sticky = sticky
    this.cards = sticky.querySelectorAll('.card')
    this.length = this.cards.length

    this.start = 0
    this.end = 0
    this.step = 0
  }

  init() {
    this.start = this.wrapper.offsetTop - 100
    this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight * 1.2
    this.step = (this.end - this.start) / (this.length * 2)
  }

  animate() {
    this.cards.forEach((card, i) => {
      const s = this.start + this.step * i
      const e = s + this.step * (this.length + 1)

      if (scrollY <= s) {
        card.style.transform = `
              perspective(100vw)
              translateX(100vw) 
              rotateY(180deg)
            `
      } else if (scrollY > s && scrollY <= e - this.step) {
        card.style.transform = `
              perspective(100vw)
              translateX(${100 + (scrollY - s) / (e - s) * -100}vw)
              rotateY(180deg)
            `
      } else if (scrollY > e - this.step && scrollY <= e) {
        card.style.transform = `
              perspective(100vw)
              translateX(${100 + (scrollY - s) / (e - s) * -100}vw)
              rotateY(${180 + -(scrollY - (e - this.step)) / this.step * 180}deg)
            `
      } else if (scrollY > e) {
        card.style.transform = `
              perspective(100vw)
              translateX(0vw) 
              rotateY(0deg)
            `
      }
    })
  }
}

const mainContent1 = document.querySelector('.script__content')
const sticky = document.querySelector('.script__sticky')
const cardFlipOnScroll = new CardFlipOnScroll(mainContent1, sticky)
cardFlipOnScroll.init()

window.addEventListener('scroll', () => {
  cardFlipOnScroll.animate()
})

window.addEventListener('resize', () => {
  cardFlipOnScroll.init()
})


new Rellax('.rellax');


//contact

function map(value, in_min, in_max, out_min, out_max) {
  return Math.floor(
    ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

var $w = $(window);
var $h = $('.house');
var $p = $('.panel');
var ph = $p.height(); // Panel height

$h.css('height', $w.height() * 2);

$w.scroll(function () {
  $p.each(function () {
    var tow = $w.scrollTop(); // Top Of Window
    $(this).css(
      'transform',
      'translatey(' + map(tow, 0, $w.height(), 0, ph * -2) + 'px)'
    );
  });
});