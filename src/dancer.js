// Creates and returns a new dancer object that can step
var makeDancer = function(face, body, top, left, timeBetweenSteps){

  this.timeBetweenSteps = timeBetweenSteps;
  this.face = face;
  this.body = body;
  this.top = top;
  this.left = left; 

  this.$face = $('<image class="image" />')
  this.$face.attr("src", this.face);

  this.$body = $('<image class="image" />')
  this.$body.attr("src", this.body);

  this.step.call(this); 
  this.setPosition(this.top, this.left);
};
  // var dancer = {};


  // use jQuery to create an HTML <span> tag
makeDancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };

  this.$body.css(styleSettings);
  this.$face.css(styleSettings);

  this.$body.addClass('');
  this.$face.css(styleSettings);

};



  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body