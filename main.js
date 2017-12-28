/*STICKY NAV BAR*/
(function(){

const nav = document.querySelector('#navBar');
const topOfNav = nav.offsetTop + 400; /*set the top offset*/

  window.addEventListener('scroll', function(e) {
    /*if scrolled past the nav bar then make it fixed, else not fixed*/
  if(window.scrollY >= topOfNav){
    document.body.classList.add('fixed-nav');
  }else{
    document.body.classList.remove('fixed-nav');
  }
});

})();



/*HAMBURGER  MENU*/

  let navMenu = document.getElementById("navBar");
  let toggle = false; // hidden at first
(function(){

  let menuButton = document.getElementById("menu");

  menuButton.addEventListener("click", toggleMenu);

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


/*  CLICKING THE LINK CLOSES THE NAV BAR*/
let clicks = 0;
document.addEventListener("click", function(evt) {  
  let flyoutElement = document.getElementById('navBar'),
      targetElement = evt.target;  // clicked element

  do {
      if (targetElement == flyoutElement) {
          // Click inside the nav
        navMenu.classList.remove("show-menu")
        toggle = false;
          return;
      }
      // Go up the DOM
      targetElement = targetElement.parentNode;
  } while (targetElement);

});



/*GOOGLE MAPS API*/
 function initMap() {
    let uluru = {lat: 52.629934, lng: -1.139419}; /*set the location the pins dropped on*/
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: uluru
    });
    let marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }


/* ACCORDIAN*/
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
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
