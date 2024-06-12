// functions to show and hide the navbar
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

//  function to enlarge an image
function enlargeBox(element) {
  element.classList.add("enlarged");
  const portfolioLayer = element.querySelector(".portfolio-layer");
  const enlargedContent = element.querySelector(".enlarged-content");
  portfolioLayer.style.display = "none";
  enlargedContent.style.display = "flex";
}

//  function to close the enlarged image
function closeBox(event, button) {
  event.stopPropagation();
  const box = button.closest(".portfolio-box");
  box.classList.remove("enlarged");
  const portfolioLayer = box.querySelector(".portfolio-layer");
  const enlargedContent = box.querySelector(".enlarged-content");
  portfolioLayer.style.display = "flex";
  enlargedContent.style.display = "none";
}
