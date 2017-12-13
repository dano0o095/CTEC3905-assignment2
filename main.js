/*STICKY NAV BAR*/

(function(){

const nav = document.querySelector('#navBar');
const topOfNav = nav.offsetTop + 400;

  window.addEventListener('scroll', function(e) {
  if(window.scrollY >= topOfNav){
    document.body.classList.add('fixed-nav');
  }else{
    document.body.classList.remove('fixed-nav');
  }
});

})();



/*HAMBURGER  MENU*/
(function(){

  let menuButton = document.getElementById("menu");
  let navMenu = document.getElementById("navBar");

  menuButton.addEventListener("click", toggleMenu);

  let toggle = false; // hidden at first
  function toggleMenu(){
    if (toggle) { // true: it's visible
      navMenu.style.backgroundColor = "#CAD178";
      navMenu.classList.remove("show-menu"), // hide it
      toggle = false
    }
    else { // false: it's hidden
      navMenu.classList.add("show-menu"), // show it
      toggle = true
    }
  }

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
