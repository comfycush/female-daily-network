let trendingSlideIndex = 1;
trendingShowSlides(trendingSlideIndex);

function trendingPlusSlides(n) {
  trendingShowSlides((trendingSlideIndex += n));
}

function trendingCurrentSlide(n) {
  trendingShowSlides((trendingSlideIndex = n));
}

function trendingShowSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("carousel-indicator");
  let leftArrow = document.getElementById(
    "trending-carousel-control__button--left"
  );
  let rightArrow = document.getElementById(
    "trending-carousel-control__button--right"
  );

  if (n > slides.length) {
    trendingSlideIndex = 1;
  }
  if (n < 1) {
    trendingSlideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if (trendingSlideIndex !== 1 && !leftArrow.className.includes("active")) {
    leftArrow.className += " active";
    leftArrow.setAttribute("onclick", "trendingPlusSlides(-1)");
  }

  if (trendingSlideIndex === 1) {
    leftArrow.classList.remove("active");
    leftArrow.removeAttribute("onclick");
  }

  if (
    trendingSlideIndex !== slides.length &&
    !rightArrow.className.includes("active")
  ) {
    rightArrow.className += " active";
    rightArrow.setAttribute("onclick", "trendingPlusSlides(1)");
  }

  if (trendingSlideIndex === slides.length) {
    rightArrow.classList.remove("active");
    rightArrow.removeAttribute("onclick");
  }

  // if (trendingSlideIndex)
  slides[trendingSlideIndex - 1].style.display = "flex";
  dots[trendingSlideIndex - 1].className += " active";
}
