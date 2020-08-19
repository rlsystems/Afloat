$('#destination-slider__bg').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    draggable: false,
    fade: true,
    arrows: false
  });

  //destination-slider-content
  $('#destination-slider__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    asNavFor: '#destination-slider__bg',
    centerMode: false,
    arrows: false,
    draggable: false,
    fade: true
  });

  //destination-slider__nav
  $('#destination-slider__nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect:true,
    arrows: true,
    asNavFor: '#destination-slider__content, #destination-slider__bg',

  });


  $('#destination-tours__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    prevArrow: '<button class="btn-circle btn-dark btn-circle--left destination-tours__btn--left"><svg class="btn-circle--arrow-main"><use xlink:href="img/sprite.svg#icon-arrow-left"></use></svg><svg class="btn-circle--arrow-animate"><use xlink:href="img/sprite.svg#icon-arrow-left"></use></svg></button>',
    nextArrow: '<button class="btn-circle btn-dark btn-circle--right destination-tours__btn--right"><svg class="btn-circle--arrow-main"><use xlink:href="img/sprite.svg#icon-arrow-right"></use></svg><svg class="btn-circle--arrow-animate"><use xlink:href="img/sprite.svg#icon-arrow-right"></use></svg></button>',
  
  });