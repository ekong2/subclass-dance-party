$(document).ready(function(){
  window.dancers = [];

  // $('body').getElementById('#song').play();

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  // $('#image').click(function() {
  //   $(this).addClass('oscillate');
  //   console.log('hi');
  // });

  // $('.wrapper').on({
  //   mouseenter:function() {
  //     $('.box').toggle();
  //   },

  //   mouseleave:function() {
  //     $('.box').toggle();
  //   }
  // });

  // $('#search').keypress(function(e){
  //   if (e.which === 13){
  //     var command = $('input').val();
  //     executeCommand(command);
  //     $('input').val("");

  //   }
  // });

  function executeCommand(command){
    console.log(command);
  };

  $('#free').click(function() {

  });


  $('#kanye').click(function() {

  });

  $('#music').click(function() {
    var track = $('#track').attr("src");
    var newSong;
    console.log(track);
    if (track === 'src/Song.mp3'){
      newSong = "src/Song2.mp3";
    } else {
      newSong = "src/Song.mp3"
    }
    $('#track').attr("src", newSong);
    $('#song').attr("src", newSong);
  });

  $('#kim').click(function() {

  });

  $('#dancer').click(function() {
    
  });

});

