// Creates and returns a new dancer object that can step
var makeDancer = function(face, body, top, left, id){

  this.timeBetweenSteps = 2000;
  this.face = face;
  this.body = body;
  this.top = top;
  this.left = left;
  this.id = id;

  this.$head = $('<image class="oscillate head" src="' + this.face + '"/>');
  this.$body = $('<image class="bodyGif body" src="' + this.body + '"/>');

  if (face === './media/kanye.png'){
    this.$head.addClass('kanyewest');
  }


  this.step.call(this);
  this.setPosition(this.top, this.left);

};
  // use jQuery to create an HTML <span> tag
makeDancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  if($('.kanyewest').attr('src') === "./media/kanye.png") {
    $('.kanyewest').attr('src',"./media/kanye2.png");
  } else {
    $('.kanyewest').attr('src',"./media/kanye.png");
  }
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var headStyleSettings = {
    top: top,
    left: (left + 39),
  };

  var bodyStyleSettings = {
    top: (top + 18),
    left : left,
  };

  this.$body.css(bodyStyleSettings);
  this.$head.css(headStyleSettings);
};
