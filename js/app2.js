
$(function(){

  // Menu hamburger
  var menu = $(".menu");
  var hamMenuShow = menu.find(".hamUnicode");
  var menuHamburger = menu.find(".menu_ham");
  var link = menuHamburger.find("a");
  var menuPos = menu.offset().top;
  var body = $("html, body");
  var skill = $(".socialMedia").offset().top;

  //przyklejone menu
  function setSticky(){

    var posDoc = $(window).scrollTop();
    if (posDoc > menuPos) {
      menu.addClass("fixedMenu");
    }else {
      menu.removeClass("fixedMenu");
    }

  }

  $(window).on("scroll", function (e){

    setSticky();

  });

  function scrollMenu(href){
    var find = $(href);
    var pos = $(find).position();
    body.stop().animate({scrollTop: pos.top}, 2000, "swing");

  }

  //plynne przewijanie menu
  hamMenuShow.on("click", function(e){
    e.preventDefault();
    menuHamburger.toggleClass("hidden_Class");

  });
  link.on("click", function(e){
    e.preventDefault();
    var href = $(this).attr("href");
    scrollMenu(href);
    menuHamburger.toggleClass("hidden_Class");
  });



  // menu 768px+ / deksop menu
  var deskopMenu = $(".menuHead");
  var linkDeskop = deskopMenu.find("a");

  linkDeskop.on("click", function(e){
    e.preventDefault();

    var href = $(this).attr("href");
    scrollMenu(href);
  });

  //przesuniecie po kliknieciu w strzałke
  var arrowSlide = $(".arrowDown");

  arrowSlide.on("click", function(e){
    e.preventDefault();
    body.stop().animate({scrollTop: menu.offset().top}, 2000, "swing");

  });

  //icon menu

  var iconMenu = $(".iconMenu");
  var iconMenuLink = iconMenu.find("a");

  iconMenuLink.on("click", function(e){
    e.preventDefault();

    var href = $(this).attr("href");
    scrollMenu(href);
  });

  //progres bar's

  var web = $(".progress");
  var grapfic = $(".progressGraphic");
  var htmlProcent = $(".progressHtml");
  var ui = $(".progressUi");

  function animateProgres(){

    var posDoc = $(window).scrollTop();
    if (posDoc > skill) {
      web.animate({width: "90%"},1000);
      grapfic.animate({width: "70%"},1000);
      htmlProcent.animate({width: "75%"},1000);
      ui.animate({width: "85%"},1000);
    }


  }


  $(window).on("scroll", function (e){

    setSticky();
    animateProgres();

  });


  $('#myCarousel').carousel({
    interval: 10000
  })
  //team slider
  if ($(window).width() >= 768) {

    $('.carousel .item').each(function(){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      if (next.next().length>0) {
        next.next().children(':first-child').clone().appendTo($(this));
      }
      else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
      }
    });
  }


});
