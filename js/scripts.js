$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause: true,
      },
      600:{
        items:2,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause: true,
      },
      1000:{
        items:3,
        nav:false,
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause: true,
      },
      1200:{
        items:4,
        nav:false,
        loop:true
      }
    }
  })
  $('.owl-carousel-1').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
      0:{
        items:4,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause: true,
      },
      600:{
        items:6,
        nav:false,
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause: true,
      },
      1000:{
        items:12,
        nav:false,
        loop:true
      },
      1200:{
        items:12,
        nav:false,
        loop:false
      }
    }
  })
});

