
$(function(){

  //sortowanie w sekcji portfolio

  var portfolio = $(".portfolioFlex");
  var portfolioDiv = portfolio.find("div");
  var btn = $(".btnSelect");
  var selectFiltr = "";

  btn.click(function(e){
    e.preventDefault();
    selectFiltr = $(this).attr("data-filter");
    $(".portfolioFlex").fadeTo(100, 0.1);
    portfolioDiv.not("." + selectFiltr).fadeOut();
    setTimeout(function() {
      $("." + selectFiltr).fadeIn();
      portfolio.fadeTo(300, 1);
    }, 300);

  });

});
