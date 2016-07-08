// var gsap = require('gsap');

console.log('test 6');

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    var headerHeight = $('.c-nav-list').outerHeight();

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - headerHeight
        }, 1000);
        return false;
      }
    }
  });
});
