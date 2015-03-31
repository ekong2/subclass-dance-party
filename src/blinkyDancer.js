var makeBlinkyDancer = function(face, body, top, left, timeBetweenSteps){

  makeDancer.call(this, face, body, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){
//animations go here
  makeDancer.prototype.step.call(this);
};


