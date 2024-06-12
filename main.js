// JavaScript function to scroll the slider
function scrollSlider(direction) {
  const slider = document.querySelector(".slider");
  const slideWidth = document.querySelector(".slide").clientWidth;
  const scrollAmount = slideWidth * direction;
  slider.style.transform = `translateX(-${scrollAmount}px)`;
}

// JavaScript function to enlarge an image
function enlargeImage(src, description) {
  document.getElementById("enlarged-image").src = src;
  document.getElementById("image-description").textContent = description;
  document.getElementById("enlarged-container").style.display = "flex";
}

// JavaScript function to close the enlarged image
function closeImage() {
  document.getElementById("enlarged-container").style.display = "none";
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").classList.add("sticky");
  } else {
    document.getElementById("navbar").classList.remove("sticky");
  }
}

function enlargeBox(element) {
  element.classList.add("enlarged");
  const portfolioLayer = element.querySelector(".portfolio-layer");
  const enlargedContent = element.querySelector(".enlarged-content");
  portfolioLayer.style.display = "none";
  enlargedContent.style.display = "flex";
}

function closeBox(event, button) {
  event.stopPropagation();
  const box = button.closest(".portfolio-box");
  box.classList.remove("enlarged");
  const portfolioLayer = box.querySelector(".portfolio-layer");
  const enlargedContent = box.querySelector(".enlarged-content");
  portfolioLayer.style.display = "flex";
  enlargedContent.style.display = "none";
}
