// Function for Active Link Highlighting and Sticky Navbar
document.addEventListener("DOMContentLoaded", function () {
  // Get all links in the navbar
  var links = document.querySelectorAll("nav a");

  // Loop through each link
  links.forEach(function (link) {
    // Check if the link's href matches the current page URL
    if (link.href === window.location.href) {
      link.classList.add("active");
    }

    // Add event listener for click to update the active class
    link.addEventListener("click", function () {
      // Remove the active class from all links
      links.forEach(function (link) {
        link.classList.remove("active");
      });

      // Add the active class to the clicked link
      link.classList.add("active");
    });
  });

  // Sticky Navbar
  window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
});

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
