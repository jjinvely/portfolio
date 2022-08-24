$(function () {
  var result = document.querySelector('.result');

  result.addEventListener('click', function () {
    result.classList.add('active');
    result.classList.remove('active');
  });
});
