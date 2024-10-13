$(document).ready(function(){

  /* Ändrar öppetider längst upp på sidan utefter veckodag */
  var dateText = document.getElementById('openingHours');
  
  var day = new Date();
  var weekDay = day.getDay();

  if (weekDay == 0){
    dateText.innerHTML = "Idag: <b>12:00</b> - <b>21:00</b>";
}
  else if (weekDay < 5){
  dateText.innerHTML = "Idag: <b>11:30</b> - <b>21:00</b>";
}
  else if (weekDay == 5){
  dateText.innerHTML = "Idag: <b>11:30</b> - <b>22:00</b>";
}
  else if (weekDay == 6){
  dateText.innerHTML = "Idag: <b>12:00</b> - <b>22:00</b>";
}
  else{
    dateText.innerHTML = "<b>Det har uppstått ett fel</b>";
}

/* Lägger till "(inbakad)" på alla inbakade pizzor med classen "inbakad" */
$('.inbakad').text(function(_, oldText){

  return oldText + " (inbakad)";
})





/* Skrolla till toppen knapp */
var scrollButton = $('#topButton');
var stickyNavBar = $('.stickySection')
var logo = $('#name')

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    scrollButton.addClass('show');
  } else {
    scrollButton.removeClass('show');
  }
});



/* Nav opacity när man skrollar */
$(window).scroll(function() {
  if ($(window).scrollTop() > 200) {
    stickyNavBar.addClass('navOpacity');
    /* logo.addClass('stickyNavBarScrolledStyle'); */
  } else{
    stickyNavBar.removeClass('navOpacity');
    /* logo.removeClass('stickyNavBarScrolledStyle'); */
  }
});

/* Orange top meny som försvinner vid scrollning*/
window.onscroll = function() {scrollFunction()

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};
});



/* Karusell med mat-bilder */
let slideIndex = 0;
  showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000);
}



/* Färg boxarna (anime.js) */
window.onload = function() {
var playPause = anime({
  targets: 'div.box',
  translateY: [
    { value: 200, duration: 500 },
    { value: 0, duration: 800 }
  ],
  rotate:{
    value: '1turn',
    easing: 'easeInOutSine'
  },
  delay: function(el, i, l){
    return i * 1000
  },
  autoplay: false,
  loop: true
});

document.querySelector('#boxes .play').onclick = playPause.play;
document.querySelector('#boxes .pause').onclick = playPause.pause;
}