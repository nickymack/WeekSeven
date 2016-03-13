$("document").ready(function () {
  //assign event bindings to all images
  
  $("img").on("click", flipImage);
  
  //assign TWO event types to the images in the same line
  $("img").on("mouseover mouseleave", highlightImage);
  
  //setup buttons for click
  $("#robots").on("click", filterRobotsFn);
  $("#no-figures").on("click", filterFigureFn);
  $("#plus-3").on("click", filterPlus3Fn); 
  $("#clear").on("click", clearFilterFn);
  var allImages = $("#drawing img, #water-color img, #oil img");

function clearFilterFn(evt)
  {
    //clear all filters
    TweenMax.staggerTo(allImages, 1, {alpha:1}, .01);
  }
  function filterRobotsFn(evt)
  {
    clearFilterFn();
    var selection =
$("#drawing img, #water-color img, #oil img").not(".robots");
    
      TweenMax.staggerTo(selection, 1, {alpha:.25}, .01);
  }
  
  function filterFigureFn(evt)
  {
    clearFilterFn();
    var selection = $("#drawing img, #water-color img, #oil img").not(".no-figures");
    TweenMax.staggerTo(selection, 1, {alpha:.25}, .01);
  }
  
  function filterPlus3Fn(evt)
  {
    clearFilterFn();
    var selection = $("#drawing img, #water-color img, #oil img").not(".plus-3");
    
    TweenMax.staggerTo(selection, 1, {alpha:.25}, .01);
  }
  
  
  
  function highlightImage(evt) 
  {
    //var currentImage = evt.target;
   //console.log("hello");
  // $(currentImage).toggleClass("highlightImage");
   
   
  }
  
function flipImage(evt)  //fyi e sometimes means error so use evt
  {
    //console.log(evt.target);
    var currentImage = evt.target;
    
    //flip the image
    
    TweenMax.to(currentImage, 1, {scaleY:-1, scaleX: -1, alpha: .2});
  }
  
});