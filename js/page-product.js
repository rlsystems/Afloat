

//Page Nav -- Sticky (CAN COMBINE as UTIL)
var navbar = document.querySelector('#template-nav');
var subnavTitle = document.querySelector('#template-nav-title');

var offsetY = navbar.offsetTop;

window.onscroll = function () { myFunction() };
function myFunction() {

  var isElementInView = Utils.isElementInView($('#template-nav'), false);
    
  if (isElementInView) {
    $('#page-nav').remove();
  } else { //if template nav is out of view


    //and if burger menu isnt active
    if ($(".burger-menu").hasClass('burger-menu--active') != true) {

      var elementExists = document.getElementById("page-nav"); //and not already there
      if (elementExists == null) {
        var newNav = $(navbar).clone(true); //clone the nav and append it to header (pass true to clone events also)
        newNav.attr('id', 'page-nav');

        $(newNav).addClass('product-nav__sticky-wrapper--active');
        $('#header').append(newNav);
      }

      var elementExists = document.getElementById("page-nav-title"); //clone / append title
      if (elementExists == null) {
        var newTitle = $(subnavTitle).clone(true);
        newTitle.attr('id', 'page-nav-title')
        $(newTitle).addClass('product-nav__caption__title--sticky'); //create common style
        $('#page-nav').append(newTitle);
      }
    }
  }
}


//Product Navigation
$('.product-nav__tab-list li, #goto-cabins, #goto-itineraries, #goto-prices').click(function () {
  var tab_id = $(this).attr('data-tab');
  $('.product-nav__tab-list__item').removeClass('current');
  $('.product-content__page.tab-content').removeClass('current');

  $("." + tab_id).addClass('current'); //by class to get both original / clone (sticky) -- class is same name as data-tab id
  $("#" + tab_id).addClass('current'); //by id for tab content

  //tab jump marks and offsets
  var offset = 0;

  //responsive @ 1000
  if ($(window).width() > 1000) {
    offset = 120;
    if (tab_id == "tab-itineraries") {
      offset = 180
    }
  }
  else {
    offset = 90;
    if (tab_id == "tab-itineraries") {
      offset = 140
    }
  }

  //if the sticky nav is visible
  var elementExists = document.getElementById("page-nav");
  if (elementExists != null) {

    $([document.documentElement, document.body]).animate({
      scrollTop: $("#sentinal-" + tab_id).offset().top - offset
    }, 300);
  }
})
//End Product Nav



var years = [2020, 2021, 2022, 2023];
setYearDetails(2020); //set year selections onload

//Areas Slider (must select class for chained sliders)
$('.areas-slider__slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.areas-slider__slider-nav',
  prevArrow: '<button class="btn-circle btn-dark btn-circle--left areas-slider__btn--left"><svg class="btn-circle--arrow-main"><use xlink:href="img/sprite.svg#icon-arrow-left"></use></svg><svg class="btn-circle--arrow-animate"><use xlink:href="img/sprite.svg#icon-arrow-left"></use></svg></button>',
  nextArrow: '<button class="btn-circle btn-dark btn-circle--right areas-slider__btn--right"><svg class="btn-circle--arrow-main"><use xlink:href="img/sprite.svg#icon-arrow-right"></use></svg><svg class="btn-circle--arrow-animate"><use xlink:href="img/sprite.svg#icon-arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 600,
      settings: {
        arrows: false,

      }
    }
  ]

});
$('.areas-slider__slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.areas-slider__slider-for',
  dots: false,
  centerMode: false,
  focusOnSelect: true,

});

//Reviews Slider
$('#reviews-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: true,
  prevArrow: '<button class="btn-circle btn-circle--small btn-dark btn-circle--left reviews-slider__btn--left"><svg class="btn-circle--arrow-main"><use xlink:href="img/sprite.svg#icon-arrow-left"></use></svg><svg class="btn-circle--arrow-animate"><use xlink:href="img/sprite.svg#icon-arrow-left"></use></svg></button>',
  nextArrow: '<button class="btn-circle btn-circle--small btn-dark btn-circle--right reviews-slider__btn--right"><svg class="btn-circle--arrow-main"><use xlink:href="img/sprite.svg#icon-arrow-right"></use></svg><svg class="btn-circle--arrow-animate"><use xlink:href="img/sprite.svg#icon-arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 600,
      settings: {
        arrows: false

      }
    }
  ]
});

//Related Products Slider
$('#related-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: true,
  prevArrow: '<button class="btn-circle btn-dark btn-circle--left related-slider__btn--left"><svg class="btn-circle--arrow-main"><use xlink:href="img/sprite.svg#icon-arrow-left"></use></svg><svg class="btn-circle--arrow-animate"><use xlink:href="img/sprite.svg#icon-arrow-left"></use></svg></button>',
  nextArrow: '<button class="btn-circle btn-dark btn-circle--right related-slider__btn--right"><svg class="btn-circle--arrow-main"><use xlink:href="img/sprite.svg#icon-arrow-right"></use></svg><svg class="btn-circle--arrow-animate"><use xlink:href="img/sprite.svg#icon-arrow-right"></use></svg></button>',
  responsive: [
    {
      breakpoint: 1460,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//Nav Rotate slick
$('#product-nav__slick').on('init', function (event, slick) {
  $(this).find('.slick-slide[data-slick-index="' + 2 + '"]').addClass('product-slick-enlarge');
}).slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 2,
  variableWidth: true,
  focusOnSelect: true,
  arrows: true,
  prevArrow: '<button class="btn-circle btn-circle--small btn-white btn-circle--left product-nav__slick__btn--left"><svg class="btn-circle--arrow-main"><use xlink:href="img/sprite.svg#icon-arrow-left"></use></svg><svg class="btn-circle--arrow-animate"><use xlink:href="img/sprite.svg#icon-arrow-left"></use></svg></button>',
  nextArrow: '<button class="btn-circle btn-circle--small btn-white btn-circle--right product-nav__slick__btn--right"><svg class="btn-circle--arrow-main"><use xlink:href="img/sprite.svg#icon-arrow-right"></use></svg><svg class="btn-circle--arrow-animate"><use xlink:href="img/sprite.svg#icon-arrow-right"></use></svg></button>',
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  $(this).find('.slick-slide[data-slick-index="' + (+nextSlide - 0) + '"]').addClass('product-slick-enlarge');
  $(this).find('.slick-slide[data-slick-index="' + (+currentSlide - 0) + '"]').removeClass('product-slick-enlarge');
});


//radio select change (all itineraries)
var selectBoxYear = document.querySelectorAll(".select-box__input");
selectBoxYear.forEach(function (radio) {
  radio.addEventListener('click', function () {
    var val = this.defaultValue;
    setYearDetails(val);
  });
});

//set year details
function setYearDetails(year) {
  $('[class="select-box__input"]').removeAttr('checked');
  $("input[class=select-box__input][value=" + year + "]").prop('checked', true);

  $('.date-grid').hide();
  $('.date-grid__' + year).show();

  $('.price-grid').hide();
  $('.price-grid__' + year).show();
}





//Tabs Nav Itinerary (3/4/5 day...)
$('.product-intro__nav__list li').click(function () {
  var tab_id = $(this).attr('data-tab');


  $('.product-intro__nav__list__item').removeClass('current');
  $('.product-itineraries__itinerary.tab-content').removeClass('current');

  $(this).addClass('current');
  $("#" + tab_id).addClass('current');
})

//Itinerary Page Arrows
$('.product-itineraries__itinerary__map__btn').click(function () {
  var tab_id = $(this).attr('data-tab');
  console.log(tab_id)
  $('.product-itineraries__itinerary.tab-content').removeClass('current');
  $(".product-itineraries__intro__nav__item").removeClass('current');
  $("#" + tab_id + "-nav").addClass('current');
  $("#" + tab_id).addClass('current');
})


//Inex Tabs (all itineraries)
var inexTabList = document.querySelectorAll(".product-itineraries__itinerary__inclusions__tabs__list li");
inexTabList.forEach(function (tab) {
  tab.addEventListener('click', function () {
    var tab_name = $(this).attr('name');

    $('.product-itineraries__itinerary__inclusions__tabs__item').removeClass('current');
    $('.product-itineraries__itinerary__inclusions__tab-pane.tab-content').removeClass('current');

    var tabs = $('[name="' + tab_name + '"]'); //find all tabs (must be matching tab content class name)
    tabs.addClass('current');
    $("." + tab_name).addClass('current');
  });
});




const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));




