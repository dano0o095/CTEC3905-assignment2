/*STICKY NAV BAR*/

(function(){

const nav = document.querySelector('#navBar');
const topOfNav = nav.offsetTop;

  window.addEventListener('scroll', function(e) {
  if(window.scrollY >= topOfNav){
    document.body.classList.add('fixed-nav');
  }else{
    document.body.classList.remove('fixed-nav');
  }
});

})();



/* Scroll to a certain element*/
/*let education = document.getElementById('education');
let marginY = 0;
let destination = 0;
let speed = 15;
let scroller = null;

education.addEventListener("click", initScroll(), false);

function initScroll(elementId){
  destination = document.getElementById(elementId).offsetTop;
  
  scroller = setTimeout(function(){
    initScroll(elementId);
  }, 1);
  
  marginY += speed;
  
  if(marginY >= destination){
    clearTimeout(scroller);
  }
  
  window.scroll(0, marginY);

}*/
