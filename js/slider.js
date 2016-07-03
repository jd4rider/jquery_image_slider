sliderInt=1;
sliderNext=2;
count = $('#slider>img').length;

$(document).ready(function(){
  $('#slider>img#'+sliderInt).fadeIn(300);
  startSlider();
  //setInterval(loop, 3000);
});

function startSlider(){
  looper=setInterval(loop, 3000);
}

function loop(){

  if(sliderNext>count){
    sliderNext=1;
    sliderInt=1;
  }
  $('#slider>img').fadeOut(300);
  $('#slider>img#'+sliderNext).fadeIn(300);

  sliderInt=sliderNext;
  sliderNext=sliderNext+1;
}

function prev(){
  newSlide = sliderInt-1;
  showSlide(newSlide);
}

function next(){
  newSlide = sliderInt+1;
  showSlide(newSlide);
}

function stopLoop(){
  window.clearInterval(looper);
}

function showSlide(id){
  stopLoop();
  if(id>count){
    id=1;
  }else if(id<1){
    id = count;
  }
  $('#slider>img').fadeOut(300);
  $('#slider>img#'+id).fadeIn(300);

  sliderInt=id;
  sliderNext=id+1;
  startSlider();
}

$('#slider>img').hover(
  function(){
    stopLoop();
  },
  function(){
    startSlider();
  }
)
