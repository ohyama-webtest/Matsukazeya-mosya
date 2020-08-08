$(function(){
  $('#right').click(function(){
    $('.active').show();
  });

  $('.active-title').click(function(){
    $('.active').hide(1000);
  });


  $('nav','a').click(function(){
    var target = $($(this).attr("href")).offset().top;

    $('html','body').animate({scrollTop: target},500)
  });
 

});