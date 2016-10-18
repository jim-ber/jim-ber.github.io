---
layout: null
---
function doResizing(){
  if($(window).matchMedia( "all and (max-width: 960px)" )) {
      $('.panel-main').css('width', '100%')
  } else {
      $('.panel-main').css('width', '50%')
  }
}

$(document).ready(function () {

  $('a.blog-button').click(function (e) {
    function buttonAction(){
      if (currentWidth < 960) {
        $('.panel-cover').addClass('panel-cover--collapsed')
        $('.content-wrapper').addClass('animated slideInRight')
      } else {
        $('.panel-cover').addClass('panel-cover--collapsed')
        $('.panel-cover').css('max-width', currentWidth)
        $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
        $('.content-wrapper').addClass('animated slideInRight')
      }
    }

    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    currentWidth = $('.panel-cover').width()
    $('.panel-main').animate({'width': '100%'}, 200, swing = 'swing', function () {})
    setTimeout(buttonAction, 200);
  })

  if (window.location.hash && window.location.hash == '#about') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  if (window.location.pathname !== '{{ site.baseurl }}' && window.location.pathname !== '{{ site.baseurl }}index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  if ($('.panel-cover').hasClass('panel-cover--collapsed')){
    $('.panel-main').css('width', '100%')
  } else{
    doResizing()
  }
})
