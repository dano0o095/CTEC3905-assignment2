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
