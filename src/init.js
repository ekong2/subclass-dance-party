$(document).ready(function(){
  window.dancers = [];

  // $('body').getElementById('#song').play();

  addDancer('./media/kanye.png','./media/dance2.gif');

  $("#lineup").on("click", function(event){
    $('.body').css({top:300});
    $('.oscillate').css({top:270});
  });


  $('#free').click(function() {
    alert("broken");
  });

  $('#kanye').click(function() {
    // $('.oscillate').animate({rotate:100px});
    $('.oscillate').attr('src', './media/kanye.png');
    $('.body').attr('src', './media/dance2.gif');
  });

  $('#music').click(function() {
    var track = $('#track').attr("src");
    var newSong;
    if (track === './media/Song.mp3'){
      newSong = "./media/Song2.mp3";
    } else {
      newSong = "./media/Song.mp3"
    }
    $('#track').attr("src", newSong);
    $('#song').attr("src", newSong);
  });

  $('#kim').click(function() {
    addDancer('./media/kim.png','./media/girlDance.gif');
  });


  $('#dancer').click(function() {
    var random = Math.floor(Math.random() * 2);
    if (random === 0) {
      addDancer('./media/kim.png','./media/girlDance.gif');
    } else {
      addDancer('./media/kanye.png','./media/dance2.gif');
    }
  });

  $('#clear').click(function(){
    $('.oscillate').remove();
    $('.body').remove();
  });

  function addDancer(head, body){
    var top = Math.random()*200 + 300;
    var left = Math.random()*1400;
    var dancer = new makeDancer(head, body,top, left, 2, 0);
    $('body').append(dancer.$head);
    $('body').append(dancer.$body);
  };

  $('.head').click(function(){
    alert("don't touch me");
  });

});

