//Header --------------


//Header Main
const nav = document.querySelector('#header');
const topOfNav = 180; //change to 0 for absolute top of page


//Header Main -- Scroll
function fixNav() {
  if (window.scrollY >= topOfNav) {
    $('.header__main').addClass('header__main--small-nav header__main--opaque-nav');
  } else {
    //if mega not active
    if ($('.nav-mega').hasClass('nav-mega--active') != true) {

      $('.header__main').removeClass('header__main--small-nav ');

      if ($('.burger-menu').hasClass('burger-menu--active') != true) {
        $('.header__main').removeClass('header__main--opaque-nav');

      }
    }
  }
}
window.addEventListener('scroll', fixNav);


//Header Main -- Hover
$('.header__main').hover(
  function () { $('.header__main').addClass('header__main--opaque-nav'); },
  function () {

    //if not small and mega active
    if ($('.header__main').hasClass('header__main--small-nav') != true) {

      if ($('.burger-menu').hasClass('burger-menu--active') != true) {
        if ($('.nav-mega').hasClass('nav-mega--active') != true) {
          $('.header__main').removeClass('header__main--opaque-nav');
        }
      }
    }
  }
)




//MEGA

//--hover behavior
$('.nav-mega').hover(
  function () { },
  function () {

    //if no active burger
    if ($(".burger-menu").hasClass('burger-menu--active') != true) {

      //if product-nav then dont do (sticky wrapper)
      var elementExists = document.getElementById("product-nav");
      if (elementExists == null) {

        $('.nav-mega').removeClass('nav-mega--active');
      }

      //if not header small -- remove opaque from header__main
      if ($('.header__main').hasClass('header__main--small-nav') != true) {
        $('.header__main').removeClass('header__main--opaque-nav');
      }

    }


  }
)

//main link -expand mega
$('#mega--destinations').hover(
  function () { $('.nav-mega').addClass('nav-mega--active'); },
);


//Burger Menu

//Burger Menu -- click
$(".burger-menu ").on("click", function () {

  $(".burger-menu").toggleClass('burger-menu--active');
  $('.header__collapse').toggleClass('header__collapse--active');

  //hide while burger active
  if ($(".header__collapse").hasClass('header__collapse--active') == true) {
    $('#product-nav').hide();
  } else {
    $('#product-nav').show();
  }
});

//Burger Menu -- resize window
$(window).resize(function () {
  if ($(window).width() > 1000) {
    $('.header__collapse').removeClass('header__collapse--active');
    $(".burger-menu").removeClass('burger-menu--active');
  }
  if ($(window).width() <= 1000) {
    $('.nav-mega').removeClass('nav-mega--active');
  }
});


//Collapse Menu

//Collapse Menu -- accordion behavior
//--main
var acc = document.getElementsByClassName("header__collapse__accordion--main");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {

    //see if currently open
    var open = false;
    if ($(this).next().css('display') == 'block') {
      open = true;
    }

    //hide all others
    var x = 0
    $(acc).each(function () {
      $(acc[x]).removeClass('header__collapse__accordion--active');
      var panel = $(acc[x]).next();
      $(panel).css('display', 'none');
      x = x + 1;
    })

    //display / hide current one
    if (open == true) {
      $(this).removeClass("header__collapse__accordion--active");
      var panelCurrent = $(this).next();
      $(panelCurrent).css('display', 'none');
    } else {
      $(this).addClass("header__collapse__accordion--active");
      var panelCurrent = $(this).next();
      $(panelCurrent).css('display', 'block');
    }

  });
}

//Collapse Menu -- accordion behavior
//--destinations
var accDestinations = document.getElementsByClassName("header__collapse__accordion--destinations");
var i;

for (i = 0; i < accDestinations.length; i++) {
  accDestinations[i].addEventListener("click", function () {

    //see if currently open
    var open = false;
    if ($(this).next().css('display') == 'block') {
      open = true;
    }

    //hide all others
    var x = 0
    $(accDestinations).each(function () {
      $(accDestinations[x]).removeClass('header__collapse__accordion--active');
      var panel = $(accDestinations[x]).next();
      $(panel).css('display', 'none');
      x = x + 1;
    })

    //display / hide current one
    if (open == true) {
      $(this).removeClass("header__collapse__accordion--active");
      var panelCurrent = $(this).next();
      $(panelCurrent).css('display', 'none');
    } else {
      $(this).addClass("header__collapse__accordion--active");
      var panelCurrent = $(this).next();
      $(panelCurrent).css('display', 'block');
    }

  });
}
//end collapse


//Product Nav
//Product Nav -- Hover
$('#template-nav').hover(
  function () { },
  function () {
    if ($(".burger-menu").hasClass('burger-menu--active') != true) {
      $('.nav-mega').removeClass('nav-mega--active');
    }
  }
);



//Product Nav -- Scroll
var navbar = document.querySelector('.destination-nav__sticky-wrapper');
//var subnavTitle = document.querySelector('.destination-nav__caption__title');


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

        $(newNav).addClass('destination-nav__sticky-wrapper--active');
        $('#header').append(newNav);
      }

    //   var elementExists = document.getElementById("product-nav-title"); //clone / append title
    //   if (elementExists == null) {
    //     var newTitle = $(subnavTitle).clone(true);
    //     newTitle.attr('id', 'product-nav-title')
    //     $(newTitle).addClass('product-nav__caption__title--sticky');
    //     $('#product-nav').append(newTitle);
    //   }
    }


  }

}







