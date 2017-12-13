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
      navMenu.classList.remove("show-menu"), // hide it
      toggle = false
    }
    else { // false: it's hidden
      navMenu.style.backgroundColor = "#CAD178";
      navMenu.classList.add("show-menu"), // show it
      toggle = true
    }
  }

})();

/*any click ouside the menu will close it*/
/*let specifiedElement = document.querySelector('navBar');
document.addEventListener('click', function(event) {
  let isClickInside = specifiedElement.contains(event.target);
  if (!isClickInside && nav.className == "show-menu") {
    nav.className = "";
  } 
});*/



/*GOOGLE MAPS API*/
 function initMap() {
    let uluru = {lat: 52.629934, lng: -1.139419};
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: uluru
    });
    let marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }


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
