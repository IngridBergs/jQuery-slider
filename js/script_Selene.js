function profileToTop() {
  document.getElementById("profile").style.zIndex = 1;
  document.getElementById("skills").style.zIndex = -1;
  document.getElementById("portfolio").style.zIndex = -1;
}

function skillsToTop() {
  document.getElementById("profile").style.zIndex = -1;
  document.getElementById("skills").style.zIndex = 1;
  document.getElementById("portfolio").style.zIndex = -1;
}

function portfolioToTop() {
  document.getElementById("profile").style.zIndex = -1;
  document.getElementById("skills").style.zIndex = -1;
  document.getElementById("portfolio").style.zIndex = 1;
  currentSlide(1);
}

var slideIndex = 1;

function currentSlide(n) {
  showSlides(slideIndex = n)
}

function showSlides(n)
{
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length)
  {
    slideIndex = 1;
  }

  if (n < 1)
  {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++)
  {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++)
  {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
