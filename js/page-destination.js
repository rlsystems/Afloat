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
    //infinite: false

  });