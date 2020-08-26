$('#destination-hero__bg').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    draggable: false,
    fade: true,
    arrows: false
  });

  //destination-hero-content
  $('#destination-hero__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    asNavFor: '#destination-hero__bg',
    centerMode: false,
    arrows: false,
    draggable: false,
    fade: true
  });

  //destination-hero__nav
  $('#destination-hero__nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect:true,
    arrows: true,
    asNavFor: '#destination-hero__content, #destination-hero__bg',

  });


  $('#destination-tours__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    prevArrow: '<button class="btn-circle btn-dark btn-circle--left destination-tours__btn--left"><svg class="btn-circle--arrow-main"><use xlink:href="img/sprite.svg#icon-arrow-left"></use></svg><svg class="btn-circle--arrow-animate"><use xlink:href="img/sprite.svg#icon-arrow-left"></use></svg></button>',
    nextArrow: '<button class="btn-circle btn-dark btn-circle--right destination-tours__btn--right"><svg class="btn-circle--arrow-main"><use xlink:href="img/sprite.svg#icon-arrow-right"></use></svg><svg class="btn-circle--arrow-animate"><use xlink:href="img/sprite.svg#icon-arrow-right"></use></svg></button>',
  
  });


  $('#destination-intro__tours__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    prevArrow: '<button class="btn-circle btn-white btn-circle--left destination-intro__tours__btn--left"><svg class="btn-circle--arrow-main"><use xlink:href="img/sprite.svg#icon-arrow-left"></use></svg><svg class="btn-circle--arrow-animate"><use xlink:href="img/sprite.svg#icon-arrow-left"></use></svg></button>',
    nextArrow: '<button class="btn-circle btn-white btn-circle--right destination-intro__tours__btn--right"><svg class="btn-circle--arrow-main"><use xlink:href="img/sprite.svg#icon-arrow-right"></use></svg><svg class="btn-circle--arrow-animate"><use xlink:href="img/sprite.svg#icon-arrow-right"></use></svg></button>',
  
  });




  $('.destination-play__button').on('click', function () {
    $('#destination-video')[0].play();
  })
  // $('#myModal').on('hidden.bs.modal', function () {
  //   $('#video1')[0].pause();
  // })

  $('.video-popup__close').on('click', function () {
    $('#destination-video')[0].pause();
  })