
$(function(){

  // Menu hamburger
  var menu = $(".menu");
  var hamMenuShow = menu.find(".hamUnicode");
  var menuHamburger = menu.find(".menu_ham");
  var link = menuHamburger.find("a");
  var menuPos = menu.offset().top;
  var body = $("html, body");

  //przyklejone menu
  function setSticky(){
    var posDoc = $(document).scrollTop();
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
  hamMenuShow.on("click", function(){
    event.preventDefault();
    menuHamburger.toggleClass("hidden_Class");

  });
  link.on("click", function(){
    event.preventDefault();
    var href = $(this).attr("href");
    scrollMenu(href);
    menuHamburger.toggleClass("hidden_Class");
  });



  // menu 768px+ / deksop menu
  var deskopMenu = $(".menuHead");
  var linkDeskop = deskopMenu.find("a");

  linkDeskop.on("click", function(e){
    event.preventDefault();

    var href = $(this).attr("href");
    scrollMenu(href);
  });

  //przesuniecie po kliknieciu w strzałke
  var arrowSlide = $(".arrowDown");

  arrowSlide.on("click", function(e){
    e.preventDefault();
    console.log(menu.offset().top);
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



});
