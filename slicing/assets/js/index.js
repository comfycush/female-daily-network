let reviewSlideIndex = 1;
reviewShowSlide(reviewSlideIndex);

let trendingSlideIndex = 1;
trendingShowSlide(trendingSlideIndex);

/* ----- Review ----- */

function reviewPlusSlide(n) {
  reviewShowSlide((reviewSlideIndex += n));
}

function reviewCurrentSlide(n) {
  reviewShowSlide((reviewSlideIndex = n));
}

function reviewShowSlide(n) {
  let i;
  let slides = document.getElementsByClassName("review-slide");
  let dots = document.getElementsByClassName("review-carousel-indicator");
  let leftArrow = document.getElementById(
    "review-carousel-control__button--left"
  );
  let rightArrow = document.getElementById(
    "review-carousel-control__button--right"
  );

  if (n > slides.length) {
    reviewSlideIndex = 1;
  }
  if (n < 1) {
    reviewSlideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if (reviewSlideIndex !== 1 && !leftArrow.className.includes("active")) {
    leftArrow.className += " active";
    leftArrow.setAttribute("onclick", "reviewPlusSlide(-1)");
  }

  if (reviewSlideIndex === 1) {
    leftArrow.classList.remove("active");
    leftArrow.removeAttribute("onclick");
  }

  if (
    reviewSlideIndex !== slides.length &&
    !rightArrow.className.includes("active")
  ) {
    rightArrow.className += " active";
    rightArrow.setAttribute("onclick", "reviewPlusSlide(1)");
  }

  if (reviewSlideIndex === slides.length) {
    rightArrow.classList.remove("active");
    rightArrow.removeAttribute("onclick");
  }

  slides[reviewSlideIndex - 1].style.display = "flex";
  dots[reviewSlideIndex - 1].className += " active";
}

/* ----- Trending ----- */

function trendingPlusSlide(n) {
  trendingShowSlide((trendingSlideIndex += n));
}

function trendingCurrentSlide(n) {
  trendingShowSlide((trendingSlideIndex = n));
}

function trendingShowSlide(n) {
  let i;
  let slides = document.getElementsByClassName("trending-slide");
  let dots = document.getElementsByClassName("trending-carousel-indicator");
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
    leftArrow.setAttribute("onclick", "trendingPlusSlide(-1)");
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
    rightArrow.setAttribute("onclick", "trendingPlusSlide(1)");
  }

  if (trendingSlideIndex === slides.length) {
    rightArrow.classList.remove("active");
    rightArrow.removeAttribute("onclick");
  }

  slides[trendingSlideIndex - 1].style.display = "flex";
  dots[trendingSlideIndex - 1].className += " active";
}
