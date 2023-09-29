window.onload = function() {

  setTimeout(function(){

  let image = document.getElementById('girlImage');
  let opacity = 0;
  let targetOpacity = 1;
  let increment = 0.80;
  let interval = 70;
  let opacityOut = 1;
  let targetOpacityOut = 0;
  let decrement = 0.80;

  let fadeInterval = setInterval(function() {
    if (opacity < targetOpacity) {
      opacity += increment;
      image.style.opacity = opacity;
    } else{
      clearInterval(fadeInterval);
    }
    setTimeout(function() {
      if (opacityOut > targetOpacityOut) {
        opacityOut -= decrement;
        image.style.opacity = opacityOut;
      }else{
        clearInterval(fadeInterval);
      }
    },2000);
  }, interval); 

  
    let headline = document.getElementById('headline1');
    let LeftPosition = 0;
    

    setTimeout(function(){
  setTimeout(function() {
    headline.style.left = LeftPosition + "px";
  }, 200);

  setTimeout(function() {
    headline.style.transform = 'scale(0.0)';
    },2500);
  },500);

  setTimeout(function(){
    let headline2 = document.getElementById('headline2');
    let rightPosition = 1100;
  
    headline2.style.right = rightPosition + "px";
  },2500);

  setTimeout(function(){
    let subheadline1 = document.getElementById('subheadline1');
    let topacity = 1;
    subheadline1.style.opacity = topacity;
  }, 3000);

  setTimeout(function(){
    let learnmore = document.getElementById('learnmore');
    let topacity = 1;
    learnmore.style.opacity = topacity;
  }, 3500);

  setTimeout(function(){
    let logo = document.getElementById('logo');
    let LfinalPosition = 730;
    logo.style.left = LfinalPosition + "px";
  }, 4000);

  setTimeout(function(){
    let replay = document.getElementById('replay');
    let opacity = 1;
    replay.style.opacity = opacity;
  }, 4500);

  }, 1000);
  
};

