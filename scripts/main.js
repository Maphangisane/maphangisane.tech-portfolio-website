// Function for Active Link Highlighting and Sticky Navbar
document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll("section");
  var navLinks = document.querySelectorAll("nav a");

  function changeActiveLink() {
    let index = sections.length;

    while (
      --index &&
      window.scrollY + window.innerHeight / 2 < sections[index].offsetTop
    ) {}

    navLinks.forEach((link) => link.classList.remove("active"));

    // Check if the section has a corresponding nav link
    const activeSectionId = sections[index].id;
    const activeLink = document.querySelector(
      `nav a[href="#${activeSectionId}"]`
    );
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  changeActiveLink();
  window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
    changeActiveLink();
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
