$(function(){
  $(window).scroll(function() {
     if($(window).scrollTop() >= 100) {
       $('.nav-bar').addClass('scrolled');
     }
    else {
      $('.nav-bar').removeClass('scrolled');
    }
  });
});

