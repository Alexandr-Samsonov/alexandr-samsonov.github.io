(function() {

  var mainNav = document.querySelector('.main-nav');
  var offers = document.querySelector('.offers')

  mainNav.classList.remove('main-nav--scroll-and-nojs');

  window.onscroll = function() {
    if (window.pageYOffset > 0 || document.documentElement.scrollTop > 0) {
      mainNav.classList.add('main-nav--scroll-and-nojs');
    } else {
      if (mainNav.classList.contains('main-nav--scroll-and-nojs')) {
        mainNav.classList.remove('main-nav--scroll-and-nojs');
      }
    }
  }

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this,
          args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  var changeResize = debounce(function() {
    if (document.body.clientHeight > 3200) {
      console.log(document.body.clientHeight);
      offers.classList.add('offers--bg');
    } else {
      offers.classList.remove('offers--bg');
      console.log(document.body.clientHeight);
    }
  }, 150);

  window.addEventListener('resize', changeResize);

})();