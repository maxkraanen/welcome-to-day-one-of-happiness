


$( document ).ready(function() {
  hideTitle()
  showNot()
  showToDay()
  moveToDay()
  hideNotTo()
  showS()
  showNumberOfDays()
  moveDays()
  showUntil()
  showDayOneOfHappiness()
  showName()

  function hideTitle() {
    setTimeout(function() {
      $('.title-word').fadeOut('slow');
    },1800);
  }

  function showNot(){
    $("#not").css('visibility','visible').hide().delay(2900).fadeIn(300);
  }

  function showToDay(){
    setTimeout(function() {
      $('#to').fadeIn('slow');
    },3900);
    setTimeout(function() {
      $('#day').fadeIn('slow');
    },4200);
  }

  function moveToDay(){
    setTimeout(function() {
      $( "#day" ).animate({
        left: "-=15"
      }, 500, function() {
      });
    },5000);
  }

  function hideNotTo(){
    setTimeout(function() {
      $('#not').fadeOut('slow');
      $('#to').fadeOut('slow');
    },6500);
  }

  function showS(){
    $("#s").css('visibility','visible').hide().delay(7900).fadeIn(300);
  }

  function showNumberOfDays(){
    $("#number_of_days").css('visibility','visible').hide().delay(8800).fadeIn(300);
  }

  function moveDays(){
    setTimeout(function() {
      $( "#day" ).animate({
        left: "-=100"
      }, 1500, function() {
      });
      $( "#s" ).animate({
        left: "-=100"
      }, 1900, function() {
      });
    },9100);
  }

  function showUntil(){
    $("#until").css('visibility','visible').hide().delay(11300).fadeIn(300);
  }

  function showDayOneOfHappiness(){
    $("#day_one_of_happiness").css('visibility','visible').hide().delay(12500).fadeIn(300);
  }

  function showName(){
    $("#maxkraanen").css('visibility','visible').hide().delay(13000).fadeIn(800);
  }


});


