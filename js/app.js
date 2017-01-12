
$(function(){

  // Menu hamburger
  var menu = $(".menu");
  var hamMenuShow = menu.find(".hamUnicode");
  var menuHamburger = menu.find(".menu_ham");
  var link = menuHamburger.find("a");
  var menuPos = menu.offset().top;

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

    var body = $("html, body")
    body.stop().animate({scrollTop: pos.top}, 2000, "swing");

  }

  //plynne przewijanie menu
  hamMenuShow.on("click", function(){
    event.preventDefault();
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




});
