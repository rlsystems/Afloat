 //Header --------------

 const nav = document.querySelector('#header');
 const topOfNav = 180; //change to 0 for absolute top of page

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



 $('.header__main').hover(
   function () { $('.header__main').addClass('header__main--opaque-nav'); },
   function () {

     //if not small and mega active
     if ($('.header__main').hasClass('header__main--small-nav') != true) {

       // if ($('.nav-mega').hasClass('nav-mega--active') != true) {
       //   $('.header__main').removeClass('header__main--opaque-nav');
       // }

       if ($('.burger-menu').hasClass('burger-menu--active') != true) {
         if ($('.nav-mega').hasClass('nav-mega--active') != true) {
           $('.header__main').removeClass('header__main--opaque-nav');
         }
       }
     }
   }
 )

 //Burger Menu
 $(".burger-menu ").on("click", function () {

   $(".burger-menu").toggleClass('burger-menu--active');
   $('.header__collapse').toggleClass('header__collapse--active');

   //hide while burger active
   if($(".header__collapse").hasClass('header__collapse--active') == true) {
        $('#stuckNav').hide();
   } else {
    $('#stuckNav').show();
   }

    
   
 });

 $(window).resize(function () {
   if ($(window).width() > 1000) {
     $('.header__collapse').removeClass('header__collapse--active');
     $(".burger-menu").removeClass('burger-menu--active');
   }
   if ($(window).width() <= 1000) {
     $('.nav-mega').removeClass('nav-mega--active');
   }
 });


 //MEGA

 //--hover behavior
 $('.nav-mega').hover(
   function () { },
   function () {

     //if no active burger
     if ($(".burger-menu").hasClass('burger-menu--active') != true) {

       //if stuckNav then dont do (sticky wrapper)
       var elementExists = document.getElementById("stuckNav");
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


 //product-nav
 $('.product-nav__sticky-wrapper').hover(
   function () { }, //enter
   function () {
     if ($(".burger-menu").hasClass('burger-menu--active') != true) {
       $('.nav-mega').removeClass('nav-mega--active');
     }


   } //exit
 );

 //SubNav
 var navbar = document.querySelector('.product-nav__sticky-wrapper');
 var subnavTitle = document.querySelector('.product-nav__caption__title');
 var offsetY = navbar.offsetTop - 65;

 window.onscroll = function () { myFunction() };
 function myFunction() {
   if (window.pageYOffset >= offsetY) {

     var elementExists = document.getElementById("stuckNav");
     if (elementExists == null) {
       var newNav = $(navbar).clone(true); //pass true to clone events also
       newNav.attr('id', 'stuckNav');

       $(newNav).addClass('product-nav__sticky-wrapper--active');
       $('#header').append(newNav);
     }

     var elementExists = document.getElementById("stuckNavTitle");
     if (elementExists == null) {
       var newTitle = $(subnavTitle).clone(true);
       newTitle.attr('id', 'stuckNavTitle')
       $(newTitle).addClass('product-nav__caption__title--sticky');
       $('#stuckNav').append(newTitle);
     }

   } else {
     $('#stuckNav').remove();
   }
 }


 //End Header ---------------- var elementExists = document.getElementById("stuckNav");

 //collapse 
 var acc = document.getElementsByClassName("header__collapse__accordion");
 var i;

 for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function () {
     /* Toggle between adding and removing the "active" class,
     to highlight the button that controls the panel */
     this.classList.toggle("header__collapse__accordion--active");

     /* Toggle between hiding and showing the active panel */
     var panel = this.nextElementSibling;
     if (panel.style.display === "block") {
       panel.style.display = "none";
     } else {
       panel.style.display = "block";
     }
   });
 }
 //end collapse