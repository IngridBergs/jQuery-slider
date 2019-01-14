/*Een functie herhaaldelijk aanroepen

Een native methode van JavaScript helpt je om automatisch door de afbeeldingen te bladeren.
Dit is setTimeout(), waarvoor twee argumenten nodig zijn: de naam
van de uit te voeren functie en het tijdsinterval (in milliseconden) om te wachten.
De truc is om de functie in zichzelf te herstarten om een oneindige lus te creëren:

var myLoop = function () {
    setTimeout(function () {
        alert('Hello !'); // will display "Hello!" every second
        myLoop(); // restarts the function
    }, 1000);
};

myLoop(); // don't forget to launch the function for the first time*/




$(function () {

    /* SET PARAMETERS */
    var change_img_time     = 5000;
    var transition_speed    = 50;

    var simple_slideshow    = $("#slider"),
        listItems           = simple_slideshow.children('li'),
        listLen             = listItems.length,
        i                   = 0,

        changeList = function () {

            listItems.eq(i).fadeOut(transition_speed, function () {
                i += 1;
                if (i === listLen) {
                    i = 0;
                }
                listItems.eq(i).fadeIn(transition_speed);
            });

        };

    listItems.not(':first').hide();
    setInterval(changeList, change_img_time);

});

/* new code other example
mix dit nog met ander example om de dots en prev next te doen werken !!!*/


/*var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}*/
